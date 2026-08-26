import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBold, FaItalic, FaUnderline, FaLink, FaImage } from 'react-icons/fa';

const EditBerita = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin/berita" className="text-gray-500 hover:text-[#107058] transition-colors"><FaArrowLeft /></Link>
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          Informasi <span className="text-gray-400 font-normal">&gt;</span> <span className="text-[#107058]">Edit Publikasi</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* KOLOM KIRI (Form Utama) */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Judul Publikasi</label>
              <input type="text" defaultValue="Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm font-semibold text-gray-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#107058] mb-2">Jenis / Kategori</label>
                <select defaultValue="Pengumuman" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm text-gray-700">
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
                <input type="date" defaultValue="2026-07-26" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm text-gray-700" />
              </div>
            </div>

            {/* TAMBAHAN BARU: Waktu dan Lokasi (Sinkron dengan Modal Frontend) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-bold text-orange-600 mb-2">Waktu (Jam)</label>
                <input type="text" defaultValue="08.00 - 14.00 WIB" placeholder="Cth: 08.00 - Selesai" className="w-full border border-gray-200 rounded-lg p-3 bg-orange-50/30 focus:outline-none focus:border-orange-500 shadow-sm text-gray-700" />
                <p className="text-[10px] text-gray-400 mt-1">Kosongi jika ini adalah berita biasa.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-orange-600 mb-2">Lokasi Kegiatan</label>
                <input type="text" defaultValue="Balai Kelurahan Kepatihan & Tamanbaru" placeholder="Cth: Aula Kecamatan" className="w-full border border-gray-200 rounded-lg p-3 bg-orange-50/30 focus:outline-none focus:border-orange-500 shadow-sm text-gray-700" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Isi Berita / Keterangan Agenda</label>
              <div className="border border-gray-200 rounded-lg bg-gray-50 overflow-hidden shadow-sm">
                <div className="flex items-center gap-4 bg-white border-b border-gray-200 p-3 text-gray-600">
                  <button className="hover:text-[#107058] transition-colors"><FaBold /></button>
                  <button className="hover:text-[#107058] transition-colors"><FaItalic /></button>
                  <button className="hover:text-[#107058] transition-colors"><FaUnderline /></button>
                  <button className="hover:text-[#107058] transition-colors"><FaLink /></button>
                </div>
                <textarea rows="8" className="w-full p-4 focus:outline-none text-gray-700 bg-gray-50 leading-relaxed" defaultValue="Pemberitahuan kepada seluruh warga Kecamatan Banyuwangi mengenai jadwal layanan jemput bola perekaman e-KTP minggu ini. Diharapkan membawa fotokopi KK..."></textarea>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">*1-2 kalimat pertama akan otomatis dijadikan deskripsi singkat di halaman utama.</p>
            </div>

          </div>
        </div>

        {/* KOLOM KANAN (Sidebar Form) */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-[#107058] mb-3">Foto / Thumbnail</label>
            <div className="bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm mb-4">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop" alt="Preview" className="w-full h-40 object-cover rounded-lg" />
            </div>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
              <FaImage /> Ganti Foto Baru
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-[#107058] mb-3">Status Publikasi</label>
            <select defaultValue="Aktif" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] shadow-sm text-gray-700 mb-6">
              <option value="Aktif">Publish (Tampilkan)</option>
              <option value="Draft">Draft (Sembunyikan)</option>
            </select>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button className="w-full py-3 rounded-xl text-sm font-bold text-white bg-[#01352c] hover:bg-[#0a5240] transition-colors shadow-lg">Simpan Perubahan</button>
              <Link to="/admin/berita" className="w-full py-3 text-center rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">Batal</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EditBerita;