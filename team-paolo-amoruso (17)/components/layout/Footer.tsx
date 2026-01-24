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
    <footer className="bg-brand-black border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center space-x-2 mb-8 group"
              aria-label="Home"
            >
              <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center font-display font-bold text-brand-black text-xl transition-transform group-hover:scale-110">
                {SITE_CONTENT.brand.initials}
              </div>
              <span className="font-display font-bold tracking-tighter text-2xl uppercase italic text-white">
                TEAM <span className="text-brand-gold">PAOLO AMORUSO</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm">
              {footer.description}
            </p>
          </div>
          
          <div>
            <h2 className="text-white uppercase font-black text-xs tracking-widest mb-6">Navigazione</h2>
            <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-widest">
              {SITE_CONTENT.nav.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white uppercase font-black text-xs tracking-widest mb-6">Contatti</h2>
            <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-widest">
              <li className="text-zinc-300">{footer.email}</li>
              <li><a href={footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href={footer.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">TikTok</a></li>
              <li><a href={footer.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Facebook</a></li>
              <li>
                <button 
                  onClick={() => onLegalClick('privacy')}
                  className="hover:text-brand-gold transition-colors uppercase"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLegalClick('terms')}
                  className="hover:text-brand-gold transition-colors uppercase"
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
            SISTEMA DI VENDITA - WEB DESIGN - SEO by <a href="https://www.fgdigitalsystems.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors border-b border-brand-gold/30">WWW.FGDIGITALSYSTEMS.COM</a>
          </p>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest lg:order-3">
            Built for performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;