import React, { useState, useEffect } from 'react';
import { FaVideo, FaWhatsapp, FaCheckCircle, FaTimes, FaUpload } from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';
import tutorialEsakinah from '../../assets/videos/tutorial-esakinah.mp4';

const ESakinah = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderImages = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop"
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
      <div className="absolute top-[1600px] left-0 w-72 h-80 opacity-5 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <div className="container mx-auto px-6 lg:px-16 pt-20 relative z-10">

        <div className="bg-bwi-dark rounded-[3rem] shadow-2xl overflow-hidden relative mb-12 border border-gray-700 h-[450px] lg:h-[500px] group">
           {sliderImages.map((img, index) => (
             <img 
               key={index}
               src={img} 
               alt={`Slider e-Sakinah ${index + 1}`} 
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-40 ${currentIndex === index ? 'opacity-40 z-0' : 'opacity-0 -z-10'}`} 
             />
           ))}
           
           <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-20 z-10">
              <h1 className="text-6xl lg:text-8xl font-bold text-bwi-gold mb-2 tracking-wide" style={{ fontFamily: "'Rage Italic', cursive" }}>e-Sakinah</h1>
              <p className="text-white text-xl lg:text-2xl font-bold tracking-wide mb-6">Sistem Informasi Pencatatan Dispensasi Nikah</p>
              <p className="text-gray-300 max-w-lg text-sm lg:text-base leading-relaxed mb-8">
                Layanan online untuk memudahkan masyarakat dalam pengajuan dispensasi nikah secara cepat, mudah, aman, dan transparan.
              </p>
              <button onClick={() => setShowVideo(true)} className="bg-white text-bwi-dark px-8 py-3.5 rounded-xl font-bold flex items-center gap-3 w-max hover:bg-gray-200 transition-all shadow-lg hover:scale-105">
                <FaVideo className="text-xl" /> Video Tutorial
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

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 mb-12">
           <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 pr-0 lg:pr-6">
              <h4 className="font-bold text-lg text-bwi-dark mb-3 flex items-center gap-2 text-green-700">ℹ️ Tentang e-Sakinah</h4>
              <p className="text-sm text-gray-600 leading-relaxed">e-Sakinah merupakan inovasi pelayanan digital Kecamatan Banyuwangi untuk memfasilitasi masyarakat dalam proses pengajuan dispensasi nikah tanpa harus datang ke kantor.</p>
           </div>
           <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 pr-0 lg:pr-6">
              <h4 className="font-bold text-lg text-bwi-dark mb-3">✨ Keunggulan Layanan</h4>
              <ul className="text-sm text-gray-600 space-y-3">
                 <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1 shrink-0" /> Pengajuan dapat dilakukan kapan saja dan dimana saja.</li>
                 <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1 shrink-0" /> Proses verifikasi lebih cepat.</li>
                 <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1 shrink-0" /> Informasi pengajuan dapat dipantau real-time.</li>
                 <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1 shrink-0" /> Data aman dan terjamin kerahasiaannya.</li>
              </ul>
           </div>
           <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 pr-0 lg:pr-6">
              <h4 className="font-bold text-lg text-bwi-dark mb-3">📄 Persyaratan</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Siapkan dokumen identitas diri, dokumen pendukung dari kelurahan, dan dokumen opsional (jika diperlukan) sebelum melakukan pengajuan pada form di bawah.</p>
           </div>
           <div className="w-full lg:w-1/4">
              <h4 className="font-bold text-lg text-bwi-dark mb-3">🎧 Butuh Bantuan?</h4>
              <p className="text-sm text-gray-600 mb-4">Jika mengalami kendala saat pengajuan, silakan menghubungi kami melalui WhatsApp.</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-700 border border-green-200 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-green-200 w-max transition-colors"><FaWhatsapp className="text-lg" /> Hubungi via WhatsApp</a>
           </div>
        </div>

        <div className="mb-16 px-4">
           <h3 className="text-2xl font-bold text-bwi-dark mb-8">Alur Pengajuan e-Sakinah</h3>
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
              <div className="hidden md:block absolute top-8 left-10 right-10 h-1 bg-green-200 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-bwi-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 ring-8 ring-bwi-bg">1</div>
                 <h4 className="font-bold text-bwi-dark mb-2">Isi Formulir</h4>
                 <p className="text-xs text-gray-500">Lengkapi data diri Anda dan pasangan.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-bwi-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 ring-8 ring-bwi-bg">2</div>
                 <h4 className="font-bold text-bwi-dark mb-2">Upload Dokumen</h4>
                 <p className="text-xs text-gray-500">Unggah semua dokumen yang diperlukan.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-bwi-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 ring-8 ring-bwi-bg">3</div>
                 <h4 className="font-bold text-bwi-dark mb-2">Verifikasi</h4>
                 <p className="text-xs text-gray-500">Dokumen akan diverifikasi oleh petugas.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-bwi-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 ring-8 ring-bwi-bg">4</div>
                 <h4 className="font-bold text-bwi-dark mb-2">Selesai</h4>
                 <p className="text-xs text-gray-500">Pengajuan selesai dan status dapat dipantau.</p>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 lg:p-12">
           <h3 className="text-3xl font-bold text-bwi-dark mb-10 border-b border-gray-100 pb-6">Form Pengajuan e-Sakinah</h3>
           
           <form className="flex flex-col gap-10">
              
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                 
                 <div className="w-full lg:w-1/2 space-y-10">
                    <div>
                       <h4 className="font-bold text-green-800 text-lg mb-4">A. Data Pemohon</h4>
                       <div className="space-y-5">
                          <div>
                             <label className="block text-sm font-bold text-gray-700 mb-2">Nama Pribadi</label>
                             <input type="text" placeholder="Masukkan nama lengkap Anda" className="w-full p-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50" />
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-gray-700 mb-2">Nama Pasangan</label>
                             <input type="text" placeholder="Masukkan nama lengkap pasangan" className="w-full p-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-gray-50" />
                          </div>
                       </div>
                    </div>

                    <div>
                       <h4 className="font-bold text-green-800 text-lg mb-4">B. Dokumen Identitas</h4>
                       <div className="space-y-4">
                          {[
                            "Foto / Scan KTP Pribadi", "Foto / Scan Akte Kelahiran", "Foto / Scan KTP Wali Nikah", 
                            "Foto / Scan KK Wali Nikah", "Foto / Scan KTP 2 Orang Saksi"
                          ].map((doc, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                               <div className="flex items-center gap-4">
                                  <div className="bg-green-50 p-3 rounded-lg text-green-700"><FaUpload className="text-lg" /></div>
                                  <div>
                                     <p className="font-bold text-sm text-bwi-dark mb-1">{doc}</p>
                                     <button type="button" className="bg-gray-100 px-4 py-1.5 rounded text-xs font-semibold text-gray-600 hover:bg-gray-200 w-max">Pilih File</button>
                                  </div>
                               </div>
                               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest sm:text-right mt-2 sm:mt-0">Format: JPG, PNG, PDF</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="w-full lg:w-1/2 space-y-10">
                    <div className="bg-[#FAF4EB] p-6 rounded-2xl border border-gray-200">
                       <h4 className="font-bold text-bwi-dark mb-3">Catatan Dokumen Opsional</h4>
                       <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2 font-medium">
                          <li>Akte cerai bagi yang sudah bercerai.</li>
                          <li>Surat pengampuan dari pengadilan (bila belum cukup umur).</li>
                          <li>Pindah nikah dari kabupaten (diwajibkan untuk yang beda/pindah kabupaten).</li>
                       </ol>
                    </div>

                    <div>
                       <h4 className="font-bold text-green-800 text-lg mb-4">C. Dokumen Pendukung</h4>
                       <div className="space-y-4">
                          {[
                            "Foto / Scan Keterangan Sehat dari Puskesmas", 
                            "Foto / Scan Elsimil dari PL KB", 
                            "Foto / Scan Form N1 s/d N5 dari Kelurahan"
                          ].map((doc, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                               <div className="flex items-center gap-4">
                                  <div className="bg-green-50 p-3 rounded-lg text-green-700"><FaUpload className="text-lg" /></div>
                                  <div>
                                     <p className="font-bold text-sm text-bwi-dark mb-1">{doc}</p>
                                     <button type="button" className="bg-gray-100 px-4 py-1.5 rounded text-xs font-semibold text-gray-600 hover:bg-gray-200 w-max">Pilih File</button>
                                  </div>
                               </div>
                               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest sm:text-right mt-2 sm:mt-0">Format: JPG, PNG, PDF</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div>
                       <h4 className="font-bold text-green-800 text-lg mb-4">D. Dokumen Opsional</h4>
                       <div className="space-y-4">
                          {[
                            "Foto / Scan Akte Cerai (bila sudah bercerai).", 
                            "Foto / Scan Surat Pengampuan dari Pengadilan.", 
                            "Foto / Scan Surat Pindah Nikah."
                          ].map((doc, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                               <div className="flex items-center gap-4">
                                  <div className="bg-green-50 p-3 rounded-lg text-green-700"><FaUpload className="text-lg" /></div>
                                  <div>
                                     <p className="font-bold text-sm text-bwi-dark mb-1">{doc}</p>
                                     <button type="button" className="bg-gray-100 px-4 py-1.5 rounded text-xs font-semibold text-gray-600 hover:bg-gray-200 w-max">Pilih File</button>
                                  </div>
                               </div>
                               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest sm:text-right mt-2 sm:mt-0">Format: JPG, PNG, PDF</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 bg-[#FAF4EB] p-8 rounded-3xl border border-gray-200 mt-4">
                 <div className="w-full lg:w-1/2">
                    <h4 className="font-bold text-green-800 text-lg mb-4">E. Kontak</h4>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">No. HP / WhatsApp (Wajib)</label>
                       <div className="flex relative">
                          <span className="absolute left-4 top-4 text-green-600"><FaWhatsapp className="text-xl" /></span>
                          <input type="tel" placeholder="Contoh: 08566446153" className="w-full p-3.5 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:border-bwi-gold bg-white" />
                       </div>
                       <p className="text-[10px] text-gray-500 mt-2">Pastikan nomor aktif karena akan digunakan untuk informasi selanjutnya.</p>
                    </div>
                 </div>
                 <div className="w-full lg:w-1/2">
                    <h4 className="font-bold text-green-800 text-lg mb-4">Pernyataan</h4>
                    <label className="flex items-start gap-4 cursor-pointer bg-white p-4 rounded-xl border border-gray-300">
                       <input type="checkbox" className="mt-1 w-5 h-5 accent-bwi-dark shrink-0" />
                       <span className="text-sm text-gray-600 leading-relaxed">
                         Saya menyatakan bahwa seluruh data dan dokumen yang saya unggah adalah benar dan dapat dipertanggungjawabkan. Saya memahami bahwa data akan digunakan untuk proses administrasi dispensasi nikah sesuai ketentuan.
                       </span>
                    </label>
                 </div>
              </div>

              <div className="mt-6 text-center border-t border-gray-100 pt-10">
                 <button type="submit" className="w-full md:w-auto px-20 py-4 font-bold text-white bg-bwi-dark rounded-xl hover:bg-[#022c21] transition-colors shadow-lg shadow-green-900/20 text-lg flex items-center justify-center gap-3 mx-auto">
                   <FaUpload /> Kirim Pengajuan
                 </button>
                 <p className="text-xs text-gray-400 mt-4">Data Anda aman dan terlindungi. Kami tidak akan membagikan data Anda kepada pihak lain.</p>
              </div>

           </form>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden relative shadow-2xl">
            <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-red-600 transition-colors shadow-lg"><FaTimes className="text-xl" /></button>
            <div className="p-6 border-b border-gray-100 bg-[#FAF4EB]">
               <h3 className="font-bold text-xl text-bwi-dark">Video Tutorial Penggunaan e-Sakinah</h3>
            </div>
            <div className="aspect-video bg-black w-full">
               <video src={tutorialEsakinah} className="w-full h-full" autoPlay controls></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ESakinah;