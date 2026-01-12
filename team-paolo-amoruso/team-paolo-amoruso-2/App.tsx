import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Qualification from './components/Qualification';
import CoachingOffer from './components/CoachingOffer';
import Method from './components/Method';
import EntryProgram from './components/EntryProgram';
import SocialProof from './components/SocialProof';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const openApplication = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  const openLegal = (type: 'privacy' | 'terms') => setLegalType(type);
  const closeLegal = () => setLegalType(null);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-brand-black">
      <Navbar onCandidatiClick={openApplication} />
      
      <main>
        <Hero onCandidatiClick={openApplication} />
        <Authority />
        <Qualification />
        <CoachingOffer onCandidatiClick={openApplication} />
        <Method />
        <EntryProgram />
        <SocialProof />
        <About />
        <FinalCTA onCandidatiClick={openApplication} />
      </main>

      <Footer onLegalClick={openLegal} />
      
      {isModalOpen && <ApplicationModal onClose={closeModal} />}
      {legalType && <LegalModal type={legalType} onClose={closeLegal} />}
    </div>
  );
};

export default App;