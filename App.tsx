import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AllServicesPage } from './components/AllServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ModalProvider } from './context/ModalContext';
import { ContactModal } from './components/ContactModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { LegalNoticePage } from './components/LegalNoticePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CookiesPolicyPage } from './components/CookiesPolicyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-stone-50 font-sans text-brand-darker relative">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<AllServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal-notice" element={<LegalNoticePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
            </Routes>
          </main>

          <FloatingWhatsApp />
          <Footer />
          <MobileStickyCTA />
          <ContactModal />
          <WhatsAppModal />
          <CookieBanner />
          <Analytics />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;