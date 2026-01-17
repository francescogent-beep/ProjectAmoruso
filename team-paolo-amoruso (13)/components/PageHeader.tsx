import React from 'react';
import Breadcrumbs from './Breadcrumbs.tsx';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, currentPath, onNavigate }) => {
  return (
    <div className="bg-brand-black border-b border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <Breadcrumbs currentPath={currentPath} onNavigate={onNavigate} />
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-12 bg-brand-gold"></div>
            <span className="text-brand-gold text-xs font-black uppercase tracking-[0.4em]">
              {subtitle}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;