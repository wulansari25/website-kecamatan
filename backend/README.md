# Backend Service - Website Kecamatan (Sinkronisasi Berita Detik & Admin Input)

Modul backend murni berbasis Node.js & Express untuk mengelola database berita, sinkronisasi otomatis RSS detikJatim (detik.com) dengan filter kata kunci "Banyuwangi", serta API endpoint untuk input berita manual oleh admin.

---

## 🛠️ Instalasi & Memulai Backend

1. Buka terminal pada direktori `backend`:
   ```bash
   cd backend
   npm install
   ```

2. Jalankan server backend:
   ```bash
   npm start
   ```
   *Atau mode pengembangan (auto-reload):*
   ```bash
   npm run dev
   ```

Server akan berjalan pada: `http://localhost:5000`

---

## 🗄️ 1. Database Schema (`schema.sql` & SQLite `database.sqlite`)

Tabel `berita`:
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `judul` (VARCHAR(255) NOT NULL)
- `deskripsi` (TEXT NOT NULL)
- `gambar` (VARCHAR(500) NULLABLE)
- `kategori` (VARCHAR(50) NOT NULL: `'Kegiatan'`, `'Pengumuman'`, `'Pelayanan'`, `'Budaya'`, `'UMKM'`)
- `tanggal` (DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)
- `sumber` (VARCHAR(100) DEFAULT `'Internal'`)
- `link_asli` (VARCHAR(500) NULLABLE)

---

## ⏰ 2. Fungsi Scraping RSS detik.com & Cron Job

- **Sumber RSS:** `https://detik.com/jatim/rss`
- **Filter Kata Kunci:** Menyeleksi berita yang judul atau deskripsinya mengandung kata **"Banyuwangi"** (case-insensitive).
- **Pengkategorian Otomatis:**
  * Mengandung kata (`Festival`, `Tari`, `Wisata`) $\rightarrow$ Kategori `'Budaya'`
  * Mengandung kata (`Pasar`, `UMKM`, `Usaha`, `Ekonomi`) $\rightarrow$ Kategori `'UMKM'`
  * Jika tidak ada yang cocok $\rightarrow$ Kategori `'Kegiatan'`
- **Penyimpanan:**
  * `sumber` = `'detik.com'`
  * `link_asli` = URL asli berita detik.com
  * Otomatis mencegah duplikasi artikel yang sudah tersimpan di database.
- **Jadwal Cron:** Berjalan otomatis setiap jam **12:00** dan **00:00** (`0 0,12 * * *`).

---

## 🔌 3. API Endpoints

### 1. `GET /api/berita`
Mengambil seluruh daftar berita (Internal + Detik) terurut berdasarkan `tanggal` terbaru (`DESC`).

**Contoh Response:**
```json
{
  "status": "success",
  "total": 2,
  "data": [
    {
      "id": 1,
      "judul": "Festival Gandrung Sewu Banyuwangi Digelar Meriah",
      "deskripsi": "Pertunjukan seni tari khas Banyuwangi kembali menyedot perhatian ribuan wisatawan...",
      "gambar": "https://akcdn.detik.net.id/...",
      "kategori": "Budaya",
      "tanggal": "2026-09-02T10:00:00.000Z",
      "sumber": "detik.com",
      "link_asli": "https://www.detik.com/jatim/..."
    }
  ]
}
```

### 2. `POST /api/berita` (Admin Input Manual)
Menerima payload JSON dari body request. Sistem **OTOMATIS** mengatur nilai `sumber` = `'Lokal Kecamatan'` dan `link_asli` = `null`.

**Body Request JSON:**
```json
{
  "judul": "Kegiatan Kerja Bakti Desa Wulansari",
  "deskripsi": "Warga kecamatan melaksanakan kerja bakti bersama pada hari Minggu.",
  "gambar": "https://example.com/foto-kegiatan.jpg",
  "kategori": "Kegiatan"
}
```

### 3. `POST /api/berita/sync` (Picu Sinkronisasi Manual)
Memicu penarikan RSS detik.com secara langsung (on-demand).
