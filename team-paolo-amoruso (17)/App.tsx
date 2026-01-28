import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import ApplicationModal from './components/layout/ApplicationModal.tsx';
import LegalModal from './components/layout/LegalModal.tsx';
import Breadcrumbs from './components/ui/Breadcrumbs.tsx';

// Static Critical Sections (Home Page) - Immediate Load
import Hero from './components/sections/Hero.tsx';
import Authority from './components/sections/Authority.tsx';
import Qualification from './components/sections/Qualification.tsx';
import CoachingOffer from './components/sections/CoachingOffer.tsx';
import Method from './components/sections/Method.tsx';
import EntryProgram from './components/sections/EntryProgram.tsx';
import SocialProof from './components/sections/SocialProof.tsx';
import FAQ from './components/sections/FAQ.tsx';
import About from './components/sections/About.tsx';
import FinalCTA from './components/sections/FinalCTA.tsx';

import { SITE_CONTENT } from './constants/content.ts';

// Dynamic Page Imports - Code Splitting
const CoachingPage = lazy(() => import('./pages/CoachingPage.tsx'));
const ProcessoPage = lazy(() => import('./pages/ProcessoPage.tsx'));
const ProgrammiPage = lazy(() => import('./pages/ProgrammiPage.tsx'));
const RisultatiPage = lazy(() => import('./pages/RisultatiPage.tsx'));
const ChiSonoPage = lazy(() => import('./pages/ChiSonoPage.tsx'));
const FAQPage = lazy(() => import('./pages/FAQPage.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.tsx'));

const isEmbed = () => {
  try { return window.self !== window.top; } catch (e) { return true; }
};

const getInitialPath = () => {
  if (isEmbed()) {
    const hash = window.location.hash;
    if (!hash || hash === '#') return '/';
    return hash.replace(/^#/, '');
  }
  return window.location.pathname || '/';
};

const LoadingBar = () => <div className="page-loader" aria-hidden="true"></div>;

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(getInitialPath());
  const [isModalOpen, setModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(getInitialPath());
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const siteTitle = " | TEAM AMORUSO";
    
    // SEO Dynamic Meta
    let pageTitle = "PAOLO AMORUSO | TEAM AMORUSO | IFBB Pro Online Coaching Elite";
    let description = "Trasforma il tuo fisico con Paolo Amoruso, atleta IFBB Pro. Online coaching d'élite, programmi personalizzati e metodo scientifico per risultati estetici reali.";
    
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = SITE_CONTENT.blogPosts.find(p => p.slug === slug);
      if (post) {
        pageTitle = `${post.title} | Team Amoruso Blog`;
        description = post.excerpt;
      }
    } else {
      switch (currentPath) {
        case '/coaching': 
          pageTitle = "Online Coaching Elite Paolo Amoruso" + siteTitle; 
          description = "Percorso di coaching online d'élite con Paolo Amoruso. Trasformazione fisica professionale per atleti e ambiziosi.";
          break;
        case '/processo': 
          pageTitle = "Metodo Scientifico Paolo Amoruso" + siteTitle; 
          description = "Scopri il metodo di allenamento e nutrizione di Paolo Amoruso, basato sulla scienza e l'esperienza IFBB Pro.";
          break;
        case '/programmi': 
          pageTitle = "Programmi & Protocolli Digitali" + siteTitle; 
          description = "Protocolli di allenamento digitali Team Amoruso. Inizia la tua trasformazione in autonomia con basi solide.";
          break;
        case '/risultati': 
          pageTitle = "Risultati e Trasformazioni Team Amoruso" + siteTitle; 
          description = "Guarda le trasformazioni reali dei membri del Team Amoruso. Risultati concreti senza compromessi.";
          break;
        case '/blog': 
          pageTitle = "Blog e Consigli d'Elite" + siteTitle; 
          description = "Approfondimenti su allenamento, nutrizione e mindset da parte di Paolo Amoruso IFBB Pro.";
          break;
        case '/faq': 
          pageTitle = "Domande Frequenti Knowledge Base" + siteTitle; 
          description = "Tutto quello che devi sapere sul coaching online e i programmi Team Amoruso.";
          break;
        case '/chi-sono': 
          pageTitle = "Chi è Paolo Amoruso IFBB Pro" + siteTitle; 
          description = "La storia e la filosofia di Paolo Amoruso, atleta professionista IFBB Pro e fondatore del Team Amoruso.";
          break;
      }
    }
    
    // Update DOM
    document.title = pageTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.teamamoruso.com${currentPath === '/' ? '' : currentPath}`);
    
  }, [currentPath]);

  const navigate = (path: string) => {
    if (isEmbed()) {
      window.location.hash = path;
    } else {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const openApplication = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openLegal = (type: 'privacy' | 'terms') => setLegalType(type);
  const closeLegal = () => setLegalType(null);

  const renderContent = () => {
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return (
        <Suspense fallback={<LoadingBar />}>
          <BlogPostPage slug={slug} onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />
        </Suspense>
      );
    }

    switch (currentPath) {
      case '/coaching':
        return <Suspense fallback={<LoadingBar />}><CoachingPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/processo':
        return <Suspense fallback={<LoadingBar />}><ProcessoPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/programmi':
        return <Suspense fallback={<LoadingBar />}><ProgrammiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/risultati':
        return <Suspense fallback={<LoadingBar />}><RisultatiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/blog':
        return <Suspense fallback={<LoadingBar />}><BlogPage currentPath={currentPath} onNavigate={navigate} onCandidatiClick={openApplication} /></Suspense>;
      case '/faq':
        return <Suspense fallback={<LoadingBar />}><FAQPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/chi-sono':
        return <Suspense fallback={<LoadingBar />}><ChiSonoPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      default:
        return (
          <>
            <Hero onCandidatiClick={openApplication} />
            <Authority />
            <Qualification />
            <CoachingOffer onCandidatiClick={openApplication} />
            <Method />
            <EntryProgram />
            <SocialProof />
            <FAQ onNavigate={navigate} />
            <About />
            <FinalCTA onCandidatiClick={openApplication} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-brand-black bg-brand-black flex flex-col">
      <Navbar onCandidatiClick={openApplication} onNavigate={navigate} currentPath={currentPath} />
      <div className="pt-20 flex flex-col flex-1">
        {currentPath !== '/' && (
          <Breadcrumbs currentPath={currentPath} onNavigate={navigate} />
        )}
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
      <Footer onLegalClick={openLegal} onNavigate={navigate} />
      {isModalOpen && <ApplicationModal onClose={closeModal} />}
      {legalType && <LegalModal type={legalType} onClose={closeLegal} />}
    </div>
  );
};

export default App;
