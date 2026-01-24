import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const Qualification: React.FC = () => {
  const { qualification } = SITE_CONTENT;

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-black uppercase italic mb-4">
            {qualification.title}
          </h2>
          <div className="w-20 h-1 gold-metallic-bg mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="p-8 md:p-12 xl:p-16 bg-brand-gray border border-white/5 group hover:border-brand-gold/30 transition-colors">
            <h3 className="font-display text-2xl xl:text-3xl font-bold uppercase gold-gradient mb-8 italic">
              {qualification.forYou.title}
            </h3>
            <ul className="space-y-6">
              {qualification.forYou.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="gold-gradient font-bold mt-1">✓</span>
                  <p className="text-zinc-200 font-medium xl:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 xl:p-16 bg-zinc-900/30 border border-white/5 opacity-80">
            <h3 className="font-display text-2xl xl:text-3xl font-bold uppercase text-zinc-400 mb-8 italic">
              {qualification.notForYou.title}
            </h3>
            <ul className="space-y-6">
              {qualification.notForYou.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="text-zinc-500 font-bold mt-1">✕</span>
                  <p className="text-zinc-400 font-medium italic xl:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;