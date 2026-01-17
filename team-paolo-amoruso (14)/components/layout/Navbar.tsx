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
    <nav className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center border-b border-white/5 bg-brand-black`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo Section */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center space-x-2 group z-50"
        >
          <div className="w-8 h-8 flex-shrink-0 bg-brand-gold rounded-sm flex items-center justify-center font-display font-bold text-brand-black text-xl transition-transform group-hover:scale-110">
            {SITE_CONTENT.brand.initials}
          </div>
          <span className="font-display font-bold tracking-tighter text-2xl uppercase italic text-white whitespace-nowrap">
            TEAM <span className="text-brand-gold">AMORUSO</span>
          </span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest text-zinc-300">
          {SITE_CONTENT.nav.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`hover:text-white transition-colors cursor-pointer relative py-2 ${isActive(link.href) ? 'text-white' : ''}`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold"></span>
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            onClick={onCandidatiClick}
            className="bg-zinc-100 text-brand-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300"
          >
            Candidati Ora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 text-white"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <div className="flex flex-col space-y-6">
            {SITE_CONTENT.nav.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-display text-4xl font-black uppercase italic tracking-tighter ${isActive(link.href) ? 'text-brand-gold' : 'text-white/80'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;