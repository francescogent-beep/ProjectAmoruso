
import React from 'react';

const Qualification: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase italic mb-4">Sei la persona giusta?</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Column 1: For you */}
          <div className="p-8 md:p-12 bg-brand-gray border border-white/5 group hover:border-brand-gold/30 transition-colors">
            <h3 className="font-display text-2xl font-bold uppercase text-brand-gold mb-8 italic">Questo percorso è per te se:</h3>
            <ul className="space-y-6">
              {[
                "Vuoi massa muscolare e definizione estetica",
                "Cerchi struttura e disciplina ferrea",
                "Vuoi un metodo adattato alla tua routine reale",
                "Sei pronto a investire su te stesso"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="text-brand-gold font-bold mt-1">✓</span>
                  <p className="text-zinc-300 font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Not for you */}
          <div className="p-8 md:p-12 bg-zinc-900/30 border border-white/5 opacity-80">
            <h3 className="font-display text-2xl font-bold uppercase text-zinc-500 mb-8 italic">Non è per te se:</h3>
            <ul className="space-y-6">
              {[
                "Cerchi scorciatoie o pillole magiche",
                "Non sei disposto a essere costante",
                "Vuoi solo 'un programma qualunque'",
                "Non accetti feedback costruttivi"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="text-zinc-600 font-bold mt-1">✕</span>
                  <p className="text-zinc-500 font-medium italic">{item}</p>
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
