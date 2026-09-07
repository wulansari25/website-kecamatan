-- Migration 002: Tabel Agenda Kegiatan
CREATE TABLE IF NOT EXISTS agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul TEXT NOT NULL,
    tanggal VARCHAR(50) DEFAULT NULL,
    tanggal_tampil VARCHAR(20) NOT NULL,
    waktu VARCHAR(100) NOT NULL,
    lokasi VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
