
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

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openApplication = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

      <Footer />
      
      {isModalOpen && <ApplicationModal onClose={closeModal} />}
    </div>
  );
};

export default App;
