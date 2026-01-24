import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const Authority: React.FC = () => {
  return (
    <section className="bg-brand-gray border-y border-white/5 py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12">
        <h2 className="sr-only">Riconoscimenti e Autorità</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {SITE_CONTENT.authority.map((cred, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
              <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest">{cred.subtitle}</span>
              <p className="font-display text-xl md:text-2xl xl:text-3xl font-bold uppercase italic text-white leading-none">
                {cred.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;