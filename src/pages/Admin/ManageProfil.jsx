import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaListUl } from 'react-icons/fa';

const ManageProfil = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-bwi-dark">Manajemen Profil Kecamatan</h1>
        <p className="text-sm text-gray-500 mt-1">Ubah teks sejarah, visi misi, dan informasi wilayah yang tampil di website publik.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
        <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Sejarah Singkat</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="flex gap-4 bg-gray-50 border-b border-gray-200 p-3 text-gray-600">
            <button className="hover:text-black"><FaBold /></button>
            <button className="hover:text-black"><FaItalic /></button>
            <button className="hover:text-black"><FaUnderline /></button>
          </div>
          <textarea rows="5" className="w-full p-4 focus:outline-none text-gray-700 text-sm leading-relaxed" defaultValue="Kecamatan Banyuwangi merupakan pusat pemerintahan dan jantung dari Kabupaten Banyuwangi. Sejarah panjang mencatat wilayah ini sebagai pusat perdagangan dan budaya sejak era kerajaan Blambangan hingga masa kolonial..."></textarea>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
        <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Visi & Misi</h3>
        <label className="block text-sm font-bold text-[#107058] mb-2">Visi</label>
        <textarea rows="2" className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-[#107058] text-sm text-gray-700 mb-6" defaultValue='"Mewujudkan Kecamatan Banyuwangi yang Mandiri, Sejahtera, Berbudaya, dan Unggul dalam Pelayanan Publik."'></textarea>
        
        <label className="block text-sm font-bold text-[#107058] mb-2">Misi (Format Daftar)</label>
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="flex gap-4 bg-gray-50 border-b border-gray-200 p-3 text-gray-600">
            <button className="hover:text-black"><FaListUl /></button>
          </div>
          <textarea rows="5" className="w-full p-4 focus:outline-none text-gray-700 text-sm leading-relaxed" defaultValue="1. Meningkatkan kualitas pelayanan administrasi terpadu bagi masyarakat.&#13;&#10;2. Mendorong pertumbuhan ekonomi mikro (UMKM).&#13;&#10;3. Menciptakan lingkungan yang bersih dan aman."></textarea>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-md transition-colors">
          Simpan Perubahan Profil
        </button>
      </div>
    </div>
  );
};

export default ManageProfil;