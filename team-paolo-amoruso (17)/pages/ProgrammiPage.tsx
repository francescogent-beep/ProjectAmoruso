import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import EntryProgram from '../components/sections/EntryProgram.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';

interface ProgrammiPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ProgrammiPage: React.FC<ProgrammiPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="I Miei Programmi" 
        subtitle="Inizia subito a cambiare" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none text-white">Per chi vuole <br /><span className="text-brand-gold">muoversi da solo</span></h2>
            <p className="text-zinc-400 text-lg">
              Se vuoi iniziare a vedere i primi risultati ma preferisci allenarti in autonomia, ho creato dei protocolli digitali pronti all'uso. Sono la base perfetta per costruire un fisico solido seguendo il mio metodo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors duration-500"></div>
              <div className="relative p-10 border border-white/5 bg-brand-black/50 backdrop-blur-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-brand-gold font-black text-xs uppercase tracking-[0.4em]">PRODOTTO DIGITALE</span>
                    <span className="text-white/20 font-display text-4xl font-black">01</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase italic text-white mb-6">Strong Base 5.0</h3>
                  <p className="text-zinc-300 mb-10 leading-relaxed">
                    Il programma perfetto per chi vuole mettere muscoli nei punti giusti. 5 settimane di allenamento intenso che ti spiegano esattamente cosa fare in palestra per cambiare specchio.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-zinc-200 uppercase font-bold tracking-widest">
                    <span className="text-brand-gold">✓</span> <span>Video che ti spiegano gli esercizi</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-zinc-200 uppercase font-bold tracking-widest">
                    <span className="text-brand-gold">✓</span> <span>Foglio per segnare i tuoi progressi</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-zinc-200 uppercase font-bold tracking-widest">
                    <span className="text-brand-gold">✓</span> <span>Consigli su cosa mangiare</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-10 border border-white/5 bg-zinc-900/10 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-1 bg-zinc-800 mb-8"></div>
              <h3 className="font-display text-2xl font-bold uppercase italic text-zinc-400 mb-4">In Arrivo</h3>
              <p className="text-zinc-500 text-sm max-w-xs">
                Nuovi programmi specifici per far crescere le zone del corpo più difficili e guide sugli integratori che servono davvero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EntryProgram />

      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-black p-12 md:p-20 border border-brand-gold/20 relative">
             <div className="absolute top-0 right-0 p-12 overflow-hidden opacity-5">
              <span className="font-display text-[200px] font-black italic">PRO</span>
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic text-white mb-6">Vuoi il massimo <br /><span className="text-brand-gold">da te stesso?</span></h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  I programmi digitali sono un ottimo inizio. Ma se vuoi smettere di tirare a indovinare e vuoi un fisico da Pro, il coaching 1-on-1 è l'unica vera soluzione.
                </p>
              </div>
              <div className="lg:text-right">
                <button 
                  onClick={onCandidatiClick}
                  className="bg-brand-gold text-brand-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
                >
                  Inizia il Coaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
}; 

export default ProgrammiPage;