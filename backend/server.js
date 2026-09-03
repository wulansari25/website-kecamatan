import express from 'express';
import cors from 'cors';
import { getDb } from './config/db.js';
import beritaRoutes from './routes/beritaRoutes.js';
import agendaRoutes from './routes/agendaRoutes.js';
import { initNewsCron } from './cron/newsCron.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (tambahkan limit 50mb agar upload foto base64 tidak meledak PayloadTooLargeError)
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes API
app.use('/api', beritaRoutes);
app.use('/api', agendaRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start Server
async function startServer() {
  try {
    // Inisialisasi Koneksi & Schema Database
    await getDb();

    // Inisialisasi Penjadwal Cron Job (setiap jam 12:00 & 00:00)
    initNewsCron();

    app.listen(PORT, () => {
      console.log(`🚀 Server Backend Berita berjalan di: http://localhost:${PORT}`);
      console.log(`📌 Endpoint GET Berita:  http://localhost:${PORT}/api/berita`);
      console.log(`📌 Endpoint POST Berita: http://localhost:${PORT}/api/berita`);
      console.log(`📌 Endpoint GET Agenda:  http://localhost:${PORT}/api/agenda`);
      console.log(`📌 Endpoint POST Agenda: http://localhost:${PORT}/api/agenda`);
      console.log(`📌 Endpoint Sync Manual: http://localhost:${PORT}/api/berita/sync`);
    });
  } catch (error) {
    console.error('❌ Gagal menjalankan server:', error);
    process.exit(1);
  }
}

startServer();
