import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Tentang from './pages/Tentang/Tentang';
import Berita from './pages/Berita/Berita';
import Kiss from './pages/Inovasi/Kiss';
import ESakinah from './pages/Inovasi/ESakinah';
import Smile from './pages/Inovasi/Smile';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Tentang />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/inovasi/kiss" element={<Kiss />} />
            <Route path="/inovasi/e-sakinah" element={<ESakinah />} />
            <Route path="/inovasi/smile" element={<Smile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;