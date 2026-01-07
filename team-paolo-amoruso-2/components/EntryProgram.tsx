
import React from 'react';

const EntryProgram: React.FC = () => {
  return (
    <section id="programma" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gray border border-white/5 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://i.imgur.com/yiMYBxg.jpeg" 
              alt="8 Week Program" 
              className="w-full aspect-square object-cover grayscale border-4 border-brand-black"
            />
          </div>
          
          <div className="md:w-2/3">
            <div className="inline-block px-3 py-1 bg-white/5 mb-6">
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Entry Level Program</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase italic mb-6">
              Programma Fisico Estetico <br />
              <span className="text-brand-gold">8 Settimane</span>
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl">
              Ideale per chi vuole iniziare in autonomia con un metodo strutturato. Include split settimanali, progressioni di carico e linee guida nutrizionali base.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-10 text-sm text-zinc-300 font-medium">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold"></span>
                <span>Split Personalizzabili</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold"></span>
                <span>Linee Guida Macro</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold"></span>
                <span>Accesso Immediato</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold"></span>
                <span>Video Tutorial Esercizi</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="w-full sm:w-auto bg-white text-brand-black px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors">
                Accedi al Programma – €49
              </button>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Pagamento Unico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryProgram;
