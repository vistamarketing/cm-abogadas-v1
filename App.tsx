import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Reviews } from './components/Reviews';
import { AllServicesPage } from './components/AllServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-brand-darker relative">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services onNavigate={handleNavigate} />
            <Reviews />
            <FAQ />
            <Contact />
          </>
        ) : currentPage === 'all-services' ? (
          <AllServicesPage onNavigate={handleNavigate} />
        ) : currentPage === 'about' ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34930000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group flex items-center justify-center border-2 border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="text-white w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-brand-darker px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-serif transform translate-x-2 group-hover:translate-x-0 transition-transform">
          ¡Escríbenos!
        </span>
      </a>
      
      <footer className="bg-brand-darker text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 text-center sm:flex sm:justify-between sm:text-left">
          <div className="mb-4 sm:mb-0">
            <span className="text-white text-xl font-bold block mb-2 font-serif">CM Abogadas</span>
            <p className="text-sm max-w-xs font-sans">Especialistas en extranjería comprometidas con tu futuro en Barcelona.</p>
          </div>
          <div className="text-sm font-sans">
            <p>&copy; {new Date().getFullYear()} CM Abogadas. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-2 justify-center sm:justify-start">
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;