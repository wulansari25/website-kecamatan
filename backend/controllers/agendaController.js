import { getDb } from '../config/db.js';

/**
 * GET /api/agenda
 * Mengambil seluruh daftar agenda terdekat diurutkan ID terbaru.
 */
export async function getAllAgenda(req, res) {
  try {
    const db = await getDb();
    const listAgenda = await db.all(`SELECT * FROM agenda ORDER BY id DESC`);

    return res.status(200).json({
      status: 'success',
      total: listAgenda.length,
      data: listAgenda
    });
  } catch (error) {
    console.error('❌ Gagal mengambil daftar agenda:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal mengambil data agenda dari database.'
    });
  }
}

/**
 * POST /api/agenda
 * API untuk Admin menambah jadwal agenda manual.
 */
export async function createAgenda(req, res) {
  try {
    const { judul, tanggal, tanggal_tampil, waktu, lokasi } = req.body;

    if (!judul || !tanggal_tampil || !waktu) {
      return res.status(400).json({
        status: 'fail',
        message: 'Field judul, tanggal_tampil, dan waktu wajib diisi.'
      });
    }

    const db = await getDb();
    const result = await db.run(
      `INSERT INTO agenda (judul, tanggal, tanggal_tampil, waktu, lokasi)
       VALUES (?, ?, ?, ?, ?)`,
      [
        judul.trim(),
        tanggal ? tanggal.trim() : new Date().toISOString().split('T')[0],
        tanggal_tampil.trim(),
        waktu.trim(),
        lokasi ? lokasi.trim() : null
      ]
    );

    const newAgenda = await db.get(`SELECT * FROM agenda WHERE id = ?`, [result.lastID]);

    return res.status(201).json({
      status: 'success',
      message: 'Agenda baru berhasil ditambahkan.',
      data: newAgenda
    });
  } catch (error) {
    console.error('❌ Gagal menambah agenda:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal menyimpan agenda ke database.'
    });
  }
}
