// src/pages/Admin/ManageEdukasi.jsx
import React from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaFilePdf } from 'react-icons/fa';

const ManageEdukasi = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-bwi-dark">SOP Layanan Edukasi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola daftar persyaratan dan file SOP pelayanan warga.</p>
        </div>
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm">
          <FaPlus /> Tambah SOP Baru
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#e4e1db] text-xs text-gray-700 uppercase tracking-wider">
              <th className="py-4 px-6 font-bold w-12">No</th>
              <th className="py-4 px-6 font-bold">Jenis Layanan</th>
              <th className="py-4 px-6 font-bold">Syarat Utama</th>
              <th className="py-4 px-6 font-bold text-center">File Lampiran</th>
              <th className="py-4 px-6 font-bold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 font-semibold">
            {[
              { no: 1, layanan: "Pembuatan e-KTP Baru", syarat: "KK, Surat Pengantar RT/RW", file: "sop_ktp.pdf" },
              { no: 2, layanan: "Pindah Datang Antar Provinsi", syarat: "SKPWNI Asal, KTP, KK Asli", file: "sop_pindah.pdf" },
            ].map((item) => (
              <tr key={item.no} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6">{item.no}</td>
                <td className="py-4 px-6 text-gray-900">{item.layanan}</td>
                <td className="py-4 px-6 text-xs text-gray-500 font-normal">{item.syarat}</td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-md text-[11px] font-bold border border-red-200">
                    <FaFilePdf /> {item.file}
                  </span>
                </td>
                <td className="py-4 px-6 text-center text-gray-400">
                  <button className="p-2 hover:text-blue-600 transition-colors"><FaEdit /></button>
                  <button className="p-2 hover:text-red-600 transition-colors"><FaTrashAlt /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEdukasi;