import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface BreadcrumbsProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPath, onNavigate }) => {
  // Hide breadcrumbs on home page
  if (currentPath === '/') return null;

  const getBreadcrumbs = () => {
    const parts = currentPath.split('/').filter(Boolean);
    const crumbs = [{ label: 'HOME', path: '/' }];

    if (parts[0] === 'blog' && parts[1]) {
      crumbs.push({ label: 'BLOG', path: '/blog' });
      const post = SITE_CONTENT.blogPosts.find(p => p.slug === parts[1]);
      crumbs.push({ label: post?.title.toUpperCase() || parts[1].toUpperCase(), path: currentPath });
    } else {
      switch (currentPath) {
        case '/coaching': crumbs.push({ label: 'COACHING ELITE', path: '/coaching' }); break;
        case '/processo': crumbs.push({ label: 'IL NOSTRO METODO', path: '/processo' }); break;
        case '/programmi': crumbs.push({ label: 'PROGRAMMI & PROTOCOLLI', path: '/programmi' }); break;
        case '/risultati': crumbs.push({ label: 'TRASFORMAZIONI', path: '/risultati' }); break;
        case '/blog': crumbs.push({ label: 'BLOG & RISORSE', path: '/blog' }); break;
        case '/faq': crumbs.push({ label: 'KNOWLEDGE BASE', path: '/faq' }); break;
        case '/chi-sono': crumbs.push({ label: 'BIO', path: '/chi-sono' }); break;
        default: crumbs.push({ label: parts[parts.length - 1].toUpperCase(), path: currentPath });
      }
    }
    return crumbs;
  };

  const crumbs = getBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="bg-brand-black pt-10 pb-2 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ol className="flex flex-wrap items-center space-x-2 md:space-x-4 text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase italic">
          {crumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 md:mx-4 text-zinc-800 not-italic font-normal">/</span>
              )}
              {index === crumbs.length - 1 ? (
                <span className="text-brand-gold">{crumb.label}</span>
              ) : (
                <button
                  onClick={() => onNavigate(crumb.path)}
                  className="text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  {crumb.label}
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;