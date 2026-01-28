import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface HeroProps {
  onCandidatiClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCandidatiClick }) => {
  const words = SITE_CONTENT.hero.title.split(' ');
  
  return (
    <section className="relative min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-brand-black" aria-labelledby="hero-title">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <picture>
          <source srcSet="https://i.imgur.com/7PeSnLE.jpeg" type="image/jpeg" />
          <img 
            src="https://i.imgur.com/7PeSnLE.jpeg" 
            alt="Paolo Amoruso IFBB Pro Athlete & Coach posa in palestra" 
            className="w-full h-full object-cover opacity-60 lg:opacity-80 aspect-video lg:aspect-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
        </picture>
        {/* Darkened overlay for improved text contrast accessibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/20 lg:via-brand-black/70"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 w-full py-16 md:py-24 overflow-visible">
        <div className="max-w-4xl overflow-visible">
          <div className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 mb-6">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] shiny-gold-text">
              {SITE_CONTENT.hero.badge}
            </span>
          </div>
          
          <h1 id="hero-title" className="font-display text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-black uppercase leading-[1.05] mb-8 md:mb-10 tracking-tight text-white overflow-visible">
            {words[0]} <br />
            {words[1]} {words[2]} <br />
            <span className="gold-gradient italic pr-20 drop-shadow-lg">
              {words[3]} {words[4]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl xl:text-2xl text-zinc-200 mb-10 md:mb-12 max-w-xl xl:max-w-2xl leading-relaxed font-medium">
            {SITE_CONTENT.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCandidatiClick}
              className="gold-metallic-bg px-10 xl:px-12 py-5 xl:py-6 tracking-widest text-base xl:text-lg shadow-xl"
              aria-label="Candidati ora per the coaching online"
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