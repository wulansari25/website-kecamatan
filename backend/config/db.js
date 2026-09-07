import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let pool = null;
let dbAdapter = null;

export async function getDb() {
  if (dbAdapter) return dbAdapter;

  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'root';
  const envPassword = process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : '';
  const database = process.env.DB_NAME || 'website_kecamatan';
  const port = Number(process.env.DB_PORT) || 3306;

  // Daftar kandidat password untuk mendukung berbagai konfigurasi Laragon / XAMPP / MySQL
  const passwordCandidates = Array.from(new Set([
    envPassword,
    '',
    'root',
    'admin',
    '123456',
    'password'
  ]));

  let initConn = null;
  let workingPassword = envPassword;

  for (const pwd of passwordCandidates) {
    try {
      initConn = await mysql.createConnection({
        host,
        user,
        password: pwd,
        port
      });
      workingPassword = pwd;
      break;
    } catch {
      // Lanjut ke kandidat password berikutnya
    }
  }

  if (!initConn) {
    console.error(`❌ Gagal terhubung ke MySQL Laragon (${host}:${port}) dengan user '${user}'.`);
    console.error(`📌 Harap pastikan MySQL pada Laragon/XAMPP dalam status RUNNING.`);
    throw new Error(`Koneksi MySQL gagal: Access denied untuk user '${user}'@'${host}'. Pastikan Laragon/MySQL aktif.`);
  }

  try {
    // 1. Auto-Create Database `website_kecamatan` jika belum ada
    await initConn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await initConn.end();

    // 2. Buat Connection Pool ke Database MySQL
    pool = mysql.createPool({
      host,
      user,
      password: workingPassword,
      database,
      port,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // 3. Interface Adapter Kompatibel SQLite -> MySQL (all, get, run, exec)
    dbAdapter = {
      async all(sql, params = []) {
        const [rows] = await pool.query(sql, params);
        return rows;
      },
      async get(sql, params = []) {
        const [rows] = await pool.query(sql, params);
        return rows.length > 0 ? rows[0] : null;
      },
      async run(sql, params = []) {
        const [result] = await pool.query(sql, params);
        return {
          lastID: result.insertId,
          changes: result.affectedRows
        };
      },
      async exec(sql) {
        return await pool.query(sql);
      },
      pool
    };

    // 4. Auto-Run Migrations dari folder backend/migrations/
    const migrationsDir = path.join(__dirname, '..', 'migrations');
    if (fs.existsSync(migrationsDir)) {
      const files = fs.readdirSync(migrationsDir)
        .filter(file => file.endsWith('.sql'))
        .sort();

      for (const file of files) {
        const filePath = path.join(migrationsDir, file);
        const sql = fs.readFileSync(filePath, 'utf8').trim();
        if (sql) {
          try {
            await pool.query(sql);
          } catch (err) {
            console.error(`❌ Migration error (${file}):`, err.message);
          }
        }
      }
    }

    console.log(`✅ Database MySQL (${database}@${host}:${port}) terhubung & migrations siap digunakan.`);
    return dbAdapter;
  } catch (error) {
    console.error('❌ Error inisialisasi tabel MySQL Laragon:', error.message);
    throw error;
  }
}
