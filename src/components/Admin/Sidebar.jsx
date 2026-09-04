import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaRegNewspaper, FaHeart, FaWater, FaBuilding, FaSitemap, FaLink, FaBook, FaMapMarkerAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import logoBanyuwangi from '../../assets/images/logo-banyuwangi.png';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="w-64 bg-[#01352c] h-screen shadow-2xl flex flex-col hidden md:flex shrink-0 relative z-20">
      
      <div className="flex-1 overflow-y-auto pb-6">
        <div className="flex items-center gap-4 px-6 py-8">
          <img src={logoBanyuwangi} alt="Logo" className="w-10 h-12 object-contain" />
          <div className="text-white">
            <h1 className="font-bold text-base tracking-wide leading-tight">KANTOR CAMAT<br/>BANYUWANGI</h1>
            <p className="text-[10px] text-gray-300 mt-1 uppercase tracking-widest">Admin Panel</p>
          </div>
        </div>

        <div className="px-6 mb-6">
          <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${location.pathname === '/admin' ? 'bg-[#0a5240] text-white border border-[#107058]' : 'text-gray-300 hover:bg-[#0a5240] hover:text-white'}`}>
            <FaHome className="text-lg" /> Dashboard
          </Link>
        </div>

        <div className="mb-6 px-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">INFORMASI</p>
          <Link to="/admin/berita" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaRegNewspaper /> Berita & Pengumuman</Link>
        </div>

        {/* <div className="mb-6 px-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">LAYANAN INTERAKTIF</p>
          <div className="flex flex-col gap-1">
            <Link to="/admin/esakinah" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaHeart /> Verifikasi E-SAKINAH</Link>
            <Link to="/admin/kiss" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaWater /> Reservasi KISS</Link>
          </div>
        </div> */}

        {/* <div className="mb-6 px-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-bwi-gold">KONTEN SMILE</p>
          <div className="flex flex-col gap-1">
            <Link to="/admin/smile-tautan" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaLink /> Smart Kampung & JDIH</Link>
            <Link to="/admin/smile-sumberrejo" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaMapMarkerAlt /> Profil Sumberrejo</Link>
            <Link to="/admin/smile-edukasi" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaBook /> SOP Layanan Edukasi</Link>
          </div>
        </div> */}

        <div className="mb-6 px-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">PROFIL KECAMATAN</p>
          <div className="flex flex-col gap-1">
            <Link to="/admin/tentang" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaBuilding /> Tentang Kecamatan</Link>
            <Link to="/admin/struktur" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240]"><FaSitemap /> Struktur Organisasi</Link>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-[#0a5240] bg-[#012b23]">
        <div className="flex flex-col gap-1">
          <Link to="/admin/pengaturan" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#0a5240] transition-colors">
            <FaCog /> Pengaturan Akun
          </Link>
          <Link 
            to="/login" 
            onClick={() => localStorage.removeItem('isAdminAuthenticated')}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:text-white hover:bg-red-500/20 transition-colors mt-2"
          >
            <FaSignOutAlt /> Keluar Sistem
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;