import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface HeroProps {
  onCandidatiClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCandidatiClick }) => {
  const words = SITE_CONTENT.hero.title.split(' ');
  const heroImage = SITE_CONTENT.hero.bgImage.replace(/\.(jpe?g|png|jpeg)$/i, '');
  
  return (
    <section className="relative min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-black" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src={`${heroImage}h.jpg`}
          srcSet={`${heroImage}l.jpg 640w, ${heroImage}h.jpg 1280w, ${heroImage}.jpg 1920w`}
          sizes="100vw"
          alt=""
          className="w-full h-full object-cover opacity-60 lg:opacity-80 transition-opacity duration-1000"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20 lg:via-black/70"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 w-full py-16 md:py-24 overflow-visible text-left">
        <div className="max-w-4xl overflow-visible animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 mb-6">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] shiny-gold-text">
              {SITE_CONTENT.hero.badge}
            </span>
          </div>
          
          <h1 id="hero-title" className="font-display text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-black uppercase leading-[1.05] mb-8 md:mb-10 tracking-tight text-white overflow-visible">
            {words[0]} <br />
            {words[1]} {words[2]} <br />
            <span className="text-brand-gold italic pr-20 drop-shadow-lg">
              {words[3]} {words[4]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl xl:text-2xl text-zinc-200 mb-10 md:mb-12 max-w-xl xl:max-w-2xl leading-relaxed font-medium">
            {SITE_CONTENT.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCandidatiClick}
              className="gold-solid-bg font-display font-black uppercase px-12 xl:px-14 py-5 xl:py-6 tracking-widest text-xl xl:text-2xl shadow-2xl transition-all hover:scale-[1.02] active:scale(0.98)"
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