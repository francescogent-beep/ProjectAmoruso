import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import Method from '../components/sections/Method.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';

interface ProcessoPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ProcessoPage: React.FC<ProcessoPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Il Nostro Metodo" 
        subtitle="Dalla Scienza al Risultato Tangibile" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase italic mb-8 leading-tight relative z-10 text-white">
                Oltre il <br />
                <span className="text-brand-gold">Fitness Comune</span>
              </h2>
              <p className="text-zinc-100 text-lg mb-10 leading-relaxed max-w-xl">
                Non crediamo nel caso o nell'istinto. Il Metodo Team PA si basa sulla raccolta dati e sull'analisi critica. Trasformiamo le tue variabili soggettive in parametri oggettivi per eliminare ogni margine d'errore.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-brand-gray border border-white/5">
                  <h4 className="text-brand-gold font-black text-xs uppercase tracking-widest mb-3">Analisi Sistemica</h4>
                  <p className="text-zinc-200 text-xs leading-relaxed">Valutiamo non solo il peso, ma la qualità del riposo, la gestione dello stress e la capacità di recupero neurale.</p>
                </div>
                <div className="p-6 bg-brand-gray border border-white/5">
                  <h4 className="text-brand-gold font-black text-xs uppercase tracking-widest mb-3">Protocolli su Misura</h4>
                  <p className="text-zinc-200 text-xs leading-relaxed">Ogni variabile è calcolata per la tua biologia specifica. Non esistono piani "copia-incolla", solo soluzioni uniche.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.imgur.com/i5OPvRVl.jpg" 
                alt="Metodo Pro 1" 
                className="w-full aspect-[3/4] object-cover grayscale opacity-60 border border-white/5" 
                width="400" 
                height="533" 
                loading="lazy"
                style={{ aspectRatio: '3/4' }}
              />
              <img 
                src="https://i.imgur.com/IoHpM0Kl.jpg" 
                alt="Metodo Pro 2" 
                className="w-full aspect-[3/4] object-cover grayscale opacity-90 border border-brand-gold/20 translate-y-8" 
                width="400" 
                height="533" 
                loading="lazy"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Method />
      
      <section className="py-24 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic mb-8 text-white">Il Cuore del Successo: Il Check-in</h3>
          <p className="text-zinc-100 text-lg leading-relaxed mb-12">
            Il momento più importante della settimana non è in palestra, ma durante il check-in. È qui che analizziamo i dati raccolti, confrontiamo le foto di condizione e decidiamo la strategia per la settimana successiva. Questa analisi continua è ciò che garantisce che tu non stallerai mai.
          </p>
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-brand-gold rotate-45"></div>
              <span className="text-white uppercase font-bold text-xs tracking-[0.3em]">Ogni dettaglio conta</span>
              <div className="w-3 h-3 bg-brand-gold rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
}; 

export default ProcessoPage;