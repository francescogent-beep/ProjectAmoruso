import React from 'react';
import { SITE_CONTENT } from '../constants/content.ts';

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
            <h4 className="text-white uppercase font-black text-xs tracking-widest mb-6">Navigazione</h4>
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
            <h4 className="text-white uppercase font-black text-xs tracking-widest mb-6">Contatti</h4>
            <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-widest">
              <li className="text-zinc-300">{footer.email}</li>
              <li><a href={footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">IG: {footer.instagram}</a></li>
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
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
            {footer.copyright}
          </p>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
            Built for performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;