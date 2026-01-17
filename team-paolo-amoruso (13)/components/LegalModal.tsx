import React, { useEffect } from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const content = type === 'terms' ? (
    <div className="space-y-8 text-zinc-300">
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Oggetto</h2>
        <p>Il presente sito offre programmi di allenamento strutturati in formato digitale e servizi di coaching personalizzato su candidatura. I contenuti sono destinati a persone maggiorenni.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Prodotto digitale (Tier 2)</h2>
        <p>Il programma STRONG BASE è un prodotto digitale fornito tramite accesso online. Una volta completato il pagamento l’accesso al contenuto viene fornito e il prodotto si considera consegnato.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Politica di rimborso</h2>
        <p>Per i prodotti digitali: Non sono previsti rimborsi una volta che l’accesso al contenuto è stato concesso. Effettuando l’acquisto, l’utente accetta espressamente questa condizione.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">IVA</h2>
        <p>I prezzi indicati sono da intendersi come segue: IVA non applicabile ai sensi del regime fiscale vigente.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Modalità di pagamento</h2>
        <p>I pagamenti sono gestiti tramite piattaforme di pagamento esterne (es. Stripe). Il sito non memorizza dati di pagamento sensibili.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Accesso ai contenuti</h2>
        <p>L’accesso ai contenuti digitali è personale, non è trasferibile e non può essere condiviso con terzi. La condivisione non autorizzata dei contenuti non è consentita.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Limitazione di responsabilità</h2>
        <p>I programmi e i contenuti offerti da Paolo Amoruso non costituiscono consulenza medica e non sostituiscono il parere di professionisti sanitari. L’utente è responsabile del proprio stato di salute e si impegna a interrompere l’attività in caso di dolore o condizioni anomale.</p>
      </section>
      <section className="bg-white/5 p-6 border-l-2 border-brand-gold">
        <h2 className="text-brand-gold font-display text-xl uppercase italic mb-2">Disclaimer</h2>
        <p className="text-sm italic text-zinc-400">I risultati ottenibili con i programmi e i servizi offerti da Paolo Amoruso possono variare da persona a persona. Nessun risultato specifico è garantito. La riuscita dipende da impegno personale, continuità e rispetto delle indicazioni fornite.</p>
      </section>
    </div>
  ) : (
    <div className="space-y-8 text-zinc-300">
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Titolare del trattamento</h2>
        <p>Il titolare del trattamento dei dati è: Paolo Amoruso.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Raccolta dati</h2>
        <p>Il sito può raccogliere i seguenti dati: nome e cognome, indirizzo email, informazioni fornite volontariamente tramite moduli di contatto.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Utilizzo dei dati</h2>
        <p>I dati vengono utilizzati esclusivamente per rispondere alle richieste, fornire accesso ai servizi acquistati e comunicazioni operative legate ai servizi offerti.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Conservazione dei dati</h2>
        <p>I dati vengono conservati in modo sicuro e non vengono ceduti a terzi per finalità commerciali.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Diritti dell’utente</h2>
        <p>L’utente può in qualsiasi momento richiedere l’accesso ai propri dati, richiederne la modifica o cancellazione scrivendo all'indirizzo email di contatto.</p>
      </section>
      <section>
        <h2 className="text-brand-gold font-display text-2xl uppercase italic mb-4">Cookie</h2>
        <p>Il sito può utilizzare cookie tecnici necessari al corretto funzionamento. Non vengono utilizzati cookie di profilazione senza consenso.</p>
      </section>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative bg-brand-gray border border-white/10 w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl scale-in duration-300">
        <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-brand-black/50">
          <h1 className="font-display text-xl font-bold uppercase tracking-widest text-white">
            {type === 'terms' ? 'Termini di Acquisto' : 'Privacy Policy'}
          </h1>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
          {content}
        </div>
        <div className="px-8 py-4 border-t border-white/5 bg-brand-black text-center">
          <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-[0.2em]">TEAM PAOLO AMORUSO • ECCELLENZA E TRASPARENZA</p>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;