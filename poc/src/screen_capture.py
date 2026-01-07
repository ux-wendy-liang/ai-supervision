"""屏幕截图 + 相似度检测模块"""

import time
from pathlib import Path
from datetime import datetime

import mss
import mss.tools
from PIL import Image
import imagehash


class ScreenCapture:
    """屏幕截图 + 智能跳帧"""

    def __init__(
        self,
        output_dir: str = "screenshots",
        fps: float = 1.0,
        hash_threshold: int = 5,  # 哈希差异阈值，越小越严格
        quality: int = 80,
    ):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.interval = 1.0 / fps
        self.hash_threshold = hash_threshold
        self.quality = quality

        self._last_hash = None
        self._sct = mss.mss()

    def capture(self) -> tuple[str | None, str, bool]:
        """
        截图并检测是否重复
        返回: (file_path, phash, is_duplicate)
               如果是重复帧，file_path 为 None
        """
        # 截取主显示器
        monitor = self._sct.monitors[1]  # 1 = 主显示器
        screenshot = self._sct.grab(monitor)

        # 转换为 PIL Image
        img = Image.frombytes("RGB", screenshot.size, screenshot.bgra, "raw", "BGRX")

        # 计算感知哈希 (pHash)
        current_hash = imagehash.phash(img)
        phash_str = str(current_hash)

        # 检测是否重复
        is_duplicate = False
        if self._last_hash is not None:
            diff = current_hash - self._last_hash
            is_duplicate = diff <= self.hash_threshold

        self._last_hash = current_hash

        # 如果重复，跳过保存
        if is_duplicate:
            return None, phash_str, True

        # 保存截图
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")[:-3]
        filename = f"screen_{timestamp}.jpg"
        file_path = self.output_dir / filename

        img.save(file_path, "JPEG", quality=self.quality)
        return str(file_path), phash_str, False

    def close(self):
        self._sct.close()


def test_screen():
    """测试屏幕截图 + 智能跳帧"""
    print("=" * 50)
    print("屏幕截图 + 智能跳帧测试")
    print("=" * 50)

    capture = ScreenCapture(fps=2.0, hash_threshold=5)  # 2 FPS 测试

    stats = {"total": 0, "saved": 0, "skipped": 0}

    print(f"\n开始截图测试 (10 秒, 2 FPS)...")
    print("请切换窗口或移动鼠标来触发变化\n")

    start = time.time()
    try:
        while time.time() - start < 10:
            file_path, phash, is_dup = capture.capture()
            stats["total"] += 1

            if is_dup:
                stats["skipped"] += 1
                print(f"[跳过] 帧 {stats['total']} - 与上一帧相似 (hash={phash[:8]}...)")
            else:
                stats["saved"] += 1
                print(f"[保存] 帧 {stats['total']} - {file_path}")

            time.sleep(capture.interval)
    finally:
        capture.close()

    print(f"\n统计:")
    print(f"  总帧数: {stats['total']}")
    print(f"  保存: {stats['saved']}")
    print(f"  跳过: {stats['skipped']}")
    print(f"  跳过率: {stats['skipped'] / stats['total'] * 100:.1f}%")


if __name__ == "__main__":
    test_screen()
