"""SQLite 存储模块"""

import sqlite3
from pathlib import Path
from datetime import datetime
from contextlib import contextmanager


class Storage:
    def __init__(self, db_path: str = "supervision.db"):
        self.db_path = Path(db_path)
        self._init_db()

    def _init_db(self):
        with self._conn() as conn:
            conn.executescript("""
                -- 音频转录
                CREATE TABLE IF NOT EXISTS transcriptions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                    text TEXT NOT NULL,
                    duration_sec REAL,
                    language TEXT
                );

                -- 屏幕截图
                CREATE TABLE IF NOT EXISTS screenshots (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                    file_path TEXT NOT NULL,
                    phash TEXT,
                    is_duplicate INTEGER DEFAULT 0
                );

                -- 索引
                CREATE INDEX IF NOT EXISTS idx_trans_ts ON transcriptions(timestamp);
                CREATE INDEX IF NOT EXISTS idx_screen_ts ON screenshots(timestamp);
            """)

    @contextmanager
    def _conn(self):
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        try:
            yield conn
            conn.commit()
        finally:
            conn.close()

    def save_transcription(self, text: str, duration_sec: float = None, language: str = None) -> int:
        with self._conn() as conn:
            cursor = conn.execute(
                "INSERT INTO transcriptions (text, duration_sec, language) VALUES (?, ?, ?)",
                (text, duration_sec, language)
            )
            return cursor.lastrowid

    def save_screenshot(self, file_path: str, phash: str = None, is_duplicate: bool = False) -> int:
        with self._conn() as conn:
            cursor = conn.execute(
                "INSERT INTO screenshots (file_path, phash, is_duplicate) VALUES (?, ?, ?)",
                (file_path, phash, 1 if is_duplicate else 0)
            )
            return cursor.lastrowid

    def get_last_screenshot_hash(self) -> str | None:
        with self._conn() as conn:
            row = conn.execute(
                "SELECT phash FROM screenshots WHERE phash IS NOT NULL ORDER BY id DESC LIMIT 1"
            ).fetchone()
            return row["phash"] if row else None

    def get_stats(self) -> dict:
        with self._conn() as conn:
            trans_count = conn.execute("SELECT COUNT(*) FROM transcriptions").fetchone()[0]
            screen_count = conn.execute("SELECT COUNT(*) FROM screenshots").fetchone()[0]
            dup_count = conn.execute("SELECT COUNT(*) FROM screenshots WHERE is_duplicate = 1").fetchone()[0]
            return {
                "transcriptions": trans_count,
                "screenshots": screen_count,
                "duplicates": dup_count,
                "skip_rate": f"{dup_count / screen_count * 100:.1f}%" if screen_count > 0 else "0%"
            }
