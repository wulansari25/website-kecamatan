import { getDb } from '../config/db.js';
import { scrapeDetikBanyuwangi } from '../services/rssScraper.js';

const VALID_KATEGORI = ['Kegiatan', 'Pengumuman', 'Pelayanan', 'Budaya', 'UMKM'];

/**
 * GET /api/berita
 * Mengambil semua berita (Internal/Lokal + Detik) diurutkan berdasarkan tanggal terbaru.
 */
export async function getAllBerita(req, res) {
  try {
    const db = await getDb();
    const listBerita = await db.all(
      `SELECT * FROM berita ORDER BY tanggal DESC`
    );

    return res.status(200).json({
      status: 'success',
      total: listBerita.length,
      data: listBerita
    });
  } catch (error) {
    console.error('❌ Gagal mengambil daftar berita:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal mengambil data berita dari database.'
    });
  }
}

/**
 * POST /api/berita
 * API untuk Admin input berita manual.
 * Menerima data dari body request, dan OTOMATIS mengatur:
 * - sumber = 'Lokal Kecamatan'
 * - link_asli = null
 */
export async function createBeritaManual(req, res) {
  try {
    const { judul, deskripsi, gambar, kategori, tanggal } = req.body;

    // Validasi Field Wajib
    if (!judul || !deskripsi || !kategori) {
      return res.status(400).json({
        status: 'fail',
        message: 'Field judul, deskripsi, dan kategori wajib diisi.'
      });
    }

    // Validasi Kategori
    if (!VALID_KATEGORI.includes(kategori)) {
      return res.status(400).json({
        status: 'fail',
        message: `Kategori tidak valid. Pilihan kategori: ${VALID_KATEGORI.join(', ')}`
      });
    }

    const db = await getDb();
    const timestamp = tanggal ? new Date(tanggal).toISOString() : new Date().toISOString();

    // OTOMATIS set sumber = 'Lokal Kecamatan' dan link_asli = null
    const result = await db.run(
      `INSERT INTO berita (judul, deskripsi, gambar, kategori, tanggal, sumber, link_asli)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        judul.trim(),
        deskripsi.trim(),
        gambar ? gambar.trim() : null,
        kategori,
        timestamp,
        'Lokal Kecamatan',
        null
      ]
    );

    const newBerita = await db.get(`SELECT * FROM berita WHERE id = ?`, [result.lastID]);

    return res.status(201).json({
      status: 'success',
      message: 'Berita manual berhasil ditambahkan.',
      data: newBerita
    });
  } catch (error) {
    console.error('❌ Gagal menambah berita manual:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal menyimpan berita ke database.'
    });
  }
}

/**
 * POST /api/berita/sync
 * Endpoint opsional untuk memicu sinkronisasi RSS detik.com secara manual
 */
export async function syncBeritaDetik(req, res) {
  try {
    const result = await scrapeDetikBanyuwangi();
    return res.status(200).json({
      status: 'success',
      message: 'Sinkronisasi RSS detik.com selesai.',
      inserted: result.insertedCount,
      skipped: result.skippedCount
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Gagal melakukan sinkronisasi berita detik.com',
      error: error.message
    });
  }
}
