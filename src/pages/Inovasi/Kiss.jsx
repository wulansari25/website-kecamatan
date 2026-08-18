import React, { useState, useEffect } from 'react';
import { FaVideo, FaWhatsapp, FaCheckCircle, FaTimes } from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';
import tutorialKiss from '../../assets/videos/tutorial-kiss.mp4';

const Kiss = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderImages = [
    "https://images.unsplash.com/photo-1535025639604-9a804c092faa?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?q=80&w=1200&auto=format&fit=crop"
  ];

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
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden pb-20">
      <div className="absolute top-20 left-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[800px] right-0 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <div className="container mx-auto px-6 lg:px-16 pt-20 relative z-10">

        <div className="bg-bwi-dark rounded-[3rem] shadow-xl overflow-hidden relative mb-12 border border-gray-200 h-[450px] lg:h-[500px] group">
           {sliderImages.map((img, index) => (
             <img 
               key={index}
               src={img} 
               alt={`Slider KISS ${index + 1}`} 
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-40 ${currentIndex === index ? 'opacity-40 z-0' : 'opacity-0 -z-10'}`} 
             />
           ))}

           <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-20 z-10">
              <h1 className="text-5xl lg:text-7xl font-bold text-bwi-gold mb-2 tracking-wider">KISS</h1>
              <p className="text-white text-lg lg:text-xl font-medium tracking-widest mb-6">Kampung Ikan Sumber Seng</p>
              <p className="text-gray-300 max-w-lg text-sm lg:text-base leading-relaxed mb-8">
                Pusat edukasi budidaya perikanan, pengelolaan lingkungan, dan pemberdayaan masyarakat di Kecamatan Banyuwangi.
              </p>
              <button onClick={() => setShowVideo(true)} className="bg-white text-bwi-dark px-8 py-3.5 rounded-xl font-bold flex items-center gap-3 w-max hover:bg-gray-100 transition-all shadow-lg hover:scale-105">
                <FaVideo className="text-xl" /> Lihat Panduan Reservasi
              </button>
           </div>
           
           <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-20">❮</button>
           <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-20">❯</button>

           <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
             {sliderImages.map((_, slideIndex) => (
               <div 
                 key={slideIndex} 
                 onClick={() => setCurrentIndex(slideIndex)} 
                 className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-bwi-gold w-8' : 'bg-white/60 hover:bg-white'}`}
               ></div>
             ))}
           </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 mb-16">
           <div className="w-full lg:w-1/4 border-r border-gray-100 pr-6">
              <h4 className="font-bold text-lg text-bwi-dark mb-3 flex items-center gap-2">🐟 Tentang KISS</h4>
              <p className="text-sm text-gray-600 leading-relaxed">KISS (Kampung Ikan Sumber Seng) adalah wisata edukasi perikanan. Terbuka untuk instansi pemerintah, sekolah, perguruan tinggi, PKK, komunitas, dan masyarakat umum.</p>
           </div>
           <div className="w-full lg:w-1/4 border-r border-gray-100 pr-6">
              <h4 className="font-bold text-lg text-bwi-dark mb-3">🕒 Jam Kunjungan</h4>
              <div className="text-sm text-gray-600 space-y-4">
                 <div><p className="font-bold text-bwi-dark">Senin - Jumat</p><p>08.00 - 15.00 WIB</p></div>
                 <div><p className="font-bold text-bwi-dark">Sabtu</p><p>08.00 - 12.00 WIB</p></div>
                 <p className="text-[10px] text-red-500 italic">*Kunjungan di luar jam tersebut harus dengan konfirmasi admin.</p>
              </div>
           </div>
           <div className="w-full lg:w-1/4 border-r border-gray-100 pr-6">
              <h4 className="font-bold text-lg text-bwi-dark mb-3">✅ Fasilitas Edukasi</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                 <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Kolam Budidaya Ikan</li>
                 <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Rumah Edukasi</li>
                 <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Percontohan Pakan Ikan</li>
                 <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Area Praktik & Pelatihan</li>
                 <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Gazebo & Aula Mini</li>
              </ul>
           </div>
           <div className="w-full lg:w-1/4">
              <h4 className="font-bold text-lg text-bwi-dark mb-3">🎧 Butuh Bantuan?</h4>
              <p className="text-sm text-gray-600 mb-4">Jika mengalami kendala reservasi, silakan menghubungi kami melalui WhatsApp.</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-700 border border-green-200 px-4 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-green-200 w-max"><FaWhatsapp className="text-lg" /> Hubungi via WhatsApp</a>
           </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 lg:p-12">
           <div className="mb-10">
              <h3 className="text-2xl font-bold text-bwi-dark flex items-center gap-3">📅 Form Reservasi Kunjungan KISS</h3>
              <p className="text-gray-500 text-sm mt-2">Silakan lengkapi formulir berikut untuk melakukan reservasi kunjungan ke Kampung Ikan Sumber Seng (KISS).</p>
           </div>

           <form className="space-y-10">
              <div>
                 <h4 className="font-bold text-bwi-dark text-lg mb-4 flex items-center gap-2 text-green-700"><span className="bg-green-100 p-1.5 rounded text-sm">1</span> Data Instansi / Kelompok</h4>
                 <div className="space-y-6 pl-0 md:pl-8">
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Nama Instansi / Sekolah / Kelompok PKK</label>
                       <input type="text" placeholder="Contoh: SMP Negeri 1 Banyuwangi / PKK Kelurahan Sumberrejo" className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50/50" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Instansi / Sekolah / Kelompok PKK</label>
                       <input type="text" placeholder="Masukkan alamat lengkap instansi / sekolah / kelompok PKK" className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50/50" />
                    </div>
                 </div>
              </div>

              <div>
                 <h4 className="font-bold text-bwi-dark text-lg mb-4 flex items-center gap-2 text-green-700"><span className="bg-green-100 p-1.5 rounded text-sm">2</span> Data Kunjungan</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-8">
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Tanggal Kunjungan</label>
                       <input type="date" className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50/50 text-gray-500" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Jumlah Peserta</label>
                       <div className="flex">
                         <input type="number" placeholder="Contoh: 30" className="w-full p-4 rounded-l-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50/50" />
                         <span className="bg-gray-200 border border-l-0 border-gray-300 px-6 flex items-center rounded-r-xl font-medium text-gray-600">Orang</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div>
                 <h4 className="font-bold text-bwi-dark text-lg mb-4 flex items-center gap-2 text-green-700"><span className="bg-green-100 p-1.5 rounded text-sm">3</span> Koordinator / Penanggung Jawab</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-8">
                    <div>
                       <input type="text" placeholder="Masukkan nama koordinator" className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50/50" />
                    </div>
                    <div className="flex gap-3">
                       <select className="p-4 rounded-xl border border-gray-300 bg-gray-50/50 outline-none w-24">
                          <option>+62</option>
                       </select>
                       <input type="tel" placeholder="Contoh: 8123456789" className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50/50" />
                    </div>
                 </div>
              </div>

              <div className="pt-6 flex flex-col md:flex-row items-center justify-end gap-4 border-t border-gray-100">
                 <button type="button" className="w-full md:w-auto px-10 py-4 font-bold text-gray-600 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">✕ Batal</button>
                 <button type="submit" className="w-full md:w-auto px-12 py-4 font-bold text-white bg-bwi-dark rounded-xl hover:bg-[#022c21] transition-colors shadow-lg shadow-green-900/20">✈ Kirim Reservasi</button>
              </div>
              <p className="text-center text-xs text-green-700 flex items-center justify-center gap-2 mt-4"><FaCheckCircle /> Data yang Anda berikan akan kami jaga kerahasiaannya dan hanya digunakan untuk keperluan reservasi kunjungan.</p>
           </form>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden relative shadow-2xl">
            <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-red-600 transition-colors shadow-lg"><FaTimes className="text-xl" /></button>
            <div className="p-6 border-b border-gray-100 bg-[#FAF4EB]">
               <h3 className="font-bold text-xl text-bwi-dark">Video Panduan Reservasi KISS</h3>
            </div>
            <div className="aspect-video bg-black w-full">
               <video src={tutorialKiss} className="w-full h-full" autoPlay controls></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kiss;