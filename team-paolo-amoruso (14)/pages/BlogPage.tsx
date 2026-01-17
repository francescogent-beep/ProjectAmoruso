import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';
import { SITE_CONTENT } from '../constants/content.ts';

interface BlogPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onCandidatiClick: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ currentPath, onNavigate, onCandidatiClick }) => {
  const handlePostClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    onNavigate(`/blog/${slug}`);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title="Inside Team PA" 
        subtitle="Scienza, Metodo & Performance" 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none text-white">
              L'Angolo <br /><span className="text-brand-gold">Tecnico</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Approfondimenti professionali su biomeccanica, nutrizione e mindset. Non semplici articoli, ma strumenti per elevate il tuo standard di conoscenza atletica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SITE_CONTENT.blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group relative flex flex-col bg-brand-gray border border-white/5 hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="337"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] text-brand-gold font-black uppercase tracking-widest">{post.category}</span>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{post.date}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold uppercase italic text-white mb-4 leading-tight group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handlePostClick(e, post.slug)}
                      className="inline-flex items-center space-x-3 group/link"
                    >
                      <span className="text-white text-xs font-black uppercase tracking-[0.2em] border-b border-brand-gold/40 pb-1 group-hover/link:border-brand-gold transition-all">Leggi Articolo</span>
                      <span className="text-brand-gold transform group-hover/link:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
}; 

export default BlogPage;