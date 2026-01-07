"""AI 督导 PoC - 主程序"""

import argparse
import signal
import sys
import threading
import time
from pathlib import Path

from .storage import Storage
from .audio_capture import AudioCapture, Transcriber
from .screen_capture import ScreenCapture


class Supervisor:
    """AI 督导核心"""

    def __init__(
        self,
        db_path: str = "supervision.db",
        screenshot_dir: str = "screenshots",
        whisper_model: str = "small",
        audio_chunk_sec: float = 5.0,
        screen_fps: float = 1.0,
    ):
        print("[Supervisor] 初始化...")

        # 存储
        self.storage = Storage(db_path)

        # 音频
        self.audio_capture = AudioCapture(chunk_sec=audio_chunk_sec)
        self.transcriber = Transcriber(model_size=whisper_model)

        # 屏幕
        self.screen_capture = ScreenCapture(output_dir=screenshot_dir, fps=screen_fps)

        self._running = False
        self._threads = []

        print("[Supervisor] 初始化完成")

    def _audio_loop(self):
        """音频采集 + 转录循环"""
        while self._running:
            if self.audio_capture.has_chunk():
                chunk = self.audio_capture.get_chunk()
                text, info = self.transcriber.transcribe(chunk)

                if text.strip():
                    self.storage.save_transcription(
                        text=text,
                        duration_sec=info.get("duration"),
                        language=info.get("language"),
                    )
                    print(f"[转录] {text}")
            else:
                time.sleep(0.1)

    def _screen_loop(self):
        """屏幕截图循环"""
        while self._running:
            file_path, phash, is_dup = self.screen_capture.capture()
            self.storage.save_screenshot(
                file_path=file_path or "skipped",
                phash=phash,
                is_duplicate=is_dup,
            )

            if not is_dup:
                print(f"[截图] {file_path}")

            time.sleep(self.screen_capture.interval)

    def start(self):
        """启动督导"""
        print("\n" + "=" * 50)
        print("AI 督导启动")
        print("按 Ctrl+C 停止")
        print("=" * 50 + "\n")

        self._running = True

        # 启动音频采集
        self.audio_capture.start()

        # 启动后台线程
        audio_thread = threading.Thread(target=self._audio_loop, daemon=True)
        screen_thread = threading.Thread(target=self._screen_loop, daemon=True)

        audio_thread.start()
        screen_thread.start()

        self._threads = [audio_thread, screen_thread]

    def stop(self):
        """停止督导"""
        print("\n[Supervisor] 停止中...")
        self._running = False

        # 停止采集
        self.audio_capture.stop()
        self.screen_capture.close()

        # 等待线程
        for t in self._threads:
            t.join(timeout=2.0)

        # 打印统计
        stats = self.storage.get_stats()
        print("\n" + "=" * 50)
        print("会话统计")
        print("=" * 50)
        print(f"  转录条数: {stats['transcriptions']}")
        print(f"  截图总数: {stats['screenshots']}")
        print(f"  跳过重复: {stats['duplicates']}")
        print(f"  跳过率: {stats['skip_rate']}")
        print("=" * 50)

    def run(self):
        """运行直到 Ctrl+C"""
        self.start()
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            pass
        finally:
            self.stop()


def main():
    parser = argparse.ArgumentParser(description="AI 督导 PoC")
    parser.add_argument("--model", default="small", help="Whisper 模型 (tiny/base/small/medium)")
    parser.add_argument("--fps", type=float, default=1.0, help="截图帧率")
    parser.add_argument("--chunk", type=float, default=5.0, help="音频块时长(秒)")
    parser.add_argument("--test-audio", action="store_true", help="仅测试音频")
    parser.add_argument("--test-screen", action="store_true", help="仅测试屏幕")

    args = parser.parse_args()

    if args.test_audio:
        from .audio_capture import test_audio
        test_audio()
        return

    if args.test_screen:
        from .screen_capture import test_screen
        test_screen()
        return

    # 完整运行
    supervisor = Supervisor(
        whisper_model=args.model,
        screen_fps=args.fps,
        audio_chunk_sec=args.chunk,
    )
    supervisor.run()


if __name__ == "__main__":
    main()
