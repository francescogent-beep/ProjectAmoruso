import React from 'react';

const SocialProof: React.FC = () => {
  // Array of different images for each holder
  const transformationImages = [
    {
      url: "https://i.imgur.com/t3PYTT4.jpeg",
      label: "Client Transformation 01"
    },
    {
      url: "https://i.imgur.com/JWw39p3.jpeg",
      label: "Client Transformation 02"
    },
    {
      url: "https://i.imgur.com/tRLWTDL.jpeg",
      label: "Client Transformation 03"
    }
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic">Risultati</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mt-2">Trasformazioni & Gare</p>
          </div>
          <div className="hidden md:block">
            <span className="text-brand-gold font-display text-6xl font-black italic opacity-20 uppercase tracking-tighter">Excellence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {transformationImages.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-white/5">
              <img 
                src={item.url} 
                alt={item.label} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Optional subtle badge if results are pending, otherwise can be removed */}
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-[9px] font-black uppercase tracking-[0.3em] border border-white/20 px-3 py-1.5 bg-black/60 backdrop-blur-md">
                  Risultato Team PA
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-zinc-500 italic max-w-2xl mx-auto">
            "Il fisico non mente mai. Mostra ogni ora passata in palestra e ogni sacrificio a tavola."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;