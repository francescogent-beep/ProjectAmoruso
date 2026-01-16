
import React from 'react';

interface BreadcrumbsProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPath, onNavigate }) => {
  const getLabel = (path: string) => {
    const staticLabels: Record<string, string> = {
      '/': 'Home',
      '/coaching': 'Coaching Elite',
      '/processo': 'Il Metodo',
      '/programmi': 'Programmi Digitali',
      '/programma': 'Programmi Digitali',
      '/risultati': 'Risultati & Testimonianze',
      '/blog': 'Blog & Risorse',
      '/faq': 'FAQ Knowledge Base',
      '/chi-sono': 'Paolo Amoruso Bio',
      '/bio': 'Paolo Amoruso Bio'
    };

    if (staticLabels[path]) return staticLabels[path];
    if (path.startsWith('/blog/')) return 'Articolo';
    return 'Dettaglio';
  };

  const handleNavigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  if (currentPath === '/') return null;

  return (
    <nav className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
      <a 
        href="/" 
        onClick={(e) => handleNavigate(e, '/')}
        className="text-zinc-500 hover:text-white transition-colors flex items-center group"
      >
        <span className="mr-2">Home</span>
        <span className="text-zinc-800 group-hover:text-brand-gold transition-colors">/</span>
      </a>
      
      {currentPath.startsWith('/blog/') && (
        <a 
          href="/blog" 
          onClick={(e) => handleNavigate(e, '/blog')}
          className="text-zinc-500 hover:text-white transition-colors flex items-center group"
        >
          <span className="mr-2">Blog</span>
          <span className="text-zinc-800 group-hover:text-brand-gold transition-colors">/</span>
        </a>
      )}

      <span className="text-brand-gold italic">
        {getLabel(currentPath)}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
