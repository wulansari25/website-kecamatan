import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaSearch } from 'react-icons/fa';

const ManageESakinah = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['Semua', 'Menunggu Verifikasi', 'Diproses', 'Selesai', 'Ditolak'];

  const data = [
    { id: 1, p1: "Muhammad", p2: "Kurniawati", tgl: "28 Juli 2026", status: "Menunggu Verifikasi", badge: "bg-orange-50 text-orange-600 border-orange-200" },
    { id: 2, p1: "Saifuddin", p2: "Novianti", tgl: "27 Juli 2026", status: "Menunggu Verifikasi", badge: "bg-orange-50 text-orange-600 border-orange-200" },
    { id: 3, p1: "Ricky Harun", p2: "Dini Kurnia", tgl: "25 Juli 2026", status: "Diproses", badge: "bg-blue-50 text-blue-600 border-blue-200" },
  ];

  const filteredData = data.filter((item) => {
    const matchesTab = activeTab === 'Semua' || item.status === activeTab;
    const matchesSearch = item.p1.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.p2.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin" className="text-[#107058] hover:text-[#0a5240] transition-colors">
          <FaArrowLeft />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">Pengajuan E-Sakinah</h1>
      </div>

      <div className="bg-[#FAF4EB] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 px-6 pt-4 gap-4">
          <div className="flex gap-8 overflow-x-auto w-full md:w-auto">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? 'text-gray-900 border-b-2 border-[#107058]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 pb-3 md:pb-0">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-xs" />
            <input 
              type="text" 
              placeholder="Cari pemohon / pasangan..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-200 text-xs rounded-lg pl-8 pr-3 py-1.5 bg-white focus:outline-none focus:border-[#107058]"
            />
          </div>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-[#e4e1db] text-xs text-gray-700 uppercase tracking-wider">
                <th className="py-4 px-6 font-bold w-1/4">Pemohon</th>
                <th className="py-4 px-6 font-bold w-1/4">Pasangan</th>
                <th className="py-4 px-6 font-bold">Tanggal</th>
                <th className="py-4 px-6 font-bold">Status</th>
                <th className="py-4 px-6 font-bold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 font-semibold">
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-900">{row.p1}</td>
                    <td className="py-4 px-6">{row.p2}</td>
                    <td className="py-4 px-6">{row.tgl}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1.5 rounded-md text-[10px] font-bold border ${row.badge}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Link 
                        to={`/admin/esakinah/detail/${row.id}`} 
                        className="inline-flex items-center justify-center text-gray-600 hover:text-[#107058] hover:bg-green-50 p-2 rounded-full transition-colors text-lg"
                        title="Lihat Detail Pemohon"
                      >
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-400 font-normal text-sm">
                    Tidak ada data pengajuan yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageESakinah;