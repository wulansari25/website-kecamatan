-- Migration 000: Tabel Admin
CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_lengkap VARCHAR(255) NOT NULL DEFAULT 'Kecamatan Banyuwangi',
    username VARCHAR(255) NOT NULL DEFAULT 'kecamatanbanyuwangi@gmail.com',
    email VARCHAR(255) NOT NULL DEFAULT 'kecamatanbanyuwangi@gmail.com',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
