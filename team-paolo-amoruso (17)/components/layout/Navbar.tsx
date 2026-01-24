import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface NavbarProps {
  onCandidatiClick: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCandidatiClick, onNavigate, currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-20 flex items-center border-b border-white/5 bg-brand-black" aria-label="Navigazione principale">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-12 w-full flex items-center justify-between gap-6">
        {/* Logo Section - Balanced Scale and No Clipping */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center space-x-3 md:space-x-4 group z-50 focus-visible:outline-brand-gold flex-shrink-0 py-1"
          aria-label="Home Team Amoruso"
        >
          {/* Initials Box - Refined size */}
          <div className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 bg-brand-gold rounded flex items-center justify-center font-display font-black text-brand-black text-lg md:text-xl transition-transform group-hover:scale-110 shadow-lg">
            {SITE_CONTENT.brand.initials}
          </div>
          
          {/* Brand Text - Balanced sizing and fixed italic clipping */}
          <div className="flex flex-col justify-center overflow-visible">
            <span className="font-display font-bold tracking-tight text-xl md:text-2xl xl:text-3xl uppercase italic text-white whitespace-nowrap leading-none pr-8 drop-shadow-md flex items-center overflow-visible">
              TEAM&nbsp;
              <span className="gold-gradient inline-block" style={{ paddingRight: '0.4em' }}>
                AMORUSO
              </span>
            </span>
            <span className="hidden md:block text-[7px] xl:text-[8px] text-zinc-500 font-black uppercase tracking-[0.4em] mt-1 ml-0.5 opacity-70">
              Elite Online Coaching
            </span>
          </div>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-6 2xl:space-x-8 font-semibold uppercase tracking-[0.15em] text-zinc-300">
          {SITE_CONTENT.nav.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`hover:text-white transition-colors cursor-pointer relative py-2 focus-visible:text-brand-gold whitespace-nowrap lg:text-[10px] xl:text-[11px] 2xl:text-xs ${isActive(link.href) ? 'text-white font-bold' : ''}`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 gold-metallic-bg shadow-md"></span>
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <button 
            onClick={onCandidatiClick}
            className="gold-metallic-bg px-5 xl:px-7 py-2.5 xl:py-3 text-xs xl:text-sm 2xl:text-base shadow-md whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold"
          >
            Candidati Ora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-50 p-3 -mr-2 text-white focus-visible:ring-2 focus-visible:ring-brand-gold"
          aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-nav"
        className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-32 px-10">
          <div className="flex flex-col space-y-6">
            {SITE_CONTENT.nav.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-display text-4xl font-black uppercase italic tracking-tighter ${isActive(link.href) ? 'gold-gradient' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-12">
            <button 
              onClick={onCandidatiClick}
              className="w-full gold-metallic-bg py-6 text-xl shadow-xl"
            >
              Candidati Ora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;