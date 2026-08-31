import React, { useState } from 'react';
import { FaSave, FaHistory, FaChartBar, FaTasks, FaHandshake, FaBold, FaItalic, FaUnderline } from 'react-icons/fa';

const ManageProfil = () => {
  const [activeTab, setActiveTab] = useState('sejarah');

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Profil Kecamatan</h1>
        <p className="text-sm text-gray-500 mt-1">Kelola Sejarah, Statistik Wilayah, Tugas Fungsi, dan Maklumat Pelayanan.</p>
      </div>

      <div className="flex overflow-x-auto border-b border-gray-200 mb-6 bg-white rounded-t-xl px-2 pt-2 shadow-sm">
        {[
          { id: 'sejarah', label: 'Sejarah Singkat', icon: <FaHistory /> },
          { id: 'tugas', label: 'Tugas & Fungsi', icon: <FaTasks /> },
          { id: 'statistik', label: 'Statistik Wilayah', icon: <FaChartBar /> },
          { id: 'maklumat', label: 'Maklumat Pelayanan', icon: <FaHandshake /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id ? 'border-[#107058] text-[#107058]' : 'border-transparent text-gray-500 hover:text-[#107058] hover:bg-gray-50'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'sejarah' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in-up">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Sejarah Singkat (Halaman Profil)</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="flex gap-4 bg-gray-50 border-b border-gray-200 p-3 text-gray-600">
              <button className="hover:text-black"><FaBold /></button>
              <button className="hover:text-black"><FaItalic /></button>
              <button className="hover:text-black"><FaUnderline /></button>
            </div>
            <textarea rows="6" className="w-full p-4 focus:outline-none text-gray-700 text-sm leading-relaxed bg-white" defaultValue="Kecamatan Banyuwangi merupakan salah satu kecamatan tertua di Kabupaten Banyuwangi. Wilayah ini memiliki peran penting sejak masa Kerajaan Blambangan hingga menjadi pusat pemerintahan Kabupaten Banyuwangi saat ini..."></textarea>
          </div>
        </div>
      )}

      {activeTab === 'tugas' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in-up">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Kelola Tugas & Fungsi</h3>
          
          <div className="mb-8">
            <label className="block text-sm font-bold text-[#107058] mb-2">Deskripsi Utama</label>
            <textarea rows="3" defaultValue="Kecamatan Banyuwangi melaksanakan sebagian kewenangan Bupati dalam rangka meningkatkan koordinasi penyelenggaraan pemerintahan, pelayanan publik, dan pemberdayaan masyarakat." className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:border-[#107058] bg-gray-50 leading-relaxed"></textarea>
          </div>

          <label className="block text-sm font-bold text-[#107058] mb-4">4 Poin Layanan Utama</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
              <input type="text" defaultValue="Penyelenggaraan Pemerintahan" className="w-full font-bold text-gray-800 mb-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#107058] pb-1" />
              <textarea rows="2" defaultValue="Melakukan urusan pemerintahan umum sesuai kebijakan Bupati." className="w-full bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-600 focus:outline-none focus:border-[#107058]"></textarea>
            </div>
            <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
              <input type="text" defaultValue="Pelayanan Publik" className="w-full font-bold text-gray-800 mb-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#107058] pb-1" />
              <textarea rows="2" defaultValue="Memberikan pelayanan administrasi, informasi dan layanan kepada masyarakat." className="w-full bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-600 focus:outline-none focus:border-[#107058]"></textarea>
            </div>
            <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
              <input type="text" defaultValue="Pemberdayaan Masyarakat" className="w-full font-bold text-gray-800 mb-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#107058] pb-1" />
              <textarea rows="2" defaultValue="Mendorong partisipasi dan kemandirian masyarakat dalam pembangunan." className="w-full bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-600 focus:outline-none focus:border-[#107058]"></textarea>
            </div>
            <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
              <input type="text" defaultValue="Pembinaan Kelurahan" className="w-full font-bold text-gray-800 mb-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#107058] pb-1" />
              <textarea rows="2" defaultValue="Membina dan mengawasi penyelenggaraan pemerintahan kelurahan di wilayahnya." className="w-full bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-600 focus:outline-none focus:border-[#107058]"></textarea>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'statistik' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in-up">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Angka Statistik Wilayah</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Jumlah Penduduk</label>
              <input type="text" defaultValue="85.421" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Jumlah Kelurahan</label>
              <input type="text" defaultValue="18" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Jumlah RW</label>
              <input type="text" defaultValue="72" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Jumlah RT</label>
              <input type="text" defaultValue="470" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Luas Wilayah (KM²)</label>
              <input type="text" defaultValue="32" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'maklumat' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in-up">
           <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Maklumat Pelayanan</h3>
           <label className="block text-sm font-bold text-[#107058] mb-2">Teks Maklumat</label>
            <textarea rows="4" defaultValue='"Kami berkomitmen memberikan pelayanan yang profesional, transparan, cepat, tepat dan bebas pungutan kepada masyarakat dengan mengedepankan integritas dan inovasi."' className="w-full border border-gray-300 rounded-lg p-4 text-sm font-serif italic text-gray-700 focus:outline-none focus:border-[#107058] bg-gray-50 leading-relaxed"></textarea>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-8 py-3 rounded-lg text-sm font-bold flex items-center gap-2 shadow-md transition-colors">
          <FaSave /> Simpan Perubahan Profil
        </button>
      </div>

    </div>
  );
};

export default ManageProfil;