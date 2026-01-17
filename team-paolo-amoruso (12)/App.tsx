import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ApplicationModal from './components/ApplicationModal.tsx';
import LegalModal from './components/LegalModal.tsx';

// Sections for Home
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

// Dedicated Pages
import CoachingPage from './CoachingPage.tsx';
import ProcessoPage from './ProcessoPage.tsx';
import ProgrammiPage from './ProgrammiPage.tsx';
import RisultatiPage from './RisultatiPage.tsx';
import ChiSonoPage from './ChiSonoPage.tsx';
import FAQPage from './FAQPage.tsx';
import BlogPage from './BlogPage.tsx';
import BlogPostPage from './BlogPostPage.tsx';
import { SITE_CONTENT } from './constants/content.ts';

const isProduction = window.location.hostname === 'teamamoruso.com' || window.location.hostname === 'www.teamamoruso.com';

const getInitialPath = () => {
  if (isProduction) {
    return window.location.pathname;
  } else {
    const hash = window.location.hash;
    return hash.startsWith('#') ? hash.slice(1) || '/' : '/';
  }
};

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
    
    // Dynamic SEO Titles
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
      return <BlogPostPage slug={slug} onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
    }

    switch (currentPath) {
      case '/coaching':
        return <CoachingPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
      case '/processo':
        return <ProcessoPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
      case '/programma':
      case '/programmi':
        return <ProgrammiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
      case '/risultati':
        return <RisultatiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
      case '/blog':
        return <BlogPage currentPath={currentPath} onNavigate={navigate} onCandidatiClick={openApplication} />;
      case '/faq':
        return <FAQPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
      case '/chi-sono':
      case '/bio':
        return <ChiSonoPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} />;
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