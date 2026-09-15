import { getDb } from '../config/db.js';
import { getIO } from '../socket.js';

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
      message: 'Gagal mengambil data agenda dari database: ' + error.message
    });
  }
}

/**
 * GET /api/agenda/:id
 * Mengambil detail 1 agenda.
 */
export async function getAgendaById(req, res) {
  try {
    const { id } = req.params;
    const db = await getDb();
    const agenda = await db.get(`SELECT * FROM agenda WHERE id = ?`, [id]);

    if (!agenda) {
      return res.status(404).json({
        status: 'fail',
        message: 'Agenda tidak ditemukan.'
      });
    }

    return res.status(200).json({
      status: 'success',
      data: agenda
    });
  } catch (error) {
    console.error('❌ Gagal mengambil detail agenda:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal mengambil detail agenda dari database: ' + error.message
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

    console.log('📥 Received POST /api/agenda:', { judul, tanggal, waktu, lokasi });

    if (!judul) {
      return res.status(400).json({
        status: 'fail',
        message: 'Field judul agenda wajib diisi.'
      });
    }

    const db = await getDb();
    const tglVal = tanggal ? tanggal.trim() : new Date().toISOString().split('T')[0];
    
    let tglTampilVal = tanggal_tampil;
    if (!tglTampilVal) {
      const dateObj = new Date(tglVal);
      if (!isNaN(dateObj.getTime())) {
        const day = dateObj.getDate();
        const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];
        tglTampilVal = `${day} ${monthNames[dateObj.getMonth()]}`;
      } else {
        tglTampilVal = 'AGENDA';
      }
    }

    const result = await db.run(
      `INSERT INTO agenda (judul, tanggal, tanggal_tampil, waktu, lokasi)
       VALUES (?, ?, ?, ?, ?)`,
      [
        judul.trim(),
        tglVal,
        tglTampilVal.trim(),
        (waktu || '08.00 - Selesai').trim(),
        lokasi ? lokasi.trim() : null
      ]
    );

    const newAgenda = await db.get(`SELECT * FROM agenda WHERE id = ?`, [result.lastID]);
    console.log('✅ Agenda baru berhasil disimpan ke SQLite with ID:', result.lastID);

    try {
      const io = getIO();
      if (io) {
        io.emit('agenda:created', newAgenda);
        io.emit('notification:new', {
          id: `agenda-${newAgenda.id}-${Date.now()}`,
          type: 'agenda',
          title: newAgenda.judul,
          category: 'Agenda Terdekat',
          timestamp: newAgenda.tanggal || new Date().toISOString(),
          data: newAgenda
        });
      }
    } catch (socketErr) {
      console.error('⚠️ Error emitting socket agenda:created:', socketErr);
    }

    return res.status(201).json({
      status: 'success',
      message: 'Agenda baru berhasil ditambahkan.',
      data: newAgenda
    });
  } catch (error) {
    console.error('❌ Gagal menambah agenda:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal menyimpan agenda ke database: ' + error.message
    });
  }
}

/**
 * PUT /api/agenda/:id
 * API untuk Admin update agenda.
 */
export async function updateAgenda(req, res) {
  try {
    const { id } = req.params;
    const { judul, tanggal, tanggal_tampil, waktu, lokasi } = req.body;

    console.log(`📥 Received PUT /api/agenda/${id}:`, { judul, tanggal, waktu, lokasi });

    const db = await getDb();
    const existing = await db.get(`SELECT * FROM agenda WHERE id = ?`, [id]);

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Agenda tidak ditemukan.'
      });
    }

    const updatedJudul = judul !== undefined ? judul.trim() : existing.judul;
    const updatedTanggal = tanggal !== undefined ? tanggal.trim() : existing.tanggal;
    let updatedTglTampil = tanggal_tampil !== undefined ? tanggal_tampil.trim() : existing.tanggal_tampil;
    
    if (tanggal && !tanggal_tampil) {
      const dateObj = new Date(updatedTanggal);
      if (!isNaN(dateObj.getTime())) {
        const day = dateObj.getDate();
        const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];
        updatedTglTampil = `${day} ${monthNames[dateObj.getMonth()]}`;
      }
    }

    const updatedWaktu = waktu !== undefined ? (waktu || '08.00 - Selesai').trim() : existing.waktu;
    const updatedLokasi = lokasi !== undefined ? (lokasi ? lokasi.trim() : null) : existing.lokasi;

    await db.run(
      `UPDATE agenda 
       SET judul = ?, tanggal = ?, tanggal_tampil = ?, waktu = ?, lokasi = ?
       WHERE id = ?`,
      [updatedJudul, updatedTanggal, updatedTglTampil, updatedWaktu, updatedLokasi, id]
    );

    const updatedAgenda = await db.get(`SELECT * FROM agenda WHERE id = ?`, [id]);
    console.log(`✅ Agenda ID ${id} berhasil diperbarui di SQLite`);

    try {
      const io = getIO();
      if (io) {
        io.emit('agenda:updated', updatedAgenda);
      }
    } catch (socketErr) {
      console.error('⚠️ Error emitting socket agenda:updated:', socketErr);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Agenda berhasil diperbarui.',
      data: updatedAgenda
    });
  } catch (error) {
    console.error('❌ Gagal memperbarui agenda:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal memperbarui agenda di database: ' + error.message
    });
  }
}

/**
 * DELETE /api/agenda/:id
 * API untuk Admin hapus agenda.
 */
export async function deleteAgenda(req, res) {
  try {
    const { id } = req.params;
    const db = await getDb();

    const existing = await db.get(`SELECT * FROM agenda WHERE id = ?`, [id]);
    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Agenda tidak ditemukan.'
      });
    }

    await db.run(`DELETE FROM agenda WHERE id = ?`, [id]);
    console.log(`✅ Agenda ID ${id} berhasil dihapus dari SQLite`);

    try {
      const io = getIO();
      if (io) {
        io.emit('agenda:deleted', { id: Number(id) });
      }
    } catch (socketErr) {
      console.error('⚠️ Error emitting socket agenda:deleted:', socketErr);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Agenda berhasil dihapus.'
    });
  } catch (error) {
    console.error('❌ Gagal menghapus agenda:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal menghapus agenda dari database: ' + error.message
    });
  }
}
