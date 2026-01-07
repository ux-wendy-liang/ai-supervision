# AI 督导 PoC

技术可行性验证：音频转录 + 屏幕截图 + 智能跳帧

## 快速开始

```bash
cd poc

# 安装依赖
uv sync

# 测试音频采集 + 转录 (10秒)
uv run python -m src.main --test-audio

# 测试屏幕截图 + 跳帧 (10秒)
uv run python -m src.main --test-screen

# 完整运行 (Ctrl+C 停止)
uv run python -m src.main
```

## 参数

```
--model   Whisper 模型: tiny/base/small/medium (默认 small)
--fps     截图帧率 (默认 1.0)
--chunk   音频块时长秒 (默认 5.0)
```

## 资源预估

| 模型 | 首次加载 | 内存占用 | 转录速度 |
|------|----------|----------|----------|
| tiny | ~75MB | ~200MB | 实时 x10 |
| small | ~500MB | ~500MB | 实时 x5 |
| medium | ~1.5GB | ~1.5GB | 实时 x2 |
