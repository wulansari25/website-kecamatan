-- Database Schema untuk Tabel `berita`
-- Kompatibel dengan SQLite, MySQL, MariaDB, dan PostgreSQL

CREATE TABLE IF NOT EXISTS berita (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    judul VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    gambar VARCHAR(500),
    kategori VARCHAR(50) NOT NULL CHECK (kategori IN ('Kegiatan', 'Pengumuman', 'Pelayanan', 'Budaya', 'UMKM')),
    tanggal DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sumber VARCHAR(100) NOT NULL DEFAULT 'Internal',
    link_asli VARCHAR(500) DEFAULT NULL
);

-- Indeks opsional untuk mempercepat pencarian & pengurutan
CREATE INDEX IF NOT EXISTS idx_berita_tanggal ON berita(tanggal DESC);
CREATE INDEX IF NOT EXISTS idx_berita_link_asli ON berita(link_asli);

-- Tabel Agenda Terdekat
CREATE TABLE IF NOT EXISTS agenda (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    judul TEXT NOT NULL,
    tanggal VARCHAR(50),
    tanggal_tampil VARCHAR(20) NOT NULL,
    waktu VARCHAR(100) NOT NULL,
    lokasi VARCHAR(255) DEFAULT NULL
);

