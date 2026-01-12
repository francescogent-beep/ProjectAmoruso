
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="chi-sono" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-gold -z-0 translate-x-6 -translate-y-6"></div>
              <img 
                src="https://i.imgur.com/IoHpM0K.jpeg" 
                alt="Paolo Amoruso Portrait" 
                className="relative z-10 w-full grayscale"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-brand-gold text-xs font-black uppercase tracking-[0.4em] mb-4 block">La Filosofia</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-8">Più dai, <br />più avrai.</h2>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Sono <span className="text-white font-bold">Paolo Amoruso</span>, atleta <span className="text-white font-bold">IFBB Pro</span> e un Coach con una missione chiara: portare l'eccellenza del bodybuilding professionistico nella vita di persone ambiziose che non si accontentano della mediocrità.
              </p>
              <p>
                Il mio approccio non si basa su mode o hype. Si basa su <span className="text-white font-bold">metodo, biologia e disciplina.</span> Non vendo trasformazioni in 10 giorni, vendo un sistema per costruire un fisico che comanda rispetto.
              </p>
              <p className="italic border-l-2 border-brand-gold pl-6 py-2">
                "L'allenamento deve adattarsi alla vita reale, non il contrario. Se un metodo non è sostenibile, non è un metodo vincente."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
