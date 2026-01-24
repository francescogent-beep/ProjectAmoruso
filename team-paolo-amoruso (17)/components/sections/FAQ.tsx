import React, { useState } from 'react';
import { SITE_CONTENT } from '../../constants/content.ts';

interface FAQProps {
  onNavigate?: (path: string) => void;
  category?: string;
  limit?: number;
}

const FAQ: React.FC<FAQProps> = ({ onNavigate, category, limit = 3 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const displayFaqs = (category 
    ? SITE_CONTENT.faq.filter(f => f.category === category)
    : SITE_CONTENT.faq
  ).slice(0, limit);

  const handleSeeAll = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/faq');
    }
  };

  return (
    <section className="py-24 bg-brand-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase italic mb-4 text-white">Domande Frequenti</h2>
          <p className="text-zinc-300 uppercase tracking-widest text-xs font-bold">
            {category ? `Focus su: ${category}` : 'Tutto quello che devi sapere prima di iniziare'}
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {displayFaqs.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-white/5 bg-brand-gray/50 overflow-hidden transition-all duration-300"
            >
              <h3 className="m-0 p-0">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-inset"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-display text-lg md:text-xl font-bold uppercase italic text-white tracking-tight">
                    {item.q}
                  </span>
                  <span className={`text-brand-gold text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
              </h3>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-zinc-200 leading-relaxed text-lg">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {onNavigate && (
          <div className="text-center">
            <a 
              href="/faq" 
              onClick={handleSeeAll}
              className="inline-flex items-center space-x-4 group"
            >
              <span className="text-white text-xs font-black uppercase tracking-[0.3em] border-b border-brand-gold/40 pb-2 group-hover:border-brand-gold transition-all">
                Visualizza tutte le FAQ
              </span>
              <span className="text-brand-gold text-xl group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;