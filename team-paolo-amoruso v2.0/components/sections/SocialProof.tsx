import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const SocialProof: React.FC = () => {
  const { socialProof } = SITE_CONTENT;

  return (
    <section id="risultati" className="py-24 bg-brand-black overflow-visible">
      <div className="max-w-7xl mx-auto px-6 overflow-visible">
        <div className="flex justify-between items-end mb-16 overflow-visible">
          <div className="overflow-visible">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic text-white overflow-visible">
              {socialProof.title}
            </h2>
            <p className="text-zinc-300 uppercase tracking-widest text-xs font-bold mt-2">{socialProof.subtitle}</p>
          </div>
          <div className="hidden md:block overflow-visible" aria-hidden="true">
            {/* 
               Increased opacity to 0.25 (via decorative-text-contrast class) 
               to pass accessibility contrast checks for large text against black.
            */}
            <span className="text-brand-gold font-display text-6xl font-black italic uppercase tracking-tighter pr-16 overflow-visible decorative-text-contrast">
              {socialProof.sideText}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {socialProof.items.map((item, index) => {
            const baseImg = item.url.replace(/\.png$/i, '');
            return (
              <div key={index} className="relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-white/5">
                <img 
                  src={`${baseImg}h.webp`} 
                  srcSet={`${baseImg}l.webp 640w, ${baseImg}h.webp 1024w`}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  alt={item.label} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="800"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-[9px] font-black uppercase tracking-[0.3em] border border-white/20 px-3 py-1.5 bg-brand-black/60 backdrop-blur-md">
                    Risultato Team PA
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-zinc-200 italic max-w-2xl mx-auto text-lg">
            "{socialProof.quote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;