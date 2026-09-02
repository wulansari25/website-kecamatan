import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let dbInstance = null;

export async function getDb() {
  if (dbInstance) return dbInstance;

  const dbPath = path.join(__dirname, '..', 'database.sqlite');
  
  dbInstance = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  // Auto-init schema jika tabel berita dan agenda belum ada
  await dbInstance.exec(`
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
    CREATE INDEX IF NOT EXISTS idx_berita_tanggal ON berita(tanggal DESC);
    CREATE INDEX IF NOT EXISTS idx_berita_link_asli ON berita(link_asli);

    CREATE TABLE IF NOT EXISTS agenda (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      judul TEXT NOT NULL,
      tanggal VARCHAR(50),
      tanggal_tampil VARCHAR(20) NOT NULL,
      waktu VARCHAR(100) NOT NULL,
      lokasi VARCHAR(255) DEFAULT NULL
    );
  `);

  // Seed Data Awal Agenda jika masih kosong
  const countAgenda = await dbInstance.get('SELECT COUNT(*) as count FROM agenda');
  if (countAgenda.count === 0) {
    await dbInstance.run(`
      INSERT INTO agenda (judul, tanggal, tanggal_tampil, waktu, lokasi) VALUES
      ('Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan', '2026-07-24', '24 JUL', '08.00 - 14.00 WIB', 'Balai Kelurahan Kepatihan & Tamanbaru'),
      ('Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar', '2026-07-22', '22 JUL', '09.00 - 13.00 WIB', 'Aula Kecamatan Banyuwangi'),
      ('Pembagian Bibit Tanaman Produktif untuk Warga', '2026-07-23', '23 JUL', '09.00 - Selesai', 'Halaman Pendopo Kecamatan Banyuwangi')
    `);
    console.log('🌱 Seed data agenda berhasil ditambahkan.');
  }

  console.log('✅ Database SQLite terhubung & schema berita/agenda siap digunakan.');
  return dbInstance;
}
