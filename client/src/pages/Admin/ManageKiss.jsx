import React, { useState } from 'react';
import { FaCalendarCheck, FaClock, FaCheckDouble, FaCheck, FaPlus, FaSearch, FaEye, FaEdit, FaTimes } from 'react-icons/fa';

const ManageKiss = () => {
  // State untuk menyimpan data yang sedang diklik. Jika null, panel tertutup.
  const [selectedReservasi, setSelectedReservasi] = useState(null);

  const dataReservasi = [
    { id: "KISS-2026-00108", no: 1, instansi: "SMP Negeri 1 Banyuwangi", tgl: "15 Agustus 2026", jml: "35 Orang", kord: "Dina Aprilia", hp: "085-999-448-153", status: "Selesai", sColor: "bg-blue-50 text-blue-600" },
    { id: "KISS-2026-00109", no: 2, instansi: "PKK Kecamatan Giri", tgl: "11 Agustus 2026", jml: "20 Orang", kord: "Ahmad", hp: "081-234-567-890", status: "Disetujui", sColor: "bg-green-50 text-green-600" },
    { id: "KISS-2026-00110", no: 6, instansi: "SMA Negeri 1 Banyuwangi", tgl: "21 Agustus 2026", jml: "40 Orang", kord: "Wulansari", hp: "082-111-222-333", status: "Menunggu", sColor: "bg-orange-50 text-orange-600 border border-orange-200" },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">KISS - Reservasi Kunjungan</h1>
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm">
          Kelola Informasi KISS
        </button>
      </div>

      <div className="text-xs text-gray-400 font-semibold mb-6 flex gap-2">
        <span>Berita</span> &gt; <span>Inovasi</span> &gt; <span>KISS</span> &gt; <span className="text-gray-700">Reservasi Kunjungan</span>
      </div>

      {/* Widget Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { num: "128", text: "Total Reservasi", sub: "Semua waktu", icon: <FaCalendarCheck className="text-green-700 text-2xl"/> },
          { num: "12", text: "Menunggu Konfirmasi", sub: "Perlu ditindaklanjuti", icon: <FaClock className="text-green-700 text-2xl"/> },
          { num: "105", text: "Disetujui", sub: "Akan berkunjung", icon: <FaCheckDouble className="text-green-700 text-2xl"/> },
          { num: "11", text: "Selesai", sub: "Kunjungan Selesai", icon: <FaCheck className="text-green-700 text-2xl bg-green-100 p-1.5 rounded-full"/> },
        ].map((w, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div>{w.icon}</div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase">{w.text}</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{w.num}</h3>
              <p className="text-[9px] text-gray-400 mt-1">{w.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Layout Dinamis */}
      <div className="flex flex-col xl:flex-row gap-6 transition-all duration-300">
        
        {/* Kiri: Tabel (Lebarnya menyesuaikan jika panel kanan terbuka) */}
        <div className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ${selectedReservasi ? 'w-full xl:w-2/3' : 'w-full'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-gray-800 text-sm">Daftar Reservasi Kunjungan</h2>
            <button className="bg-[#01352c] hover:bg-[#0a5240] text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors">
              <FaPlus /> Reservasi Baru (Kunjungan)
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
              <input type="text" placeholder="Cari nama / instansi / Koordinator" className="w-full border border-gray-200 text-xs rounded-lg pl-9 pr-3 py-2.5 bg-gray-50 focus:outline-none focus:border-[#107058]" />
            </div>
            <select className="border border-gray-200 text-xs rounded-lg px-4 py-2 bg-gray-50"><option>Semua Status</option></select>
            <input type="date" className="border border-gray-200 text-xs rounded-lg px-4 py-2 bg-gray-50 text-gray-500" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-y border-gray-200 text-[11px] text-gray-900 font-bold">
                  <th className="py-3 px-2">No</th>
                  <th className="py-3">Nama / Instansi</th>
                  <th className="py-3">Tanggal Kunjungan</th>
                  <th className="py-3">Jumlah Pengunjung</th>
                  <th className="py-3">Koordinator</th>
                  <th className="py-3 text-center">Status</th>
                  <th className="py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-[11px] text-gray-700 font-semibold">
                {dataReservasi.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${selectedReservasi?.id === row.id ? 'bg-green-50' : ''}`}>
                    <td className="py-4 px-2">{row.no}</td>
                    <td className="py-4">{row.instansi}</td>
                    <td className="py-4">{row.tgl}</td>
                    <td className="py-4">{row.jml}</td>
                    <td className="py-4">{row.kord}</td>
                    <td className="py-4 text-center"><span className={`px-2.5 py-1 rounded-md ${row.sColor}`}>{row.status}</span></td>
                    <td className="py-4 text-center text-gray-400 flex justify-center gap-2 mt-2">
                      <button 
                        onClick={() => setSelectedReservasi(row)} 
                        className={`p-1.5 rounded transition-colors ${selectedReservasi?.id === row.id ? 'text-[#107058] bg-green-100' : 'hover:text-[#107058] hover:bg-gray-100'}`}
                        title="Lihat Detail"
                      >
                        <FaEye />
                      </button> 
                      <button className="p-1.5 rounded hover:text-[#107058] hover:bg-gray-100 transition-colors" title="Edit"><FaEdit /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kanan: Panel Detail (Hanya muncul jika ada data yang diklik) */}
        {selectedReservasi && (
          <div className="w-full xl:w-1/3 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl self-start sticky top-6 animate-fade-in-right">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-bold text-gray-800 text-sm">Detail Reservasi</h3>
              <div className="flex items-center gap-3">
                <span className="bg-green-50 text-green-700 text-[9px] font-bold px-2 py-1 border border-green-200 rounded">
                  ID : {selectedReservasi.id}
                </span>
                <button onClick={() => setSelectedReservasi(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaTimes />
                </button>
              </div>
            </div>
            
            <span className={`inline-block border px-3 py-1 rounded-md text-[10px] font-bold mb-6 ${selectedReservasi.sColor}`}>
              Status: {selectedReservasi.status}
            </span>
            
            <h4 className="font-bold text-gray-800 text-sm mb-4">Informasi Reservasi</h4>
            <table className="w-full text-xs text-gray-600 mb-6">
              <tbody>
                <tr><td className="py-2.5 w-1/2">Nama Koordinator</td><td className="py-2.5 font-bold text-gray-900">{selectedReservasi.kord}</td></tr>
                <tr><td className="py-2.5">Asal Instansi</td><td className="py-2.5 font-bold text-gray-900">{selectedReservasi.instansi}</td></tr>
                <tr><td className="py-2.5">Tanggal Kunjungan</td><td className="py-2.5 font-bold text-gray-900">{selectedReservasi.tgl}</td></tr>
                <tr><td className="py-2.5">Jumlah Pengunjung</td><td className="py-2.5 font-bold text-gray-900">{selectedReservasi.jml}</td></tr>
                <tr><td className="py-2.5">No Hp / WhatsApp</td><td className="py-2.5 font-bold text-gray-900">{selectedReservasi.hp}</td></tr>
                <tr><td className="py-2.5 align-top">Catatan Tambahan</td><td className="py-2.5 align-top font-bold text-gray-900 leading-relaxed">Kami ingin belajar tentang budidaya ikan dan pengelolaan kolam.</td></tr>
              </tbody>
            </table>

            <div className="border-t border-gray-100 pt-4 mb-6">
              <label className="block text-xs font-bold text-gray-700 mb-2">Status Reservasi</label>
              <select className="w-full border border-gray-200 rounded-lg p-2 text-xs bg-gray-50 focus:outline-none focus:border-[#107058] mb-4">
                <option>Menunggu Konfirmasi</option>
                <option>Disetujui</option>
                <option>Selesai</option>
              </select>
              <label className="block text-xs font-bold text-gray-700 mb-2">Catatan Admin (Opsional)</label>
              <textarea rows="3" placeholder="Tulis catatan untuk reservasi ini..." className="w-full border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none focus:border-[#107058]"></textarea>
            </div>

            <div className="flex justify-between gap-2">
              <button className="flex-1 bg-[#01352c] text-white text-[10px] font-bold py-2.5 rounded hover:bg-[#0a5240] transition-colors shadow-sm">Setujui Reservasi</button>
              <button className="flex-1 bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold py-2.5 rounded hover:bg-red-100 transition-colors shadow-sm">Tolak Reservasi</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageKiss;