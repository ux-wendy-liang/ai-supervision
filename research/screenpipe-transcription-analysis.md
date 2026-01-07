# Screenpipe 音频转录技术分析

## 概述

Screenpipe 是一个用 Rust 实现的屏幕和音频捕获工具，其音频转录模块 `screenpipe-audio` 实现了完整的端到端语音识别流水线。本文档分析其核心技术实现。

## 模块架构

```
screenpipe-audio/
├── src/
│   ├── core/                    # 音频捕获核心
│   │   ├── stream.rs           # AudioStream (CPAL 音频流)
│   │   ├── engine.rs           # 转录引擎枚举
│   │   ├── device.rs           # 设备抽象
│   │   └── run_record_and_transcribe.rs  # 录制-转录循环
│   ├── audio_manager/           # 高层管理器
│   │   ├── manager.rs          # AudioManager (主协调器)
│   │   ├── builder.rs          # 配置构建器
│   │   └── device_monitor.rs   # 设备健康监控
│   ├── transcription/           # 语音转文字引擎
│   │   ├── stt.rs              # STT 路由逻辑
│   │   ├── whisper/            # OpenAI Whisper 集成
│   │   └── deepgram/           # Deepgram API 集成
│   ├── vad/                     # 语音活动检测
│   │   ├── webrtc.rs           # WebRTC VAD
│   │   └── silero.rs           # Silero VAD (ONNX)
│   ├── speaker/                 # 说话人分割
│   │   ├── embedding.rs        # 声纹嵌入提取
│   │   └── segment.rs          # 语音片段
│   └── utils/audio/             # 音频处理工具
│       ├── resample.rs         # 重采样 (Rubato)
│       ├── normalization.rs    # 音频归一化
│       └── spectral_subtraction.rs  # 频谱减法降噪
```

## 核心组件分析

### 1. 音频捕获 (CPAL)

使用 **CPAL (Cross-Platform Audio Library)** 实现跨平台音频捕获：

```rust
pub struct AudioStream {
    pub device: Arc<AudioDevice>,
    pub device_config: cpal::SupportedStreamConfig,
    transmitter: Arc<tokio::sync::broadcast::Sender<Vec<f32>>>,
    stream_control: mpsc::Sender<StreamControl>,
    pub is_disconnected: Arc<AtomicBool>,
}
```

**关键特性：**
- 支持输入设备（麦克风）和输出设备（系统音频/扬声器）
- 使用 `broadcast::channel` 实现多消费者模式
- 自动设备断连检测与重连
- `DeviceManager` 通过 `DashMap` 管理活跃流

**设备枚举：**
```rust
pub async fn list_audio_devices() -> Result<Vec<AudioDevice>>
```

### 2. 语音转录引擎

#### 2.1 Whisper (本地推理)

基于 `whisper-rs` (whisper.cpp 的 Rust 封装)：

```rust
pub enum AudioTranscriptionEngine {
    WhisperTiny,
    WhisperTinyQuantized,
    WhisperLargeV3Turbo,          // 默认
    WhisperLargeV3TurboQuantized,
    WhisperLargeV3,
    WhisperLargeV3Quantized,
    Deepgram,
}
```

**模型管理：**
- GGML 格式模型，来自 `ggerganov/whisper.cpp`
- 通过 Hugging Face Hub 自动下载
- 支持 Metal (macOS GPU)、CUDA、CPU

**推理配置：**
```rust
pub async fn process_with_whisper(
    audio: &[f32],
    languages: Vec<Language>,
    whisper_context: Arc<WhisperContext>,
) -> Result<String>
```
- 贪婪采样策略 (`best_of: 0`)
- 自动语言检测
- Token 级时间戳
- 2 线程推理

#### 2.2 Deepgram (云端 API)

支持批量和流式两种模式：

```rust
// 批量模式
pub async fn transcribe_with_deepgram(
    api_key: &str,
    audio_data: &[f32],
    ...
) -> Result<String>

// 流式模式 (WebSocket)
pub async fn stream_transcription_deepgram(...) -> Result<String>
```

**配置：**
- 模型：`nova-2`
- 智能格式化：启用
- 采样率：16kHz
- 失败时自动回退到 Whisper

### 3. 语音活动检测 (VAD)

抽象接口：

```rust
pub trait VadEngine: Send {
    fn is_voice_segment(&mut self, audio_chunk: &[f32]) -> Result<bool>;
    fn set_sensitivity(&mut self, sensitivity: VadSensitivity);
    fn audio_type(&mut self, audio_chunk: &[f32]) -> Result<VadStatus>;
}

pub enum VadSensitivity {
    Low,    // 1% 语音最低占比
    Medium, // 5% (默认)
    High,   // 20%
}
```

#### 3.1 WebRTC VAD

轻量级实现，无需 ML 模型：

```rust
// 灵敏度映射
Low    → VadMode::Quality
Medium → VadMode::Aggressive
High   → VadMode::VeryAggressive
```

#### 3.2 Silero VAD (ONNX)

基于深度学习的 VAD：

- 模型：`silero_vad.onnx`
- 帧大小：1600 samples (100ms @ 16kHz)
- 历史窗口：10 帧
- 决策逻辑：

```rust
const SPEECH_THRESHOLD: f32 = 0.5;
const SILENCE_THRESHOLD: f32 = 0.35;
const SPEECH_FRAME_THRESHOLD: usize = 3;

// 当历史窗口中 >= 3 帧概率 > 0.5，判定为语音
```

### 4. 说话人分割 (Speaker Diarization)

基于 ONNX 运行时的说话人识别：

**分割模型：** PyAnnote `segmentation-3.0.onnx`

**声纹嵌入：**
```rust
pub struct EmbeddingExtractor {
    session: Session,  // ONNX Session
    // 模型：wespeaker_en_voxceleb_CAM++.onnx
    // 输出：512 维声纹向量
}
```

**特征提取：** 使用 `knf-rs` 提取 Fbank 特征

### 5. 音频处理流水线

完整的数据流：

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. CAPTURE                                                      │
│    AudioStream::from_device()                                   │
│    ├─ CPAL 设备枚举                                              │
│    ├─ spawn_blocking 创建音频线程                                 │
│    └─ broadcast::channel 发送 Vec<f32> 块                        │
├─────────────────────────────────────────────────────────────────┤
│ 2. RECORDING                                                    │
│    run_record_and_transcribe()                                  │
│    ├─ 收集 30 秒音频块                                           │
│    ├─ 保持 2 秒重叠                                              │
│    └─ crossbeam::channel (容量 1000)                            │
├─────────────────────────────────────────────────────────────────┤
│ 3. PREPROCESSING                                                │
│    prepare_segments()                                           │
│    ├─ normalize_v2() 归一化                                      │
│    │   └─ Target RMS: 0.2, Peak: 0.95                          │
│    ├─ VAD 检测语音帧                                             │
│    ├─ spectral_subtraction() 降噪                               │
│    └─ 计算语音占比，低于阈值则跳过                                  │
├─────────────────────────────────────────────────────────────────┤
│ 4. SEGMENTATION                                                 │
│    speaker diarization                                          │
│    ├─ PyAnnote 分割模型                                          │
│    ├─ 提取 512 维声纹嵌入                                         │
│    ├─ 聚类分配说话人 ID                                           │
│    └─ 合并连续同说话人片段                                         │
├─────────────────────────────────────────────────────────────────┤
│ 5. TRANSCRIPTION                                                │
│    ├─ 选择引擎 (Whisper / Deepgram)                              │
│    ├─ resample() 重采样至 16kHz                                  │
│    │   └─ Rubato SincFixedIn                                   │
│    └─ 模型推理 → 文本 + 时间戳                                    │
├─────────────────────────────────────────────────────────────────┤
│ 6. POST-PROCESSING                                              │
│    ├─ longest_common_word_substring() 去重叠                    │
│    ├─ 声纹入库 (speaker_embeddings)                              │
│    ├─ 音频块入库 (audio_chunks)                                  │
│    └─ 转录结果入库 (audio_transcriptions)                        │
└─────────────────────────────────────────────────────────────────┘
```

## 关键数据结构

### AudioInput

```rust
#[derive(Debug, Clone)]
pub struct AudioInput {
    pub data: Arc<Vec<f32>>,
    pub sample_rate: u32,
    pub channels: u16,
    pub device: Arc<AudioDevice>,
}
```

### TranscriptionResult

```rust
#[derive(Debug, Clone)]
pub struct TranscriptionResult {
    pub path: String,
    pub input: AudioInput,
    pub speaker_embedding: Vec<f32>,
    pub transcription: Option<String>,
    pub timestamp: u64,
    pub error: Option<String>,
    pub start_time: f64,
    pub end_time: f64,
}
```

### SpeechSegment

```rust
#[derive(Debug, Clone)]
pub struct SpeechSegment {
    pub start: f64,          // 起始时间(秒)
    pub end: f64,            // 结束时间(秒)
    pub samples: Vec<f32>,
    pub speaker: String,     // 说话人 ID
    pub embedding: Vec<f32>, // 512 维声纹
    pub sample_rate: u32,
}
```

### AudioManager API

```rust
impl AudioManager {
    pub async fn new(options: AudioManagerOptions, db: Arc<DatabaseManager>) -> Result<Self>
    pub async fn start(&self) -> Result<()>
    pub async fn stop(&self) -> Result<()>
    pub async fn pause(&self) -> Result<()>
    pub async fn resume(&self) -> Result<()>
    pub async fn start_device(&self, device: &AudioDevice) -> Result<()>
    pub async fn stop_device(&self, device_name: &str) -> Result<()>
    pub fn recording_receiver(&self) -> Arc<Receiver<AudioInput>>
    pub fn transcription_receiver(&self) -> Arc<Receiver<TranscriptionResult>>
}
```

## 配置参数

### 音频处理常量

| 参数 | 值 | 说明 |
|------|-----|------|
| SAMPLE_RATE | 16000 Hz | 标准转录采样率 |
| FRAME_SIZE | 1600 samples | 100ms @ 16kHz |
| DEFAULT_DURATION | 30 秒 | 音频块大小 |
| OVERLAP_SECONDS | 2 秒 | 连续块重叠 |

### VAD 阈值

| 灵敏度 | 语音帧阈值 | 概率阈值 |
|--------|-----------|----------|
| Low | 1% | 0.7 |
| Medium | 5% | 0.5 |
| High | 20% | 0.3 |

### 音频归一化

| 参数 | 值 |
|------|-----|
| TARGET_RMS | 0.2 |
| TARGET_PEAK | 0.95 |

## 并发架构

- **Tokio 异步运行时** - 所有 I/O 和流式操作
- **crossbeam bounded channels** (容量 1000) - 任务间通信
- **broadcast channels** (容量 1000) - 多消费者分发
- **DashMap** - 线程安全的设备状态追踪
- **Arc<AtomicBool>** - 协调关闭信号

## 关键依赖

```toml
# 音频捕获
cpal = "定制 fork，支持系统音频"

# 语音转文字
whisper-rs = "Whisper.cpp 封装"
deepgram = "Deepgram SDK"

# VAD
webrtc-vad = "WebRTC VAD"
vad-rs = "Silero VAD"

# 说话人分割
ort = "2.0-rc.6 (ONNX Runtime)"
knf-rs = "Fbank 特征提取"

# 音频处理
rubato = "SincFixedIn 重采样器"
realfft = "频谱减法 FFT"

# 模型管理
hf-hub = "Hugging Face Hub 下载"
```

## 技术亮点

1. **重叠分块** - 2 秒重叠保留边界上下文
2. **多引擎支持** - Whisper (本地) + Deepgram (云端) 互为备份
3. **智能 VAD** - WebRTC (快速) + Silero (精准) 可选
4. **实时声纹** - 512 维向量实现说话人追踪
5. **降噪处理** - 基于 FFT 的频谱减法
6. **量化模型** - 支持量化 Whisper 减少内存占用
7. **GPU 加速** - Metal (macOS) / CUDA (NVIDIA) 支持

## 可借鉴的设计

1. **模块化引擎接口** - `VadEngine` trait 和 `AudioTranscriptionEngine` enum 便于扩展
2. **优雅降级** - Deepgram 失败自动回退 Whisper
3. **设备健康监控** - 自动检测断连并尝试重连
4. **流式架构** - broadcast + crossbeam channels 实现高效数据流
5. **延迟归一化** - 音频在处理前统一归一化到目标电平
