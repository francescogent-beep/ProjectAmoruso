import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'terms') => void;
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onNavigate }) => {
  const { footer } = SITE_CONTENT;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-brand-black border-t border-white/5 py-20" aria-label="Piè di pagina">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            {/* Logo Section - Identical to Navbar */}
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center space-x-3 md:space-x-4 mb-8 group overflow-visible inline-flex"
              aria-label="Home Team Amoruso"
            >
              {/* Initials Box */}
              <div className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 bg-brand-gold rounded flex items-center justify-center font-display font-black text-brand-black text-lg md:text-xl transition-transform group-hover:scale-110 shadow-lg">
                {SITE_CONTENT.brand.initials}
              </div>
              
              {/* Brand Text & Tagline */}
              <div className="flex flex-col justify-center overflow-visible">
                <span className="font-display font-bold tracking-tight text-xl md:text-2xl uppercase italic text-white whitespace-nowrap leading-none pr-8 drop-shadow-md flex items-center overflow-visible">
                  TEAM&nbsp;
                  <span className="gold-gradient inline-block" style={{ paddingRight: '0.4em' }}>
                    AMORUSO
                  </span>
                </span>
                <span className="text-[7px] md:text-[8px] text-zinc-500 font-black uppercase tracking-[0.4em] mt-1 ml-0.5 opacity-70">
                  Elite Online Coaching
                </span>
              </div>
            </a>
            
            <p className="text-zinc-300 text-sm max-w-sm">
              {footer.description}
            </p>
          </div>
          
          <div>
            <h2 className="text-white uppercase font-black text-xs tracking-widest mb-6">Navigazione</h2>
            <ul className="space-y-4 text-zinc-300 text-xs font-bold uppercase tracking-widest">
              {SITE_CONTENT.nav.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-gold transition-colors focus-visible:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white uppercase font-black text-xs tracking-widest mb-6">Contatti</h2>
            <ul className="space-y-4 text-zinc-300 text-xs font-bold uppercase tracking-widest">
              <li className="text-zinc-200">{footer.email}</li>
              <li><a href={footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors focus-visible:text-brand-gold">Instagram</a></li>
              <li><a href={footer.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors focus-visible:text-brand-gold">TikTok</a></li>
              <li><a href={footer.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors focus-visible:text-brand-gold">Facebook</a></li>
              <li>
                <button 
                  onClick={() => onLegalClick('privacy')}
                  className="hover:text-brand-gold transition-colors uppercase focus-visible:text-brand-gold"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLegalClick('terms')}
                  className="hover:text-brand-gold transition-colors uppercase focus-visible:text-brand-gold"
                >
                  Termini & Condizioni
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
            {footer.copyright}
          </p>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest order-3 lg:order-2">
            WEB DESIGN & SEO by <a href="https://www.fgdigitalsystems.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors border-b border-brand-gold/30">FGDIGITALSYSTEMS</a>
          </p>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest lg:order-3">
            PAOLO AMORUSO IFBB PRO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;