import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const Method: React.FC = () => {
  const { method } = SITE_CONTENT;

  return (
    <section id="processo" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 overflow-visible">
          <span className="gold-gradient text-xs font-black uppercase tracking-[0.5em] mb-4 block pr-4">{method.badge}</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic text-white overflow-visible pr-6">{method.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {method.steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <span 
                aria-hidden="true"
                className="font-display text-7xl font-black text-white/[0.15] absolute -top-10 -left-4 -z-0 group-hover:text-white/[0.2] transition-colors"
              >
                {step.num}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="font-display text-xl font-bold uppercase italic text-white mb-4 tracking-wider pr-4">
                  {step.title}
                </h3>
                <p className="text-zinc-200 text-sm leading-relaxed">
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