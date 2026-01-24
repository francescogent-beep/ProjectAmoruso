import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import About from '../components/sections/About.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';

interface ChiSonoPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ChiSonoPage: React.FC<ChiSonoPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 overflow-visible">
      <PageHeader 
        title="Paolo Amoruso" 
        subtitle="Atleta IFBB Pro & Il Tuo Coach" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black overflow-visible">
        <div className="max-w-7xl mx-auto px-6 overflow-visible">
          <div className="grid lg:grid-cols-2 gap-20 items-center overflow-visible">
            <div className="order-2 lg:order-1 overflow-visible">
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic mb-10 leading-none text-white overflow-visible pr-12">
                Perché <br />
                <span className="gold-gradient">lo faccio.</span>
              </h2>
              <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Ho dedicato tutta la mia vita a capire come migliorare il corpo umano. Come Atleta Professionista, ho provato ogni sacrificio sulla mia pelle per arrivare tra i migliori al mondo.
                </p>
                <p>
                  Ma quello che mi rende davvero orgoglioso è riuscire a trasmettere tutto questo a te. Non voglio venderti sogni, voglio darti un metodo che ho testato io stesso e che ho affinato con anni di studio e migliaia di ore in palestra.
                </p>
                <p>
                  Essere un "Pro" per me non è solo un titolo, è un modo di lavorare. Significa precisione, disciplina e onestà verso chi si affida a me. Ti seguo con lo stesso impegno con cui preparo le mie gare.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 overflow-visible">
                <div className="overflow-visible">
                  <span className="block gold-gradient font-display text-3xl font-black mb-1">PRO</span>
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest block">Atleta Professionista</span>
                </div>
                <div className="overflow-visible">
                  <span className="block gold-gradient font-display text-3xl font-black mb-1">10Y+</span>
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest block">Esperienza</span>
                </div>
                <div className="overflow-visible">
                  <span className="block gold-gradient font-display text-3xl font-black mb-1">ITA</span>
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest block">Campione 2024</span>
                </div>
                <div className="overflow-visible">
                  <span className="block gold-gradient font-display text-3xl font-black mb-1">TOP</span>
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest block">Livello Coaching</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-6 border border-brand-gold/5 -z-10 group-hover:border-brand-gold/20 transition-all duration-700"></div>
                <img src="https://i.imgur.com/IoHpM0K.jpeg" alt="Paolo Amoruso IFBB Pro Life" className="w-full grayscale shadow-2xl group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-visible">
                  <span className="gold-gradient font-display text-xl font-bold uppercase italic pr-10">Zero Scuse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      
      <section className="py-24 bg-brand-gray border-t border-white/5 overflow-visible">
        <div className="max-w-4xl mx-auto px-6 text-center overflow-visible">
          <div className="w-12 h-1 gold-metallic-bg mx-auto mb-12"></div>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic mb-8 text-white overflow-visible">Qualità sopra la quantità</h3>
          <p className="text-zinc-300 text-xl leading-relaxed italic mb-10">
            "Ho scelto di seguire solo poche persone alla volta. Voglio avere il tempo di guardare ogni tuo video e rispondere a ogni tuo messaggio. Se cerchi un coach che ti manda una scheda e scompare, non sono io."
          </p>
          <div className="flex justify-center space-x-2">
             <div className="w-2 h-2 gold-metallic-bg"></div>
             <div className="w-2 h-2 gold-metallic-bg"></div>
             <div className="w-2 h-2 gold-metallic-bg"></div>
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
}; 

export default ChiSonoPage;