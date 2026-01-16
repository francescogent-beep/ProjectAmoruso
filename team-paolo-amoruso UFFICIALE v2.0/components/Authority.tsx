import React from 'react';
import { SITE_CONTENT } from '../constants/content.ts';

const Authority: React.FC = () => {
  return (
    <section className="bg-brand-gray border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {SITE_CONTENT.authority.map((cred, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{cred.subtitle}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase italic text-white leading-none">
                {cred.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;