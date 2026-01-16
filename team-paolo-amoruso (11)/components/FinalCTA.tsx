import React from 'react';
import { SITE_CONTENT } from '../constants/content.ts';

interface FinalCTAProps {
  onCandidatiClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCandidatiClick }) => {
  const { finalCta } = SITE_CONTENT;

  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic leading-none mb-10 tracking-tighter">
          {finalCta.title.split(finalCta.accent)[0]} <br />
          <span className="text-brand-gold italic">{finalCta.accent}</span> <br />
          {finalCta.title.split(finalCta.accent)[1]}
        </h2>
        
        <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold text-xs mb-12">
          {finalCta.subtitle}
        </p>
        
        <button 
          onClick={onCandidatiClick}
          className="bg-gold-gradient px-16 py-6 text-brand-black font-black uppercase tracking-[0.2em] text-lg hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20"
        >
          {finalCta.cta}
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;