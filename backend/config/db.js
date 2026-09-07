import mysql from 'mysql2/promise';

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

    // 3. Inisialisasi Skema Tabel MySQL jika belum ada
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

    await pool.query(`
      CREATE TABLE IF NOT EXISTS agenda (
        id INT AUTO_INCREMENT PRIMARY KEY,
        judul TEXT NOT NULL,
        tanggal VARCHAR(50) DEFAULT NULL,
        tanggal_tampil VARCHAR(20) NOT NULL,
        waktu VARCHAR(100) NOT NULL,
        lokasi VARCHAR(255) DEFAULT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama_lengkap VARCHAR(255) NOT NULL DEFAULT 'Kecamatan Banyuwangi',
        username VARCHAR(255) NOT NULL DEFAULT 'kecamatanbanyuwangi@gmail.com',
        email VARCHAR(255) NOT NULL DEFAULT 'kecamatanbanyuwangi@gmail.com',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 4. Seed Data Awal Agenda jika masih kosong
    const [agendaRows] = await pool.query('SELECT COUNT(*) as count FROM agenda');
    if (agendaRows[0].count === 0) {
      await pool.query(`
        INSERT INTO agenda (judul, tanggal, tanggal_tampil, waktu, lokasi) VALUES
        ('Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan', '2026-07-24', '24 JUL', '08.00 - 14.00 WIB', 'Balai Kelurahan Kepatihan & Tamanbaru'),
        ('Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar', '2026-07-22', '22 JUL', '09.00 - 13.00 WIB', 'Aula Kecamatan Banyuwangi'),
        ('Pembagian Bibit Tanaman Produktif untuk Warga', '2026-07-23', '23 JUL', '09.00 - Selesai', 'Halaman Pendopo Kecamatan Banyuwangi')
      `);
      console.log('🌱 Seed data agenda berhasil ditambahkan ke MySQL.');
    }

    // 5. Seed Data Awal Admin jika masih kosong
    const [adminRows] = await pool.query('SELECT COUNT(*) as count FROM admin');
    if (adminRows[0].count === 0) {
      await pool.query(`
        INSERT INTO admin (nama_lengkap, username, email) VALUES
        ('Kecamatan Banyuwangi', 'kecamatanbanyuwangi@gmail.com', 'kecamatanbanyuwangi@gmail.com')
      `);
      console.log('🌱 Seed data admin berhasil ditambahkan ke MySQL.');
    }

    console.log(`✅ Database MySQL (${database}@${host}:${port}) terhubung & schema siap digunakan.`);

    // 6. Interface Adapter Kompatibel SQLite -> MySQL (all, get, run, exec)
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

    return dbAdapter;
  } catch (error) {
    console.error('❌ Error inisialisasi tabel MySQL Laragon:', error.message);
    throw error;
  }
}
