
import React from 'react';

interface NavbarProps {
  onCandidatiClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCandidatiClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center font-display font-bold text-brand-black text-xl">
            PA
          </div>
          <span className="font-display font-bold tracking-tighter text-2xl uppercase italic">
            TEAM <span className="text-brand-gold">PAOLO AMORUSO</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          <a href="#coaching" className="hover:text-white transition-colors">Coaching</a>
          <a href="#programma" className="hover:text-white transition-colors">Programmi</a>
          <a href="#metodo" className="hover:text-white transition-colors">Metodo</a>
          <a href="#chi-sono" className="hover:text-white transition-colors">Bio</a>
        </div>

        <button 
          onClick={onCandidatiClick}
          className="bg-zinc-100 text-brand-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300"
        >
          Candidati Ora
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
