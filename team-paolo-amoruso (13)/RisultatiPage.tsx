import React from 'react';
import PageHeader from './components/PageHeader.tsx';
import Authority from './components/Authority.tsx';
import SocialProof from './components/SocialProof.tsx';
import FinalCTA from './components/FinalCTA.tsx';

interface RisultatiPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const RisultatiPage: React.FC<RisultatiPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Prove di Trasformazione" 
        subtitle="Il Risultato del Metodo Team PA" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic mb-8 leading-none text-white">
                La Realtà. <br />
                <span className="text-brand-gold">Senza Filtri.</span>
              </h2>
              <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl">
                Il corpo umano è la prova tangibile della disciplina applicata. In questa galleria non vedrai "fortuna", ma l'esecuzione millimetrica di un piano d'élite. Ogni trasformazione è il frutto di settimane di lavoro invisibile.
              </p>
            </div>
            <div className="lg:w-1/3 w-full bg-brand-gray p-10 border border-white/5">
              <div className="space-y-8">
                <div>
                  <span className="block text-brand-gold font-display text-4xl font-black mb-1">100%</span>
                  <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Client Satisfaction</span>
                </div>
                <div>
                  <span className="block text-brand-gold font-display text-4xl font-black mb-1">∞</span>
                  <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Ore di Studio Biomeccanico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProof />
      
      <section className="py-24 bg-brand-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="w-16 h-1 bg-brand-gold mb-10"></div>
              <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic text-white mb-8">Oltre il <br />Palco di Gara</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Sebbene io sia un atleta IFBB Pro, il mio coaching è dedicato a chiunque esiga il massimo. Portiamo la precisione necessaria per vincere una Pro Card nella tua vita quotidiana, per costruire un fisico che comanda rispetto ovunque tu vada.
              </p>
              <ul className="space-y-4 text-white font-bold uppercase text-xs tracking-[0.2em]">
                <li className="flex items-center space-x-4"><span className="text-brand-gold">•</span> <span>Ricostruzione Metabolica</span></li>
                <li className="flex items-center space-x-4"><span className="text-brand-gold">•</span> <span>Estetica Proporzionata</span></li>
                <li className="flex items-center space-x-4"><span className="text-brand-gold">•</span> <span>Longevità Articolare</span></li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-10 border border-brand-gold/30 bg-brand-black/50 backdrop-blur-md relative">
                <div className="absolute -top-4 -left-4 text-brand-gold text-6xl font-serif opacity-20">"</div>
                <p className="text-white italic text-xl leading-relaxed mb-6">
                  "Lavorare con Paolo ha resettato completamente la mia idea di allenamento. Ho scoperto che il segreto non è fare di più, ma fare meglio. Ogni check-in è stata una lezione di biomeccanica e nutrizione."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/50"></div>
                  <div>
                    <span className="block text-white font-bold uppercase text-xs tracking-widest">Matteo R.</span>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold">Cliente Coaching - Trasformazione 12 Mesi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
};

export default RisultatiPage;