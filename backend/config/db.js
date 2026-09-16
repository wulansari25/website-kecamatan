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

    // 4. Auto-Run Migrations dari folder backend/database/migrations/ & backend/migrations/
    const candidateDirs = [
      path.join(__dirname, '..', 'database', 'migrations'),
      path.join(__dirname, '..', 'migrations')
    ];

    for (const migrationsDir of candidateDirs) {
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
        break;
      }
    }

    // Pastikan tabel `berita` selalu siap di database `website_kecamatan`
    await pool.query(`
      CREATE TABLE IF NOT EXISTS berita (
          id INT AUTO_INCREMENT PRIMARY KEY,
          judul VARCHAR(255) NOT NULL,
          deskripsi TEXT NOT NULL,
          gambar MEDIUMTEXT DEFAULT NULL,
          kategori VARCHAR(50) NOT NULL DEFAULT 'Kegiatan',
          tanggal DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          sumber VARCHAR(100) NOT NULL DEFAULT 'Internal',
          link_asli VARCHAR(500) DEFAULT NULL,
          INDEX idx_berita_tanggal (tanggal DESC),
          INDEX idx_berita_link_asli (link_asli(255))
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Auto-seed data berita jika tabel masih kosong
    try {
      const [beritaRows] = await pool.query(`SELECT COUNT(*) as count FROM berita`);
      if (beritaRows && beritaRows[0] && beritaRows[0].count === 0) {
        const sampleBerita = [
          ['Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar', 'Musyawarah Perencanaan Pembangunan (Musrenbang) tingkat Kecamatan Banyuwangi tahun 2026 telah resmi digelar. Kegiatan ini membahas berbagai usulan pembangunan prioritas dari 18 kelurahan untuk meningkatkan kesejahteraan masyarakat dan infrastruktur publik.', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', 'Kegiatan', '2026-07-22 09:00:00', 'Humas Kecamatan', null],
          ['Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan', 'Pemberitahuan kepada seluruh warga masyarakat Kecamatan Banyuwangi mengenai jadwal layanan jemput bola perekaman e-KTP. Layanan ini khusus membantu warga lansia, difabel, dan pemula berusia 17 tahun.', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop', 'Pengumuman', '2026-07-24 08:00:00', 'Dukcapil Kecamatan', null],
          ['Pelatihan Digital Marketing dan Pemberdayaan UMKM Lokal', 'Kecamatan Banyuwangi menggelar pelatihan digital marketing untuk 50 pelaku UMKM lokal guna memperluas jangkauan pasar online melalui e-commerce dan media sosial.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', 'UMKM', '2026-07-15 10:00:00', 'Seksi Pemberdayaan', null],
          ['Pekan Seni dan Festival Budaya Blambangan Banyuwangi', 'Pemerintah Kecamatan Banyuwangi menyelenggarakan kejuaraan tari tradisional dan pameran seni budaya Blambangan guna melestarikan kearifan lokal di kalangan generasi muda.', 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop', 'Budaya', '2026-07-18 19:00:00', 'Seksi Kebudayaan', null],
          ['Posyandu Integrasi Layanan Primer (ILP) Serentak', 'Pelaksanaan Posyandu ILP serentak di seluruh kelurahan se-Kecamatan Banyuwangi untuk meningkatkan kesehatan ibu, anak, dan pencegahan stunting.', 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop', 'Pelayanan', '2026-07-20 08:30:00', 'Puskesmas & Kecamatan', null]
        ];
        for (const item of sampleBerita) {
          await pool.query(
            `INSERT INTO berita (judul, deskripsi, gambar, kategori, tanggal, sumber, link_asli) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            item
          );
        }
        console.log('✅ Auto-seed data awal Berita ke MySQL selesai.');
      }
    } catch (seedErr) {
      console.error('⚠️ Error auto-seeding berita:', seedErr.message);
    }

    console.log(`✅ Database MySQL (${database}@${host}:${port}) terhubung & migrations siap digunakan.`);
    return dbAdapter;
  } catch (error) {
    console.error('❌ Error inisialisasi tabel MySQL Laragon:', error.message);
    throw error;
  }
}
