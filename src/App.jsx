import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home/Home';
import Tentang from './pages/Tentang/Tentang';
import Berita from './pages/Berita/Berita';
import Kiss from './pages/Inovasi/Kiss';
import ESakinah from './pages/Inovasi/ESakinah';
import Smile from './pages/Inovasi/Smile';
import Sumberrejo from './pages/Inovasi/Sumberrejo';
import Edukasi from './pages/Inovasi/Edukasi';

import AdminDashboard from './pages/Admin/Dashboard';
import ManageInformasi from './pages/Admin/ManageInformasi';
import TambahBerita from './pages/Admin/TambahBerita';
import ManageESakinah from './pages/Admin/ManageESakinah';
import DetailESakinah from './pages/Admin/DetailESakinah';
import ManageKiss from './pages/Admin/ManageKiss';
import ManageProfil from './pages/Admin/ManageProfil';
import ManageSmile from './pages/Admin/ManageSmile';

function App() {
  return (
    <Router>
      <Routes>
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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="berita" element={<ManageInformasi />} />
          <Route path="berita/tambah" element={<TambahBerita />} />
          <Route path="esakinah" element={<ManageESakinah />} />
          <Route path="esakinah/detail/:id" element={<DetailESakinah />} />
          <Route path="kiss" element={<ManageKiss />} />
          <Route path="tentang" element={<ManageProfil />} />
          <Route path="smile-tautan" element={<ManageSmile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;