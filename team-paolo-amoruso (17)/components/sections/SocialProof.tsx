import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const SocialProof: React.FC = () => {
  const { socialProof } = SITE_CONTENT;

  return (
    <section id="risultati" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic text-white">{socialProof.title}</h2>
            <p className="text-zinc-300 uppercase tracking-widest text-xs font-bold mt-2">{socialProof.subtitle}</p>
          </div>
          <div className="hidden md:block" aria-hidden="true">
            <span className="text-brand-gold font-display text-6xl font-black italic opacity-20 uppercase tracking-tighter">
              {socialProof.sideText}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {socialProof.items.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-white/5">
              <img 
                src={item.url} 
                alt={item.label} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                width="600"
                height="800"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-[9px] font-black uppercase tracking-[0.3em] border border-white/20 px-3 py-1.5 bg-brand-black/60 backdrop-blur-md">
                  Risultato Team PA
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-zinc-200 italic max-w-2xl mx-auto text-lg">
            "{socialProof.quote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;