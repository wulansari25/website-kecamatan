import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaUser, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';
import bgImage from '../../assets/images/kantor-camat-dulu.png'; 

const LoginAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault(); 
        
    navigate('/admin'); 
  };

  return (
    <div className="min-h-screen bg-[#071f18] flex items-center justify-center p-4 lg:p-8 font-sans relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#107058] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10 min-h-[550px]">
        
        <div className="w-full md:w-1/2 relative hidden md:flex flex-col justify-between p-10 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-[#107058]/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#107058]/80 to-[#0a4a3a]/95"></div>
          </div>

          <div className="relative z-10 mt-4">
            <h2 className="text-3xl font-bold mb-2 leading-tight">Dashboard<br/>Admin Kecamatan</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-sm mt-4">
              Kelola informasi, layanan publik, dan konten website Kecamatan Banyuwangi dengan mudah, cepat, dan terorganisir.
            </p>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-start gap-3 mt-10">
            <div className="bg-green-400 text-[#0a4a3a] p-1.5 rounded-full mt-0.5">
              <FaShieldAlt size={14} />
            </div>
            <div>
              <p className="font-bold text-sm">Akses Terbatas</p>
              <p className="text-[11px] text-green-100 mt-0.5">Halaman ini diperuntukkan bagi aparatur kecamatan yang memiliki hak akses.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Login Administrator</h3>
            <p className="text-sm text-gray-500">Silahkan masuk menggunakan akun resmi untuk mengakses dashboard admin.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Username / Email Dinas</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="Masukkan username / email" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="Masukkan password" 
                  className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058] transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#107058] transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-[#107058] rounded border-gray-300 focus:ring-[#107058]" />
                <span className="text-xs text-gray-600 font-medium">Ingat Saya</span>
              </label>
              <a href="#" className="text-xs font-bold text-[#107058] hover:text-[#0a4a3a]">Lupa Password?</a>
            </div>

            <button type="submit" className="w-full bg-[#1c2c3a] hover:bg-[#111c26] text-white font-bold rounded-xl py-3.5 mt-6 transition-colors shadow-lg flex justify-center items-center gap-2">
              Masuk ke Dashboard &rarr;
            </button>
          </form>

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <FaShieldAlt size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Butuh bantuan?</p>
                <p className="text-[10px] text-gray-500">Hubungi Super Admin via WhatsApp</p>
              </div>
            </div>
            <span className="text-gray-400">&gt;</span>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 w-full text-center px-4">
        <p className="text-[10px] text-green-100/50">
          &copy; 2026 Pemerintah Kecamatan Banyuwangi. Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  );
};

export default LoginAdmin;