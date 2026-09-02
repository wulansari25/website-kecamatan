import React from 'react';
import { FaUserPlus, FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageStruktur = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-bwi-dark">Profil – Struktur Organisasi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola data aparatur pemerintah Kecamatan Banyuwangi.</p>
        </div>
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm">
          <FaUserPlus /> Tambah Pegawai
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <select className="border border-gray-200 text-sm rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058] w-full md:w-auto">
            <option>Semua Hierarki</option>
            <option>Pimpinan (Camat & Sekcam)</option>
            <option>Kepala Seksi (Kasi)</option>
            <option>Kepala Sub Bagian (Kasubag)</option>
            <option>Staf Pelaksana</option>
          </select>
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Cari nama pegawai..." className="w-full border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]" />
          </div>
        </div>

        {/* Tabel Data Pegawai */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200 text-[11px] text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4 font-bold w-12">No</th>
                <th className="py-3 px-4 font-bold">Foto</th>
                <th className="py-3 px-4 font-bold">Nama Pegawai & NIP</th>
                <th className="py-3 px-4 font-bold">Jabatan</th>
                <th className="py-3 px-4 font-bold">Hierarki Bagan</th>
                <th className="py-3 px-4 font-bold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {[
                { no: 1, img: "1556157382-97eda2d62296", nama: "Andik Basuki, S.AB., M.Si.", nip: "19750825 200012 1 002", jabatan: "Camat Banyuwangi", hierarki: "Pimpinan", urutan: 1 },
                { no: 2, img: "1560250097-0b93528c311a", nama: "Budi Santoso, S.STP.", nip: "19820512 200501 1 004", jabatan: "Sekretaris Camat", hierarki: "Pimpinan", urutan: 2 },
                { no: 3, img: "1573496359142-b8d87734a5a2", nama: "Dra. Siti Aminah", nip: "19700315 199803 2 001", jabatan: "Kasi Pemerintahan", hierarki: "Kepala Seksi", urutan: 3 },
                { no: 4, img: "1500648767791-00dcc994a43e", nama: "Hendra Wijaya, S.E.", nip: "19851120 201001 1 007", jabatan: "Kasi PMK", hierarki: "Kepala Seksi", urutan: 4 },
              ].map((item) => (
                <tr key={item.no} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-semibold">{item.no}</td>
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                      <img src={`https://images.unsplash.com/photo-${item.img}?q=80&w=150&auto=format&fit=crop`} alt={item.nama} className="w-full h-full object-cover object-top" />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-bold text-gray-800">{item.nama}</p>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">NIP. {item.nip}</p>
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#107058]">{item.jabatan}</td>
                  <td className="py-3 px-4">
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-[10px] font-bold">
                      {item.hierarki} (Level {item.urutan})
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button className="text-blue-500 hover:bg-blue-50 p-2 rounded transition-colors" title="Edit"><FaEdit /></button>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors" title="Hapus"><FaTrashAlt /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStruktur;