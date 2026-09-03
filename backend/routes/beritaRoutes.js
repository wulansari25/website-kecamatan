import express from 'express';
import {
  getAllBerita,
  getBeritaById,
  createBeritaManual,
  updateBerita,
  deleteBerita,
  syncBeritaDetik
} from '../controllers/beritaController.js';

const router = express.Router();

// GET /api/berita -> Ambil semua berita terurut tanggal terbaru
router.get('/berita', getAllBerita);

// GET /api/berita/:id -> Ambil detail 1 berita
router.get('/berita/:id', getBeritaById);

// POST /api/berita -> Admin input manual
router.post('/berita', createBeritaManual);

// PUT /api/berita/:id -> Admin update berita
router.put('/berita/:id', updateBerita);

// DELETE /api/berita/:id -> Admin hapus berita
router.delete('/berita/:id', deleteBerita);

// POST /api/berita/sync -> Trigger manual sinkronisasi RSS detik.com
router.post('/berita/sync', syncBeritaDetik);

export default router;
