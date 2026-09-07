import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDb } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function runMigrations() {
  console.log('🚀 Memulai eksekusi SQL Migrations...');
  const db = await getDb();
  const migrationsDir = path.join(__dirname, 'migrations');

  if (!fs.existsSync(migrationsDir)) {
    console.error('❌ Folder migrations tidak ditemukan:', migrationsDir);
    return;
  }

  const files = fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith('.sql'))
    .sort();

  for (const file of files) {
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, 'utf8').trim();

    if (sql) {
      try {
        await db.exec(sql);
        console.log(`  ✅ Migration berhasil dieksekusi: ${file}`);
      } catch (err) {
        console.error(`  ❌ Gagal mengeksekusi migration ${file}:`, err.message);
      }
    }
  }

  console.log('✨ Seluruh SQL Migrations selesai dijalankan!');
}

// Jika dijalankan langsung via terminal node migrate.js
if (process.argv[1] && process.argv[1].endsWith('migrate.js')) {
  runMigrations().then(() => process.exit(0));
}
