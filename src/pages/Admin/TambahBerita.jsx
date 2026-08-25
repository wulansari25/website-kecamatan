import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBold, FaItalic, FaUnderline, FaLink } from 'react-icons/fa';

const TambahBerita = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin/berita" className="text-gray-500 hover:text-[#107058] transition-colors"><FaArrowLeft /></Link>
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          Berita <span className="text-gray-400 font-normal">&gt;</span> <span className="text-[#107058]">Tambah Berita</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#107058] mb-2">Judul Berita</label>
            <input type="text" defaultValue="Musrenbang Kecamatan Banyuwangi" className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-[#107058] shadow-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Kategori</label>
              <select className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-[#107058] shadow-sm">
                <option>Kegiatan</option>
                <option>Pengumuman</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Tanggal</label>
              <input type="date" defaultValue="2026-07-25" className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-[#107058] shadow-sm text-gray-600" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#107058] mb-2">Lokasi</label>
            <select className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-[#107058] shadow-sm">
              <option>Kelurahan Temenggungan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#107058] mb-2">Isi Berita</label>
            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="flex items-center gap-4 bg-gray-50 border-b border-gray-200 p-3 text-gray-600">
                <button className="hover:text-black"><FaBold /></button>
                <button className="hover:text-black"><FaItalic /></button>
                <button className="hover:text-black"><FaUnderline /></button>
                <button className="hover:text-black"><FaLink /></button>
              </div>
              <textarea rows="6" className="w-full p-4 focus:outline-none text-gray-700" defaultValue="Musrenbang Kecamatan Banyuwangi dilaksanakan hari ini di Aula Kecamatan..."></textarea>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-72 space-y-8">
          <div>
            <label className="block text-sm font-bold text-[#107058] mb-2">Foto Utama</label>
            <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm mb-3">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop" alt="Preview" className="w-full h-32 object-cover rounded-md" />
            </div>
            <button className="w-full border border-gray-300 bg-white text-gray-700 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 shadow-sm">Ganti Foto</button>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#107058] mb-2">Status Publikasi</label>
            <select className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-[#107058] shadow-sm mb-12">
              <option>Aktif</option>
              <option>Draft</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-6">
            <Link to="/admin/berita" className="px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 shadow-sm">Batal</Link>
            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#01352c] hover:bg-[#0a5240] shadow-md">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahBerita;