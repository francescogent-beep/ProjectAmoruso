import React from 'react';
import PageHeader from '../components/ui/PageHeader.tsx';
import Authority from '../components/sections/Authority.tsx';
import FinalCTA from '../components/sections/FinalCTA.tsx';
import { SITE_CONTENT } from '../constants/content.ts';

interface BlogPostPageProps {
  slug: string;
  currentPath: string;
  onNavigate: (path: string) => void;
  onCandidatiClick: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, currentPath, onNavigate, onCandidatiClick }) => {
  const post = SITE_CONTENT.blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black">
        <div className="text-center">
          <h1 className="text-brand-gold font-display text-6xl font-black mb-4">404</h1>
          <p className="text-white mb-8">Articolo non trovato.</p>
          <button onClick={() => onNavigate('/blog')} className="text-brand-gold uppercase font-bold tracking-widest border border-brand-gold px-6 py-2">Torna al Blog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <PageHeader 
        title={post.title}
        subtitle="Inside Team PA"
        currentPath={currentPath}
        onNavigate={onNavigate}
        category={post.category}
        date={post.date}
      />
      <Authority />
      
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
          
          {/* Main Content Area */}
          <article className="lg:w-2/3">
            <div className="aspect-[21/9] overflow-hidden grayscale mb-16 border border-white/5 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {/* Typography Section */}
            <div 
              className="prose prose-invert prose-brand max-w-2xl 
                         prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tight
                         prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:text-brand-gold prose-h2:mt-24 prose-h2:mb-8 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                         prose-h3:text-xl prose-h3:text-white prose-h3:mt-16 prose-h3:mb-6
                         prose-p:text-zinc-300 prose-p:text-lg prose-p:leading-[1.8] prose-p:mb-10 prose-p:tracking-wide
                         prose-strong:text-white prose-strong:font-bold
                         prose-blockquote:border-l-brand-gold prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:italic prose-blockquote:text-zinc-200 prose-blockquote:my-12 prose-blockquote:text-xl
                         prose-hr:border-white/10 prose-hr:my-16
                         prose-li:text-zinc-300 prose-li:mb-4 prose-li:text-lg
                         prose-ul:mb-12 prose-ul:list-outside
                         prose-a:text-brand-gold prose-a:font-bold prose-a:no-underline prose-a:border-b prose-a:border-brand-gold/30 hover:prose-a:border-brand-gold transition-all"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-32 p-10 bg-brand-gray border border-white/5 flex flex-col md:flex-row items-center gap-10 max-w-2xl">
              <div className="w-32 h-32 flex-shrink-0 grayscale">
                <img src="https://i.imgur.com/IoHpM0K.jpeg" alt="Paolo Amoruso" className="w-full h-full object-cover rounded-sm border border-brand-gold/20" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold uppercase text-white mb-2">Scritto da Paolo Amoruso</h4>
                <p className="text-zinc-400 text-sm italic mb-4">IFBB Pro Athlete & Founder of Team PA. Specializzato in biomeccanica applicata all'ipertrofia e nutrizione per la ricomposizione corporea d'élite.</p>
                <button onClick={onCandidatiClick} className="text-brand-gold text-[10px] font-black uppercase tracking-widest border-b border-brand-gold/50 pb-1 hover:text-white hover:border-white transition-all">
                  Scopri come allenarti con me
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3 space-y-12">
            <div className="sticky top-32">
              <div className="p-8 bg-brand-gray border border-white/5 mb-8">
                <h4 className="font-display text-xl font-bold uppercase italic text-white mb-6">Articoli Correlati</h4>
                <div className="space-y-6">
                  {SITE_CONTENT.blogPosts
                    .filter(p => p.slug !== slug)
                    .slice(0, 3)
                    .map(rel => (
                      <a 
                        key={rel.slug} 
                        href={`/blog/${rel.slug}`} 
                        onClick={(e) => { e.preventDefault(); onNavigate(`/blog/${rel.slug}`); }}
                        className="group block"
                      >
                        <span className="block text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{rel.category}</span>
                        <h5 className="text-white font-display text-sm uppercase italic font-bold group-hover:text-brand-gold transition-colors leading-tight">{rel.title}</h5>
                      </a>
                    ))}
                </div>
              </div>

              <div className="p-8 bg-brand-gold text-brand-black">
                <h4 className="font-display text-2xl font-black uppercase italic mb-4 leading-none">Ottieni Risultati IFBB Pro</h4>
                <p className="text-brand-black font-medium text-sm mb-8">
                  Il blog è solo l'inizio. Per una trasformazione reale, hai bisogno di un protocollo d'élite personalizzato al 100%.
                </p>
                <button 
                  onClick={onCandidatiClick}
                  className="w-full bg-brand-black text-white py-4 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
                >
                  Candidati al Coaching
                </button>
              </div>
            </div>
          </aside>
          
        </div>
      </section>

      <FinalCTA onCandidatiClick={onCandidatiClick} />
    </div>
  );
}; 

export default BlogPostPage;