import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaBell, FaUserCircle, FaCheckDouble, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import { useNotification } from '../../context/NotificationContext';

const Topbar = () => {
  const namaLengkap = 'Kecamatan Banyuwangi';
  const { notifications, unreadCount, markAllAsRead } = useNotification();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    <div className="h-20 bg-white border-b border-gray-200 px-6 lg:px-10 flex items-center justify-between shadow-sm shrink-0 relative z-10">
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-bwi-dark md:hidden">
          <FaBars className="text-xl" />
        </button>
        <div className="hidden md:block">
          <h2 className="font-bold text-xl text-bwi-dark font-serif">Dashboard Administrator</h2>
          <p className="text-xs text-gray-500 mt-1">Selamat datang kembali, Admin!</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={handleToggleDropdown}
            className="relative text-gray-400 hover:text-bwi-dark transition-colors p-1"
            title="Lonceng Notifikasi Real-time"
          >
            <FaBell className="text-xl" />
            {unreadCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold min-w-4 h-4 rounded-full border-2 border-white flex items-center justify-center px-0.5 animate-bounce">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            ) : notifications.length > 0 ? (
              <span className="absolute top-0 right-0 bg-gray-300 w-2 h-2 rounded-full border border-white"></span>
            ) : null}
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div className="bg-[#107058] text-white px-5 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaBell />
                  <h3 className="font-bold text-sm">Notifikasi Real-time</h3>
                </div>
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead} 
                    className="text-xs text-green-100 hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <FaCheckDouble /> Tandai dibaca
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-gray-400 text-xs">
                    Belum ada notifikasi baru dari sistem.
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`p-4 hover:bg-gray-50 transition-colors flex gap-3 ${!notif.read ? 'bg-emerald-50/50' : ''}`}
                    >
                      <div className="mt-0.5 shrink-0 text-bwi-dark text-lg">
                        {notif.type === 'agenda' ? (
                          <FaCalendarAlt className="text-amber-600" />
                        ) : (
                          <FaNewspaper className="text-[#107058]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-0.5">
                          <span className="text-[10px] font-bold text-bwi-gold uppercase tracking-wider">
                            {notif.category || notif.type}
                          </span>
                          <span className="text-[9px] text-gray-400">
                            {new Date(notif.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-gray-800 leading-snug truncate">
                          {notif.title}
                        </h4>
                        <p className="text-[10px] text-gray-500 mt-1 line-clamp-1">
                          Baru dipublikasikan oleh Admin
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6 cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-bwi-dark">{namaLengkap}</p>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">Super Admin</p>
          </div>
          <FaUserCircle className="text-4xl text-gray-300" />
        </div>
      </div>

    </div>
  );
};

export default Topbar;