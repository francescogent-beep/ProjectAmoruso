import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import ApplicationModal from './components/layout/ApplicationModal.tsx';
import LegalModal from './components/layout/LegalModal.tsx';
import Breadcrumbs from './components/ui/Breadcrumbs.tsx';

// Above-the-Fold components are kept in the main bundle for FCP/LCP
import Hero from './components/sections/Hero.tsx';
import Authority from './components/sections/Authority.tsx';
import Qualification from './components/sections/Qualification.tsx';
import { SITE_CONTENT } from './constants/content.ts';

// Lazy load non-critical sections
const CoachingOffer = lazy(() => import('./components/sections/CoachingOffer.tsx'));
const Method = lazy(() => import('./components/sections/Method.tsx'));
const EntryProgram = lazy(() => import('./components/sections/EntryProgram.tsx'));
const SocialProof = lazy(() => import('./components/sections/SocialProof.tsx'));
const FAQ = lazy(() => import('./components/sections/FAQ.tsx'));
const About = lazy(() => import('./components/sections/About.tsx'));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA.tsx'));

// Page Components
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
const SectionSkeleton = () => <div className="h-96 bg-black w-full" aria-hidden="true" />;

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
    
    let pageTitle = "PAOLO AMORUSO | TEAM AMORUSO | IFBB Pro Online Coaching Elite";
    let description = "Trasforma il tuo fisico con Paolo Amoruso, atleta IFBB Pro. Online coaching d'élite, programmi personalizzati e metodo scientifico per risultati estetici reali.";
    
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = SITE_CONTENT.blogPosts.find(p => p.slug === slug);
      if (post) {
        pageTitle = `${post.title}${siteTitle}`;
        description = post.excerpt;
      }
    } else {
      switch (currentPath) {
        case '/coaching': pageTitle = "Online Coaching Elite" + siteTitle; break;
        case '/processo': pageTitle = "Metodo Scientifico" + siteTitle; break;
        case '/programmi': pageTitle = "Programmi Digitali" + siteTitle; break;
        case '/risultati': pageTitle = "Risultati & Trasformazioni" + siteTitle; break;
        case '/blog': pageTitle = "Blog & Risorse" + siteTitle; break;
        case '/faq': pageTitle = "Knowledge Base" + siteTitle; break;
        case '/chi-sono': pageTitle = "Chi è Paolo Amoruso" + siteTitle; break;
      }
    }
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
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
      return <Suspense fallback={<LoadingBar />}><BlogPostPage slug={slug} onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
    }

    switch (currentPath) {
      case '/coaching': return <Suspense fallback={<LoadingBar />}><CoachingPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/processo': return <Suspense fallback={<LoadingBar />}><ProcessoPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/programmi': return <Suspense fallback={<LoadingBar />}><ProgrammiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/risultati': return <Suspense fallback={<LoadingBar />}><RisultatiPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/blog': return <Suspense fallback={<LoadingBar />}><BlogPage currentPath={currentPath} onNavigate={navigate} onCandidatiClick={openApplication} /></Suspense>;
      case '/faq': return <Suspense fallback={<LoadingBar />}><FAQPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      case '/chi-sono': return <Suspense fallback={<LoadingBar />}><ChiSonoPage onCandidatiClick={openApplication} currentPath={currentPath} onNavigate={navigate} /></Suspense>;
      default:
        return (
          <>
            <Hero onCandidatiClick={openApplication} />
            <Authority />
            <Qualification />
            <Suspense fallback={<SectionSkeleton />}>
              <CoachingOffer onCandidatiClick={openApplication} />
              <Method />
              <EntryProgram />
              <SocialProof />
              <FAQ onNavigate={navigate} />
              <About />
              <FinalCTA onCandidatiClick={openApplication} />
            </Suspense>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-brand-black bg-black flex flex-col">
      <Navbar onCandidatiClick={openApplication} onNavigate={navigate} currentPath={currentPath} />
      <div className="pt-20 flex flex-col flex-1 bg-black">
        {currentPath !== '/' && (
          <Breadcrumbs currentPath={currentPath} onNavigate={navigate} />
        )}
        <main className="flex-1 bg-black">
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