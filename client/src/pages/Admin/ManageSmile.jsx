import React from 'react';
import { FaLink } from 'react-icons/fa';

const ManageSmile = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-bwi-dark">Pengaturan Tautan SMILE</h1>
        <p className="text-sm text-gray-500 mt-1">Ubah URL tujuan untuk layanan eksternal yang ada di halaman SMILE.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 flex items-center gap-2"><FaLink className="text-[#107058]" /> Tautan Smart Kampung</h3>
          <p className="text-xs text-gray-500 mb-4">Pengunjung akan diarahkan ke link ini saat menekan card Smart Kampung.</p>
          <input type="text" defaultValue="https://smartkampung.banyuwangikab.go.id" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 mb-6" />
          <button className="w-full bg-[#107058] hover:bg-[#0a5240] text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow transition-colors">
            Perbarui Tautan Smart Kampung
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 flex items-center gap-2"><FaLink className="text-[#107058]" /> Tautan JDIH Hukum</h3>
          <p className="text-xs text-gray-500 mb-4">Pengunjung akan diarahkan ke link ini saat menekan card JDIH.</p>
          <input type="text" defaultValue="https://jdih.banyuwangikab.go.id" className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 mb-6" />
          <button className="w-full bg-[#107058] hover:bg-[#0a5240] text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow transition-colors">
            Perbarui Tautan JDIH
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSmile;