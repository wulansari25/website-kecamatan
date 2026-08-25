import React from 'react';
import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageInformasi = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-bwi-dark">Informasi – Daftar Publikasi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola Berita, Agenda, dan Pengumuman yang tampil di halaman utama.</p>
        </div>
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm">
          <FaPlus /> Tambah Informasi
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select className="border border-gray-200 text-sm rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]">
            <option>Semua Kategori</option>
            <option>Kegiatan</option>
            <option>Pengumuman</option>
            <option>Pelayanan</option>
          </select>
          <div className="relative flex-1 md:max-w-xs">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Cari judul informasi..." className="w-full border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200 text-[11px] text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4 font-bold w-12">No</th>
                <th className="py-3 px-4 font-bold">Thumbnail</th>
                <th className="py-3 px-4 font-bold">Judul Informasi</th>
                <th className="py-3 px-4 font-bold">Kategori</th>
                <th className="py-3 px-4 font-bold">Tanggal</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {[
                { no: 1, img: "1517245386807-bb43f82c33c4", judul: "Upacara Hari Jadi Banyuwangi ke-253", kat: "Budaya", tgl: "17 Jul 2026", status: "Publish" },
                { no: 2, img: "1531482615713-2afd69097998", judul: "Pengumuman Jadwal Pelayanan Keliling", kat: "Pengumuman", tgl: "16 Jul 2026", status: "Publish" },
                { no: 3, img: "1532375810709-75b1da00537c", judul: "Pelatihan Digital Marketing untuk UMKM", kat: "UMKM", tgl: "15 Jul 2026", status: "Draft" },
              ].map((item) => (
                <tr key={item.no} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-semibold">{item.no}</td>
                  <td className="py-3 px-4">
                    <img src={`https://images.unsplash.com/photo-${item.img}?q=80&w=150&auto=format&fit=crop`} alt="thumb" className="w-16 h-10 object-cover rounded shadow-sm border border-gray-200" />
                  </td>
                  <td className="py-3 px-4 font-bold text-gray-800">{item.judul}</td>
                  <td className="py-3 px-4">{item.kat}</td>
                  <td className="py-3 px-4 text-gray-500">{item.tgl}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.status === 'Publish' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button className="text-blue-500 hover:bg-blue-50 p-2 rounded transition-colors"><FaEdit /></button>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors"><FaTrashAlt /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <p>Menampilkan 1-3 dari 24 data</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">«</button>
            <button className="px-3 py-1 border border-[#107058] bg-[#107058] text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInformasi;