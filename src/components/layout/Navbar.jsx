// src/components/Navbar/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp, FaBell, FaCheckDouble, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import logoBanyuwangi from '../../assets/images/logo-banyuwangi.png';
import { useNotification } from '../../context/NotificationContext';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { notifications, unreadCount, markAllAsRead } = useNotification();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleDropdown = () => {
    if (!showDropdown && unreadCount > 0) {
      markAllAsRead();
    }
    setShowDropdown((prev) => !prev);
  };

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

        <nav className="flex space-x-6 md:space-x-8 font-medium text-sm items-center drop-shadow-md">
          <Link to="/" className="hover:text-bwi-gold transition-colors">Beranda</Link>
          <Link to="/profil" className="hover:text-bwi-gold transition-colors">Profil</Link>
          <Link to="/berita" className="hover:text-bwi-gold transition-colors">Informasi</Link>
          <a href="https://wa.me/6287865500022" target="_blank" rel="noopener noreferrer" className="hover:text-bwi-gold transition-colors hidden sm:inline">Kontak Kami</a>

          {/* Lonceng Notifikasi Visitor */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleToggleDropdown}
              className="relative text-gray-200 hover:text-bwi-gold transition-colors p-1 flex items-center"
              title="Notifikasi Real-time"
            >
              <FaBell className="text-lg" />
              {unreadCount > 0 ? (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold min-w-4 h-4 rounded-full border border-bwi-dark flex items-center justify-center px-0.5 animate-bounce">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              ) : notifications.length > 0 ? (
                <span className="absolute top-0 right-0 bg-bwi-gold w-2 h-2 rounded-full border border-bwi-dark"></span>
              ) : null}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-gray-800">
                <div className="bg-bwi-dark text-white px-5 py-4 flex justify-between items-center border-b border-emerald-900">
                  <div className="flex items-center gap-2">
                    <FaBell className="text-bwi-gold" />
                    <h3 className="font-bold text-sm">Notifikasi Pengumuman</h3>
                  </div>
                  {unreadCount > 0 && (
                    <button 
                      onClick={markAllAsRead} 
                      className="text-xs text-bwi-gold hover:underline flex items-center gap-1 font-semibold"
                    >
                      <FaCheckDouble /> Tandai dibaca
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                  {notifications.length === 0 ? (
                    <div className="p-6 text-center text-gray-400 text-xs">
                      Belum ada notifikasi atau pengumuman baru.
                    </div>
                  ) : (
                    notifications.map((notif) => (
                      <Link
                        key={notif.id}
                        to="/berita"
                        onClick={() => setShowDropdown(false)}
                        className={`p-4 hover:bg-gray-50 transition-colors flex gap-3 block ${!notif.read ? 'bg-amber-50/40' : ''}`}
                      >
                        <div className="mt-0.5 shrink-0 text-bwi-dark text-lg">
                          {notif.type === 'agenda' ? (
                            <FaCalendarAlt className="text-amber-600" />
                          ) : (
                            <FaNewspaper className="text-emerald-700" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-0.5">
                            <span className="text-[10px] font-bold text-bwi-dark uppercase tracking-wider">
                              {notif.category || notif.type}
                            </span>
                            <span className="text-[9px] text-gray-400">
                              {new Date(notif.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-800 leading-snug truncate">
                            {notif.title}
                          </h4>
                          <p className="text-[10px] text-gray-500 mt-1">
                            Klik untuk melihat informasi selengkapnya
                          </p>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;