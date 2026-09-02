import Parser from 'rss-parser';
import { getDb } from '../config/db.js';

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent'],
      ['enclosure', 'enclosure']
    ]
  }
});

const RSS_DETIK_JATIM = 'https://detik.com/jatim/rss';

/**
 * Membersihkan tag HTML dari teks deskripsi RSS
 */
function cleanText(htmlContent) {
  if (!htmlContent) return '';
  return htmlContent
    .replace(/<img[^>]*>/gi, '') // Hapus tag img
    .replace(/<[^>]+>/g, '')    // Hapus tag HTML lainnya
    .replace(/\s+/g, ' ')       // Rapikan whitespace
    .trim();
}

/**
 * Ekstraksi URL Gambar dari item RSS (enclosure / media / tag img dalam description)
 */
function extractImageUrl(item) {
  if (item.enclosure && item.enclosure.url) {
    return item.enclosure.url;
  }
  if (item.mediaContent && item.mediaContent.$ && item.mediaContent.$.url) {
    return item.mediaContent.$.url;
  }
  if (item.description) {
    const match = item.description.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

/**
 * Penentuan Kategori Otomatis berdasarkan Kata Kunci
 * 1. Budaya: festival, tari, karnaval, wisata, tradisi, seni, budaya, sejarah
 * 2. UMKM: pasar, umkm, usaha, ekonomi, pedagang, harga, investasi, permodalan, bisnis
 * 3. Pelayanan: ktp, kk, dukcapil, puskesmas, posyandu, administrasi, bansos, bpjs, rumah sakit, izin
 * 4. Pengumuman: edaran resmi, bupati banyuwangi, pemkab banyuwangi, penutupan jalan, seleksi, pemadaman, waspada cuaca
 * 5. Default -> 'Kegiatan'
 */
export function determineCategory(title, description) {
  const text = `${title} ${description}`.toLowerCase();

  const budayaKeywords = ['festival', 'tari', 'karnaval', 'wisata', 'tradisi', 'seni', 'budaya', 'sejarah'];
  const umkmKeywords = ['pasar', 'umkm', 'usaha', 'ekonomi', 'pedagang', 'harga', 'investasi', 'permodalan', 'bisnis'];
  const pelayananKeywords = ['ktp', 'kk', 'dukcapil', 'puskesmas', 'posyandu', 'administrasi', 'bansos', 'bpjs', 'rumah sakit', 'izin'];
  const pengumumanKeywords = ['edaran resmi', 'bupati banyuwangi', 'pemkab banyuwangi', 'penutupan jalan', 'seleksi', 'pemadaman', 'waspada cuaca'];

  if (budayaKeywords.some(kw => text.includes(kw))) {
    return 'Budaya';
  }
  if (umkmKeywords.some(kw => text.includes(kw))) {
    return 'UMKM';
  }
  if (pelayananKeywords.some(kw => text.includes(kw))) {
    return 'Pelayanan';
  }
  if (pengumumanKeywords.some(kw => text.includes(kw))) {
    return 'Pengumuman';
  }
  return 'Kegiatan';
}

/**
 * Fungsi utama Scraping RSS detik.com
 */
export async function scrapeDetikBanyuwangi() {
  console.log(`[SCRAPER] 🔄 Memulai penarikan RSS detik.com (${RSS_DETIK_JATIM})...`);
  const db = await getDb();
  let insertedCount = 0;
  let skippedCount = 0;

  try {
    const feed = await parser.parseURL(RSS_DETIK_JATIM);
    console.log(`[SCRAPER] 📡 Berhasil mengunduh RSS. Total item: ${feed.items.length}`);

    for (const item of feed.items) {
      const judul = item.title ? item.title.trim() : '';
      const rawDesc = item.description || item.content || '';
      const deskripsi = cleanText(rawDesc);
      const linkAsli = item.link || item.guid || null;

      // 1. FILTER: HANYA ambil berita yang judul atau deskripsinya mengandung "Banyuwangi"
      const fullText = `${judul} ${deskripsi}`.toLowerCase();
      if (!fullText.includes('banyuwangi')) {
        skippedCount++;
        continue;
      }

      // 2. Cek apakah berita sudah ada di DB (berdasarkan link_asli atau judul)
      const existing = await db.get(
        `SELECT id FROM berita WHERE link_asli = ? OR judul = ?`,
        [linkAsli, judul]
      );

      if (existing) {
        skippedCount++;
        continue; // Lewati jika sudah pernah disimpan
      }

      // 3. Kategori Otomatis
      const kategori = determineCategory(judul, deskripsi);

      // 4. URL Gambar & Tanggal
      const gambar = extractImageUrl(item);
      const tanggal = item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString();

      // 5. Simpan ke database
      await db.run(
        `INSERT INTO berita (judul, deskripsi, gambar, kategori, tanggal, sumber, link_asli)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [judul, deskripsi, gambar, kategori, tanggal, 'detik.com', linkAsli]
      );

      insertedCount++;
      console.log(`[SCRAPER] ➕ Berita disimpan: "${judul}" [Kategori: ${kategori}]`);
    }

    console.log(`[SCRAPER] ✅ Selesai. Disimpan: ${insertedCount}, Dilewati: ${skippedCount}`);
    return { success: true, insertedCount, skippedCount };
  } catch (error) {
    console.error(`[SCRAPER] ❌ Gagal melakukan scraping RSS:`, error.message);
    throw error;
  }
}
