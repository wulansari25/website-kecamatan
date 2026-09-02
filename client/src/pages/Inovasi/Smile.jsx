import React from 'react';
import { FaExternalLinkAlt, FaMobileAlt, FaFileAlt, FaGraduationCap, FaUsers } from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';
import imgSmileDeskripsi from '../../assets/images/smile.png';
import { Link } from 'react-router-dom';

const Smile = () => {
  return (
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden pb-20">
      <div className="absolute top-20 left-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[800px] right-0 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <div className="container mx-auto px-6 lg:px-16 pt-20 relative z-10">
      
        <div className="bg-[#FAF4EB] rounded-[3rem] shadow-xl overflow-hidden relative mb-20 border border-gray-200">
           <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop" alt="Banner SMILE" className="w-full h-80 lg:h-[450px] object-cover opacity-90" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#011E16] via-[#011E16]/80 to-transparent flex flex-col justify-center px-10 lg:px-20">
              <h1 className="text-5xl lg:text-7xl font-bold text-bwi-gold mb-2 tracking-wider">SMILE</h1>
              <p className="text-white text-lg lg:text-xl font-medium tracking-widest mb-6">Sumberrejo Mobile Integrated, Literated And Educated</p>
              <p className="text-gray-300 max-w-lg text-sm lg:text-base leading-relaxed">
                Portal digital yang mengintegrasi layanan, informasi, edukasi dan akses publik Kecamatan Banyuwangi dalam satu platform.
              </p>
           </div>
        </div>

        <div className="text-center mb-12 relative">
           <div className="absolute top-1/2 left-0 right-0 h-px bg-bwi-gold/50 z-0"></div>
           <span className="bg-bwi-bg px-6 text-bwi-dark font-bold text-xl tracking-widest relative z-10 uppercase">LAYANAN TERINTEGRASI SMILE</span>
           <p className="text-gray-500 text-sm mt-3 relative z-10 bg-bwi-bg inline-block px-4">Akses cepat ke berbagai layanan dan terintegrasi untuk masyarakat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
           <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" alt="Smart Kampung" className="h-40 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow text-center">
                 <h3 className="font-bold text-lg text-bwi-dark mb-2">SMART KAMPUNG</h3>
                 <p className="text-xs text-gray-500 mb-6 flex-grow">Akses layanan dan informasi pembangunan melalui form Smart Kampung.</p>
                 <a href="https://smartkampung.id/" target="_blank" rel="noopener noreferrer" className="bg-[#033D2B] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90">Buka Layanan <FaExternalLinkAlt className="text-[10px]" /></a>
              </div>
           </div>

           <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop" alt="JDIH" className="h-40 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow text-center">
                 <h3 className="font-bold text-lg text-blue-800 mb-1">JDIH</h3>
                 <p className="text-[10px] text-blue-600 font-bold mb-2 uppercase">Jaringan Dokumentasi dan Informasi Hukum</p>
                 <p className="text-xs text-gray-500 mb-6 flex-grow">Akses dokumentasi dan informasi hukum yang lengkap dan terpercaya</p>
                 <a href="https://jdih.banyuwangikab.go.id" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90">Buka Layanan <FaExternalLinkAlt className="text-[10px]" /></a>
              </div>
           </div>

           <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop" alt="Tentang Sumberrejo" className="h-40 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow text-center">
                 <h3 className="font-bold text-lg text-orange-600 mb-2">TENTANG SUMBERREJO</h3>
                 <p className="text-xs text-gray-500 mb-6 flex-grow">Kenali lebih dekat profil, potensi, sejarah dan perkembangan Kelurahan Sumberrejo.</p>
                 <Link to="/inovasi/smile/sumberrejo" className="bg-orange-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-opacity-90 flex justify-center items-center">Selengkapnya <span className="ml-2">→</span></Link>
              </div>
           </div>

           <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop" alt="Layanan Edukasi" className="h-40 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow text-center">
                 <h3 className="font-bold text-lg text-purple-600 mb-2">LAYANAN EDUKASI</h3>
                 <p className="text-xs text-gray-500 mb-6 flex-grow">Informasi lengkap mengenai persyaratan, waktu penyelesaian, dan mekanisme pelayanan publik di Kecamatan Banyuwangi.</p>
                 <Link to="/inovasi/smile/edukasi" className="bg-purple-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-opacity-90 flex justify-center items-center">Selengkapnya <span className="ml-2">→</span></Link>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-lg border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
           <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-bwi-dark mb-6">TENTANG SMILE</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                SMILE (Sumberrejo Mobile Integrated, Literated and Educated) merupakan inovasi digital Kecamatan Banyuwangi yang dirancang untuk memudahkan masyarakat mendapatkan layanan, informasi, dan edukasi secara cepat, terintegrasi, dan terpercaya.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 text-center">
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4 text-2xl text-purple-600 shadow-sm border border-purple-100">
                       <FaUsers />
                    </div>
                    <p className="text-sm font-bold text-bwi-dark">Terintegrasi</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-2xl text-blue-600 shadow-sm border border-blue-100">
                       <FaFileAlt />
                    </div>
                    <p className="text-sm font-bold text-bwi-dark">Informatif</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 text-2xl text-emerald-700 shadow-sm border border-emerald-100">
                       <FaGraduationCap />
                    </div>
                    <p className="text-sm font-bold text-bwi-dark">Edukatif</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-2xl text-green-600 shadow-sm border border-green-100">
                       <FaMobileAlt />
                    </div>
                    <p className="text-sm font-bold text-bwi-dark">Mudah Diakses</p>
                 </div>
              </div>
           </div>
           
           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img src={imgSmileDeskripsi} alt="Ilustrasi Konsep SMILE" className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Smile;