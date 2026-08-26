import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEye, FaTrashAlt, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';

const ManageESakinah = () => {
  // Data dummy pengajuan (Sesuai dengan form user: Tanpa NIK, hanya Nama, WA, dan Tanggal Otomatis)
  const dummyPengajuan = [
    {
      id: 1,
      namaPemohon: "Muhammad",
      namaPasangan: "Kurniawati",
      wa: "085899966146",
      tanggal: "22 Agt 2026",
      status: "Menunggu Verifikasi"
    },
    {
      id: 2,
      namaPemohon: "Budi Santoso",
      namaPasangan: "Siti Aminah",
      wa: "081234567890",
      tanggal: "20 Agt 2026",
      status: "Disetujui"
    },
    {
      id: 3,
      namaPemohon: "Andi Saputra",
      namaPasangan: "Rina Melati",
      wa: "085678901234",
      tanggal: "18 Agt 2026",
      status: "Perlu Perbaikan"
    }
  ];

  // Fungsi untuk menentukan warna badge status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Menunggu Verifikasi':
        return <span className="bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 w-max"><FaClock /> {status}</span>;
      case 'Disetujui':
        return <span className="bg-green-50 text-green-600 border border-green-200 px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 w-max"><FaCheckCircle /> {status}</span>;
      case 'Perlu Perbaikan':
        return <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 w-max"><FaExclamationTriangle /> {status}</span>;
      default:
        return <span className="bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md text-[11px] font-bold">{status}</span>;
    }
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-bwi-dark">Layanan Interaktif – Verifikasi e-Sakinah</h1>
        <p className="text-sm text-gray-500 mt-1">Kelola dan verifikasi antrean pengajuan dispensasi nikah masyarakat.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        
        {/* Kolom Filter & Pencarian */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select className="border border-gray-200 text-sm rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]">
            <option>Semua Status</option>
            <option>Menunggu Verifikasi</option>
            <option>Disetujui</option>
            <option>Perlu Perbaikan</option>
          </select>
          <div className="relative flex-1 md:max-w-xs">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Cari nama pemohon atau pasangan..." className="w-full border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]" />
          </div>
        </div>

        {/* Tabel Data E-Sakinah */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200 text-[11px] text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-4 font-bold w-12 text-center">No</th>
                <th className="py-4 px-4 font-bold">Data Pasangan (Pemohon & Calon)</th>
                <th className="py-4 px-4 font-bold">No. WhatsApp</th>
                <th className="py-4 px-4 font-bold">Tanggal Masuk</th>
                <th className="py-4 px-4 font-bold">Status Berkas</th>
                <th className="py-4 px-4 font-bold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {dummyPengajuan.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-center font-semibold text-gray-500">{index + 1}</td>
                  
                  <td className="py-4 px-4">
                    <p className="font-bold text-gray-900">{item.namaPemohon}</p>
                    <p className="text-xs text-gray-500 mt-0.5">&amp; {item.namaPasangan}</p>
                  </td>
                  
                  <td className="py-4 px-4 font-medium text-gray-600">
                    <a href={`https://wa.me/62${item.wa.substring(1)}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      {item.wa}
                    </a>
                  </td>
                  
                  <td className="py-4 px-4 font-medium text-gray-600">{item.tanggal}</td>
                  
                  <td className="py-4 px-4">
                    {getStatusBadge(item.status)}
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="flex justify-center gap-2">
                      {/* LINK MENUJU HALAMAN DETAIL E-SAKINAH */}
                      <Link 
                        to={`/admin/esakinah/detail/${item.id}`} 
                        className="flex items-center gap-2 bg-[#107058] text-white hover:bg-[#0a5240] px-3 py-1.5 rounded-lg transition-colors text-xs font-bold"
                        title="Lihat Detail Berkas"
                      >
                        <FaEye /> Cek Berkas
                      </Link>

                      <button className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors border border-transparent hover:border-red-200" title="Hapus Data">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <p>Menampilkan 1-3 dari 45 pengajuan</p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 font-medium">Sebelumnya</button>
            <button className="px-3 py-1.5 border border-[#107058] bg-[#107058] text-white rounded-md font-bold">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 font-medium">2</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 font-medium">3</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 font-medium">Selanjutnya</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageESakinah;