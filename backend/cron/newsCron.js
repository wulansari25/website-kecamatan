import cron from 'node-cron';
import { scrapeDetikBanyuwangi } from '../services/rssScraper.js';

/**
 * Inisialisasi Cron Job Sinkronisasi Berita
 * Berjalan setiap jam 12:00 dan 00:00 (Ekspresi Cron: '0 0,12 * * *')
 */
export function initNewsCron() {
  const cronExpression = '0 0,12 * * *';

  console.log(`[CRON] ⏰ Cron job sinkronisasi berita dijadwalkan setiap jam 12:00 & 00:00 ('${cronExpression}')`);

  cron.schedule(cronExpression, async () => {
    console.log(`[CRON] 🚀 Trigger otomatis jam 12:00 / 00:00 - Menjalankan RSS scraper...`);
    try {
      await scrapeDetikBanyuwangi();
    } catch (err) {
      console.error(`[CRON] ❌ Gagal eksekusi cron scraper:`, err.message);
    }
  });
}
