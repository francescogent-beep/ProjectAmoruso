import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import Qualification from '../components/sections/Qualification.tsx';
import CoachingOffer from '../components/sections/CoachingOffer.tsx';
import FAQ from '../components/sections/FAQ.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';

interface CoachingPageProps {
  onCandidatiClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const CoachingPage: React.FC<CoachingPageProps> = ({ onCandidatiClick, currentPath, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Il Mio Coaching" 
        subtitle="Risultati Reali con un Metodo da Pro" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-8 text-white leading-tight">
                Ti seguo <br />
                <span className="text-brand-gold">passo dopo passo</span>
              </h2>
              <p className="text-zinc-200 text-xl leading-relaxed mb-8">
                Il mio coaching non è solo una scheda mandata via email. È un percorso dove ti seguo ogni giorno per assicurarmi che tu stia facendo le cose giuste per cambiare finalmente il tuo fisico.
              </p>
              <div className="space-y-8">
                <div className="border-l-2 border-brand-gold pl-6">
                  <h4 className="text-white font-bold uppercase tracking-widest mb-2">01. Allenati senza errori</h4>
                  <p className="text-zinc-300 text-sm">Analizzo come ti muovi per darti gli esercizi migliori per te. Cresci più velocemente e non rischi di farti male alle articolazioni.</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-6">
                  <h4 className="text-white font-bold uppercase tracking-widest mb-2">02. Mangia con gusto</h4>
                  <p className="text-zinc-300 text-sm">Niente diete da fame. Creiamo un piano che ti piaccia e che tu possa seguire anche se lavori o hai una vita sociale impegnata.</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-6">
                  <h4 className="text-white font-bold uppercase tracking-widest mb-2">03. Supporto continuo</h4>
                  <p className="text-zinc-300 text-sm">Non sarai mai solo. Ci sentiamo ogni settimana per vedere i progressi e aggiustare il tiro su tutto: sonno, stress e performance.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border border-brand-gold/10 -z-10 group-hover:border-brand-gold/30 transition-colors duration-700"></div>
              <img 
                src="https://i.imgur.com/7PeSnLE.jpeg" 
                alt="Elite Coaching - Paolo Amoruso IFBB Pro" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-brand-black/90 backdrop-blur-md border border-white/5">
                <p className="text-brand-gold font-display text-2xl font-bold uppercase italic text-center">"Il fisico che vuoi arriva solo se ogni dettaglio è curato al massimo."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Qualification />
      <CoachingOffer onCandidatiClick={onCandidatiClick} />
      
      <section className="py-24 bg-brand-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic mb-4 text-white">Cosa trovi nel Team</h3>
            <p className="text-zinc-300 uppercase tracking-[0.3em] text-xs font-bold">Tutto quello che ti serve per non fallire</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-black border border-white/5 hover:border-brand-gold/20 transition-all">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <span className="text-brand-gold font-bold">PRO</span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">Piani Dinamici</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">Allenamento e dieta cambiano insieme a te. Se il tuo corpo risponde in un certo modo, io cambio il piano per farti andare sempre avanti.</p>
            </div>
            <div className="p-8 bg-brand-black border border-white/5 hover:border-brand-gold/20 transition-all">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <span className="text-brand-gold font-bold">VID</span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">Controllo Video</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">Mi mandi i video dei tuoi esercizi. Li guardo e ti dico esattamente cosa correggere per far lavorare meglio il muscolo e sollevare di più.</p>
            </div>
            <div className="p-8 bg-brand-black border border-white/5 hover:border-brand-gold/20 transition-all">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <span className="text-brand-gold font-bold">VIP</span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">Chat Diretta</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">Hai un dubbio al ristorante o non sai come gestire un imprevisto? Mi scrivi su WhatsApp e ti rispondo subito.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ onNavigate={onNavigate} category="Metodo" limit={3} />
      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
};

export default CoachingPage;