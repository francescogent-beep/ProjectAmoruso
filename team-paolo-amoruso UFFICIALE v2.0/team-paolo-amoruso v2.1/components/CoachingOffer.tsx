import React from 'react';
import { SITE_CONTENT } from '../constants/content.ts';

interface CoachingOfferProps {
  onCandidatiClick: () => void;
}

const CoachingOffer: React.FC<CoachingOfferProps> = ({ onCandidatiClick }) => {
  const { coaching } = SITE_CONTENT;

  return (
    <section id="coaching" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
              {coaching.title} <br />
              <span className="text-brand-gold font-bold italic">{coaching.accent}</span>
            </h2>
            
            <p className="text-zinc-400 mb-8 text-lg">
              {coaching.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {coaching.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <h4 className="font-bold text-white uppercase text-sm tracking-widest">{feature.label}</h4>
                  <p className="text-zinc-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-baseline space-x-4 mb-8">
              <span className="text-zinc-400 text-sm uppercase font-bold">Selezione manuale · Percorso personalizzato</span>
            </div>

            <button 
              onClick={onCandidatiClick}
              className="w-full sm:w-auto bg-brand-gold text-brand-black px-12 py-5 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              {coaching.cta}
            </button>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 border border-brand-gold/20 -z-10 translate-x-4 translate-y-4"></div>
              <img 
                src={coaching.image} 
                alt={`${coaching.title} by ${SITE_CONTENT.brand.fullName}`} 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="absolute bottom-6 right-6 bg-brand-black/90 p-4 border border-brand-gold/30">
                <p className="text-brand-gold font-display font-bold italic text-lg uppercase tracking-tight">{coaching.slotsBadge}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingOffer;