import React, { useState } from 'react';
import { FaCalendarCheck, FaClock, FaCheckDouble, FaCheck, FaPlus, FaSearch, FaEye, FaEdit, FaTimes } from 'react-icons/fa';
import ModalFormKiss from '../../pages/Admin/ModalFormKiss';

const ManageKiss = () => {
  const [selectedReservasi, setSelectedReservasi] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState(null);

  const dataReservasi = [
    { id: "KISS-2026-00108", no: 1, instansi: "SMP Negeri 1 Banyuwangi", alamat: "Jl. Letkol Istiqlah No. 2", tgl: "15 Agustus 2026", jml: "35 Orang", kord: "Dina Aprilia", hp: "085-999-448-153", status: "Selesai", sColor: "bg-blue-50 text-blue-600 border border-blue-200" },
    { id: "KISS-2026-00109", no: 2, instansi: "PKK Kecamatan Giri", alamat: "Kantor Kecamatan Giri", tgl: "11 Agustus 2026", jml: "20 Orang", kord: "Ahmad", hp: "081-234-567-890", status: "Disetujui", sColor: "bg-green-50 text-green-600 border border-green-200" },
    { id: "KISS-2026-00110", no: 3, instansi: "SMA Negeri 1 Banyuwangi", alamat: "Jl. Ikan Hiu No. 1", tgl: "21 Agustus 2026", jml: "40 Orang", kord: "Wulansari", hp: "082-111-222-333", status: "Menunggu", sColor: "bg-orange-50 text-orange-600 border border-orange-200" },
  ];

  const filteredReservasi = dataReservasi.filter((item) => {
    if (activeFilter === 'Semua') return true;
    return item.status === activeFilter;
  });

  const handleCardClick = (status) => {
    setActiveFilter(status);
    setSelectedReservasi(null); 
  };

  const handleAddClick = () => {
    setEditingData(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (data) => {
    setEditingData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">KISS - Reservasi Kunjungan</h1>
        <button onClick={handleAddClick} className="bg-[#107058] hover:bg-[#0a5240] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors">
          <FaPlus /> Reservasi Baru (Manual)
        </button>
      </div>

      <div className="text-xs text-gray-400 font-semibold mb-6 flex gap-2">
        <span>Berita</span> &gt; <span>Inovasi</span> &gt; <span>KISS</span> &gt; <span className="text-[#107058]">Reservasi Kunjungan</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { id: "Semua", num: "3", text: "Total Reservasi", sub: "Semua waktu", icon: <FaCalendarCheck className="text-gray-600 text-2xl"/>, colorBorder: "border-gray-800" },
          { id: "Menunggu", num: "1", text: "Menunggu", sub: "Perlu ditindaklanjuti", icon: <FaClock className="text-orange-500 text-2xl"/>, colorBorder: "border-orange-500" },
          { id: "Disetujui", num: "1", text: "Disetujui", sub: "Akan berkunjung", icon: <FaCheckDouble className="text-green-600 text-2xl"/>, colorBorder: "border-green-500" },
          { id: "Selesai", num: "1", text: "Selesai", sub: "Kunjungan Selesai", icon: <FaCheck className="text-blue-500 text-xl bg-blue-100 p-1.5 rounded-full"/>, colorBorder: "border-blue-500" },
        ].map((w, i) => (
          <div 
            key={i} 
            onClick={() => handleCardClick(w.id)}
            className={`bg-white p-5 rounded-xl border-2 shadow-sm flex items-start gap-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${activeFilter === w.id ? `${w.colorBorder} shadow-md` : 'border-gray-100 hover:border-gray-300'}`}
          >
            <div>{w.icon}</div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase">{w.text}</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{w.num}</h3>
              <p className="text-[9px] text-gray-400 mt-1">{w.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row gap-6 transition-all duration-500 items-start">
        
        <div className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 ${selectedReservasi ? 'w-full xl:w-2/3' : 'w-full'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-gray-800 text-sm">Daftar Reservasi Kunjungan</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
              <input type="text" placeholder="Cari nama / instansi / Koordinator..." className="w-full border border-gray-200 text-xs rounded-lg pl-9 pr-3 py-2.5 bg-gray-50 focus:outline-none focus:border-[#107058]" />
            </div>
            
            <select 
              value={activeFilter} 
              onChange={(e) => handleCardClick(e.target.value)} 
              className="border border-gray-200 text-xs rounded-lg px-4 py-2 bg-gray-50 font-semibold text-gray-700 outline-none focus:border-[#107058]"
            >
              <option value="Semua">Semua Status</option>
              <option value="Menunggu">Menunggu</option>
              <option value="Disetujui">Disetujui</option>
              <option value="Selesai">Selesai</option>
            </select>
            
            <input type="date" className="border border-gray-200 text-xs rounded-lg px-4 py-2 bg-gray-50 text-gray-500 outline-none focus:border-[#107058]" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-y border-gray-200 text-[11px] text-gray-500 uppercase tracking-wider bg-gray-50/50">
                  <th className="py-3 px-3 font-bold">No</th>
                  <th className="py-3 px-2 font-bold w-1/3">Instansi</th>
                  <th className="py-3 px-2 font-bold">Tanggal</th>
                  <th className="py-3 px-2 font-bold">Jml Pengunjung</th>
                  <th className="py-3 px-2 font-bold">Koordinator</th>
                  <th className="py-3 px-2 text-center font-bold">Status</th>
                  <th className="py-3 px-2 text-center font-bold">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-[11px] text-gray-700 font-semibold">
                {filteredReservasi.length > 0 ? (
                  filteredReservasi.map((row, i) => (
                    <tr key={row.id} className={`border-b border-gray-100 transition-colors ${selectedReservasi?.id === row.id ? 'bg-green-50/50' : 'hover:bg-gray-50'}`}>
                      <td className="py-4 px-3 align-top" onClick={() => setSelectedReservasi(row)}>{row.no}</td>
                      
                      <td className="py-4 px-2 align-top cursor-pointer" onClick={() => setSelectedReservasi(row)}>
                        <p className="font-bold text-gray-900">{row.instansi}</p>
                        <p className="text-[10px] font-medium text-gray-500 mt-0.5">{row.alamat}</p>
                      </td>
                      
                      <td className="py-4 px-2 align-top" onClick={() => setSelectedReservasi(row)}>{row.tgl}</td>
                      <td className="py-4 px-2 align-top" onClick={() => setSelectedReservasi(row)}>{row.jml}</td>
                      <td className="py-4 px-2 align-top" onClick={() => setSelectedReservasi(row)}>{row.kord}</td>
                      <td className="py-4 px-2 text-center align-top" onClick={() => setSelectedReservasi(row)}>
                        <span className={`px-2.5 py-1.5 rounded-md ${row.sColor}`}>{row.status}</span>
                      </td>
                      <td className="py-4 px-2 text-center text-gray-400 align-top">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => setSelectedReservasi(row)}
                            className={`p-1.5 rounded transition-colors ${selectedReservasi?.id === row.id ? 'text-[#107058] bg-green-100' : 'hover:text-[#107058] hover:bg-gray-100'}`} 
                            title="Lihat Detail Verifikasi"
                          >
                            <FaEye />
                          </button> 
                          <button 
                            onClick={() => handleEditClick(row)}
                            className="p-1.5 rounded hover:text-[#107058] hover:bg-gray-100 transition-colors" 
                            title="Edit Master Data"
                          >
                            <FaEdit />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-gray-400">Tidak ada data untuk status ini.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {selectedReservasi && (
          <div className="w-full xl:w-1/3 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl sticky top-6 animate-fade-in-right">
             <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-bold text-gray-800 text-sm">Detail Reservasi</h3>
              <div className="flex items-center gap-3">
                <button onClick={() => setSelectedReservasi(null)} className="text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 p-1.5 rounded-md">
                  <FaTimes />
                </button>
              </div>
            </div>
            
            <span className={`inline-block px-3 py-1.5 rounded-md text-[10px] font-bold mb-6 ${selectedReservasi.sColor}`}>
              Status: {selectedReservasi.status}
            </span>
            
            <h4 className="font-bold text-gray-800 text-xs mb-4 uppercase tracking-wider">Informasi Pengunjung</h4>
            <table className="w-full text-xs text-gray-600 mb-6">
              <tbody>
                <tr className="border-b border-gray-50"><td className="py-3 w-2/5">Instansi</td><td className="py-3 font-bold text-gray-900">{selectedReservasi.instansi}</td></tr>
                
                <tr className="border-b border-gray-50"><td className="py-3 align-top">Alamat</td><td className="py-3 font-bold text-gray-900 align-top">{selectedReservasi.alamat}</td></tr>
                
                <tr className="border-b border-gray-50"><td className="py-3">Tanggal</td><td className="py-3 font-bold text-gray-900">{selectedReservasi.tgl}</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3">Jumlah</td><td className="py-3 font-bold text-gray-900">{selectedReservasi.jml}</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3">Koordinator</td><td className="py-3 font-bold text-gray-900">{selectedReservasi.kord}</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3">WhatsApp</td><td className="py-3 font-bold text-[#107058]">{selectedReservasi.hp}</td></tr>
              </tbody>
            </table>
            
            <div className="border-t border-gray-100 pt-5 mb-6 bg-gray-50 -mx-6 px-6 pb-6">
              <label className="block text-xs font-bold text-gray-700 mb-2">Ubah Status</label>
              <select defaultValue={selectedReservasi.status} className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white focus:outline-none focus:border-[#107058] mb-4 font-semibold shadow-sm">
                <option value="Menunggu">Menunggu Konfirmasi</option>
                <option value="Disetujui">Disetujui</option>
                <option value="Selesai">Selesai</option>
              </select>
              <label className="block text-xs font-bold text-gray-700 mb-2">Pesan Balasan Admin</label>
              <textarea rows="3" placeholder="Contoh: Silakan datang jam 09.00 WIB..." className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white focus:outline-none focus:border-[#107058] shadow-sm"></textarea>
            </div>
            
            <div className="flex justify-between gap-3">
              <button className="flex-1 bg-white border border-gray-200 text-gray-600 text-[11px] font-bold py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">Tolak</button>
              <button className="flex-1 bg-[#107058] text-white text-[11px] font-bold py-2.5 rounded-lg hover:bg-[#0a5240] transition-colors shadow-md">Simpan Pembaruan</button>
            </div>
          </div>
        )}
      </div>

      <ModalFormKiss 
        key={editingData ? editingData.id : 'add-new'} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={editingData} 
      />

    </div>
  );
};

export default ManageKiss;