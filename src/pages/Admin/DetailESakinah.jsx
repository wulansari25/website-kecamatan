import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaPlus } from 'react-icons/fa';

const DetailESakinah = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin/esakinah" className="text-gray-500 hover:text-[#107058] transition-colors"><FaArrowLeft /></Link>
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          Pengajuan E-Sakinah <span className="text-gray-400 font-normal">&gt;</span> <span className="text-[#107058]">Detail</span>
        </h1>
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-4">Informasi Pemohon</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-[#FAF4EB] p-8 rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full text-sm text-gray-700 font-medium">
            <tbody>
              <tr className="border-b border-gray-200/50"><td className="py-5 w-1/3 text-gray-800">Nama</td><td className="py-5 font-bold text-gray-900">: Muhammad</td></tr>
              <tr className="border-b border-gray-200/50"><td className="py-5 text-gray-800">Nama Pasangan</td><td className="py-5 font-bold text-gray-900">: Kurniawati</td></tr>
              <tr className="border-b border-gray-200/50"><td className="py-5 text-gray-800">NIK</td><td className="py-5 font-bold text-gray-900">: 362358302101</td></tr>
              <tr className="border-b border-gray-200/50"><td className="py-5 text-gray-800">No WhatsApp</td><td className="py-5 font-bold text-gray-900">: 085899966146</td></tr>
              <tr className="border-b border-gray-200/50"><td className="py-5 text-gray-800">Tanggal Pengajuan</td><td className="py-5 font-bold text-gray-900">: 22 Agustus 2026</td></tr>
              <tr className="border-b border-gray-200/50">
                <td className="py-5 text-gray-800">Status</td>
                <td className="py-5">: <span className="inline-block ml-1 bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1.5 rounded-md text-[10px] font-bold">Menunggu Verifikasi</span></td>
              </tr>
              <tr><td className="py-5 align-top text-gray-800">Catatan Admin</td><td className="py-5 align-top font-bold text-gray-900">: -</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
          <h3 className="font-bold text-gray-800 mb-6">Dokumen Persyaratan</h3>
          
          <div className="space-y-4 flex-grow">
            {["KTP Pemohon", "KTP Pasangan", "Akte Kelahiran", "KTP Wali Nikah", "KK Wali Nikah"].map((dokumen, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white p-1 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 p-1.5 rounded-full"><FaCheckCircle className="text-green-500 text-lg" /></div>
                  <span className="text-sm font-bold text-gray-700">{dokumen}</span>
                </div>
                <button className="text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
                  Lihat
                </button>
              </div>
            ))}
            
            <div className="flex justify-between items-center mt-8 p-1 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 cursor-pointer text-[#107058] hover:underline">
                <FaPlus className="text-xs" /><span className="text-xs font-bold">9 Dokumen Lainnya</span>
              </div>
              <button className="text-xs font-bold text-[#107058] bg-green-50 border border-green-200 px-5 py-2 rounded-lg hover:bg-green-100 transition-colors shadow-sm">
                Lihat Semua
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-red-500 bg-red-50 hover:bg-red-100 border border-red-100 transition-colors">Tolak</button>
            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-orange-500 bg-orange-50 hover:bg-orange-100 border border-orange-100 transition-colors">Perlu Perbaikan</button>
            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#01352c] hover:bg-[#0a5240] transition-colors shadow-md">Verifikasi</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailESakinah;