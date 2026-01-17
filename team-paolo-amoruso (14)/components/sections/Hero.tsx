import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface HeroProps {
  onCandidatiClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCandidatiClick }) => {
  const words = SITE_CONTENT.hero.title.split(' ');
  
  return (
    <section className="relative min-h-[85vh] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-brand-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <picture>
          <source srcSet="https://i.imgur.com/7PeSnLE.jpeg" type="image/jpeg" />
          <img 
            src="https://i.imgur.com/7PeSnLE.jpeg" 
            alt="Paolo Amoruso IFBB Pro Athlete & Coach - Online Coaching Estetico" 
            className="w-full h-full object-cover opacity-80"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 mb-6">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">
              {SITE_CONTENT.hero.badge}
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-[1.05] mb-8 tracking-tight text-white">
            {words[0]} <br />
            {words[1]} {words[2]} <br />
            <span className="gold-gradient italic pr-6 inline-block">{words[3]} {words[4]}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
            {SITE_CONTENT.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCandidatiClick}
              className="bg-gold-gradient px-10 py-5 text-brand-black font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              {SITE_CONTENT.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;