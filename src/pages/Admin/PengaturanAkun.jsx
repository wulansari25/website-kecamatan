import React, { useState, useRef } from 'react';
import { FaSave, FaUserCircle, FaCamera, FaLock, FaEnvelope, FaUserTag, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const PengaturanAkun = () => {
  // State Profile Image
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // State Informasi Dasar (Permanen / Hardcoded)
  const [namaLengkap, setNamaLengkap] = useState('Kecamatan Banyuwangi');
  const [username, setUsername] = useState('kecamatanbanyuwangi@gmail.com');
  const [email, setEmail] = useState('kecamatanbanyuwangi@gmail.com');
  const [infoSuccess, setInfoSuccess] = useState('');

  // State Ubah Password
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordFeedback, setPasswordFeedback] = useState({ type: '', message: '' });

  // Handle Photo Upload
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Save Profile Info
  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!namaLengkap.trim() || !username.trim() || !email.trim()) {
      return;
    }

    setInfoSuccess('Informasi profil berhasil disimpan!');
    setTimeout(() => setInfoSuccess(''), 4000);
  };

  // Handle Update Password
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    setPasswordFeedback({ type: '', message: '' });

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordFeedback({ type: 'error', message: 'Semua kolom password wajib diisi!' });
      return;
    }

    const savedPassword = localStorage.getItem('adminPassword') || 'admin123';
    if (currentPassword !== savedPassword) {
      setPasswordFeedback({ type: 'error', message: 'Password saat ini yang Anda masukkan salah!' });
      return;
    }

    if (newPassword.length < 8) {
      setPasswordFeedback({ type: 'error', message: 'Password baru minimal 8 karakter!' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordFeedback({ type: 'error', message: 'Konfirmasi password baru tidak cocok!' });
      return;
    }

    // Simpan password baru ke localStorage
    localStorage.setItem('adminPassword', newPassword);

    setPasswordFeedback({ type: 'success', message: 'Password berhasil diperbarui! Gunakan password baru ini untuk login berikutnya.' });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPasswordFeedback({ type: '', message: '' }), 5000);
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-full pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Pengaturan Akun</h1>
        <p className="text-sm text-gray-500 mt-1">Kelola informasi data diri dan keamanan kredensial akun Anda.</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        
        <div className="w-full xl:w-2/3 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 overflow-hidden border-4 border-white shadow-md">
                {profileImage ? (
                  <img src={profileImage} alt="Foto Profil" className="w-full h-full object-cover" />
                ) : (
                  <FaUserCircle className="w-full h-full text-gray-300" />
                )}
              </div>
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 bg-[#107058] text-white p-2 rounded-full shadow-lg hover:bg-[#0a4a3a] transition-colors border-2 border-white"
                title="Ganti Foto Profil"
              >
                <FaCamera size={12} />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-800">{namaLengkap}</h2>
              <p className="text-sm text-gray-500 mb-2">Super Admin Kecamatan</p>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                Status: Aktif
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 flex items-center gap-2">
              <FaUserTag className="text-gray-400" /> Informasi Dasar
            </h3>

            {infoSuccess && (
              <div className="mb-5 p-3.5 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs font-semibold flex items-center gap-2">
                <FaCheckCircle className="text-green-600 shrink-0" />
                <span>{infoSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={namaLengkap} 
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Username Login</label>
                  <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50 font-mono" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Alamat Email Dinas</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaEnvelope className="text-gray-400 text-sm" /></div>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" 
                  />
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button type="submit" className="bg-[#107058] hover:bg-[#0a5240] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                  <FaSave /> Simpan Profil
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full xl:w-1/3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 sticky top-6">
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6 flex items-center gap-2">
              <FaLock className="text-gray-400" /> Ubah Password
            </h3>
            
            {passwordFeedback.message && (
              <div className={`mb-5 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 border ${
                passwordFeedback.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-700' 
                  : 'bg-red-50 border-red-200 text-red-700'
              }`}>
                {passwordFeedback.type === 'success' ? (
                  <FaCheckCircle className="text-green-600 shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-red-600 shrink-0" />
                )}
                <span>{passwordFeedback.message}</span>
              </div>
            )}

            <form onSubmit={handleUpdatePassword} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Password Saat Ini</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Masukkan password lama" 
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Password Baru</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimal 8 karakter" 
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Konfirmasi Password Baru</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ketik ulang password baru" 
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#107058] bg-gray-50" 
                />
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input 
                  type="checkbox" 
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)} 
                  className="w-3.5 h-3.5 text-[#107058] rounded border-gray-300 focus:ring-[#107058]" 
                />
                <span className="text-[11px] text-gray-600 font-medium">Tampilkan Password</span>
              </label>

              <button type="submit" className="w-full mt-4 bg-gray-800 hover:bg-black text-white py-2.5 rounded-lg text-sm font-bold transition-colors">
                Update Password
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PengaturanAkun;