import React from 'react';

const ManageSumberrejo = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-bwi-dark">KONTEN SMILE - Profil Sumberrejo</h1>
        <p className="text-sm text-gray-500 mt-1">Ubah narasi sejarah dan potensi Kelurahan Sumberrejo.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
        <label className="block text-sm font-bold text-[#107058] mb-2">Sejarah & Deskripsi Kelurahan</label>
        <textarea rows="5" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 mb-6" defaultValue="Kelurahan Sumberrejo adalah salah satu wilayah di pusat Kota Banyuwangi yang terkenal dengan potensi UMKM..."></textarea>
        
        <label className="block text-sm font-bold text-[#107058] mb-2">Potensi & Inovasi (Format Daftar)</label>
        <textarea rows="4" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700" defaultValue="1. Sentra Batik Tulis&#13;&#10;2. Pelayanan Publik Digital (SMILE)&#13;&#10;3. Ruang Terbuka Hijau"></textarea>
      </div>

      <div className="flex justify-end">
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-md">
          Simpan Profil Sumberrejo
        </button>
      </div>
    </div>
  );
};

export default ManageSumberrejo;