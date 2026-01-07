
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic">Risultati</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mt-2">Trasformazioni & Gare</p>
          </div>
          <div className="hidden md:block">
            <span className="text-brand-gold font-display text-6xl font-black italic opacity-20 italic uppercase tracking-tighter">Excellence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[3/4] bg-zinc-900 overflow-hidden group">
              <img 
                src={`https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2070&auto=format&fit=crop`} 
                alt="Client Transformation" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-black uppercase tracking-[0.5em] border border-white/20 px-4 py-2 bg-black/40 backdrop-blur-sm">
                  Risultati in Arrivo
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-zinc-500 italic max-w-2xl mx-auto">
            "Il fisico non mente mai. Mostra ogni ora passata in palestra e ogni sacrificio a tavola."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
