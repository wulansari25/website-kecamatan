import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaLeaf, FaStore } from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';

const Sumberrejo = () => {
  return (
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden pb-20">
      <div className="absolute top-20 left-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[800px] right-0 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <section className="relative h-[450px] flex items-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to right, rgba(1, 30, 22, 0.95) 0%, rgba(1, 30, 22, 0.7) 100%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop')` }}>
        <div className="container mx-auto px-6 lg:px-16 relative z-20 text-white pt-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 font-serif text-bwi-gold">Kelurahan Sumberrejo</h1>
          <p className="text-lg lg:text-xl max-w-2xl font-light drop-shadow-md leading-relaxed">
            Mengenal lebih dekat profil, potensi, dan kehidupan masyarakat di Kelurahan Sumberrejo, Kecamatan Banyuwangi.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-16 py-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="w-full lg:w-1/2">
             <h2 className="text-3xl font-bold text-bwi-dark mb-6 border-l-4 border-bwi-gold pl-4">Profil Wilayah</h2>
             <p className="text-gray-600 leading-relaxed text-justify mb-4">
               Kelurahan Sumberrejo merupakan salah satu kelurahan yang terletak di wilayah administratif Kecamatan Banyuwangi, Kabupaten Banyuwangi. Secara geografis, kelurahan ini berada di lokasi yang strategis dengan aksesibilitas yang mudah dijangkau dari pusat kota.
             </p>
             <p className="text-gray-600 leading-relaxed text-justify">
               Masyarakat Sumberrejo dikenal dengan semangat gotong royong dan partisipasi aktif dalam berbagai program pembangunan daerah. Kelurahan ini terus berinovasi dalam mengintegrasikan pelayanan publik berbasis digital untuk mempermudah urusan administrasi warga.
             </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-xl shrink-0"><FaMapMarkerAlt /></div>
                <div>
                   <p className="text-sm text-gray-500 font-bold">Kecamatan</p>
                   <p className="text-lg font-bold text-bwi-dark">Banyuwangi</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0"><FaUsers /></div>
                <div>
                   <p className="text-sm text-gray-500 font-bold">Kepadatan</p>
                   <p className="text-lg font-bold text-bwi-dark">Padat Penduduk</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl shrink-0"><FaStore /></div>
                <div>
                   <p className="text-sm text-gray-500 font-bold">Potensi Ekonomi</p>
                   <p className="text-lg font-bold text-bwi-dark">UMKM & Jasa</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-xl shrink-0"><FaLeaf /></div>
                <div>
                   <p className="text-sm text-gray-500 font-bold">Lingkungan</p>
                   <p className="text-lg font-bold text-bwi-dark">Kawasan Asri</p>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-[#FAF4EB] rounded-[3rem] p-10 lg:p-16 shadow-lg border border-gray-100 mb-16">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-bwi-dark mb-4">Visi & Misi Kelurahan</h2>
              <div className="w-24 h-1 bg-bwi-gold mx-auto"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                 <h3 className="text-2xl font-bold text-bwi-dark mb-4 text-center">Visi</h3>
                 <p className="text-gray-600 text-center text-lg italic leading-relaxed">
                   "Mewujudkan Kelurahan Sumberrejo yang Mandiri, Sejahtera, Berbudaya, dan Unggul dalam Pelayanan Publik Berbasis Digital."
                 </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                 <h3 className="text-2xl font-bold text-bwi-dark mb-4 text-center">Misi</h3>
                 <ul className="text-gray-600 space-y-3 list-disc list-inside leading-relaxed text-justify">
                    <li>Meningkatkan kualitas pelayanan administrasi terpadu bagi masyarakat.</li>
                    <li>Mendorong pertumbuhan ekonomi mikro (UMKM) dan pemberdayaan warga.</li>
                    <li>Menciptakan lingkungan yang bersih, aman, dan toleran.</li>
                    <li>Meningkatkan literasi digital masyarakat melalui program edukasi berkelanjutan.</li>
                 </ul>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Sumberrejo;