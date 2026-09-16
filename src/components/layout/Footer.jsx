import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import logoBanyuwangi from '../../assets/images/logo-banyuwangi.png';

const Footer = () => {
  return (
    <footer className="bg-bwi-dark text-white pt-16 border-t-[8px] border-bwi-news relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-64 h-64 bg-[url('../../assets/images/batik.png')] bg-contain bg-no-repeat transform rotate-180"></div>
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none w-64 h-64 bg-[url('../../assets/images/batik.png')] bg-contain bg-no-repeat"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 pb-12 border-b border-gray-700">
          <div className="w-full lg:w-1/3">
            <h4 className="text-white font-bold text-base tracking-widest mb-4 uppercase">LOKASI KANTOR CAMAT BANYUWANGI</h4>
            <div className="flex items-start gap-3 text-gray-300 text-base leading-relaxed">
              <FaMapMarkerAlt className="text-bwi-gold mt-1.5 shrink-0 text-xl" />
              <p>Jl. Jend. A. Yani No. 101, Tukangkayu, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416.</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="w-full h-36 bg-gray-300 rounded-xl overflow-hidden relative shadow-inner">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Peta Lokasi" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white text-red-600 font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg text-sm">
                  <FaMapMarkerAlt /> Kantor Camat Banyuwangi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-10 py-12">
          <div className="xl:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img src={logoBanyuwangi} alt="Logo Banyuwangi" className="w-10 h-12 object-contain shrink-0" />
              <div className="leading-tight">
                <p className="font-bold text-base">KANTOR CAMAT</p>
                <p className="text-sm font-semibold">BANYUWANGI</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Melayani dengan integritas,<br />membangun Kecamatan Banyuwangi yang maju.
            </p>
            <div className="flex gap-5 text-white text-lg">
              <a href="https://www.instagram.com/kecamatan.banyuwangi?igsh=enoxYm9jejV0amRp" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors"><FaInstagram /></a>
              <a href="https://www.youtube.com/@kecamatanbanyuwangi" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors"><FaYoutube /></a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors"><FaWhatsapp /></a>
            </div>
          </div>

          <div>
            <h4 className="text-bwi-gold font-bold text-sm tracking-widest mb-6 uppercase">PROFIL</h4>
            <ul className="text-gray-300 text-sm space-y-4">
              <li><Link to="/profil" className="hover:text-white transition-colors">Sejarah</Link></li>
              <li><Link to="/profil" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              <li><Link to="/profil" className="hover:text-white transition-colors">Struktur Organisasi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-bwi-gold font-bold text-sm tracking-widest mb-6 uppercase">STRUKTURAL</h4>
            <ul className="text-gray-300 text-sm space-y-4 mb-6">
              <li><span className="text-gray-400 cursor-default">Camat</span></li>
              <li><span className="text-gray-400 cursor-default">Sekretariat</span></li>
              <li><span className="text-gray-400 cursor-default">Seksi Kelurahan</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-bwi-gold font-bold text-sm tracking-widest mb-6 uppercase">INOVASI</h4>
            <ul className="text-gray-300 text-sm space-y-4 mb-6">
              <li><Link to="/inovasi/kiss" className="hover:text-white transition-colors">KISS</Link></li>
              {/* <li><Link to="/inovasi/smile" className="hover:text-white transition-colors">SMILE</Link></li> */}
              {/* <li><Link to="/inovasi/e-sakinah" className="hover:text-white transition-colors">E-Sakinah</Link></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-bwi-gold font-bold text-sm tracking-widest mb-6 uppercase">INFORMASI</h4>
            <ul className="text-gray-300 text-sm space-y-4">
              <li><Link to="/berita" className="hover:text-white transition-colors">Berita</Link></li>
              <li><Link to="/berita" className="hover:text-white transition-colors">Agenda</Link></li>
              <li><Link to="/berita" className="hover:text-white transition-colors">Pengumuman</Link></li>
            </ul>
          </div>

          <div className="xl:col-span-1">
            <h4 className="text-bwi-gold font-bold text-sm tracking-widest mb-6 uppercase">KONTAK</h4>
            <ul className="text-gray-300 text-sm space-y-5">
              <li className="flex items-start gap-3"><FaPhoneAlt className="text-bwi-gold mt-1 shrink-0" /> <span className="cursor-default">(0333) 424232</span></li>
              <li className="flex items-start gap-3"><FaEnvelope className="text-bwi-gold mt-1 shrink-0 break-all" /> <span className="cursor-default">pelayanan@kecamatanbanyuwangi.com</span></li>
              <li className="flex items-start gap-3"><FaClock className="text-bwi-gold mt-1 shrink-0" /> <div className="cursor-default">Senin-Jumat<br />08.00 - 16.00 WIB</div></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#01140e] py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Kantor Camat Banyuwangi. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="cursor-default hover:text-white transition-colors">banyuwangikab.go.id</span>
            <span className="cursor-default hover:text-white transition-colors">Kebijakan Privasi</span>
            <span className="cursor-default hover:text-white transition-colors">www.lapor.go.id</span>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;