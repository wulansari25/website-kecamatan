import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import batikPattern from '../../assets/images/batik.png';
import kantorCamatBg from '../../assets/images/kantor-camat.png';
import kantorCamatDulu from '../../assets/images/kantor-camat-dulu.png';
import logoBanyuwangi from '../../assets/images/logo-banyuwangi.png';
import { FaUsers, FaHome, FaStore, FaMap, FaSitemap, FaHandsHelping, FaBuilding } from 'react-icons/fa';

const PegawaiCard = ({ nama, jabatan, img, isPimpinan }) => (
  <div className={`inline-flex flex-col items-center p-4 rounded-2xl shadow-md border-t-4 transition-transform hover:-translate-y-1 bg-white mx-2 w-48 md:w-56 ${isPimpinan ? 'border-bwi-gold shadow-lg' : 'border-[#107058]'}`}>
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-100 shadow-inner mb-3">
      <img src={img} alt={nama} className="w-full h-full object-cover object-top" />
    </div>
    <h4 className="font-bold text-bwi-dark text-xs md:text-sm text-center leading-tight mb-1">{nama}</h4>
    <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wider text-center ${isPimpinan ? 'text-bwi-gold' : 'text-[#107058]'}`}>
      {jabatan}
    </p>
  </div>
);

const Tentang = () => {
  return (
    <div className="bg-bwi-bg font-sans min-h-screen relative overflow-hidden">
      
      <div className="absolute top-40 left-0 w-80 h-96 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[1200px] right-0 w-96 h-96 opacity-10 bg-no-repeat bg-contain transform scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>
      <div className="absolute top-[2200px] left-0 w-72 h-80 opacity-5 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <section 
        className="relative h-[550px] flex items-center bg-cover bg-center pt-16"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(1, 30, 22, 0.95) 0%, rgba(1, 30, 22, 0.8) 40%, rgba(1, 30, 22, 0.1) 100%), url(${kantorCamatBg})` 
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 relative z-20 text-white">
          <p className="text-bwi-gold text-4xl lg:text-5xl mb-2 leading-none" style={{ fontFamily: "'Rage Italic', cursive" }}>
            Tentang
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight drop-shadow-lg">
            KANTOR CAMAT <br/> BANYUWANGI
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl font-light drop-shadow-md leading-relaxed">
            Mengenal lebih dekat sejarah, wilayah, struktur organisasi, 
            serta peran Kecamatan Banyuwangi dalam melayani masyarakat dengan integritas dan inovasi.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10 space-y-24">
        
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-bwi-dark text-white rounded flex items-center justify-center font-bold text-xl">1</div>
            <h3 className="text-2xl font-bold text-bwi-dark uppercase tracking-wide">SEJARAH KECAMATAN BANYUWANGI</h3>
          </div>
          <div className="flex flex-col xl:flex-row gap-10 items-start">
            <div className="w-full xl:w-5/12 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg shrink-0">
               <img src={kantorCamatDulu} alt="Sejarah Kantor Camat" className="w-full h-full object-cover grayscale sepia-[.3]" />
            </div>
            <div className="w-full xl:w-7/12">
               <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                 Kecamatan Banyuwangi merupakan salah satu kecamatan tertua di Kabupaten Banyuwangi. Wilayah ini memiliki peran penting sejak masa Kerajaan Blambangan hingga menjadi pusat pemerintahan Kabupaten Banyuwangi saat ini.
               </p>
               <p className="text-gray-700 text-lg leading-relaxed text-justify">
                 Seiring perkembangan zaman, Kecamatan Banyuwangi terus berbenah menghadirkan pelayanan publik yang modern, transparan, dan inovatif untuk kesejahteraan masyarakat.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              { year: '1771', text: 'Wilayah Banyuwangi menjadi bagian dari Kerajaan Blambangan.' },
              { year: '1945', text: 'Pembentukan Kabupaten Banyuwangi dan penetapan pusat pemerintahan.' },
              { year: '1965', text: 'Perkembangan wilayah Administrasi Kabupaten Banyuwangi.' },
              { year: '2010', text: 'Peningkatan pelayanan publik berbasis teknologi informasi.' },
              { year: '2024', text: 'Inovasi layanan digital melalui SMILE, KISS, dan E-Sakinah.' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                 <div className="w-4 h-4 rounded-full bg-bwi-gold absolute -top-2 left-6 ring-4 ring-white"></div>
                 <h4 className="text-3xl font-bold text-bwi-dark mb-3 mt-2">{item.year}</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-bwi-dark text-white rounded flex items-center justify-center font-bold text-xl">2</div>
            <h3 className="text-2xl font-bold text-bwi-dark uppercase tracking-wide">WILAYAH KECAMATAN BANYUWANGI</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
             <div className="w-full lg:w-7/12">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-6">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Peta Wilayah" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap justify-between items-center text-center gap-4">
                   <div className="flex flex-col items-center"><FaUsers className="text-3xl text-bwi-dark mb-2" /><p className="font-bold text-lg">85.421</p><p className="text-xs text-gray-500">Penduduk</p></div>
                   <div className="flex flex-col items-center"><FaBuilding className="text-3xl text-bwi-dark mb-2" /><p className="font-bold text-lg">18</p><p className="text-xs text-gray-500">Kelurahan</p></div>
                   <div className="flex flex-col items-center"><FaHome className="text-3xl text-bwi-dark mb-2" /><p className="font-bold text-lg">72</p><p className="text-xs text-gray-500">RW</p></div>
                   <div className="flex flex-col items-center"><FaStore className="text-3xl text-bwi-dark mb-2" /><p className="font-bold text-lg">470</p><p className="text-xs text-gray-500">UMKM</p></div>
                   <div className="flex flex-col items-center"><FaMap className="text-3xl text-bwi-dark mb-2" /><p className="font-bold text-lg">32 KM</p><p className="text-xs text-gray-500">Luas Wilayah</p></div>
                </div>
                <p className="text-[10px] text-gray-400 mt-3 text-right">*Sumber Data BPS 2024</p>
             </div>
             <div className="w-full lg:w-5/12">
                <div className="bg-[#FAF4EB] p-8 rounded-3xl shadow-sm h-full">
                   <h4 className="text-xl font-bold text-bwi-dark mb-6">Kelurahan di Kecamatan Banyuwangi</h4>
                   <div className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm font-medium">
                     <p>1. Kepatihan</p><p>10. Lateng</p>
                     <p>2. Temenggungan</p><p>11. Kertosari</p>
                     <p>3. Kampung Melayu</p><p>12. Kebalenan</p>
                     <p>4. Singotrunan</p><p>13. Pengantigan</p>
                     <p>5. Penganjuran</p><p>14. Sumberrejo</p>
                     <p>6. Tukang Kayu</p><p>15. Panderejo</p>
                     <p>7. Karangrejo</p><p>16. Kampung Mandar</p>
                     <p>8. Pakis</p><p>17. Singonegaran</p>
                     <p>9. Sobo</p><p>18. Tamanbaru</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-bwi-dark text-white rounded flex items-center justify-center font-bold text-xl">3</div>
            <h3 className="text-2xl font-bold text-bwi-dark uppercase tracking-wide">STRUKTUR ORGANISASI</h3>
          </div>
          <div className="w-full bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 overflow-x-auto cursor-grab active:cursor-grabbing">
             <div className="min-w-[800px] flex justify-center pb-10">
                <Tree
                  lineWidth={'2px'}
                  lineColor={'#cbd5e1'}
                  lineBorderRadius={'10px'}
                  label={
                    <PegawaiCard 
                      nama="Andik Basuki, S.AB., M.Si." 
                      jabatan="Camat Banyuwangi" 
                      img="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop" 
                      isPimpinan={true} 
                    />
                  }
                >
                  <TreeNode 
                    label={
                      <PegawaiCard 
                        nama="Budi Santoso, S.STP." 
                        jabatan="Sekretaris Camat" 
                        img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                      />
                    }
                  >
                    <TreeNode 
                      label={
                        <PegawaiCard 
                          nama="Dra. Siti Aminah" 
                          jabatan="Kasi Pemerintahan" 
                          img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                        />
                      }
                    />
                    <TreeNode 
                      label={
                        <PegawaiCard 
                          nama="Hendra Wijaya, S.E." 
                          jabatan="Kasi PMK" 
                          img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                        />
                      }
                    />
                    <TreeNode 
                      label={
                        <PegawaiCard 
                          nama="Rina Susanti, S.H." 
                          jabatan="Kasubag Umum" 
                          img="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                        />
                      }
                    />
                  </TreeNode>
                </Tree>
             </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-bwi-dark text-white rounded flex items-center justify-center font-bold text-xl">4</div>
            <h3 className="text-2xl font-bold text-bwi-dark uppercase tracking-wide">TUGAS DAN FUNGSI</h3>
          </div>
          <p className="text-gray-600 mb-8 text-lg">Kecamatan Banyuwangi melaksanakan sebagian kewenangan Bupati dalam rangka meningkatkan koordinasi penyelenggaraan pemerintahan, pelayanan publik, dan pemberdayaan masyarakat.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <FaSitemap className="text-4xl text-bwi-dark mx-auto mb-4" />
                <h4 className="font-bold text-lg text-bwi-dark mb-3">Penyelenggaraan Pemerintahan</h4>
                <p className="text-sm text-gray-500">Melakukan urusan pemerintahan umum sesuai kebijakan Bupati.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <FaHome className="text-4xl text-bwi-dark mx-auto mb-4" />
                <h4 className="font-bold text-lg text-bwi-dark mb-3">Pelayanan Publik</h4>
                <p className="text-sm text-gray-500">Memberikan pelayanan administrasi, informasi dan layanan kepada masyarakat.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <FaHandsHelping className="text-4xl text-bwi-dark mx-auto mb-4" />
                <h4 className="font-bold text-lg text-bwi-dark mb-3">Pemberdayaan Masyarakat</h4>
                <p className="text-sm text-gray-500">Mendorong partisipasi dan kemandirian masyarakat dalam pembangunan.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <FaBuilding className="text-4xl text-bwi-dark mx-auto mb-4" />
                <h4 className="font-bold text-lg text-bwi-dark mb-3">Pembinaan Kelurahan</h4>
                <p className="text-sm text-gray-500">Membina dan mengawasi penyelenggaraan pemerintahan kelurahan di wilayahnya.</p>
             </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-bwi-dark text-white rounded flex items-center justify-center font-bold text-xl">5</div>
            <h3 className="text-2xl font-bold text-bwi-dark uppercase tracking-wide">MAKLUMAT PELAYANAN</h3>
          </div>
          <div className="bg-white p-10 lg:p-14 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
             <img src={logoBanyuwangi} alt="Logo" className="w-32 h-40 object-contain shrink-0" />
             <div>
                <div className="flex items-start mb-6">
                  <span className="text-5xl text-bwi-gold font-serif leading-none mr-4 mt-2">“</span>
                  <p className="text-gray-800 text-xl lg:text-2xl font-medium leading-relaxed">
                     Kami berkomitmen memberikan pelayanan yang profesional, transparan, cepat, tepat dan bebas pungutan kepada masyarakat dengan mengedepankan integritas dan inovasi.
                  </p>
                </div>
                <div className="ml-12">
                  <h4 className="font-bold text-xl text-bwi-dark">Andik Basuki, S.AB., M.Si.</h4>
                  <p className="text-sm text-gray-500 font-medium mb-2">Camat Banyuwangi</p>
                  <div className="mt-4 text-5xl opacity-50 text-gray-700" style={{ fontFamily: "'Rage Italic', cursive" }}>Andik Basuki</div>
                </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Tentang;