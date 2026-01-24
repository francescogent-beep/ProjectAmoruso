import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';
import { SITE_CONTENT } from '../constants/content.ts';

interface FAQPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tutte');

  const categories = ['Tutte', ...new Set(SITE_CONTENT.faq.map(item => item.category))];

  const filteredFaqs = activeCategory === 'Tutte' 
    ? SITE_CONTENT.faq 
    : SITE_CONTENT.faq.filter(item => item.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Domande & Risposte" 
        subtitle="Tutto quello che vuoi sapere" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header Intro */}
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none text-white">
              Cosa mi <br /><span className="text-brand-gold">chiedete spesso</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Prima di iniziare, è normale avere dei dubbi. Qui trovi le risposte alle domande che ricevo più spesso dai ragazzi che vogliono entrare nel team.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-gold border-brand-gold text-brand-black' 
                    : 'bg-transparent border-white/10 text-zinc-400 hover:border-brand-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((item, idx) => {
              const globalIndex = SITE_CONTENT.faq.indexOf(item);
              const isOpen = openIndex === globalIndex;
              
              return (
                <div 
                  key={globalIndex} 
                  className={`border transition-all duration-500 ${
                    isOpen ? 'border-brand-gold/40 bg-brand-gray/50' : 'border-white/5 bg-brand-gray/20'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="w-full flex items-center justify-between p-8 text-left group"
                  >
                    <div className="flex items-start space-x-6">
                      <span className={`font-display text-xl font-black transition-colors ${isOpen ? 'text-brand-gold' : 'text-zinc-700'}`}>
                        {(globalIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`font-display text-lg md:text-xl font-bold uppercase italic tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-100'}`}>
                        {item.q}
                      </span>
                    </div>
                    <span className={`text-brand-gold text-3xl font-light transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 pt-0 ml-14 border-t border-white/5 mt-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.3em] bg-brand-gold/10 px-3 py-1">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed font-medium">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Help Notice */}
          <div className="mt-20 p-12 bg-brand-gray border border-white/5 text-center">
            <h4 className="font-display text-2xl font-bold uppercase italic mb-4 text-white">Non hai trovato quello che cercavi?</h4>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Se hai una domanda specifica che non trovi qui, mandami pure una mail o scrivimi sui social. Sono qui per aiutarti a capire se questo percorso fa per te.
            </p>
            <a 
              href={`mailto:${SITE_CONTENT.footer.email}`}
              className="inline-block border-b-2 border-brand-gold text-brand-gold font-bold uppercase tracking-widest text-xs py-2 hover:text-white hover:border-white transition-all"
            >
              Scrivimi una mail
            </a>
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
}; 

export default FAQPage;