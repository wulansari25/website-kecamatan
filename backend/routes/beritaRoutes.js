import express from 'express';
import {
  getAllBerita,
  createBeritaManual,
  syncBeritaDetik
} from '../controllers/beritaController.js';

const router = express.Router();

// GET /api/berita -> Ambil semua berita terurut tanggal terbaru
router.get('/berita', getAllBerita);

// POST /api/berita -> Admin input manual (Otomatis sumber='Lokal Kecamatan', link_asli=null)
router.post('/berita', createBeritaManual);

// POST /api/berita/sync -> Trigger manual sinkronisasi RSS detik.com
router.post('/berita/sync', syncBeritaDetik);

export default router;
