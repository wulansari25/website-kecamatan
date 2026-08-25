import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLandmark, FaMapMarkedAlt, FaSitemap } from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';
import kantorCamatBg from '../../assets/images/kantor-camat.png'; 
import logoSmile from '../../assets/images/logo-smile.png';
import logoKiss from '../../assets/images/logo-kiss.png';
import logoEsakinah from '../../assets/images/logo-esakinah.png';
import profilVideo from '../../assets/videos/selamat-datang.mp4';
import imgKelereng from '../../assets/images/lomba-kelereng.JPG';
import imgKeluarga from '../../assets/images/keluarga.jpeg';
import imgTenis from '../../assets/images/lomba-tenis.jpeg';
import imgCamat from '../../assets/images/bapak-camat.JPG';
import imgKelereng2 from '../../assets/images/kelereng2.JPG';
import imgCamatLurah from '../../assets/images/camat-lurah.jpeg';


const Home = () => {
  const sliderImages = [
    imgKelereng,
    imgKeluarga,
    imgTenis,
    imgCamat,
    imgKelereng2,
    imgCamatLurah
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden">
      
      <div className="absolute top-80 -left-16 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[1000px] -right-20 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[1800px] left-0 w-72 h-80 opacity-5 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[2600px] right-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <section 
        className="relative h-[700px] flex items-center bg-cover bg-center pt-16"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(1, 30, 22, 0.95) 0%, rgba(1, 30, 22, 0.85) 30%, rgba(1, 30, 22, 0.4) 70%, rgba(1, 30, 22, 0) 100%), url(${kantorCamatBg})` 
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 relative z-20 text-white">
          <p className="text-bwi-gold text-[52px] mb-2 leading-none" style={{ fontFamily: "'Rage Italic', cursive" }}>
            Selamat Datang di
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight drop-shadow-lg">
            KANTOR CAMAT <br/> BANYUWANGI
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light drop-shadow-md leading-relaxed">
            Melayani dengan integritas,<br/>
            membangun Kecamatan Banyuwangi yang maju.
          </p>
        </div>
      </section>

      <section className="relative py-24 z-10">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-px bg-bwi-gold w-12"></div>
               <h4 className="text-bwi-gold font-bold tracking-widest text-lg uppercase">Tentang Kecamatan</h4>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bwi-dark mb-6 leading-tight">KECAMATAN BANYUWANGI</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
              Kecamatan Banyuwangi merupakan salah satu kecamatan strategis di Kabupaten Banyuwangi yang 
              memiliki peran penting dalam pelayanan publik, pemberdayaan masyarakat, serta pembangunan 
              wilayah yang berkelanjutan.
            </p>
            <Link to="/profil" className="bg-bwi-dark text-white px-8 py-4 flex items-center w-max gap-3 hover:bg-green-900 transition-all rounded-lg text-base font-semibold shadow-md">
              Selengkapnya tentang kami <FaArrowRight className="text-bwi-gold text-lg" />
            </Link>
            
            <div className="flex gap-12 mt-16">
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 bg-white group-hover:bg-bwi-dark transition-all shadow-sm group-hover:border-bwi-dark">
                  <FaLandmark className="text-2xl text-bwi-dark group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Sejarah</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 bg-white group-hover:bg-bwi-dark transition-all shadow-sm group-hover:border-bwi-dark">
                  <FaMapMarkedAlt className="text-2xl text-bwi-dark group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Wilayah</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 bg-white group-hover:bg-bwi-dark transition-all shadow-sm group-hover:border-bwi-dark">
                  <FaSitemap className="text-2xl text-bwi-dark group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-800 text-center leading-tight uppercase tracking-wide">Struktur<br/>Organisasi</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center gap-4">
            <button onClick={prevSlide} className="text-bwi-gold text-4xl font-light hover:text-bwi-dark transition-colors cursor-pointer p-2">❮</button>
            <div className="w-full h-[300px] lg:h-[350px] rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
               {sliderImages.map((img, index) => (
                 <img 
                   key={index}
                   src={img} 
                   alt={`Pemandangan ${index + 1}`} 
                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`} 
                 />
               ))}
               <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                 {sliderImages.map((_, slideIndex) => (
                   <div 
                     key={slideIndex} 
                     onClick={() => setCurrentIndex(slideIndex)} 
                     className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-bwi-gold w-8' : 'bg-white/60 hover:bg-white'}`}
                   ></div>
                 ))}
               </div>
            </div>
            <button onClick={nextSlide} className="text-bwi-gold text-4xl font-light hover:text-bwi-dark transition-colors cursor-pointer p-2">❯</button>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full flex flex-col">
        <div className="w-full bg-bwi-dark text-white py-20 lg:py-24 shadow-inner">
           <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
               <div className="w-full md:w-1/2 pr-0 md:pr-10">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="h-px bg-bwi-gold w-12"></div>
                     <h4 className="text-bwi-gold font-bold tracking-widest text-lg uppercase">Visi Misi</h4>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">KECAMATAN BANYUWANGI</h2>
                  <p className="text-gray-300 text-lg lg:text-xl leading-relaxed font-light">
                    Mengenal lebih dekat dengan potensi, keindahan alam, dan kehidupan masyarakat Kecamatan Banyuwangi.
                  </p>
               </div>
               <div className="w-full md:w-1/2 h-72 lg:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gray-700/50 bg-black">
                  <video 
                    src={profilVideo} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    controls
                  ></video>
               </div>
           </div>
        </div>

        <div className="w-full bg-[#FAF4EB] py-20 lg:py-24 text-bwi-dark shadow-md relative z-10">
           <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
               <div className="w-56 lg:w-64 h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl shrink-0 border-[6px] border-white relative">
                  <div className="absolute inset-0 ring-1 ring-black/5 z-10 rounded-xl pointer-events-none"></div>
                  <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop" alt="Camat Banyuwangi" className="w-full h-full object-cover object-top" />
               </div>
               <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-bwi-gold mb-6 uppercase tracking-wide">Camat Banyuwangi</h3>
                  <div className="flex items-start">
                    <span className="text-7xl text-bwi-gold font-serif leading-none mr-4 mt-2">“</span>
                    <p className="text-gray-800 text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                       Bersama masyarakat, kami menghadirkan pelayanan yang berkualitas untuk mewujudkan Kecamatan Banyuwangi yang maju dan sejahtera.
                    </p>
                  </div>
                  <h4 className="font-bold text-2xl text-bwi-dark">Andik Basuki, S.AB., M.Si.</h4>
                  <p className="text-base text-gray-500 font-medium mb-2 uppercase tracking-wide">Camat Banyuwangi</p>
                  <div className="mt-4 text-5xl lg:text-6xl opacity-40 text-gray-700" style={{ fontFamily: "'Rage Italic', cursive" }}>Andik Basuki</div>
               </div>
           </div>
        </div>
        
        <div className="w-full bg-bwi-dark py-16 shadow-inner relative z-0">
           <div className="container mx-auto px-6 lg:px-16">
               <h4 className="text-center text-bwi-gold font-bold text-base tracking-widest mb-12 uppercase">Kecamatan Banyuwangi Dalam Angka</h4>
               <div className="flex flex-wrap justify-center md:justify-between gap-10 text-center text-white px-4 lg:px-10">
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                    <span className="text-bwi-gold text-5xl">👥</span>
                    <div className="text-center lg:text-left"><p className="font-bold text-3xl tracking-wide">85.421</p><p className="text-xs text-gray-400 font-semibold uppercase mt-1 tracking-wider">Penduduk</p></div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gray-700"></div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                    <span className="text-bwi-gold text-5xl">🏛️</span>
                    <div className="text-center lg:text-left"><p className="font-bold text-3xl tracking-wide">18</p><p className="text-xs text-gray-400 font-semibold uppercase mt-1 tracking-wider">Kelurahan</p></div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gray-700"></div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                    <span className="text-bwi-gold text-5xl">🏠</span>
                    <div className="text-center lg:text-left"><p className="font-bold text-3xl tracking-wide">72</p><p className="text-xs text-gray-400 font-semibold uppercase mt-1 tracking-wider">RW</p></div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gray-700"></div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                    <span className="text-bwi-gold text-5xl">🏪</span>
                    <div className="text-center lg:text-left"><p className="font-bold text-3xl tracking-wide">470</p><p className="text-xs text-gray-400 font-semibold uppercase mt-1 tracking-wider">UMKM</p></div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gray-700"></div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                    <span className="text-bwi-gold text-5xl">🗺️</span>
                    <div className="text-center lg:text-left"><p className="font-bold text-3xl tracking-wide">32 KM</p><p className="text-xs text-gray-400 font-semibold uppercase mt-1 tracking-wider">Luas Wilayah</p></div>
                  </div>
               </div>
           </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-serif font-bold text-bwi-dark mb-4 uppercase">Inovasi Kecamatan Banyuwangi</h2>
          <p className="text-gray-600 mb-16 text-lg">Tiga Inovasi unggulan untuk pelayanan yang lebih baik bagi masyarakat</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col relative pb-8 group hover:-translate-y-2 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" alt="SMILE" className="h-72 w-full object-cover" />
              <div className="p-8 bg-white z-10 rounded-tl-[3rem] -mt-12 mx-3 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-4 mb-4">
                   <img src={logoSmile} alt="Logo SMILE" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
                   <h3 className="font-bold text-2xl text-bwi-dark">SMILE</h3>
                 </div>
                 <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-5 uppercase line-clamp-2">Sumberrejo Mobile Integrated, Literated and Educated</p>
                 <p className="text-sm text-gray-600 mb-8 leading-relaxed flex-grow">SMILE adalah layanan informasi dan pengajuan kebutuhan masyarakat secara online yang mudah, cepat dan transparan.</p>
                 <Link to="/inovasi/smile" className="bg-bwi-dark text-white px-6 py-3.5 text-sm font-semibold rounded-lg hover:bg-bwi-news transition-colors flex items-center justify-center gap-3">Baca selengkapnya <FaArrowRight className="text-bwi-gold" /></Link>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col relative pb-8 group hover:-translate-y-2 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=800&auto=format&fit=crop" alt="KISS" className="h-72 w-full object-cover" />
              <div className="p-8 bg-white z-10 rounded-tl-[3rem] -mt-12 mx-3 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-4 mb-4">
                   <img src={logoKiss} alt="Logo KISS" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
                   <h3 className="font-bold text-2xl text-bwi-dark">KISS</h3>
                 </div>
                 <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-5 uppercase line-clamp-2">Kampung Ikan Sumber Seng</p>
                 <p className="text-sm text-gray-600 mb-8 leading-relaxed flex-grow">KISS (Kampung Ikan Sumber Seng) merupakan wisata edukasi perikanan dan kuliner khas Banyuwangi. Reservasi terlebih dahulu sebelum berkunjung.</p>
                 <Link to="/inovasi/kiss" className="bg-bwi-dark text-white px-6 py-3.5 text-sm font-semibold rounded-lg hover:bg-bwi-news transition-colors flex items-center justify-center gap-3">Baca selengkapnya <FaArrowRight className="text-bwi-gold" /></Link>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col relative pb-8 group hover:-translate-y-2 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" alt="E-SAKINAH" className="h-72 w-full object-cover" />
              <div className="p-8 bg-white z-10 rounded-tl-[3rem] -mt-12 mx-3 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-4 mb-4">
                   <img src={logoEsakinah} alt="Logo E-SAKINAH" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
                   <h3 className="font-bold text-2xl text-bwi-dark">E-SAKINAH</h3>
                 </div>
                 <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-5 uppercase line-clamp-2">Sistem Informasi Pencatatan Dispensasi Nikah</p>
                 <p className="text-sm text-gray-600 mb-8 leading-relaxed flex-grow">E-Sakinah adalah sistem informasi pencatatan dan pengajuan dispensasi nikah secara online yang terintegrasi dan aman.</p>
                 <Link to="/inovasi/e-sakinah" className="bg-bwi-dark text-white px-6 py-3.5 text-sm font-semibold rounded-lg hover:bg-bwi-news transition-colors flex items-center justify-center gap-3">Baca selengkapnya <FaArrowRight className="text-bwi-gold" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col xl:flex-row gap-16">
          <div className="w-full xl:w-2/3">
            <h3 className="text-3xl font-bold font-serif text-bwi-dark mb-8 uppercase border-l-4 border-bwi-gold pl-4">Berita Terkini</h3>
            <div className="flex flex-col md:flex-row gap-8 mb-10 bg-bwi-bg p-5 rounded-3xl shadow-sm border border-gray-100 group cursor-pointer hover:shadow-lg transition-shadow">
               <div className="w-full md:w-1/2 h-72 rounded-2xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" alt="Musrenbang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-center pr-4">
                 <p className="text-bwi-gold text-sm font-bold mb-2 tracking-widest uppercase">23 Juli 2026</p>
                 <h4 className="text-2xl font-bold text-bwi-dark mb-4 leading-snug group-hover:text-green-700 transition-colors">Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar.</h4>
                 <p className="text-gray-600 text-base mb-8 leading-relaxed line-clamp-3">Musrenbang tahun 2026 membahas rencana pembangunan prioritas yang akan dilaksanakan di Kecamatan Banyuwangi untuk meningkatkan kesejahteraan masyarakat secara menyeluruh.</p>
                 <Link to="/berita" className="bg-bwi-dark text-white px-6 py-3.5 text-sm font-semibold rounded-lg hover:bg-bwi-news transition-colors flex items-center justify-between w-max gap-4">Baca selengkapnya <FaArrowRight className="text-bwi-gold" /></Link>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Link to="/berita" className="flex gap-5 items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-28 h-24 overflow-hidden rounded-xl shrink-0">
                     <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop" alt="Berita 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-xs mb-1 font-semibold tracking-wide">13 Juli 2026</p>
                    <h5 className="font-bold text-base text-bwi-dark leading-snug group-hover:text-green-700">Pelatihan Digital Marketing bagi seluruh UMKM.</h5>
                  </div>
               </Link>
               <Link to="/berita" className="flex gap-5 items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-28 h-24 overflow-hidden rounded-xl shrink-0">
                     <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=400&auto=format&fit=crop" alt="Berita 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-xs mb-1 font-semibold tracking-wide">15 Juli 2026</p>
                    <h5 className="font-bold text-base text-bwi-dark leading-snug group-hover:text-green-700">Upacara peringatan Hari Jadi Banyuwangi ke-272.</h5>
                  </div>
               </Link>
            </div>
          </div>

          <div className="w-full xl:w-1/3">
            <h3 className="text-3xl font-bold font-serif text-bwi-dark mb-8 uppercase border-l-4 border-bwi-gold pl-4">Agenda Kegiatan</h3>
            <div className="flex flex-col gap-4">
               {[
                 { tgl: "26", bln: "JUL", title: "Rapat Koordinasi Kecamatan", time: "08.00-10.00 WIB", loc: "Aula Kecamatan" },
                 { tgl: "27", bln: "JUL", title: "Rapat Koordinasi Kecamatan", time: "08.30-12.00 WIB", loc: "Kelurahan Kepatihan" },
                 { tgl: "30", bln: "JUL", title: "Rapat Koordinasi Kecamatan", time: "19.00-Selesai", loc: "Aula Kecamatan" },
                 { tgl: "30", bln: "JUL", title: "Rapat Koordinasi Kecamatan", time: "19.00-Selesai", loc: "Aula Kecamatan" },
               ].map((agenda, index) => (
                 <div key={index} className="flex gap-5 items-center bg-bwi-bg p-5 rounded-2xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform">
                    <div className="bg-bwi-dark text-bwi-gold w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 shadow-inner">
                      <span className="text-2xl leading-none">{agenda.tgl}</span>
                      <span className="text-[11px] uppercase tracking-widest mt-1">{agenda.bln}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-base text-bwi-dark mb-1">{agenda.title}</h5>
                      <p className="text-gray-600 text-xs mt-1 font-medium">{agenda.time} | {agenda.loc}</p>
                    </div>
                 </div>
               ))}
            </div>
            <Link to="/berita" className="w-full mt-6 py-4 border-2 border-bwi-dark text-bwi-dark font-bold text-sm rounded-xl hover:bg-bwi-dark hover:text-white transition-colors block text-center">Lihat Semua Agenda</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;