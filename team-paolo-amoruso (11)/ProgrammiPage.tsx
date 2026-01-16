import React from 'react';
import PageHeader from './components/PageHeader.tsx';
import Authority from './components/Authority.tsx';
import EntryProgram from './components/EntryProgram.tsx';
import FinalCTA from './components/FinalCTA.tsx';

interface ProgrammiPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ProgrammiPage: React.FC<ProgrammiPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Protocolli & Blueprints" 
        subtitle="Il Fondamento dell'Eccellenza" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none">Strumenti per <br /><span className="text-brand-gold">Autonomi Ambiziosi</span></h2>
            <p className="text-zinc-500 text-lg">
              Per chi desidera iniziare a costruire la propria base con un metodo professionale ma in totale autonomia. I nostri protocolli digitali sono condensati di pura esperienza pratica, pronti per essere applicati immediatamente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors duration-500"></div>
              <div className="relative p-10 border border-white/5 bg-brand-black/50 backdrop-blur-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-brand-gold font-black text-xs uppercase tracking-[0.4em]">DIGITAL ASSET</span>
                    <span className="text-white/20 font-display text-4xl font-black">01</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase italic text-white mb-6">Strong Base 5.0</h3>
                  <p className="text-zinc-400 mb-10 leading-relaxed">
                    Il protocollo definitivo per l'ipertrofia estetica maschile e femminile. Una programmazione di 5 settimane che getta le fondamenta per un fisico denso, forte e proporzionato.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-zinc-300 uppercase font-bold tracking-widest">
                    <span className="text-brand-gold">✓</span> <span>Video Library Esercizi</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-zinc-300 uppercase font-bold tracking-widest">
                    <span className="text-brand-gold">✓</span> <span>Log-Sheet Programmato</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-zinc-300 uppercase font-bold tracking-widest">
                    <span className="text-brand-gold">✓</span> <span>Guida Nutrizionale Base</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-10 border border-white/5 bg-zinc-900/10 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-1 bg-zinc-800 mb-8"></div>
              <h3 className="font-display text-2xl font-bold uppercase italic text-zinc-500 mb-4">In Sviluppo</h3>
              <p className="text-zinc-600 text-sm max-w-xs">
                Protocolli di specializzazione per distretti carenti e guide avanzate all'integrazione sportiva.
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
              <span className="font-display text-[200px] font-black italic">ELITE</span>
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic text-white mb-6">Cerchi l'Ultimo <br /><span className="text-brand-gold">Livello?</span></h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  I programmi digitali sono il punto di partenza. Il coaching 1-on-1 è la destinazione finale per chi vuole smettere di indovinare e iniziare a dominare il proprio potenziale.
                </p>
              </div>
              <div className="lg:text-right">
                <button 
                  onClick={onCandidatiClick}
                  className="bg-brand-gold text-brand-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
                >
                  Candidati al Coaching
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