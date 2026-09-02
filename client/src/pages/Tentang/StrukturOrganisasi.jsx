import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import batikPattern from '../../assets/images/batik.png';

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

const StrukturOrganisasi = () => {
  return (
    <div className="bg-bwi-bg min-h-screen relative overflow-hidden py-24">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(${batikPattern})` }}></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-bwi-gold font-bold tracking-widest text-sm uppercase mb-2">Profil Kecamatan</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-bwi-dark">Struktur Organisasi</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Bagan susunan organisasi dan tata kerja aparatur pemerintahan Kecamatan Banyuwangi dalam melayani masyarakat.
          </p>
        </div>

        <div className="overflow-x-auto pb-10 cursor-grab active:cursor-grabbing">
          <div className="min-w-[800px] flex justify-center">
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
      </div>
    </div>
  );
};

export default StrukturOrganisasi;