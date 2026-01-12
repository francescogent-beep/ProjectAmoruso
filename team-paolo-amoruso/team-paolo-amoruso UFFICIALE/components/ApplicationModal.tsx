
import React, { useEffect, useState } from 'react';

interface ApplicationModalProps {
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle closing on Escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-black/98 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-brand-gray border border-white/10 w-full max-w-4xl h-[95vh] md:h-[90vh] overflow-hidden shadow-2xl flex flex-col scale-in duration-300">
        
        {/* Elite Header Bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-brand-black/50 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-brand-gold rounded-sm flex items-center justify-center font-display font-bold text-brand-black text-[10px]">
              PA
            </div>
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-zinc-300">
              Candidatura <span className="text-brand-gold italic">Online Coaching Elite</span>
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="Chiudi"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Iframe Content Area */}
        <div className="flex-1 relative bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black z-30">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 border-2 border-brand-gold/10 rounded-full"></div>
                <div className="absolute inset-0 border-t-2 border-brand-gold rounded-full animate-spin"></div>
              </div>
              <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
                Inizializzazione Modulo...
              </p>
            </div>
          )}
          
          <iframe 
            src="https://tally.so/embed/KY5gA8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Application Form"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Branding Footer */}
        <div className="px-6 py-3 border-t border-black/5 bg-brand-black text-center">
          <p className="text-[10px] text-zinc-700 uppercase font-bold tracking-[0.3em]">
            IFBB Pro Standards • Excellence Only
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
