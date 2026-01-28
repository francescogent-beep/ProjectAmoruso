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

// Senior Logic: Detect if we should use Hash Routing (AI Studio) or Path Routing (Production)
const isEmbed = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

const getInitialPath = () => {
  if (isEmbed()) {
    const hash = window.location.hash;
    if (!hash || hash === '#') return '/';
    return hash.replace(/^#/, '');
  }
  // Fallback to pathname or root
  return window.location.pathname || '/';
};

const LoadingBar = () => <div className="page-loader" aria-hidden="true"></div>;

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(getInitialPath());
  const [isModalOpen, setModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getInitialPath());
    };

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
    
    let pageTitle = "TEAM AMORUSO | IFBB Pro Online Coaching Elite";
    
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = SITE_CONTENT.blogPosts.find(p => p.slug === slug);
      if (post) pageTitle = post.title + siteTitle;
    } else {
      switch (currentPath) {
        case '/coaching': pageTitle = "Online Coaching Elite" + siteTitle; break;
        case '/processo': pageTitle = "Il Nostro Metodo Scientifico" + siteTitle; break;
        case '/programmi': pageTitle = "Programmi & Protocolli Digitali" + siteTitle; break;
        case '/risultati': pageTitle = "Trasformazioni & Risultati" + siteTitle; break;
        case '/blog': pageTitle = "Blog & Risorse" + siteTitle; break;
        case '/faq': pageTitle = "FAQ & Knowledge Base" + siteTitle; break;
        case '/chi-sono': pageTitle = "Paolo Amoruso - IFBB Pro Athlete" + siteTitle; break;
      }
    }
    document.title = pageTitle;
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