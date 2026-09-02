import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaEdit, FaTrashAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ManageInformasi = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-bwi-dark">Informasi – Daftar Publikasi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola Berita, Agenda, dan Pengumuman yang tampil di halaman utama.</p>
        </div>
        
        <Link 
          to="/admin/berita/tambah" 
          className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm"
        >
          <FaPlus /> Tambah Publikasi
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select className="border border-gray-200 text-sm rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]">
            <option>Semua Kategori</option>
            <option>Agenda Terdekat</option>
            <option>Kegiatan</option>
            <option>Pengumuman</option>
            <option>Pelayanan</option>
            <option>Budaya</option>
            <option>UMKM</option>
          </select>
          <div className="relative flex-1 md:max-w-xs">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Cari judul informasi..." className="w-full border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200 text-[11px] text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4 font-bold w-12">No</th>
                <th className="py-3 px-4 font-bold">Thumbnail</th>
                <th className="py-3 px-4 font-bold w-1/3">Informasi Utama</th>
                <th className="py-3 px-4 font-bold">Waktu & Lokasi</th>
                <th className="py-3 px-4 font-bold">Kategori</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {[
                { 
                  no: 1, 
                  img: "1531482615713-2afd69097998", 
                  judul: "Jadwal Pelayanan Perekaman e-KTP", 
                  deskripsi: "Pemberitahuan kepada seluruh warga mengenai jadwal layanan jemput bola...",
                  kat: "Agenda", 
                  tgl: "24 Jul 2026", 
                  waktu: "08.00 - 14.00 WIB",
                  lokasi: "Keliling Kecamatan",
                  status: "Publish" 
                },
                { 
                  no: 2, 
                  img: "1517245386807-bb43f82c33c4", 
                  judul: "Upacara Hari Jadi Banyuwangi ke-253", 
                  deskripsi: "Rangkaian peringatan hari jadi kota Banyuwangi berlangsung meriah...",
                  kat: "Budaya", 
                  tgl: "17 Jul 2026", 
                  waktu: "07.00 - Selesai",
                  lokasi: "Taman Blambangan",
                  status: "Publish" 
                },
                { 
                  no: 3, 
                  img: "1532375810709-75b1da00537c", 
                  judul: "Pelatihan Digital Marketing UMKM", 
                  deskripsi: "Peningkatan kapasitas UMKM agar mampu bersaing di pasar digital...",
                  kat: "UMKM", 
                  tgl: "15 Jul 2026", 
                  waktu: "-",
                  lokasi: "-",
                  status: "Draft" 
                },
              ].map((item) => (
                <tr key={item.no} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-semibold align-top">{item.no}</td>
                  
                  <td className="py-4 px-4 align-top">
                    <img src={`https://images.unsplash.com/photo-${item.img}?q=80&w=150&auto=format&fit=crop`} alt="thumb" className="w-20 h-14 object-cover rounded-lg shadow-sm border border-gray-200" />
                  </td>
                  
                  <td className="py-4 px-4 align-top">
                    <p className="font-bold text-gray-900 mb-1">{item.judul}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{item.deskripsi}</p>
                  </td>

                  <td className="py-4 px-4 align-top text-xs">
                    <div className="font-bold text-gray-700 mb-1">{item.tgl}</div>
                    {item.waktu !== "-" && (
                      <div className="flex items-center gap-1 text-gray-500 mt-1">
                        <FaClock className="text-[10px]" /> {item.waktu}
                      </div>
                    )}
                    {item.lokasi !== "-" && (
                      <div className="flex items-center gap-1 text-gray-500 mt-1">
                        <FaMapMarkerAlt className="text-[10px]" /> {item.lokasi}
                      </div>
                    )}
                  </td>
                  
                  <td className="py-4 px-4 align-top">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold border ${item.kat === 'Agenda' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                      {item.kat}
                    </span>
                  </td>
                  
                  <td className="py-4 px-4 align-top">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.status === 'Publish' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  
                  <td className="py-4 px-4 align-top">
                    <div className="flex justify-center gap-2">
                      <Link 
                        to={`/admin/berita/edit/${item.no}`} 
                        className="text-blue-500 hover:bg-blue-50 p-2 rounded transition-colors inline-block"
                        title="Edit Data"
                      >
                        <FaEdit />
                      </Link>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors" title="Hapus Data">
                        <FaTrashAlt />
                      </button>
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

export default ManageInformasi;