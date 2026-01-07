"""音频采集 + Whisper 转录模块"""

import queue
import threading
import time
import tempfile
import wave
from pathlib import Path

import numpy as np
import sounddevice as sd


class AudioCapture:
    """实时音频采集"""

    def __init__(self, sample_rate: int = 16000, channels: int = 1, chunk_sec: float = 5.0):
        self.sample_rate = sample_rate
        self.channels = channels
        self.chunk_sec = chunk_sec
        self.chunk_samples = int(sample_rate * chunk_sec)

        self._buffer = []
        self._lock = threading.Lock()
        self._running = False
        self._stream = None

    def _audio_callback(self, indata, frames, time_info, status):
        if status:
            print(f"[Audio] Status: {status}")
        with self._lock:
            self._buffer.extend(indata[:, 0].tolist())

    def start(self):
        self._running = True
        self._stream = sd.InputStream(
            samplerate=self.sample_rate,
            channels=self.channels,
            dtype=np.float32,
            callback=self._audio_callback,
        )
        self._stream.start()
        print(f"[Audio] 开始采集 (sample_rate={self.sample_rate}, chunk={self.chunk_sec}s)")

    def stop(self):
        self._running = False
        if self._stream:
            self._stream.stop()
            self._stream.close()
        print("[Audio] 停止采集")

    def get_chunk(self) -> np.ndarray | None:
        """获取一个音频块，如果不够则返回 None"""
        with self._lock:
            if len(self._buffer) < self.chunk_samples:
                return None
            chunk = np.array(self._buffer[: self.chunk_samples], dtype=np.float32)
            self._buffer = self._buffer[self.chunk_samples :]
            return chunk

    def has_chunk(self) -> bool:
        with self._lock:
            return len(self._buffer) >= self.chunk_samples


class Transcriber:
    """Whisper 转录器"""

    def __init__(self, model_size: str = "small", device: str = "auto", compute_type: str = "auto"):
        """
        model_size: tiny, base, small, medium, large-v3
        device: auto, cpu, cuda
        compute_type: auto, int8, float16, float32
        """
        print(f"[Whisper] 加载模型 {model_size}...")
        from faster_whisper import WhisperModel

        self.model = WhisperModel(model_size, device=device, compute_type=compute_type)
        print(f"[Whisper] 模型加载完成")

    def transcribe(self, audio: np.ndarray, language: str = "zh") -> tuple[str, dict]:
        """
        转录音频
        返回: (text, info_dict)
        """
        segments, info = self.model.transcribe(
            audio,
            language=language,
            beam_size=5,
            vad_filter=True,  # 内置 VAD 过滤静音
            vad_parameters=dict(min_silence_duration_ms=500),
        )

        text = " ".join(seg.text.strip() for seg in segments)
        return text, {
            "language": info.language,
            "language_probability": info.language_probability,
            "duration": info.duration,
        }


def test_audio():
    """测试音频采集 + 转录"""
    print("=" * 50)
    print("音频采集 + 转录测试")
    print("=" * 50)

    # 初始化
    capture = AudioCapture(chunk_sec=5.0)
    transcriber = Transcriber(model_size="small")

    # 采集 10 秒
    capture.start()
    print("\n请说话，采集 10 秒...")

    start = time.time()
    chunks_processed = 0

    try:
        while time.time() - start < 10:
            if capture.has_chunk():
                chunk = capture.get_chunk()
                print(f"\n[处理] 音频块 {chunks_processed + 1}")

                text, info = transcriber.transcribe(chunk)
                if text.strip():
                    print(f"[转录] {text}")
                    print(f"[信息] 语言={info['language']}, 置信度={info['language_probability']:.2f}")
                else:
                    print("[转录] (无语音)")

                chunks_processed += 1
            else:
                time.sleep(0.1)
    finally:
        capture.stop()

    print(f"\n处理了 {chunks_processed} 个音频块")


if __name__ == "__main__":
    test_audio()
