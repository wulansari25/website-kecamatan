// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import logoBanyuwangi from '../../assets/images/logo-banyuwangi.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`${isHome ? 'absolute w-full bg-transparent' : 'sticky bg-bwi-dark'} text-white top-0 z-50`}>
      <div className="border-b border-gray-500/30 py-2 hidden lg:block bg-[#011610]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-[11px] text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-red-500">📍</span>
            <p>Jl. Jend. A. Yani No. 101, Tukangkayu, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">🕒</span>
              <p>Senin - Jum'at 08.00 - 15.30 WIB</p>
            </div>
            <div className="flex items-center gap-4 text-sm border-l border-gray-500/50 pl-4">
              <a href="https://www.instagram.com/kecamatan.banyuwangi?igsh=enoxYm9jejV0amRp" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors"><FaInstagram /></a>
              <a href="https://www.youtube.com/@kecamatanbanyuwangi" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors"><FaYoutube /></a>
              <a href="https://wa.me/6287865500022" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-6 lg:px-12 py-3 flex justify-between items-center ${!isHome && 'shadow-md'}`}>
        <div className="flex items-center space-x-4">
          <img src={logoBanyuwangi} alt="Logo Banyuwangi" className="w-10 h-12 object-contain" />
          <div className="flex flex-col justify-center drop-shadow-md">
            <h1 className="text-lg lg:text-xl font-bold leading-none tracking-wide">KANTOR CAMAT</h1>
            <h2 className="text-[10px] lg:text-xs font-semibold tracking-widest mt-1">BANYUWANGI</h2>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-sm items-center drop-shadow-md">
          <Link to="/" className="hover:text-bwi-gold transition-colors">Beranda</Link>
          <Link to="/profil" className="hover:text-bwi-gold transition-colors">Profil</Link>
          {/* <div className="relative group cursor-pointer py-2">
            <span className="hover:text-bwi-gold transition-colors flex items-center">
              Inovasi <span className="ml-1 text-[9px]">▼</span>
            </span>
            <div className="absolute hidden group-hover:block top-full right-0 bg-bwi-dark border border-gray-700 text-white rounded-lg shadow-xl w-40 overflow-hidden">
              <Link to="/inovasi/smile" className="block px-4 py-3 hover:bg-[#062c21] transition-colors">SMILE</Link>
              <Link to="/inovasi/kiss" className="block px-4 py-3 hover:bg-[#062c21] transition-colors">KISS</Link>
              <Link to="/inovasi/e-sakinah" className="block px-4 py-3 hover:bg-[#062c21] transition-colors">E-Sakinah</Link>
            </div>
          </div> */}
          <Link to="/berita" className="hover:text-bwi-gold transition-colors">Informasi</Link>
          <a href="https://wa.me/6287865500022" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors">Kontak Kami</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;