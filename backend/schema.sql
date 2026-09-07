-- Database Schema MySQL (Laragon) untuk `website_kecamatan`

CREATE DATABASE IF NOT EXISTS website_kecamatan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE website_kecamatan;

-- 1. Tabel Berita
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

-- 2. Tabel Agenda
CREATE TABLE IF NOT EXISTS agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul TEXT NOT NULL,
    tanggal VARCHAR(50) DEFAULT NULL,
    tanggal_tampil VARCHAR(20) NOT NULL,
    waktu VARCHAR(100) NOT NULL,
    lokasi VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Tabel Admin
CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_lengkap VARCHAR(255) NOT NULL DEFAULT 'Kecamatan Banyuwangi',
    username VARCHAR(255) NOT NULL DEFAULT 'kecamatanbanyuwangi@gmail.com',
    email VARCHAR(255) NOT NULL DEFAULT 'kecamatanbanyuwangi@gmail.com',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
