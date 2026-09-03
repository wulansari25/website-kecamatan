import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBold, FaItalic, FaUnderline, FaLink, FaImage, FaPlus } from 'react-icons/fa';

const TambahBerita = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Kegiatan');
  const [tanggal, setTanggal] = useState(new Date().toISOString().split('T')[0]);
  const [waktu, setWaktu] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState('');
  const [status, setStatus] = useState('Aktif');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGambar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!judul || !deskripsi) {
      alert('Judul dan isi berita/keterangan wajib diisi.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (kategori === 'Agenda') {
        const payload = {
          judul,
          tanggal,
          waktu: waktu || '08.00 - Selesai',
          lokasi
        };
        console.log('🚀 Sending POST /api/agenda payload:', payload);

        const res = await fetch('http://localhost:5000/api/agenda', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.status === 'success') {
          alert('Agenda baru berhasil diterbitkan!');
          navigate('/admin/berita');
        } else {
          console.error('❌ Server API Error:', res.status, json);
          alert(json.message || `Gagal menerbitkan agenda (HTTP ${res.status}).`);
        }
      } else {
        const payload = {
          judul,
          deskripsi,
          gambar,
          kategori,
          tanggal,
          sumber: 'Lokal Kecamatan'
        };
        console.log('🚀 Sending POST /api/berita payload:', {
          ...payload,
          gambarSize: gambar ? `${Math.round(gambar.length / 1024)} KB` : 'No Image'
        });

        const res = await fetch('http://localhost:5000/api/berita', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const json = await res.json().catch(() => ({}));
        if (res.ok && json.status === 'success') {
          alert('Publikasi berhasil diterbitkan!');
          navigate('/admin/berita');
        } else {
          console.error('❌ Server API Error:', res.status, json);
          alert(json.message || `Gagal menerbitkan publikasi (HTTP ${res.status}).`);
        }
      }
    } catch (err) {
      console.error('❌ Client/Network Catch Error:', err);
      alert('Terjadi kesalahan saat menyimpan publikasi: ' + (err.message || 'Cek konsol browser/terminal.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin/berita" className="text-gray-500 hover:text-[#107058] transition-colors"><FaArrowLeft /></Link>
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          Informasi <span className="text-gray-400 font-normal">&gt;</span> <span className="text-[#107058]">Tambah Publikasi</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Judul Publikasi</label>
              <input 
                type="text" 
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Masukkan judul berita atau agenda..." 
                className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm font-semibold text-gray-800" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#107058] mb-2">Jenis / Kategori</label>
                <select 
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm text-gray-700"
                >
                  <option value="Kegiatan">Kegiatan (Berita)</option>
                  <option value="Pengumuman">Pengumuman</option>
                  <option value="Pelayanan">Pelayanan</option>
                  <option value="Budaya">Budaya</option>
                  <option value="UMKM">UMKM</option>
                  <option value="Agenda">Agenda Terdekat (Tampil di Sidebar Kanan)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#107058] mb-2">Tanggal Pelaksanaan / Publikasi</label>
                <input 
                  type="date" 
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm text-gray-700" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-bold text-orange-600 mb-2">Waktu (Jam)</label>
                <input 
                  type="text" 
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                  placeholder="Cth: 08.00 - 14.00 WIB" 
                  className="w-full border border-gray-200 rounded-lg p-3 bg-orange-50/30 focus:outline-none focus:border-orange-500 shadow-sm text-gray-700" 
                />
                <p className="text-[10px] text-gray-400 mt-1">Kosongi jika ini adalah berita biasa.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-orange-600 mb-2">Lokasi Kegiatan</label>
                <input 
                  type="text" 
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Cth: Aula Kecamatan Banyuwangi" 
                  className="w-full border border-gray-200 rounded-lg p-3 bg-orange-50/30 focus:outline-none focus:border-orange-500 shadow-sm text-gray-700" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Isi Berita / Keterangan Agenda</label>
              <div className="border border-gray-200 rounded-lg bg-gray-50 overflow-hidden shadow-sm">
                <div className="flex items-center gap-4 bg-white border-b border-gray-200 p-3 text-gray-600">
                  <button type="button" className="hover:text-[#107058] transition-colors"><FaBold /></button>
                  <button type="button" className="hover:text-[#107058] transition-colors"><FaItalic /></button>
                  <button type="button" className="hover:text-[#107058] transition-colors"><FaUnderline /></button>
                  <button type="button" className="hover:text-[#107058] transition-colors"><FaLink /></button>
                </div>
                <textarea 
                  rows="8" 
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Ketik isi berita atau detail acara di sini..." 
                  className="w-full p-4 focus:outline-none text-gray-700 bg-gray-50 leading-relaxed"
                ></textarea>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">*1-2 kalimat pertama akan otomatis dijadikan deskripsi singkat di halaman utama.</p>
            </div>

          </div>
        </div>

        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-[#107058] mb-3">Foto / Thumbnail</label>
            <input 
              type="file" 
              ref={fileInputRef} 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden" 
            />
            {gambar ? (
              <div className="relative bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm mb-4">
                <img src={gambar} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
                <button 
                  type="button" 
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 w-full text-xs font-bold text-[#107058] bg-gray-50 hover:bg-gray-100 py-1.5 rounded-lg border border-gray-200"
                >
                  Ganti Foto
                </button>
              </div>
            ) : (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center py-10 mb-4 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FaImage className="text-4xl text-gray-300 mb-2" />
                <p className="text-xs text-gray-500 font-medium">Klik untuk upload foto</p>
              </div>
            )}
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-[#107058] mb-3">Status Publikasi</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm text-gray-700 mb-6"
            >
              <option value="Aktif">Publish (Tampilkan)</option>
              <option value="Draft">Draft (Sembunyikan)</option>
            </select>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl text-sm font-bold text-white bg-[#01352c] hover:bg-[#0a5240] transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <FaPlus /> {isSubmitting ? 'Menyimpan...' : 'Terbitkan Publikasi'}
              </button>
              <Link to="/admin/berita" className="w-full py-3 text-center rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">Batal</Link>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default TambahBerita;