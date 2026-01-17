import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ApplicationModal from './components/ApplicationModal.tsx';
import LegalModal from './components/LegalModal.tsx';

// Static Critical Sections (Loaded immediately for LCP)
import Hero from './components/Hero.tsx';
import Authority from './components/Authority.tsx';
import Qualification from './components/Qualification.tsx';
import CoachingOffer from './components/CoachingOffer.tsx';
import Method from './components/Method.tsx';
import EntryProgram from './components/EntryProgram.tsx';
import SocialProof from './components/SocialProof.tsx';
import FAQ from './components/FAQ.tsx';
import About from './components/About.tsx';
import FinalCTA from './components/FinalCTA.tsx';

import { SITE_CONTENT } from './constants/content.ts';

// Dynamic Imports (Code Splitting for performance)
const CoachingPage = lazy(() => import('./CoachingPage.tsx'));
const ProcessoPage = lazy(() => import('./ProcessoPage.tsx'));
const ProgrammiPage = lazy(() => import('./ProgrammiPage.tsx'));
const RisultatiPage = lazy(() => import('./RisultatiPage.tsx'));
const ChiSonoPage = lazy(() => import('./ChiSonoPage.tsx'));
const FAQPage = lazy(() => import('./FAQPage.tsx'));
const BlogPage = lazy(() => import('./BlogPage.tsx'));
const BlogPostPage = lazy(() => import('./BlogPostPage.tsx'));

const isProduction = window.location.hostname === 'teamamoruso.com' || window.location.hostname === 'www.teamamoruso.com';

const getInitialPath = () => {
  if (isProduction) {
    return window.location.pathname;
  } else {
    const hash = window.location.hash;
    return hash.startsWith('#') ? hash.slice(1) || '/' : '/';
  }
};

const LoadingBar = () => <div className="page-loader"></div>;

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(getInitialPath());
  const [isModalOpen, setModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      if (isProduction) {
        setCurrentPath(window.location.pathname);
      } else {
        const hash = window.location.hash;
        setCurrentPath(hash.startsWith('#') ? hash.slice(1) || '/' : '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    if (!isProduction) {
      window.addEventListener('hashchange', handlePopState);
    }
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
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
    if (isProduction) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    } else {
      window.location.hash = path;
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
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-brand-black bg-brand-black">
      <Navbar onCandidatiClick={openApplication} onNavigate={navigate} currentPath={currentPath} />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      <Footer onLegalClick={openLegal} onNavigate={navigate} />
      
      {isModalOpen && <ApplicationModal onClose={closeModal} />}
      {legalType && <LegalModal type={legalType} onClose={closeLegal} />}
    </div>
  );
};

export default App;