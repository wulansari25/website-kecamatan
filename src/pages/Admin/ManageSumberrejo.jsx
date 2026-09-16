import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaStore, FaLeaf } from 'react-icons/fa';

const ManageSumberrejo = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-bwi-dark">KONTEN SMILE - Profil Sumberrejo</h1>
        <p className="text-sm text-gray-500 mt-1">Kelola teks informasi utama, 4 kartu sorotan, serta visi misi Kelurahan Sumberrejo.</p>
      </div>

      <div className="space-y-6">
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 text-lg">1. Pengaturan Teks Banner</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Judul Utama</label>
              <input type="text" defaultValue="Kelurahan Sumberrejo" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-900 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Keterangan / Subjudul</label>
              <textarea rows="3" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 leading-relaxed" defaultValue="Mengenal lebih dekat profil, potensi, dan kehidupan masyarakat di Kelurahan Sumberrejo, Kecamatan Banyuwangi."></textarea>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mt-4 flex items-center gap-1 italic">
            <span className="font-bold text-gray-500">*Info:</span> Gambar latar (hero) diatur langsung dari sistem utama oleh tim IT agar performa website tetap maksimal.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 text-lg">2. Profil Wilayah & 4 Kartu Sorotan</h3>
          <div className="flex flex-col xl:flex-row gap-8">
            
            <div className="flex-1">
              <label className="block text-sm font-bold text-[#107058] mb-2">Teks Profil Wilayah</label>
              <textarea rows="8" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 leading-relaxed text-justify" defaultValue="Kelurahan Sumberrejo merupakan salah satu kelurahan yang terletak di wilayah administratif Kecamatan Banyuwangi, Kabupaten Banyuwangi. Secara geografis, kelurahan ini berada di lokasi yang strategis dengan aksesibilitas yang mudah dijangkau dari pusat kota.&#13;&#10;&#13;&#10;Masyarakat Sumberrejo dikenal dengan semangat gotong royong dan partisipasi aktif dalam berbagai program pembangunan daerah. Kelurahan ini terus berinovasi dalam mengintegrasikan pelayanan publik berbasis digital untuk mempermudah urusan administrasi warga."></textarea>
            </div>

            <div className="w-full xl:w-[500px]">
              <label className="block text-sm font-bold text-[#107058] mb-4">Nilai 4 Kartu Sorotan</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-[#FAF4EB] p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white p-1.5 rounded-full text-green-500 shadow-sm"><FaMapMarkerAlt className="text-xs"/></div>
                    <span className="text-xs font-bold text-gray-600">Kecamatan</span>
                  </div>
                  <input type="text" defaultValue="Banyuwangi" className="w-full border border-gray-300 rounded p-2 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#107058]" />
                </div>

                <div className="bg-[#FAF4EB] p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white p-1.5 rounded-full text-blue-500 shadow-sm"><FaUsers className="text-xs"/></div>
                    <span className="text-xs font-bold text-gray-600">Kepadatan</span>
                  </div>
                  <input type="text" defaultValue="Padat Penduduk" className="w-full border border-gray-300 rounded p-2 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#107058]" />
                </div>

                <div className="bg-[#FAF4EB] p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white p-1.5 rounded-full text-orange-500 shadow-sm"><FaStore className="text-xs"/></div>
                    <span className="text-xs font-bold text-gray-600">Potensi Ekonomi</span>
                  </div>
                  <input type="text" defaultValue="UMKM & Jasa" className="w-full border border-gray-300 rounded p-2 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#107058]" />
                </div>

                <div className="bg-[#FAF4EB] p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white p-1.5 rounded-full text-emerald-500 shadow-sm"><FaLeaf className="text-xs"/></div>
                    <span className="text-xs font-bold text-gray-600">Lingkungan</span>
                  </div>
                  <input type="text" defaultValue="Kawasan Asri" className="w-full border border-gray-300 rounded p-2 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#107058]" />
                </div>

              </div>
              <p className="text-[10px] text-gray-400 mt-3 italic">*Teks yang dimasukkan di atas akan langsung tampil di dalam 4 kotak putih pada halaman depan.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 text-lg">3. Visi & Misi</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Visi Kelurahan</label>
              <textarea rows="4" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 italic" defaultValue='"Mewujudkan Kelurahan Sumberrejo yang Mandiri, Sejahtera, Berbudaya, dan Unggul dalam Pelayanan Publik Berbasis Digital."'></textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#107058] mb-2">Misi (Gunakan enter untuk baris baru)</label>
              <textarea rows="4" className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 focus:outline-none focus:border-[#107058] text-sm text-gray-700 leading-relaxed" defaultValue="- Meningkatkan kualitas pelayanan administrasi terpadu bagi masyarakat.&#13;&#10;- Mendorong pertumbuhan ekonomi mikro (UMKM) dan pemberdayaan warga.&#13;&#10;- Menciptakan lingkungan yang bersih, aman, dan toleran.&#13;&#10;- Meningkatkan literasi digital masyarakat melalui program edukasi berkelanjutan."></textarea>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-end mt-8 pb-10">
        <button className="bg-[#107058] hover:bg-[#0a5240] text-white px-10 py-3.5 rounded-xl text-base font-bold shadow-lg transition-colors flex items-center gap-2">
          Simpan Semua Perubahan
        </button>
      </div>
    </div>
  );
};

export default ManageSumberrejo;