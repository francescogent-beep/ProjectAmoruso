import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const EntryProgram: React.FC = () => {
  const { entryProgram } = SITE_CONTENT;
  const optimizedImage = entryProgram.image.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <section id="programma" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gray border border-white/5 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 w-full">
            <img 
              src={optimizedImage} 
              alt={entryProgram.title} 
              className="w-full aspect-square object-cover grayscale border-4 border-brand-black shadow-2xl"
              loading="lazy"
              decoding="async"
              width="600"
              height="600"
            />
          </div>
          
          <div className="md:w-2/3 overflow-visible">
            <div className="inline-block px-3 py-1 bg-white/10 mb-6">
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">{entryProgram.badge}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase italic mb-6 text-white overflow-visible">
              {entryProgram.title} <br />
              <span className="gold-gradient pr-8">{entryProgram.accent}</span>
            </h2>
            <p className="text-zinc-200 mb-8 max-w-xl text-lg leading-relaxed">
              {entryProgram.description}
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-10 text-sm text-white font-medium">
              {entryProgram.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 gold-solid-bg"></span>
                  <span className="tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a 
                href={entryProgram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto gold-solid-bg font-display font-black uppercase px-12 py-5 tracking-widest text-base hover:scale-105 transition-all text-center inline-block shadow-xl"
              >
                {entryProgram.cta}
              </a>
              <p className="text-xs text-zinc-200 uppercase tracking-widest font-bold">{entryProgram.priceSubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryProgram;