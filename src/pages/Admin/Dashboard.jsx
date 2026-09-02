import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegNewspaper, FaHeart, FaWater, FaUsers, FaClock, FaCheckCircle, FaEye } from 'react-icons/fa';
import kantorCamatBg from '../../assets/images/kantor-camat.png';

const Dashboard = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="bg-[#f0f5ee] rounded-2xl p-8 mb-8 flex flex-col md:flex-row justify-between items-center shadow-sm border border-green-100 overflow-hidden relative">
        <div className="w-full md:w-1/2 z-10 relative">
          <h1 className="text-3xl font-bold text-bwi-dark mb-2">Selamat datang, Admin Utama </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kelola Informasi, Jadwal Kegiatan, dan antrean layanan <br/> Kecamatan Banyuwangi dengan mudah.
          </p>
        </div>
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 rounded-l-[4rem] overflow-hidden shadow-inner border-l-4 border-white">
          <img src={kantorCamatBg} alt="Kantor Camat" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Total Publikasi", count: 36, active: "Berita & Pengumuman", action: "+ Tambah Publikasi", link: "/admin/berita/tambah", icon: <FaRegNewspaper />, color: "text-blue-600" },
          /* { title: "Antrean E-Sakinah", count: 4, active: "Perlu Verifikasi", action: "Lihat Berkas", link: "/admin/esakinah", icon: <FaHeart />, color: "text-pink-600" }, */
          /* { title: "Reservasi KISS", count: 2, active: "Menunggu Konfirmasi", action: "Kelola Jadwal", link: "/admin/kiss", icon: <FaWater />, color: "text-cyan-600" }, */
          { title: "Pegawai Aktif", count: 18, active: "Struktur Organisasi", action: "Kelola Pegawai", link: "/admin/struktur", icon: <FaUsers />, color: "text-orange-600" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 leading-none">{stat.count}</h3>
                <p className="text-xs text-gray-500 font-semibold mt-1">{stat.title}</p>
              </div>
              <div className={`text-2xl ${stat.color} bg-gray-50 p-3 rounded-xl`}>{stat.icon}</div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>{stat.active}</span>
              <Link to={stat.link} className="text-[#107058] cursor-pointer hover:underline font-bold">{stat.action}</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-3">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
            <h3 className="font-bold text-gray-800 text-sm">Publikasi Terbaru</h3>
            <Link to="/admin/berita" className="text-[10px] font-semibold text-[#107058] hover:underline">Lihat Semua</Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Musrenbang Kecamatan Banyuwangi Tahun 2026", cat: "Kegiatan" },
              { title: "Jadwal Perekaman KTP Keliling Bulan Ini", cat: "Agenda" }, 
              { title: "Pelatihan Digital Marketing bagi Pelaku UMKM", cat: "UMKM" }
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center border-b border-gray-50 pb-3">
                <div className="w-14 h-12 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                  <img src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover" alt="Thumb" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-800 leading-tight mb-1 line-clamp-2">{item.title}</h4>
                  <p className="text-[9px] text-gray-400 font-semibold">{item.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
            <h3 className="font-bold text-gray-800 text-sm">Antrean Berkas E-Sakinah</h3>
            <Link to="/admin/esakinah" className="text-[10px] font-semibold text-[#107058] hover:underline">Buka Halaman E-Sakinah</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] text-gray-400 uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Data Pasangan</th>
                  <th className="pb-3 font-semibold">No. WhatsApp</th>
                  <th className="pb-3 font-semibold">Tanggal Masuk</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-xs text-gray-700">
                {[
                  { p1: "Muhammad", p2: "Kurniawati", wa: "085899966146", tgl: "22 Agt 2026", status: "Menunggu Verifikasi" },
                  { p1: "Saifuddin", p2: "Novianti", wa: "081234567890", tgl: "21 Agt 2026", status: "Menunggu Verifikasi" },
                  { p1: "Ricky Harun", p2: "Dini Kurnia", wa: "085678901234", tgl: "20 Agt 2026", status: "Perlu Perbaikan" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-3">
                      <p className="font-bold text-gray-900">{row.p1}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">&amp; {row.p2}</p>
                    </td>
                    <td className="py-3 font-medium text-gray-600">{row.wa}</td>
                    <td className="py-3 text-gray-500 font-medium">{row.tgl}</td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1.5 rounded-md text-[9px] font-bold flex items-center gap-1 w-max ${row.status === 'Menunggu Verifikasi' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                        {row.status === 'Menunggu Verifikasi' ? <FaClock/> : null} {row.status}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <Link to="/admin/esakinah/detail/1" className="inline-flex bg-gray-50 border border-gray-200 text-gray-600 hover:bg-[#107058] hover:text-white p-2 rounded-lg transition-colors" title="Verifikasi Berkas">
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Dashboard;