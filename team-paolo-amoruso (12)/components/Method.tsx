import React from 'react';
import { SITE_CONTENT } from '../constants/content.ts';

const Method: React.FC = () => {
  const { method } = SITE_CONTENT;

  return (
    <section id="processo" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-xs font-black uppercase tracking-[0.5em] mb-4 block">{method.badge}</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic">{method.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {method.steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <span className="font-display text-7xl font-black text-zinc-900 absolute -top-10 -left-4 -z-0 group-hover:text-zinc-800 transition-colors">
                {step.num}
              </span>
              <div className="relative z-10 pt-4">
                <h4 className="font-display text-xl font-bold uppercase italic text-white mb-4 tracking-wider">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;