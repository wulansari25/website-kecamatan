import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

// Halaman Frontend (Pengunjung)
import Home from './pages/Home/Home';
import Tentang from './pages/Tentang/Tentang';
import Berita from './pages/Berita/Berita';
import Kiss from './pages/Inovasi/Kiss';
import ESakinah from './pages/Inovasi/ESakinah';
import Smile from './pages/Inovasi/Smile';
import Sumberrejo from './pages/Inovasi/Sumberrejo';
import Edukasi from './pages/Inovasi/Edukasi';

// Halaman Backend (Admin Panel)
import AdminDashboard from './pages/Admin/Dashboard';
import ManageInformasi from './pages/Admin/ManageInformasi';
import TambahBerita from './pages/Admin/TambahBerita';
import EditBerita from './pages/Admin/EditBerita';
import ManageESakinah from './pages/Admin/ManageESakinah';
import DetailESakinah from './pages/Admin/DetailESakinah';
import ManageKiss from './pages/Admin/ManageKiss';
import ManageProfil from './pages/Admin/ManageProfil';
import ManageStruktur from './pages/Admin/Managestruktur';
import ManageSmile from './pages/Admin/ManageSmile';
import ManageSumberrejo from './pages/Admin/ManageSumberrejo';
import ManageEdukasi from './pages/Admin/ManageEdukasi';
import PengaturanAkun from './pages/Admin/PengaturanAkun';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- RUTE FRONTEND --- */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Tentang />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/inovasi/kiss" element={<Kiss />} />
          <Route path="/inovasi/e-sakinah" element={<ESakinah />} />
          <Route path="/inovasi/smile" element={<Smile />} /> 
          <Route path="/inovasi/smile/sumberrejo" element={<Sumberrejo />} />
          <Route path="/inovasi/smile/edukasi" element={<Edukasi />} />
        </Route>

        {/* --- RUTE ADMIN --- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />

          {/* Kelompok Berita */}
          <Route path="berita" element={<ManageInformasi />} />
          <Route path="berita/tambah" element={<TambahBerita />} />
          <Route path="berita/edit/:id" element={<EditBerita />} />
          <Route path="pengaturan" element={<PengaturanAkun />} />
          
          {/* Kelompok Layanan Interaktif */}
          <Route path="esakinah" element={<ManageESakinah />} />
          <Route path="esakinah/detail/:id" element={<DetailESakinah />} />
          <Route path="kiss" element={<ManageKiss />} />
          
          {/* Kelompok Profil Kecamatan */}
          <Route path="tentang" element={<ManageProfil />} />
          <Route path="struktur" element={<ManageStruktur />} />
          
          {/* Kelompok Konten SMILE */}
          <Route path="smile-tautan" element={<ManageSmile />} />
          <Route path="smile-sumberrejo" element={<ManageSumberrejo />} />
          <Route path="smile-edukasi" element={<ManageEdukasi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;