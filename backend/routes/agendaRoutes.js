import express from 'express';
import { getAllAgenda, createAgenda } from '../controllers/agendaController.js';

const router = express.Router();

// GET /api/agenda -> Mengambil seluruh agenda terdekat
router.get('/agenda', getAllAgenda);

// POST /api/agenda -> Admin menambah agenda baru
router.post('/agenda', createAgenda);

export default router;
