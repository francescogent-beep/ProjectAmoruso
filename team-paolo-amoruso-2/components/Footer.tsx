
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center font-display font-bold text-brand-black text-xl">
                PA
              </div>
              <span className="font-display font-bold tracking-tighter text-2xl uppercase italic">
                TEAM <span className="text-brand-gold">PAOLO AMORUSO</span>
              </span>
            </div>
            <p className="text-zinc-600 text-sm max-w-sm">
              Coaching online d'élite gestito da Paolo Amoruso per atleti seri. <br />
              Nessun trucco. Nessuna scusa. Solo risultati.
            </p>
          </div>
          
          <div>
            <h4 className="text-white uppercase font-black text-xs tracking-widest mb-6">Navigazione</h4>
            <ul className="space-y-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              <li><a href="#coaching" className="hover:text-brand-gold">Online Coaching</a></li>
              <li><a href="#programma" className="hover:text-brand-gold">Programma 8 Settimane</a></li>
              <li><a href="#metodo" className="hover:text-brand-gold">Il Mio Metodo</a></li>
              <li><a href="#chi-sono" className="hover:text-brand-gold">Chi Sono</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase font-black text-xs tracking-widest mb-6">Contatti</h4>
            <ul className="space-y-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              <li>info@paoloamoruso.pro</li>
              <li>IG: @paoloamoruso_ifbbpro</li>
              <li>Privacy Policy</li>
              <li>Termini & Condizioni</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-700 text-[10px] uppercase font-bold tracking-widest">
            © 2024 TEAM PAOLO AMORUSO. Tutti i diritti riservati.
          </p>
          <p className="text-zinc-700 text-[10px] uppercase font-bold tracking-widest">
            Built for performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
