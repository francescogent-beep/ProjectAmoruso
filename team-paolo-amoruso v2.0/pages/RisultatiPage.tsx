import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import SocialProof from '../components/sections/SocialProof.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';

interface RisultatiPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const RisultatiPage: React.FC<RisultatiPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 overflow-visible">
      <PageHeader 
        title="I Loro Cambiamenti" 
        subtitle="Risultati reali, persone vere" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black overflow-visible">
        <div className="max-w-7xl mx-auto px-6 overflow-visible">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16 overflow-visible">
            <div className="lg:w-2/3 overflow-visible">
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic mb-8 leading-none text-white overflow-visible">
                La Realtà. <br />
                <span className="text-brand-gold pr-16">Senza Trucchi.</span>
              </h2>
              <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl">
                Niente luci finte o Photoshop. In questa pagina vedi il risultato di ragazzi e ragazze che hanno deciso di impegnarsi sul serio seguendo il mio metodo. Ogni foto è la prova che con il piano giusto chiunque può cambiare.
              </p>
            </div>
            <div className="lg:w-1/3 w-full bg-brand-gray p-10 border border-white/5 overflow-visible">
              <div className="space-y-8 overflow-visible">
                <div className="overflow-visible">
                  <span className="block text-brand-gold font-display text-4xl font-black mb-1">100%</span>
                  <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest block">Clienti Soddisfatti</span>
                </div>
                <div className="overflow-visible">
                  <span className="block text-brand-gold font-display text-4xl font-black mb-1">LIVE</span>
                  <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest block">Supporto Continuo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProof />
      
      <section className="py-24 bg-brand-gray border-y border-white/5 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 overflow-visible">
          <div className="grid lg:grid-cols-2 gap-20 overflow-visible">
            <div className="overflow-visible">
              <div className="w-16 h-1 bg-brand-gold mb-10"></div>
              <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic text-white mb-8 overflow-visible">Non solo <br />per chi gareggia</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Anche se io sono un atleta Pro, il mio coaching è fatto per chiunque voglia un fisico di cui andare fiero. Porto la mia esperienza nel tuo quotidiano, aiutandoti a costruire un corpo forte e armonioso che ti faccia sentire bene in ogni situazione.
              </p>
              <ul className="space-y-4 text-white font-bold uppercase text-xs tracking-[0.2em]">
                <li className="flex items-center space-x-4"><span className="text-brand-gold">•</span> <span>Torna in forma davvero</span></li>
                <li className="flex items-center space-x-4"><span className="text-brand-gold">•</span> <span>Fisico più tonico e muscoloso</span></li>
                <li className="flex items-center space-x-4"><span className="text-brand-gold">•</span> <span>Salute e forza al top</span></li>
              </ul>
            </div>
            <div className="flex flex-col justify-center overflow-visible">
              <div className="p-10 border border-brand-gold/30 bg-brand-black/50 backdrop-blur-md relative overflow-visible">
                <div className="absolute -top-4 -left-4 text-brand-gold text-6xl font-serif opacity-20">"</div>
                <p className="text-white italic text-xl leading-relaxed mb-6">
                  "Lavorare con Paolo mi ha fatto capire che non serve fare ore di cardio o mangiare solo insalata. Con il piano giusto ho ottenuto in 6 mesi quello che non avevo fatto in 3 anni da solo."
                </p>
                <div className="flex items-center space-x-4 overflow-visible">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/50"></div>
                  <div className="overflow-visible">
                    <span className="block text-white font-bold uppercase text-xs tracking-widest">Matteo R.</span>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold block">Cliente Coaching - 12 Mesi Insieme</span>
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