import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaArrowRight, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';
import kantorCamatDulu from '../../assets/images/kantor-camat-dulu.png';
import { dummyNews } from '../../data/dummyData';
import { socket } from '../../socket';

const formatSingleNews = (item) => {
  const dateObj = new Date(item.tanggal);
  const dateStr = !isNaN(dateObj.getTime())
    ? dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : item.tanggal;

  return {
    id: item.id,
    category: item.kategori || 'Kegiatan',
    title: item.judul,
    date: dateStr,
    author: item.sumber || 'Admin',
    img: item.gambar || 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    shortDesc: item.deskripsi,
    fullDesc: item.deskripsi,
    link_asli: item.link_asli
  };
};

const Berita = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedNews, setSelectedNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest'); 
  
  const [visibleNewsCount, setVisibleNewsCount] = useState(5);
  const [visibleAgendaCount, setVisibleAgendaCount] = useState(3);

  const [newsData, setNewsData] = useState(dummyNews);
  const [agendaData, setAgendaData] = useState([]);

  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Pelayanan', 'Budaya', 'UMKM'];

  // Static Agenda Terdekat (Fallback data)
  const fallbackAgendas = [
    {
      id: 'agenda-1',
      category: 'Pengumuman',
      title: "Jadwal Pelayanan Perekaman e-KTP Keliling Kecamatan",
      date: "24 Juli 2026",
      month: "JUL",
      day: "24",
      author: "Admin",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      shortDesc: "Pemberitahuan kepada seluruh warga Kecamatan Banyuwangi mengenai jadwal layanan jemput bola perekaman e-KTP minggu ini.",
      fullDesc: "Diberitahukan kepada seluruh warga masyarakat Kecamatan Banyuwangi, khususnya yang belum melakukan perekaman e-KTP atau pemula (berusia 17 tahun), bahwa Kantor Camat Banyuwangi akan melaksanakan program pelayanan 'Jemput Bola' perekaman e-KTP. Diharapkan warga membawa fotokopi Kartu Keluarga (KK) terbaru. Pelayanan ini tidak dipungut biaya (GRATIS).",
      eventDate: "26 Juli - 28 Juli 2026",
      eventTime: "08.00 - 14.00 WIB",
      eventLocation: "Balai Kelurahan Kepatihan & Tamanbaru"
    },
    {
      id: 'agenda-2',
      category: 'Kegiatan',
      title: "Musrenbang Kecamatan Banyuwangi Tahun 2026 Resmi Digelar",
      date: "22 Juli 2026",
      month: "JUL",
      day: "22",
      author: "Admin",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
      shortDesc: "Musrenbang tahun 2026 membahas rencana pembangunan prioritas yang akan dilaksanakan di wilayah Kecamatan Banyuwangi.",
      fullDesc: "Musyawarah Perencanaan Pembangunan (Musrenbang) tingkat Kecamatan Banyuwangi tahun 2026 telah resmi digelar.",
      eventDate: "22 Juli 2026",
      eventTime: "09.00 - 13.00 WIB",
      eventLocation: "Aula Kecamatan Banyuwangi"
    },
    {
      id: 'agenda-3',
      category: 'Pengumuman',
      title: "Pembagian Bibit Tanaman Produktif untuk Warga",
      date: "23 Juli 2026",
      month: "JUL",
      day: "23",
      author: "Admin",
      img: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=400&auto=format&fit=crop",
      shortDesc: "Program penghijauan lingkungan, warga dapat mengambil bibit gratis di kantor kelurahan sesuai jadwal.",
      fullDesc: "Sebagai bagian dari inisiatif 'Banyuwangi Hijau', ribuan bibit tanaman produktif dan peneduh dibagikan secara gratis kepada warga.",
      eventDate: "30 Juli 2026",
      eventTime: "09.00 - Selesai",
      eventLocation: "Halaman Pendopo Kecamatan Banyuwangi"
    }
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/berita')
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
          const formatted = json.data.map(formatSingleNews);
          setNewsData(formatted);
        }
      })
      .catch((err) => {
        console.error('Error fetching berita:', err);
      });

    fetch('http://localhost:5000/api/agenda')
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
          setAgendaData(json.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching agenda:', err);
      });

    const handleBeritaCreated = (item) => {
      const formatted = formatSingleNews(item);
      setNewsData((prev) => [formatted, ...prev.filter((n) => n.id !== formatted.id)]);
    };

    const handleBeritaUpdated = (item) => {
      const formatted = formatSingleNews(item);
      setNewsData((prev) => prev.map((n) => (n.id === formatted.id ? formatted : n)));
    };

    const handleBeritaDeleted = ({ id }) => {
      setNewsData((prev) => prev.filter((n) => n.id !== id));
    };

    const handleAgendaCreated = (item) => {
      setAgendaData((prev) => [item, ...prev.filter((a) => a.id !== item.id)]);
    };

    const handleAgendaUpdated = (item) => {
      setAgendaData((prev) => prev.map((a) => (a.id === item.id ? item : a)));
    };

    const handleAgendaDeleted = ({ id }) => {
      setAgendaData((prev) => prev.filter((a) => a.id !== id));
    };

    socket.on('berita:created', handleBeritaCreated);
    socket.on('berita:updated', handleBeritaUpdated);
    socket.on('berita:deleted', handleBeritaDeleted);
    socket.on('agenda:created', handleAgendaCreated);
    socket.on('agenda:updated', handleAgendaUpdated);
    socket.on('agenda:deleted', handleAgendaDeleted);

    return () => {
      socket.off('berita:created', handleBeritaCreated);
      socket.off('berita:updated', handleBeritaUpdated);
      socket.off('berita:deleted', handleBeritaDeleted);
      socket.off('agenda:created', handleAgendaCreated);
      socket.off('agenda:updated', handleAgendaUpdated);
      socket.off('agenda:deleted', handleAgendaDeleted);
    };
  }, []);


  let processedNews = activeCategory === 'Semua' 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory);

  if (searchQuery) {
    processedNews = processedNews.filter(news => 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  processedNews = [...processedNews].sort((a, b) => {
    if (sortOrder === 'newest') return b.id - a.id;
    return a.id - b.id;
  });

  const mainNews = processedNews.length > 0 ? processedNews[0] : null;
  const gridNews = processedNews.length > 1 ? processedNews.slice(1, visibleNewsCount) : [];

  const allAgendas = agendaData.length > 0 ? agendaData : fallbackAgendas;
  const visibleAgendas = allAgendas.slice(0, visibleAgendaCount);

  const handleLoadMore = () => {
    setVisibleNewsCount(prev => prev + 4);
  };

  return (
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden pb-20">
      
      <div className="absolute top-[800px] left-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[1600px] right-0 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <section 
        className="relative h-[450px] flex items-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(1, 30, 22, 0.95) 0%, rgba(1, 30, 22, 0.7) 100%), url(${kantorCamatDulu})` 
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 relative z-20 text-white pt-10">
          <p className="text-bwi-gold text-5xl lg:text-6xl mb-4 leading-none" style={{ fontFamily: "'Rage Italic', cursive" }}>
            Berita & Pengumuman
          </p>
          <p className="text-lg lg:text-xl max-w-xl font-light drop-shadow-md leading-relaxed">
            Informasi terbaru seputar kegiatan, agenda, pengumuman, dan program Kecamatan Banyuwangi.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-16 py-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
             {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleNewsCount(5);
                  }}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-bwi-dark text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  {cat}
                </button>
             ))}
          </div>
          <div className="flex gap-3 w-full lg:w-auto relative">
             <div className="relative w-full lg:w-64">
               <input 
                 type="text" 
                 placeholder="Cari Informasi..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-bwi-gold shadow-sm" 
               />
               <FaSearch className="absolute right-3 top-3.5 text-gray-400" />
             </div>

             <div className="relative">
                <button 
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center h-full"
                >
                  <FaBars />
                </button>

                {showSortDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-2 animate-fade-in-up">
                    <button 
                      onClick={() => { setSortOrder('newest'); setShowSortDropdown(false); }}
                      className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${sortOrder === 'newest' ? 'text-bwi-dark font-bold bg-gray-50' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Terbaru
                    </button>
                    <button 
                      onClick={() => { setSortOrder('oldest'); setShowSortDropdown(false); }}
                      className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${sortOrder === 'oldest' ? 'text-bwi-dark font-bold bg-gray-50' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Terlama
                    </button>
                  </div>
                )}
             </div>
             
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-10">
           
           <div className="w-full xl:w-2/3">
              
              {mainNews ? (
                <div className="bg-[#FAF4EB] rounded-3xl overflow-hidden shadow-sm mb-10 border border-gray-100 group">
                   <div className="overflow-hidden relative">
                      {(mainNews.category === 'Pengumuman' || mainNews.category === 'Kegiatan') && (
                         <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 animate-pulse shadow-md">
                            Penting
                         </div>
                      )}
                      <img src={mainNews.img} alt={mainNews.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="p-8">
                      <div className="inline-block px-3 py-1 bg-bwi-gold text-bwi-dark font-bold text-[10px] uppercase tracking-widest rounded mb-4">{mainNews.category}</div>
                      <h2 className="text-2xl font-bold text-bwi-dark mb-4 leading-snug group-hover:text-green-700 transition-colors">{mainNews.title}</h2>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 font-medium">
                         <span>{mainNews.date}</span>
                         <span>Oleh {mainNews.author}</span>
                      </div>
                      <p className="text-gray-600 mb-8 leading-relaxed">{mainNews.shortDesc}</p>
                      <button onClick={() => setSelectedNews(mainNews)} className="bg-bwi-dark text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#022c21] transition-colors flex items-center gap-2 w-max">
                        Baca Selengkapnya <FaArrowRight />
                      </button>
                   </div>
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 mb-10">
                   <p className="text-gray-500 font-medium">Informasi tidak ditemukan.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                 {gridNews.map((news) => (
                   <div key={news.id} onClick={() => setSelectedNews(news)} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow flex flex-col">
                      <div className="overflow-hidden relative">
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-bwi-dark font-bold text-[10px] px-2 py-1 rounded uppercase tracking-wider z-10">{news.category}</div>
                         <img src={news.img} alt={news.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                         <h3 className="font-bold text-lg text-bwi-dark mb-3 leading-snug group-hover:text-green-700 transition-colors">{news.title}</h3>
                         <p className="text-gray-400 text-xs font-semibold mt-auto">{news.date}</p>
                      </div>
                   </div>
                 ))}
              </div>

              {processedNews.length > visibleNewsCount && (
                <div className="text-center">
                   <button onClick={handleLoadMore} className="bg-[#FAF4EB] border border-gray-200 text-bwi-dark font-bold px-10 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                     Muat Lebih Banyak ↓
                   </button>
                </div>
              )}
           </div>

           <div className="w-full xl:w-1/3 space-y-8">
              
              <div className="bg-[#FAF4EB] p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
                 <h3 className="text-2xl font-bold text-bwi-dark mb-8 border-b-2 border-bwi-gold inline-block pb-2">Agenda Terdekat</h3>
                 
                 {visibleAgendas.length > 0 ? (
                   <div className="space-y-6">
                      {visibleAgendas.map((item) => {
                         const dayVal = item.day || (item.tanggal_tampil ? item.tanggal_tampil.split(' ')[0] : '1');
                         const monthVal = item.month || (item.tanggal_tampil ? item.tanggal_tampil.split(' ')[1] : 'AGENDA');
                         const titleVal = item.title || item.judul;
                         const timeVal = item.eventTime || item.waktu;

                         return (
                           <div key={item.id} onClick={() => setSelectedNews(item)} className="flex gap-5 items-start cursor-pointer group bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                              <div className="bg-gray-50 border border-gray-100 text-bwi-dark w-14 h-16 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 shadow-sm group-hover:bg-bwi-dark group-hover:text-white transition-colors">
                                 <span className="text-xl leading-none">{dayVal}</span>
                                 <span className="text-[10px] mt-1 tracking-widest">{monthVal}</span>
                              </div>
                              <div>
                                 <h5 className="font-bold text-sm text-gray-800 leading-snug group-hover:text-green-700">{titleVal}</h5>
                                 <p className="text-xs text-gray-500 mt-2 font-medium flex items-center gap-1.5"><FaClock className="text-bwi-gold" /> {timeVal}</p>
                              </div>
                           </div>
                         );
                       })}
                   </div>
                 ) : (
                   <p className="text-gray-500 text-sm">Tidak ada agenda terdekat saat ini.</p>
                 )}

                 {allAgendas.length > visibleAgendaCount && (
                   <button 
                     onClick={() => setVisibleAgendaCount(prev => prev + 3)} 
                     className="text-green-700 font-bold text-sm mt-8 w-full text-center hover:text-bwi-dark border border-green-700 hover:border-bwi-dark py-3 rounded-xl transition-colors"
                   >
                     + Lihat Semua Agenda
                   </button>
                 )}
              </div>

           </div>
        </div>
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col animate-fade-in-up">
            
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-[#FAF4EB] shrink-0">
               <div className="flex items-center gap-3">
                 <span className="bg-bwi-gold text-bwi-dark text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">{selectedNews.category}</span>
                 <p className="text-sm text-gray-500 font-medium">{selectedNews.date}</p>
               </div>
               <button onClick={() => setSelectedNews(null)} className="bg-gray-200 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                 <FaTimes />
               </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-10 flex-grow custom-scrollbar">
               <h2 className="text-3xl md:text-4xl font-bold text-bwi-dark mb-6 leading-tight font-serif">{selectedNews.title}</h2>
               
               {(selectedNews.eventDate || selectedNews.eventLocation) && (
                 <div className="bg-[#FAF4EB] border border-gray-200 rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedNews.eventDate && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-bwi-dark font-bold text-sm uppercase tracking-wider">
                           <FaCalendarAlt className="text-bwi-gold" /> Tanggal
                        </div>
                        <p className="text-gray-700 font-medium text-sm">{selectedNews.eventDate}</p>
                      </div>
                    )}
                    {selectedNews.eventTime && (
                      <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                        <div className="flex items-center gap-2 text-bwi-dark font-bold text-sm uppercase tracking-wider">
                           <FaClock className="text-bwi-gold" /> Waktu
                        </div>
                        <p className="text-gray-700 font-medium text-sm">{selectedNews.eventTime}</p>
                      </div>
                    )}
                    {selectedNews.eventLocation && (
                      <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                        <div className="flex items-center gap-2 text-bwi-dark font-bold text-sm uppercase tracking-wider">
                           <FaMapMarkerAlt className="text-bwi-gold" /> Lokasi
                        </div>
                        <p className="text-gray-700 font-medium text-sm">{selectedNews.eventLocation}</p>
                      </div>
                    )}
                 </div>
               )}

               <img src={selectedNews.img} alt={selectedNews.title} className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-sm" />
               
               <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed text-justify">
                  <p>{selectedNews.fullDesc}</p>
                  <p className="mt-4">
                    Pemerintah Kecamatan berharap partisipasi aktif dari masyarakat untuk terus mengawal setiap program yang telah direncanakan. Evaluasi berkala akan dilakukan untuk memastikan bahwa pelayanan publik berjalan sesuai dengan standar operasional prosedur yang telah ditetapkan.
                  </p>
               </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
               <button onClick={() => setSelectedNews(null)} className="bg-bwi-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-[#022c21] transition-colors">Tutup Informasi</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Berita;