import { getDb } from './config/db.js';

export async function runSeeder() {
  console.log('🌱 Memulai proses seeding database MySQL...');
  const db = await getDb();

  try {
    // 1. Seed Tabel Admin
    const adminCheck = await db.get('SELECT COUNT(*) as count FROM admin');
    if (adminCheck.count === 0) {
      await db.run(`
        INSERT INTO admin (nama_lengkap, username, email)
        VALUES (?, ?, ?)
      `, ['Kecamatan Banyuwangi', 'kecamatanbanyuwangi@gmail.com', 'kecamatanbanyuwangi@gmail.com']);
      console.log('✅ Seeding Admin selesai: 1 akun admin berhasil ditambahkan.');
    } else {
      console.log('ℹ️ Tabel Admin sudah terisi data.');
    }

    // 2. Seed Tabel Berita
    const beritaCheck = await db.get('SELECT COUNT(*) as count FROM berita');
    if (beritaCheck.count === 0) {
      const sampleBerita = [
        {
          judul: 'Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar',
          deskripsi: 'Musyawarah Perencanaan Pembangunan (Musrenbang) tingkat Kecamatan Banyuwangi tahun 2026 telah resmi digelar. Kegiatan ini membahas berbagai usulan pembangunan prioritas dari 18 kelurahan untuk meningkatkan kesejahteraan masyarakat dan infrastruktur publik.',
          gambar: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
          kategori: 'Kegiatan',
          tanggal: '2026-07-22 09:00:00',
          sumber: 'Humas Kecamatan',
          link_asli: null
        },
        {
          judul: 'Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan',
          deskripsi: 'Pemberitahuan kepada seluruh warga masyarakat Kecamatan Banyuwangi mengenai jadwal layanan jemput bola perekaman e-KTP. Layanan ini khusus membantu warga lansia, difabel, dan pemula berusia 17 tahun.',
          gambar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
          kategori: 'Pengumuman',
          tanggal: '2026-07-24 08:00:00',
          sumber: 'Dukcapil Kecamatan',
          link_asli: null
        },
        {
          judul: 'Pelatihan Digital Marketing dan Pemberdayaan UMKM Lokal',
          deskripsi: 'Kecamatan Banyuwangi menggelar pelatihan digital marketing untuk 50 pelaku UMKM lokal guna memperluas jangkauan pasar online melalui e-commerce dan media sosial.',
          gambar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
          kategori: 'UMKM',
          tanggal: '2026-07-15 10:00:00',
          sumber: 'Seksi Pemberdayaan',
          link_asli: null
        },
        {
          judul: 'Pekan Seni dan Festival Budaya Blambangan Banyuwangi',
          deskripsi: 'Pemerintah Kecamatan Banyuwangi menyelenggarakan kejuaraan tari tradisional dan pameran seni budaya Blambangan guna melestarikan kearifan lokal di kalangan generasi muda.',
          gambar: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop',
          kategori: 'Budaya',
          tanggal: '2026-07-18 19:00:00',
          sumber: 'Seksi Kebudayaan',
          link_asli: null
        },
        {
          judul: 'Posyandu Integrasi Layanan Primer (ILP) Serentak',
          deskripsi: 'Pelaksanaan Posyandu ILP serentak di seluruh kelurahan se-Kecamatan Banyuwangi untuk meningkatkan kesehatan ibu, anak, dan pencegahan stunting.',
          gambar: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
          kategori: 'Pelayanan',
          tanggal: '2026-07-20 08:30:00',
          sumber: 'Puskesmas & Kecamatan',
          link_asli: null
        }
      ];

      for (const item of sampleBerita) {
        await db.run(`
          INSERT INTO berita (judul, deskripsi, gambar, kategori, tanggal, sumber, link_asli)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [item.judul, item.deskripsi, item.gambar, item.kategori, item.tanggal, item.sumber, item.link_asli]);
      }
      console.log(`✅ Seeding Berita selesai: ${sampleBerita.length} berita contoh ditambahkan.`);
    } else {
      console.log('ℹ️ Tabel Berita sudah terisi data.');
    }

    // 3. Seed Tabel Agenda
    const agendaCheck = await db.get('SELECT COUNT(*) as count FROM agenda');
    if (agendaCheck.count === 0) {
      const sampleAgenda = [
        {
          judul: 'Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan',
          tanggal: '2026-07-24',
          tanggal_tampil: '24 JUL',
          waktu: '08.00 - 14.00 WIB',
          lokasi: 'Balai Kelurahan Kepatihan & Tamanbaru'
        },
        {
          judul: 'Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar',
          tanggal: '2026-07-22',
          tanggal_tampil: '22 JUL',
          waktu: '09.00 - 13.00 WIB',
          lokasi: 'Aula Kecamatan Banyuwangi'
        },
        {
          judul: 'Pembagian Bibit Tanaman Produktif untuk Warga',
          tanggal: '2026-07-23',
          tanggal_tampil: '23 JUL',
          waktu: '09.00 - Selesai',
          lokasi: 'Halaman Pendopo Kecamatan Banyuwangi'
        },
        {
          judul: 'Rapat Koordinasi Evaluasi Pelayanan Publik Kelurahan',
          tanggal: '2026-07-30',
          tanggal_tampil: '30 JUL',
          waktu: '19.00 - Selesai',
          lokasi: 'Aula Kecamatan Banyuwangi'
        }
      ];

      for (const item of sampleAgenda) {
        await db.run(`
          INSERT INTO agenda (judul, tanggal, tanggal_tampil, waktu, lokasi)
          VALUES (?, ?, ?, ?, ?)
        `, [item.judul, item.tanggal, item.tanggal_tampil, item.waktu, item.lokasi]);
      }
      console.log(`✅ Seeding Agenda selesai: ${sampleAgenda.length} agenda contoh ditambahkan.`);
    } else {
      console.log('ℹ️ Tabel Agenda sudah terisi data.');
    }

    // 4. Seed Tabel Informasi (Profil & Visi Misi)
    const infoCheck = await db.get('SELECT COUNT(*) as count FROM informasi');
    if (infoCheck.count === 0) {
      const sampleInformasi = [
        {
          kunci: 'visi_misi',
          judul: 'Visi & Misi Kecamatan Banyuwangi',
          konten: 'Terwujudnya pelayanan publik yang berkualitas, transparan, dan akuntabel demi terwujudnya masyarakat Kecamatan Banyuwangi yang sejahtera dan berdaya saing.'
        },
        {
          kunci: 'profil_singkat',
          judul: 'Profil Singkat Kecamatan Banyuwangi',
          konten: 'Kecamatan Banyuwangi merupakan pusat pemerintahan Kabupaten Banyuwangi yang membawahi 18 kelurahan dengan komitmen melayani masyarakat dengan integritas.'
        }
      ];

      for (const info of sampleInformasi) {
        await db.run(`
          INSERT INTO informasi (kunci, judul, konten)
          VALUES (?, ?, ?)
        `, [info.kunci, info.judul, info.konten]);
      }
      console.log(`✅ Seeding Informasi selesai: ${sampleInformasi.length} informasi profil ditambahkan.`);
    } else {
      console.log('ℹ️ Tabel Informasi sudah terisi data.');
    }

    console.log('🎉 Database seeding berhasil diselesaikan dengan sukses!');
  } catch (error) {
    console.error('❌ Gagal menjalankan database seeder:', error);
  }
}

// Jika dijalankan langsung via node seed.js
if (process.argv[1] && process.argv[1].endsWith('seed.js')) {
  runSeeder().then(() => process.exit(0));
}
