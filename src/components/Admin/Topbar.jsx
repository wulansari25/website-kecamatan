import React, { useState, useEffect } from 'react';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
  const [namaLengkap, setNamaLengkap] = useState(() => localStorage.getItem('adminNamaLengkap') || 'Fitri Ayu Wulan');
  const [profileImage, setProfileImage] = useState(() => localStorage.getItem('adminProfileImage') || null);

  useEffect(() => {
    const handleProfileUpdate = () => {
      setNamaLengkap(localStorage.getItem('adminNamaLengkap') || 'Fitri Ayu Wulan');
      setProfileImage(localStorage.getItem('adminProfileImage') || null);
    };

    window.addEventListener('adminProfileUpdated', handleProfileUpdate);
    window.addEventListener('storage', handleProfileUpdate);

    return () => {
      window.removeEventListener('adminProfileUpdated', handleProfileUpdate);
      window.removeEventListener('storage', handleProfileUpdate);
    };
  }, []);

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
        <button className="relative text-gray-400 hover:text-bwi-dark transition-colors">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6 cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-bwi-dark">{namaLengkap}</p>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">Super Admin</p>
          </div>
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="Avatar Admin" 
              className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm" 
            />
          ) : (
            <FaUserCircle className="text-4xl text-gray-300" />
          )}
        </div>
      </div>

    </div>
  );
};

export default Topbar;