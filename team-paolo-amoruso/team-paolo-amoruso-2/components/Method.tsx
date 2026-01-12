
import React from 'react';

const Method: React.FC = () => {
  const steps = [
    { num: "01", title: "Candidatura", desc: "Compili il form per valutare se il tuo profilo è compatibile con il mio metodo." },
    { num: "02", title: "Valutazione", desc: "Analizziamo i tuoi obiettivi, la tua routine e il tuo punto di partenza." },
    { num: "03", title: "Start", desc: "Ricevi il tuo protocollo su misura e iniziamo il percorso di trasformazione." },
    { num: "04", title: "Progressi", desc: "Check-in settimanali e aggiustamenti per garantire risultati costanti." },
  ];

  return (
    <section id="metodo" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-xs font-black uppercase tracking-[0.5em] mb-4 block">Processo</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic">Come Lavoriamo</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <span className="font-display text-7xl font-black text-zinc-900 absolute -top-10 -left-4 -z-0 group-hover:text-zinc-800 transition-colors">
                {step.num}
              </span>
              <div className="relative z-10 pt-4">
                <h4 className="font-display text-xl font-bold uppercase italic text-white mb-4 tracking-wider">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
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
