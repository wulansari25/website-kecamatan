import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaTimes, FaSave, FaListUl, FaSearch } from 'react-icons/fa';

const ManageEdukasi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState(null);

  const handleAddClick = () => {
    setEditingData(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (item) => {
    setEditingData(item);
    setIsModalOpen(true);
  };

  const dataSop = [
    { 
      id: 1, 
      kategori: "Administrasi Kependudukan", 
      layanan: "Perubahan Data dan Pencetakan KK", 
      syarat: "Blangko Permohonan KK\nFotokopi Akta Nikah\nSurat Keterangan Pindah", 
      waktu: "30 Menit", 
      biaya: "Gratis / Tidak dipungut biaya" 
    },
    { 
      id: 2, 
      kategori: "Perizinan & Rekomendasi", 
      layanan: "Rekomendasi SKCK", 
      syarat: "Surat Keterangan Kelurahan\nFotokopi KTP dan KK\nPas Foto 4x6", 
      waktu: "30 Menit", 
      biaya: "Gratis / Tidak dipungut biaya" 
    },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">SOP Layanan Edukasi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola data kategori, persyaratan, waktu, dan biaya pelayanan.</p>
        </div>
        <button onClick={handleAddClick} className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors">
          <FaPlus /> Tambah SOP Baru
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <select className="border border-gray-200 text-sm rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058] w-full md:w-auto">
            <option value="Semua">Semua Kategori</option>
            <option value="Administrasi Kependudukan">Administrasi Kependudukan</option>
            <option value="Perizinan & Rekomendasi">Perizinan & Rekomendasi</option>
          </select>
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Cari layanan..." className="w-full border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]" />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-200 text-[11px] text-gray-500 uppercase tracking-wider">
              <th className="py-4 px-4 font-bold w-12 text-center">No</th>
              <th className="py-4 px-4 font-bold">Kategori & Layanan</th>
              <th className="py-4 px-4 font-bold w-1/3">Syarat Utama</th>
              <th className="py-4 px-4 font-bold text-center">Waktu & Biaya</th>
              <th className="py-4 px-4 font-bold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 font-semibold">
            {dataSop.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 align-top">
                <td className="py-4 px-4 text-center">{index + 1}</td>
                <td className="py-4 px-4">
                  <span className="text-[10px] bg-green-50 text-[#107058] px-2 py-1 rounded font-bold border border-green-100">{item.kategori}</span>
                  <p className="text-gray-900 mt-2">{item.layanan}</p>
                </td>
                <td className="py-4 px-4 text-xs text-gray-500 font-normal">
                  <div className="flex items-start gap-2">
                    <FaListUl className="mt-1 shrink-0 text-gray-400" />
                    <span className="whitespace-pre-line line-clamp-2">{item.syarat}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-xs">
                  <p className="text-orange-600 mb-1 font-bold">⏳ {item.waktu}</p>
                  <p className="text-blue-600 font-bold">💰 {item.biaya}</p>
                </td>
                <td className="py-4 px-4 text-center text-gray-400">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => handleEditClick(item)} className="p-2 hover:text-blue-600 transition-colors bg-white border border-gray-200 rounded shadow-sm"><FaEdit /></button>
                    <button className="p-2 hover:text-red-600 transition-colors bg-white border border-gray-200 rounded shadow-sm"><FaTrashAlt /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden my-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#107058] px-6 py-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-sm">{editingData ? 'Edit SOP Layanan' : 'Tambah SOP Baru'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-green-100 hover:text-white"><FaTimes size={18} /></button>
            </div>
            
            <div className="p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Kategori Layanan</label>
                  <select defaultValue={editingData?.kategori || 'Administrasi Kependudukan'} className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-white font-medium">
                    <option value="Administrasi Kependudukan">Administrasi Kependudukan</option>
                    <option value="Perizinan & Rekomendasi">Perizinan & Rekomendasi</option>
                    <option value="Keterangan Umum">Keterangan Umum</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Nama Layanan (Judul SOP)</label>
                  <input type="text" defaultValue={editingData?.layanan || ''} placeholder="Contoh: Pembuatan e-KTP Baru" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Persyaratan Dokumen</label>
                <textarea rows="5" defaultValue={editingData?.syarat || ''} placeholder="1. Syarat pertama... (Tekan Enter)&#10;2. Syarat kedua..." className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50"></textarea>
                <p className="text-[10px] font-bold text-orange-500 mt-1.5 bg-orange-50 p-2 rounded border border-orange-100">
                  *Penting: Gunakan tombol "Enter" di keyboard untuk memisahkan setiap poin persyaratan agar rapi di halaman warga.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Waktu Penyelesaian</label>
                  <input type="text" defaultValue={editingData?.waktu || ''} placeholder="Contoh: 30 Menit / 1 Hari" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Biaya / Tarif</label>
                  <input type="text" defaultValue={editingData?.biaya || ''} placeholder="Contoh: Gratis" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-xs font-bold text-gray-600 bg-white border border-gray-300 hover:bg-gray-100">Batal</button>
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#107058] hover:bg-[#0a5240] flex items-center gap-2"><FaSave /> Simpan SOP</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEdukasi;