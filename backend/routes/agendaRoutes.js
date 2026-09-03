import express from 'express';
import {
  getAllAgenda,
  getAgendaById,
  createAgenda,
  updateAgenda,
  deleteAgenda
} from '../controllers/agendaController.js';

const router = express.Router();

// GET /api/agenda -> Mengambil seluruh agenda terdekat
router.get('/agenda', getAllAgenda);

// GET /api/agenda/:id -> Mengambil 1 detail agenda
router.get('/agenda/:id', getAgendaById);

// POST /api/agenda -> Admin menambah agenda baru
router.post('/agenda', createAgenda);

// PUT /api/agenda/:id -> Admin update agenda
router.put('/agenda/:id', updateAgenda);

// DELETE /api/agenda/:id -> Admin hapus agenda
router.delete('/agenda/:id', deleteAgenda);

export default router;
