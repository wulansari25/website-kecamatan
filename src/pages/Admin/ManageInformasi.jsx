import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaEdit, FaTrashAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ManageInformasi = () => {
  const [dataBerita, setDataBerita] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/berita')
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'success' && Array.isArray(json.data)) {
          setDataBerita(json.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching berita in Admin:', err);
      });
  }, []);

  const filteredData = dataBerita.filter((item) => {
    const matchCategory =
      selectedCategory === 'Semua Kategori' || item.kategori === selectedCategory;
    const matchSearch =
      !searchQuery || item.judul.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleDelete = async (item) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus publikasi "${item.judul}"?`)) {
      return;
    }

    try {
      const isAgenda = item.kategori === 'Agenda';
      const url = isAgenda
        ? `http://localhost:5000/api/agenda/${item.id}`
        : `http://localhost:5000/api/berita/${item.id}`;

      const res = await fetch(url, { method: 'DELETE' });
      const json = await res.json();

      if (json.status === 'success') {
        alert('Publikasi berhasil dihapus.');
        setDataBerita((prev) => prev.filter((b) => b.id !== item.id));
      } else {
        alert(json.message || 'Gagal menghapus publikasi.');
      }
    } catch (err) {
      console.error('Error deleting berita:', err);
      alert('Terjadi kesalahan saat menghapus publikasi.');
    }
  };

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
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)} 
            className="border border-gray-200 text-sm rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]"
          >
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
            <input 
              type="text" 
              placeholder="Cari judul informasi..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 bg-gray-50 focus:outline-none focus:border-[#107058]" 
            />
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
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                  const dateObj = new Date(item.tanggal);
                  const formattedDate = !isNaN(dateObj.getTime())
                    ? dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
                    : item.tanggal;
                  const thumbImg = item.gambar || 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop';
                  const sumberText = item.sumber || 'Lokal Kecamatan';

                  return (
                    <tr key={item.id || index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold align-top">{index + 1}</td>
                      
                      <td className="py-4 px-4 align-top">
                        <img src={thumbImg} alt="thumb" className="w-20 h-14 object-cover rounded-lg shadow-sm border border-gray-200" />
                      </td>
                      
                      <td className="py-4 px-4 align-top">
                        <p className="font-bold text-gray-900 mb-1">{item.judul}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{item.deskripsi}</p>
                      </td>

                      <td className="py-4 px-4 align-top text-xs">
                        <div className="font-bold text-gray-700 mb-1">{formattedDate}</div>
                        <div className="text-gray-500 text-[11px] mt-1 font-medium">
                          Sumber: {sumberText}
                        </div>
                      </td>
                      
                      <td className="py-4 px-4 align-top">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-bold border ${item.kategori === 'Agenda' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                          {item.kategori || 'Kegiatan'}
                        </span>
                      </td>
                      
                      <td className="py-4 px-4 align-top">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                          Publish
                        </span>
                      </td>
                      
                      <td className="py-4 px-4 align-top">
                        <div className="flex justify-center gap-2">
                          <Link 
                            to={`/admin/berita/edit/${item.id}`} 
                            className="text-blue-500 hover:bg-blue-50 p-2 rounded transition-colors inline-block"
                            title="Edit Data"
                          >
                            <FaEdit />
                          </Link>
                          <button 
                            onClick={() => handleDelete(item)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors" 
                            title="Hapus Data"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-gray-500">
                    Tidak ada data berita.
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

export default ManageInformasi;