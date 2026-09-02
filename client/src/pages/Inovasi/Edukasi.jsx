import React, { useState } from 'react';
import { 
  FaChevronDown, FaChevronUp, FaFileSignature, FaIdCard, FaClipboardList, 
  FaFileAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaInstagram, FaGlobe, 
  FaMotorcycle, FaHeadset 
} from 'react-icons/fa';
import batikPattern from '../../assets/images/batik.png';
import kantorCamatDulu from '../../assets/images/kantor-camat-dulu.png';

const Edukasi = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sopData = [
    {
      category: "Administrasi Kependudukan",
      icon: <FaIdCard />,
      items: [
        {
          title: "Perubahan Data dan Pencetakan KK",
          syarat: [
            "Blangko Permohonan KK yang telah ditandatangani oleh Pemohon, Ketua RT dan Lurah",
            "Fotokopi Akta Nikah bagi yang berstatus kawin, Fotokopi Akta Cerai bagi yang berstatus Cerai Hidup, Fotokopi Akta Kematian bagi yang berstatus Cerai Mati",
            "Fotocopy ijazah, akta kelahiran",
            "Surat Keterangan Pindah Datang bagi penduduk yang pindah dalam wilayah Negara Kesatuan Republik Indonesia",
            "Surat Keterangan Datang dari Luar Negeri yang diterbitkan oleh Instansi Pelaksana bagi Warga Negara Indonesia yang datang dari luar negeri karena pindah",
            "Surat Ijin Tinggal Tetap bagi WNA"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Perekaman KTP Pemula",
          syarat: [
            "Blangko Permohonan KTP yang telah ditandatangani oleh Pemohon, Ketua RT dan Lurah",
            "Telah berusia 17 tahun atau pernah kawin",
            "Pas Foto ukuran 3 x 4 cm background warna merah untuk kelahiran tahun ganjil dan background warna biru untuk kelahiran tahun genap",
            "Fotokopi Akta Kelahiran / Ijazah bagi yang belum kawin",
            "Fotokopi Akta Perkawinan/Akta Cerai/Akta Kematian untuk status kawin atau cerai",
            "Fotokopi Kartu Keluarga"
          ],
          waktu: "20 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Pencetakan Akta Kelahiran",
          syarat: [
            "Blangko F-02.1 yang telah diisi dan ditandatangani oleh Pemohon dan Lurah",
            "Surat Lahir dari Bidan, Rumah Sakit / Keterangan Kelahiran dari Kelurahan",
            "Fotokopi KK",
            "Fotokopi KTP kedua Orang Tua",
            "Fotokopi 2 Orang saksi",
            "Fotokopi Akta Perkawinan/Akta Cerai/Akta Kematian untuk status kawin atau cerai",
            "Fotokopi surat cerai jika orangtua cerai",
            "Fotokopi akta / keterangan kematian jika orang tua meninggal"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Pencetakan Akta Kematian",
          syarat: [
            "Blangko F-02.1 yang telah diisi dan ditandatangani oleh Pemohon dan Lurah",
            "Surat kematian dari Rumah Sakit / Keterangan Kelahiran dari Kelurahan",
            "Fotokopi KK",
            "Fotokopi KTP yang meninggal dan pelapor",
            "Fotokopi 2 Orang saksi"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "KIA (Kartu Identitas Anak)",
          syarat: [
            "Fotokopi Kartu Keluarga",
            "Fotokopi akta kelahiran anak",
            "Fotokopi KTP kedua ortu",
            "Fotokopi surat nikah ortu / Akta Cerai bagi yang berstatus cerai hidup",
            "Pas Foto ukuran 3x4 cm warna background merah / biru sebanyak 1 lembar"
          ],
          waktu: "20 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Surat Pindah Penduduk Antar Kecamatan dan Antar Kabupaten",
          syarat: [
            "Surat Keterangan Pindah Penduduk dari Kelurahan",
            "Kartu Keluarga",
            "Fotokopi KTP",
            "Fotokopi Akta Nikah bagi yang berstatus kawin",
            "Fotokopi Akta Cerai bagi yang berstatus cerai hidup",
            "Fotokopi Akta Kematian bagi yang berstatus cerai mati",
            "Pas Foto ukuran 4x6 cm background sesuai foto pada KTP sebanyak 3 lembar"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        }
      ]
    },
    {
      category: "Perizinan & Rekomendasi",
      icon: <FaFileSignature />,
      items: [
        {
          title: "Rekomendasi SKCK",
          syarat: [
            "Surat Keterangan dari Kelurahan",
            "Fotokpi KTP dan KK",
            "Fotokopi Akta Kelahiran/Surat Kelahiran",
            "Pas Foto berwarna ukuran 4x6 sebanyak 6 lembar"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Surat Dispensasi Nikah Kurang Dari 10 (Sepuluh Hari)",
          syarat: [
            "Surat Permohonan Dispensasi dari Kelurahan",
            "Formulir N1-N6",
            "Fotokopi KTP Calon Pengantin",
            "Fotokopi KK Calon Pengantin",
            "Fotokopi Akta Kelahiran/Ijazah",
            "Fotokopi KTP Orangtua"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Rekomendasi Izin Keramaian",
          syarat: [
            "Surat Keterangan Izin Keramaian dari Kelurahan",
            "Fotokopi KTP dan KK",
            "Proposal Kegiatan Jika berskala besar dan lebih dari satu kegiatan"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        }
      ]
    },
    {
      category: "Keterangan Umum",
      icon: <FaClipboardList />,
      items: [
        {
          title: "Surat Pernyataan / Keterangan Miskin",
          syarat: [
            "Surat Pernyataan / Keterangan Miskin dari Kelurahan",
            "Formulir Indikator 18 Kriteria Kemiskinan",
            "Fotokopi KTP dilegalisasi Lurah",
            "Fotokopi KK dilegalisasi Lurah",
            "Fotokopi Akta Nikah dilegalisasi KUA",
            "Fotokopi Akta Kelahiran"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Surat Keterangan Ahli Waris",
          syarat: [
            "Surat Keterangan Ahli Waris dari Kelurahan",
            "Fotokopi KK, KTP, Dokumen pendukung lainnya"
          ],
          waktu: "1 Hari",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Surat Keterangan Beda Nama",
          syarat: [
            "Surat Keterangan dari Kelurahan",
            "Fotokopi KTP / KK",
            "Fotokopi Dokumen yang berbeda"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Surat Keterangan Umum Lainnya",
          syarat: [
            "Surat Keterangan dari Kelurahan",
            "Fotokopi KTP dan KK"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Legalisasi Surat",
          syarat: [
            "Surat Pengantar dari kelurahan",
            "Surat Asli Yang Akan Dilegalisir",
            "Fotocopi Surat Yang Akan Dilegalisir"
          ],
          waktu: "30 Menit",
          biaya: "Gratis / Tidak dipungut biaya"
        },
        {
          title: "Proposal Permohonan Bantuan",
          syarat: [
            "Proposal yang akan diajukan",
            "Fotokopi KTP"
          ],
          waktu: "1 Hari",
          biaya: "Gratis / Tidak dipungut biaya"
        }
      ]
    }
  ];

  let globalIndex = 0; 

  return (
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden pb-20">
      
      <div className="absolute top-[300px] left-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[800px] right-0 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <section className="relative h-[350px] flex items-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to right, rgba(1, 30, 22, 0.95) 0%, rgba(1, 30, 22, 0.7) 100%), url(${kantorCamatDulu})` }}>
        <div className="container mx-auto px-6 lg:px-16 relative z-20 text-white pt-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-bwi-gold">Standar Operasional Prosedur (SOP)</h1>
          <p className="text-base lg:text-lg max-w-2xl font-light drop-shadow-md leading-relaxed">
            Informasi lengkap mengenai persyaratan, waktu penyelesaian, dan mekanisme pelayanan publik di Kecamatan Banyuwangi.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-16 py-12 relative z-10 w-full">
        
        {sopData.map((category, catIndex) => (
          <div key={catIndex} className="mb-10">
            <h3 className="text-lg font-bold text-bwi-dark mb-4 flex items-center gap-3">
               <span className="text-bwi-gold text-2xl">{category.icon}</span> {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.items.map((item) => {
                const currentIndex = globalIndex++;
                const isOpen = openIndex === currentIndex;

                return (
                  <div key={currentIndex} className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                    <button 
                      onClick={() => toggleAccordion(currentIndex)}
                      className={`w-full text-left px-6 py-4 flex justify-between items-center transition-colors duration-300 ${isOpen ? 'bg-[#D1E5F4] text-bwi-dark' : 'bg-[#EAF3FA] hover:bg-[#D1E5F4] text-gray-800'}`}
                    >
                      <div className="flex items-center gap-3 font-semibold">
                         <FaFileAlt className={isOpen ? 'text-bwi-dark' : 'text-gray-500'} />
                         {item.title}
                      </div>
                      {isOpen ? <FaChevronUp className="text-gray-500 shrink-0" /> : <FaChevronDown className="text-gray-500 shrink-0" />}
                    </button>
                    
                    {isOpen && (
                      <div className="p-6 bg-white border-t border-gray-100 text-sm text-gray-700 animate-fade-in-up">
                         <div className="mb-5">
                            <p className="font-bold text-bwi-dark mb-2 border-b border-gray-100 pb-1">Persyaratan Dokumen:</p>
                            <ul className="list-disc list-inside space-y-1.5 ml-2">
                               {item.syarat.map((s, i) => (
                                 <li key={i}>{s}</li>
                               ))}
                            </ul>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <div>
                               <p className="font-bold text-bwi-dark mb-1">Waktu Penyelesaian:</p>
                               <p className="text-green-700 font-semibold flex items-center gap-2">⏳ {item.waktu}</p>
                            </div>
                            <div>
                               <p className="font-bold text-bwi-dark mb-1">Biaya / Tarif:</p>
                               <p className="text-blue-700 font-semibold flex items-center gap-2">💰 {item.biaya}</p>
                            </div>
                         </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="bg-[#FAF4EB] border border-bwi-gold/40 rounded-[2rem] p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-16 shadow-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 opacity-5 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
           <div className="w-20 h-20 bg-bwi-gold text-white rounded-full flex items-center justify-center text-4xl shrink-0 shadow-md z-10">
              <FaMotorcycle />
           </div>
           <div className="text-center md:text-left z-10">
              <h4 className="text-2xl font-bold text-bwi-dark mb-2 font-serif">Jaminan Pelayanan</h4>
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "Bila pelayanan kami tidak selesai sesuai dengan waktu yang ditentukan, kami siap mengantar dokumen langsung ke alamat Anda."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;