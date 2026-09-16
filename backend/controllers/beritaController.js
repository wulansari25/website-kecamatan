import { getDb } from '../config/db.js';
import { scrapeDetikBanyuwangi } from '../services/rssScraper.js';
import { getIO } from '../socket.js';

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
      message: 'Gagal mengambil data berita dari database: ' + error.message
    });
  }
}

/**
 * GET /api/berita/:id
 * Mengambil 1 detail berita berdasarkan ID.
 */
export async function getBeritaById(req, res) {
  try {
    const rawId = req.params.id;
    const db = await getDb();

    const parsedNum = parseInt(rawId.toString().replace(/\D/g, ''), 10);
    const searchId = !isNaN(parsedNum) ? parsedNum : rawId;

    let berita = await db.get(`SELECT * FROM berita WHERE id = ?`, [searchId]);
    if (!berita && searchId !== rawId) {
      berita = await db.get(`SELECT * FROM berita WHERE id = ?`, [rawId]);
    }

    if (!berita) {
      return res.status(404).json({
        status: 'fail',
        message: 'Berita tidak ditemukan.'
      });
    }

    return res.status(200).json({
      status: 'success',
      data: berita
    });
  } catch (error) {
    console.error('❌ Gagal mengambil detail berita:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal mengambil detail berita dari database: ' + error.message
    });
  }
}

/**
 * POST /api/berita
 * API untuk Admin input berita manual.
 */
export async function createBeritaManual(req, res) {
  try {
    const { judul, deskripsi, gambar, kategori, tanggal, sumber } = req.body;

    console.log('📥 Received POST /api/berita:', {
      judul,
      kategori,
      tanggal,
      sumber,
      gambarSize: gambar ? `${Math.round(gambar.length / 1024)} KB` : 'No Image'
    });

    if (!judul || !deskripsi) {
      return res.status(400).json({
        status: 'fail',
        message: 'Field judul dan deskripsi wajib diisi.'
      });
    }

    const db = await getDb();
    const timestamp = tanggal ? new Date(tanggal).toISOString() : new Date().toISOString();
    const catVal = kategori || 'Kegiatan';

    const result = await db.run(
      `INSERT INTO berita (judul, deskripsi, gambar, kategori, tanggal, sumber, link_asli)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        judul.trim(),
        deskripsi.trim(),
        gambar ? gambar.trim() : null,
        catVal,
        timestamp,
        sumber || 'Lokal Kecamatan',
        null
      ]
    );

    const newBerita = await db.get(`SELECT * FROM berita WHERE id = ?`, [result.lastID]);
    console.log('✅ Berita manual berhasil disimpan ke MySQL with ID:', result.lastID);

    try {
      const io = getIO();
      if (io) {
        io.emit('berita:created', newBerita);
        io.emit('notification:new', {
          id: `berita-${newBerita.id}-${Date.now()}`,
          type: 'berita',
          title: newBerita.judul,
          category: newBerita.kategori || 'Kegiatan',
          timestamp: newBerita.tanggal || new Date().toISOString(),
          data: newBerita
        });
      }
    } catch (socketErr) {
      console.error('⚠️ Error emitting socket berita:created:', socketErr);
    }

    return res.status(201).json({
      status: 'success',
      message: 'Berita manual berhasil ditambahkan.',
      data: newBerita
    });
  } catch (error) {
    console.error('❌ Gagal menambah berita manual:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal menyimpan berita ke database: ' + error.message
    });
  }
}

/**
 * PUT /api/berita/:id
 * API untuk Admin update berita.
 */
export async function updateBerita(req, res) {
  try {
    const rawId = req.params.id;
    const { judul, deskripsi, gambar, kategori, tanggal, sumber } = req.body;

    console.log(`📥 Received PUT /api/berita/${rawId}:`, {
      judul,
      kategori,
      tanggal,
      gambarSize: gambar ? `${Math.round(gambar.length / 1024)} KB` : 'No Image'
    });

    const db = await getDb();
    const parsedNum = parseInt(rawId.toString().replace(/\D/g, ''), 10);
    const searchId = !isNaN(parsedNum) ? parsedNum : rawId;

    let existing = await db.get(`SELECT * FROM berita WHERE id = ?`, [searchId]);
    if (!existing && searchId !== rawId) {
      existing = await db.get(`SELECT * FROM berita WHERE id = ?`, [rawId]);
    }

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Berita tidak ditemukan.'
      });
    }

    const targetId = existing.id;

    const updatedJudul = judul !== undefined ? judul.trim() : existing.judul;
    const updatedDeskripsi = deskripsi !== undefined ? deskripsi.trim() : existing.deskripsi;
    const updatedGambar = gambar !== undefined ? (gambar ? gambar.trim() : null) : existing.gambar;
    const updatedKategori = kategori !== undefined ? kategori : existing.kategori;
    const updatedTanggal = tanggal ? new Date(tanggal).toISOString() : existing.tanggal;
    const updatedSumber = sumber !== undefined ? sumber : existing.sumber;

    await db.run(
      `UPDATE berita 
       SET judul = ?, deskripsi = ?, gambar = ?, kategori = ?, tanggal = ?, sumber = ?
       WHERE id = ?`,
      [updatedJudul, updatedDeskripsi, updatedGambar, updatedKategori, updatedTanggal, updatedSumber, targetId]
    );

    const updatedBerita = await db.get(`SELECT * FROM berita WHERE id = ?`, [targetId]);
    console.log(`✅ Berita ID ${targetId} berhasil diperbarui di MySQL`);

    try {
      const io = getIO();
      if (io) {
        io.emit('berita:updated', updatedBerita);
      }
    } catch (socketErr) {
      console.error('⚠️ Error emitting socket berita:updated:', socketErr);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Berita berhasil diperbarui.',
      data: updatedBerita
    });
  } catch (error) {
    console.error('❌ Gagal memperbarui berita:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal memperbarui berita di database: ' + error.message
    });
  }
}

/**
 * DELETE /api/berita/:id
 * API untuk Admin menghapus berita.
 */
export async function deleteBerita(req, res) {
  try {
    const rawId = req.params.id;
    const db = await getDb();

    const parsedNum = parseInt(rawId.toString().replace(/\D/g, ''), 10);
    const searchId = !isNaN(parsedNum) ? parsedNum : rawId;

    let existing = await db.get(`SELECT * FROM berita WHERE id = ?`, [searchId]);
    if (!existing && searchId !== rawId) {
      existing = await db.get(`SELECT * FROM berita WHERE id = ?`, [rawId]);
    }

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Berita tidak ditemukan.'
      });
    }

    const targetId = existing.id;

    await db.run(`DELETE FROM berita WHERE id = ?`, [targetId]);
    console.log(`✅ Berita ID ${targetId} berhasil dihapus dari MySQL`);

    try {
      const io = getIO();
      if (io) {
        io.emit('berita:deleted', { id: Number(targetId) });
      }
    } catch (socketErr) {
      console.error('⚠️ Error emitting socket berita:deleted:', socketErr);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Berita berhasil dihapus.'
    });
  } catch (error) {
    console.error('❌ Gagal menghapus berita:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal menghapus berita dari database: ' + error.message
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
      message: 'Gagal melakukan sinkronisasi berita detik.com: ' + error.message
    });
  }
}
