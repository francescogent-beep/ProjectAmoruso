import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import ApplicationModal from './components/layout/ApplicationModal.tsx';
import LegalModal from './components/layout/LegalModal.tsx';
import Breadcrumbs from './components/ui/Breadcrumbs.tsx';

// Static Critical Sections (Home Page)
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

// Dynamic Page Imports
const CoachingPage = lazy(() => import('./pages/CoachingPage.tsx'));
const ProcessoPage = lazy(() => import('./pages/ProcessoPage.tsx'));
const ProgrammiPage = lazy(() => import('./pages/ProgrammiPage.tsx'));
const RisultatiPage = lazy(() => import('./pages/RisultatiPage.tsx'));
const ChiSonoPage = lazy(() => import('./pages/ChiSonoPage.tsx'));
const FAQPage = lazy(() => import('./pages/FAQPage.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.tsx'));

const getInitialPath = () => {
  const hash = window.location.hash;
  // Standardize: read from hash. If empty or just '#', return '/'
  if (!hash || hash === '#') return '/';
  return hash.replace(/^#/, '');
};

const LoadingBar = () => <div className="page-loader"></div>;

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(getInitialPath());
  const [isModalOpen, setModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const path = getInitialPath();
      setCurrentPath(path);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial sync
    handleHashChange();
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const siteTitle = " | TEAM AMORUSO";
    
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = SITE_CONTENT.blogPosts.find(p => p.slug === slug);
      if (post) {
        document.title = post.title + siteTitle;
        return;
      }
    }

    switch (currentPath) {
      case '/coaching': document.title = "Online Coaching Elite" + siteTitle; break;
      case '/processo': document.title = "Il Nostro Metodo Scientifico" + siteTitle; break;
      case '/programma':
      case '/programmi': document.title = "Programmi & Protocolli Digitali" + siteTitle; break;
      case '/risultati': document.title = "Trasformazioni & Risultati" + siteTitle; break;
      case '/blog': document.title = "Blog & Risorse" + siteTitle; break;
      case '/faq': document.title = "FAQ & Knowledge Base" + siteTitle; break;
      case '/chi-sono':
      case '/bio': document.title = "Paolo Amoruso - IFBB Pro Athlete" + siteTitle; break;
      default: document.title = "TEAM AMORUSO | IFBB Pro Online Coaching Elite";
    }
  }, [currentPath]);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
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
      case '/programma':
      case '/programmi':
        return <Suspense fallback={<LoadingBar />}><ProgrammiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/risultati':
        return <Suspense fallback={<LoadingBar />}><RisultatiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/blog':
        return <Suspense fallback={<LoadingBar />}><BlogPage currentPath={currentPath} onNavigate={navigate} onCandidatiClick={openApplication} /></Suspense>;
      case '/faq':
        return <Suspense fallback={<LoadingBar />}><FAQPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/chi-sono':
      case '/bio':
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
            <FAQ onNavigate={navigate} />
            <SocialProof />
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