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
        title="Online Coaching Elite" 
        subtitle="Standard IFBB Pro per Obiettivi Estetici" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-8 text-white leading-tight">
                L'Ingegneria del <br />
                <span className="text-brand-gold">Successo Fisico</span>
              </h2>
              <p className="text-zinc-200 text-xl leading-relaxed mb-8">
                Il coaching con Paolo Amoruso non è un semplice "piano d'allenamento". È un'architettura sartoriale progettata per chi non accetta compromessi e cerca l'eccellenza assoluta nella propria trasformazione.
              </p>
              <div className="space-y-8">
                <div className="border-l-2 border-brand-gold pl-6">
                  <h4 className="text-white font-bold uppercase tracking-widest mb-2">01. Biomeccanica Applicata</h4>
                  <p className="text-zinc-300 text-sm">Eliminiamo ogni inefficienza. Analizziamo la tua struttura per selezionare gli esercizi che generano il massimo stimolo ipertrofico con il minimo rischio articolare.</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-6">
                  <h4 className="text-white font-bold uppercase tracking-widest mb-2">02. Nutrizione Evolutiva</h4>
                  <p className="text-zinc-300 text-sm">Un piano alimentare che si adatta ai tuoi biomarkers e alla tua routine reale. Sostenibilità totale per risultati che durano nel tempo, senza inutili privazioni.</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-6">
                  <h4 className="text-white font-bold uppercase tracking-widest mb-2">03. Monitoraggio Totale</h4>
                  <p className="text-zinc-300 text-sm">Non sei un numero. Check-in settimanali approfonditi e supporto diretto per calibrare ogni variabile: sonno, stress, performance e recupero.</p>
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
                <p className="text-brand-gold font-display text-2xl font-bold uppercase italic text-center">"L'estetica è la logica conseguenza di un lavoro eseguito con precisione chirurgica."</p>
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
            <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic mb-4 text-white">L'Ecosistema del Coaching</h3>
            <p className="text-zinc-300 uppercase tracking-[0.3em] text-xs font-bold">Tutto ciò di cui hai bisogno per dominare il tuo percorso</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-black border border-white/5 hover:border-brand-gold/20 transition-all">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <span className="text-brand-gold font-bold">PRO</span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">Protocolli Dinamici</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">Allenamento, integrazione e nutrizione. Nulla è statico: ogni protocollo evolve settimanalmente in base alla tua risposta fisiologica.</p>
            </div>
            <div className="p-8 bg-brand-black border border-white/5 hover:border-brand-gold/20 transition-all">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <span className="text-brand-gold font-bold">VID</span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">Analisi Tecnica</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">Mandami i video dei tuoi lift. Analizzo la tua tecnica per assicurarti che ogni ripetizione sia ottimizzata per la crescita muscolare.</p>
            </div>
            <div className="p-8 bg-brand-black border border-white/5 hover:border-brand-gold/20 transition-all">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <span className="text-brand-gold font-bold">VIP</span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">Priority WhatsApp</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">Un filo diretto per risolvere dubbi istantaneamente. Dalla scelta di un pasto fuori alla gestione di un imprevisto in palestra.</p>
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