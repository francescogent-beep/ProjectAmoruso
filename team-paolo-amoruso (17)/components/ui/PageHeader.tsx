import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  currentPath: string;
  onNavigate: (path: string) => void;
  category?: string;
  date?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, category, date }) => {
  return (
    <section className="relative w-full bg-brand-black pt-8 md:pt-12 pb-16 md:pb-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-10 animate-in fade-in slide-in-from-left-4 duration-700">
            {category ? (
              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] bg-brand-gold/10 px-3 py-1 border border-brand-gold/20">
                {category}
              </span>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-brand-gold"></div>
                <span className="text-brand-gold text-xs font-black uppercase tracking-[0.4em]">
                  {subtitle}
                </span>
              </div>
            )}
            
            {date && (
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                {date}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter text-white leading-[0.95] animate-in fade-in slide-in-from-left-8 duration-1000">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;