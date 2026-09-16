import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBold, FaItalic, FaUnderline, FaLink, FaImage } from 'react-icons/fa';

const EditBerita = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Kegiatan');
  const [tanggal, setTanggal] = useState('');
  const [waktu, setWaktu] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState('');
  const [status, setStatus] = useState('Aktif');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAgendaItem, setIsAgendaItem] = useState(false);

  useEffect(() => {
    if (!id) return;

    // Coba fetch dari endpoint Berita terlebih dahulu
    fetch(`http://localhost:5000/api/berita/${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'success' && json.data) {
          const item = json.data;
          setJudul(item.judul || '');
          setKategori(item.kategori || 'Kegiatan');
          if (item.tanggal) {
            const dateObj = new Date(item.tanggal);
            setTanggal(!isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : item.tanggal);
          }
          setDeskripsi(item.deskripsi || '');
          setGambar(item.gambar || '');
          setIsLoading(false);
        } else {
          // Fallback coba fetch dari endpoint Agenda
          fetch(`http://localhost:5000/api/agenda/${id}`)
            .then((res) => res.json())
            .then((agendaJson) => {
              if (agendaJson.status === 'success' && agendaJson.data) {
                const item = agendaJson.data;
                setIsAgendaItem(true);
                setJudul(item.judul || '');
                setKategori('Agenda');
                setTanggal(item.tanggal || '');
                setWaktu(item.waktu || '');
                setLokasi(item.lokasi || '');
                setDeskripsi(item.judul || '');
              }
              setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
        }
      })
      .catch((err) => {
        console.error('Error fetching publication detail:', err);
        setIsLoading(false);
      });
  }, [id]);

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
    if (!judul) {
      alert('Judul publikasi wajib diisi.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (kategori === 'Agenda' || isAgendaItem) {
        const payload = {
          judul,
          tanggal,
          waktu,
          lokasi
        };
        console.log(`🚀 Sending PUT /api/agenda/${id} payload:`, payload);

        const res = await fetch(`http://localhost:5000/api/agenda/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.status === 'success') {
          alert('Perubahan agenda berhasil disimpan!');
          navigate('/admin/berita');
        } else {
          console.error('❌ Server API Error:', res.status, json);
          alert(json.message || `Gagal menyimpan perubahan agenda (HTTP ${res.status}).`);
        }
      } else {
        const payload = {
          judul,
          deskripsi,
          gambar,
          kategori,
          tanggal
        };
        console.log(`🚀 Sending PUT /api/berita/${id} payload:`, {
          ...payload,
          gambarSize: gambar ? `${Math.round(gambar.length / 1024)} KB` : 'No Image'
        });

        const res = await fetch(`http://localhost:5000/api/berita/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const json = await res.json().catch(() => ({}));
        if (res.ok && json.status === 'success') {
          alert('Perubahan publikasi berhasil disimpan!');
          navigate('/admin/berita');
        } else {
          console.error('❌ Server API Error:', res.status, json);
          alert(json.message || `Gagal menyimpan perubahan publikasi (HTTP ${res.status}).`);
        }
      }
    } catch (err) {
      console.error('❌ Client/Network Catch Error:', err);
      alert('Terjadi kesalahan saat menyimpan perubahan: ' + (err.message || 'Cek konsol browser/terminal.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full bg-[#f8f9fa] min-h-full p-10 text-center text-gray-500 font-medium">
        Memuat data publikasi...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin/berita" className="text-gray-500 hover:text-[#107058] transition-colors"><FaArrowLeft /></Link>
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          Informasi <span className="text-gray-400 font-normal">&gt;</span> <span className="text-[#107058]">Edit Publikasi</span>
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
                  <option value="Kegiatan">Kegiatan</option>
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
                  placeholder="Cth: Balai Kelurahan Kepatihan & Tamanbaru" 
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
            <div className="bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm mb-4">
              <img 
                src={gambar || "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop"} 
                alt="Preview" 
                className="w-full h-40 object-cover rounded-lg" 
              />
            </div>
            <button 
              type="button" 
              onClick={() => fileInputRef.current?.click()} 
              className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm"
            >
              <FaImage /> Ganti Foto Baru
            </button>
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
                className="w-full py-3 rounded-xl text-sm font-bold text-white bg-[#01352c] hover:bg-[#0a5240] transition-colors shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
              <Link to="/admin/berita" className="w-full py-3 text-center rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">Batal</Link>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default EditBerita;