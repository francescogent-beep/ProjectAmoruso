import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface CoachingOfferProps {
  onCandidatiClick: () => void;
}

const CoachingOffer: React.FC<CoachingOfferProps> = ({ onCandidatiClick }) => {
  const { coaching } = SITE_CONTENT;
  const optimizedImage = coaching.image.replace(/\.(jpe?g|png)$/i, 'h.jpg');

  return (
    <section id="coaching" className="py-24 bg-brand-gray relative overflow-hidden" aria-labelledby="coaching-title">
      <div className="max-w-7xl mx-auto px-6 relative z-10 overflow-visible">
        <div className="flex flex-col lg:flex-row gap-16 items-center overflow-visible">
          <div className="lg:w-1/2 order-2 lg:order-1 overflow-visible">
            <h2 id="coaching-title" className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight text-white overflow-visible">
              {coaching.title} <br />
              <span className="gold-gradient italic pr-12">{coaching.accent}</span>
            </h2>
            
            <p className="text-zinc-200 mb-8 text-lg font-medium">
              {coaching.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {coaching.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <h3 className="font-bold text-white uppercase text-sm tracking-widest">{feature.label}</h3>
                  <p className="text-zinc-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-baseline space-x-4 mb-8">
              <span className="text-zinc-300 text-sm uppercase font-bold">Selezione manuale · Percorso personalizzato</span>
            </div>

            <button 
              onClick={onCandidatiClick}
              className="w-full sm:w-auto gold-metallic-bg px-12 py-5 text-base tracking-widest shadow-lg"
              aria-label="Inizia ora il coaching personalizzato"
            >
              {coaching.cta}
            </button>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:max-w-none shadow-2xl">
              <div className="absolute -inset-4 border border-brand-gold/20 -z-10 translate-x-4 translate-y-4" aria-hidden="true"></div>
              <img 
                src={optimizedImage} 
                alt="Paolo Amoruso mostra i risultati del coaching online d'élite" 
                className="w-full h-full object-cover grayscale"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute bottom-6 right-6 bg-brand-black/90 p-4 border border-brand-gold/30 overflow-visible">
                <p className="gold-gradient font-display font-bold italic text-lg uppercase tracking-tight pr-10">{coaching.slotsBadge}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingOffer;