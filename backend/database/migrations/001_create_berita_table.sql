-- Migration 001: Tabel Berita & Pengumuman
CREATE TABLE IF NOT EXISTS berita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    gambar MEDIUMTEXT DEFAULT NULL,
    kategori VARCHAR(50) NOT NULL DEFAULT 'Kegiatan',
    tanggal DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sumber VARCHAR(100) NOT NULL DEFAULT 'Internal',
    link_asli VARCHAR(500) DEFAULT NULL,
    INDEX idx_berita_tanggal (tanggal DESC),
    INDEX idx_berita_link_asli (link_asli(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
