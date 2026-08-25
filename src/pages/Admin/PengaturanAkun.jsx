import React from 'react';
import { FaUserCircle, FaLock, FaCamera } from 'react-icons/fa';

const PengaturanAkun = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Pengaturan Akun</h1>
        <p className="text-sm text-gray-500 mt-1">Kelola informasi personal dan keamanan akun Anda.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* PANEL KIRI: Informasi Profil */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
            <FaUserCircle className="text-[#107058] text-xl" /> Profil Pengguna
          </h2>

          {/* Bagian Foto Profil */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 shadow-sm"
              />
              <button className="absolute bottom-0 right-0 bg-[#107058] text-white p-2 rounded-full border-2 border-white hover:bg-[#0a5240] transition-colors shadow-sm" title="Ubah Foto">
                <FaCamera className="text-xs" />
              </button>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Fitri Ayu Wulan</h3>
              <span className="inline-block bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-md text-[10px] font-bold mt-1">
                SUPER ADMIN
              </span>
            </div>
          </div>

          {/* Form Profil */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" defaultValue="Fitri Ayu Wulan" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email / Username</label>
                <input type="text" defaultValue="admin.bwi@banyuwangikab.go.id" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">No. WhatsApp</label>
                <input type="text" defaultValue="081234567890" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700" />
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
                Simpan Perubahan Profil
              </button>
            </div>
          </div>
        </div>

        {/* PANEL KANAN: Ubah Kata Sandi */}
        <div className="w-full lg:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 self-start">
          <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
            <FaLock className="text-[#107058] text-lg" /> Ubah Kata Sandi
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kata Sandi Saat Ini</label>
              <input type="password" placeholder="Masukkan sandi saat ini" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700" />
            </div>
            
            <div className="border-t border-gray-100 pt-5 mt-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Kata Sandi Baru</label>
              <input type="password" placeholder="Masukkan sandi baru" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 mb-5" />
              
              <label className="block text-sm font-bold text-gray-700 mb-2">Konfirmasi Sandi Baru</label>
              <input type="password" placeholder="Ulangi sandi baru" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700" />
            </div>

            <div className="pt-4">
              <button className="w-full bg-gray-800 hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
                Perbarui Kata Sandi
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PengaturanAkun;