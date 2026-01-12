import React from 'react';

interface HeroProps {
  onCandidatiClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCandidatiClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Placeholder with Overlay - Added top-12 for buffer */}
      <div className="absolute top-8 inset-x-0 bottom-0 z-0">
        <img 
          src="https://i.imgur.com/7PeSnLE.jpeg" 
          alt="Gym Atmosphere" 
          className="w-full h-full object-cover opacity-80 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 mb-6">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">
              IFBB Pro Athlete & Coach
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-tight mb-8 tracking-tighter">
            Costruisci un fisico <br />
            <span className="gold-gradient italic">estetico serio.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            Coaching online d'élite per atleti ambiziosi che cercano risultati concreti, struttura e disciplina. Trasforma il tuo potenziale in realtà senza compromessi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCandidatiClick}
              className="bg-gold-gradient px-10 py-5 text-brand-black font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              Richiedi Coaching
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;