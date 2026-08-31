import React from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

const ModalFormKiss = ({ isOpen, onClose, initialData }) => {
  if (!isOpen) return null;

  const isEditMode = initialData !== null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm transition-opacity overflow-y-auto"
      onClick={onClose} 
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <div className="flex justify-end p-4 pb-0">
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50">
            <FaTimes size={18} />
          </button>
        </div>

        <div className="px-8 md:px-10 pb-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            📅 {isEditMode ? 'Edit Reservasi Kunjungan KISS' : 'Form Reservasi Kunjungan KISS'}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Silakan lengkapi formulir berikut untuk melakukan {isEditMode ? 'perubahan data' : 'reservasi'} kunjungan ke Kampung Ikan Sumber Seng (KISS).
          </p>
        </div>

        <div className="p-8 md:px-10 space-y-10 max-h-[65vh] overflow-y-auto">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#e6f4f1] text-[#107058] font-bold w-6 h-6 flex items-center justify-center rounded text-sm">1</span>
              <h4 className="font-bold text-[#107058] text-lg">Data Instansi / Kelompok</h4>
            </div>
            
            <div className="space-y-5 pl-0 md:pl-9">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Nama Instansi / Sekolah / Kelompok PKK</label>
                <input 
                  type="text" 
                  defaultValue={isEditMode ? initialData.instansi : ''}
                  placeholder="Contoh: SMP Negeri 1 Banyuwangi / PKK Kelurahan Sumberrejo" 
                  className="w-full border border-gray-300 rounded-lg p-3.5 text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058] transition-shadow" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Alamat Instansi / Sekolah / Kelompok PKK</label>
                <input 
                  type="text" 
                  defaultValue={isEditMode ? (initialData.alamat || '') : ''}
                  placeholder="Masukkan alamat lengkap instansi / sekolah / kelompok PKK" 
                  className="w-full border border-gray-300 rounded-lg p-3.5 text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058] transition-shadow" 
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#e6f4f1] text-[#107058] font-bold w-6 h-6 flex items-center justify-center rounded text-sm">2</span>
              <h4 className="font-bold text-[#107058] text-lg">Data Kunjungan</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-9">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Tanggal Kunjungan</label>
                <input 
                  type="date" 
                  defaultValue={isEditMode ? initialData.tgl : ''}
                  className="w-full border border-gray-300 rounded-lg p-3.5 text-sm text-gray-600 focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058]" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Jumlah Peserta</label>
                <div className="flex">
                  <input 
                    type="number" 
                    defaultValue={isEditMode ? initialData.jml.replace(/\D/g, '') : ''} 
                    placeholder="Contoh: 30" 
                    className="w-full border border-gray-300 border-r-0 rounded-l-lg p-3.5 text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058] relative z-10" 
                  />
                  <span className="bg-gray-100 border border-gray-300 text-gray-600 px-5 rounded-r-lg text-sm font-bold flex items-center border-l-0">
                    Orang
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#e6f4f1] text-[#107058] font-bold w-6 h-6 flex items-center justify-center rounded text-sm">3</span>
              <h4 className="font-bold text-[#107058] text-lg">Koordinator / Penanggung Jawab</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-9">
              <div>
                <input 
                  type="text" 
                  defaultValue={isEditMode ? initialData.kord : ''}
                  placeholder="Masukkan nama koordinator" 
                  className="w-full border border-gray-300 rounded-lg p-3.5 text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058]" 
                />
              </div>
              <div className="flex">
                <select className="bg-white border border-gray-300 border-r-0 rounded-l-lg p-3.5 text-sm text-gray-700 font-bold focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058] relative z-10">
                  <option value="+62">+62</option>
                </select>
                <input 
                  type="text" 
                  defaultValue={isEditMode ? initialData.hp.replace(/\D/g, '').replace(/^0/, '') : ''} 
                  placeholder="Contoh: 8123456789" 
                  className="w-full border border-gray-300 rounded-r-lg p-3.5 text-sm focus:outline-none focus:border-[#107058] focus:ring-1 focus:ring-[#107058]" 
                />
              </div>
            </div>
          </div>

        </div>

        <div className="bg-white px-8 md:px-10 py-6 flex justify-end gap-4 border-t border-gray-100">
          <button 
            onClick={onClose} 
            className="px-6 py-3 rounded-lg text-sm font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
          >
            <FaTimes /> Batal
          </button>
          
          <button 
            onClick={onClose} 
            className="px-8 py-3 rounded-lg text-sm font-bold text-white bg-[#01352c] hover:bg-[#0a5240] transition-colors flex items-center gap-2 shadow-lg"
          >
            <FaPaperPlane /> {isEditMode ? 'Simpan Perubahan' : 'Kirim Reservasi'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModalFormKiss;