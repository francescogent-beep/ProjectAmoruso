import React from 'react';
import PageHeader from './components/PageHeader.tsx';
import Authority from './components/Authority.tsx';
import About from './components/About.tsx';
import FinalCTA from './components/FinalCTA.tsx';

interface ChiSonoPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ChiSonoPage: React.FC<ChiSonoPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Paolo Amoruso" 
        subtitle="Atleta IFBB Pro & Elite Performance Coach" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic mb-10 leading-none">
                La Mia <br />
                <span className="text-brand-gold">Missione.</span>
              </h2>
              <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Il mio percorso non è stato segnato dalla facilità, ma dalla ricerca ossessiva della perfezione. Come Atleta IFBB Pro, ho vissuto sulla mia pelle ogni sacrificio richiesto dal massimo livello agonistico. Ma la mia vera passione risiede nel decodificare quella scienza per renderla accessibile a chiunque desideri un fisico fuori dal comune.
                </p>
                <p>
                  Non sono qui per venderti un'illusione. Sono qui per offrirti un metodo collaudato, basato su anni di studio e migliaia di ore trascorse tra pesi e analisi dati. Nel Team PA, trattiamo ogni corpo come un progetto di ingegneria unico.
                </p>
                <p>
                  Essere un "Pro" non significa solo avere un titolo. Significa incarnare uno standard di lavoro, di disciplina e di integrità che porto in ogni singola consulenza di coaching.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <span className="block text-brand-gold font-display text-3xl font-black mb-1">PRO</span>
                  <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">IFBB League</span>
                </div>
                <div>
                  <span className="block text-brand-gold font-display text-3xl font-black mb-1">10Y+</span>
                  <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Experience</span>
                </div>
                <div>
                  <span className="block text-brand-gold font-display text-3xl font-black mb-1">ABS</span>
                  <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Champion 2024</span>
                </div>
                <div>
                  <span className="block text-brand-gold font-display text-3xl font-black mb-1">ELITE</span>
                  <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Coach Status</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-6 border border-brand-gold/5 -z-10 group-hover:border-brand-gold/20 transition-all duration-700"></div>
                <img src="https://i.imgur.com/IoHpM0K.jpeg" alt="Paolo Amoruso IFBB Pro Life" className="w-full grayscale shadow-2xl group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-brand-gold font-display text-xl font-bold uppercase italic">No Mediocrity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      
      <section className="py-24 bg-brand-gray border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-12"></div>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic mb-8">Pochi, Ma Eccellenti</h3>
          <p className="text-zinc-400 text-xl leading-relaxed italic mb-10">
            "Ho scelto di limitare il numero di atleti che seguo personalmente. La qualità del mio tempo e la precisione del mio feedback sono i motivi per cui i miei atleti ottengono risultati superiori alla media. Se cerchi un coach che si dimentica il tuo nome, non bussare alla mia porta."
          </p>
          <div className="flex justify-center space-x-2">
             <div className="w-2 h-2 bg-brand-gold"></div>
             <div className="w-2 h-2 bg-brand-gold"></div>
             <div className="w-2 h-2 bg-brand-gold"></div>
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
};

export default ChiSonoPage;