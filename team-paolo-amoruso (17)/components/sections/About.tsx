import React from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

const About: React.FC = () => {
  const { about } = SITE_CONTENT;

  return (
    <section id="chi-sono" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 gold-metallic-bg -z-0 translate-x-6 -translate-y-6"></div>
              <img 
                src={about.image} 
                alt={`${SITE_CONTENT.brand.fullName} - ${SITE_CONTENT.brand.title}`} 
                className="relative z-10 w-full grayscale shadow-2xl"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 overflow-visible">
            <span className="gold-gradient text-xs font-black uppercase tracking-[0.4em] mb-4 block pr-4">{about.badge}</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-8 text-white overflow-visible">{about.title}</h2>
            
            <div className="space-y-6 text-zinc-200 leading-relaxed text-lg">
              {about.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <p className="italic border-l-2 border-brand-gold pl-6 py-2 text-white">
                "{about.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;