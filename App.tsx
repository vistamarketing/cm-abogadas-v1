import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
import { ROUTES } from './hooks/useLanguage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Sets the i18n language based on the detected language.
 */
function LanguageSync({ lang, children }: { lang: string; children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return <>{children}</>;
}

/** Shared page layout with navbar, footer, modals, etc. */
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-brand-darker relative">
      <Navbar />
      <main>{children}</main>
      <FloatingWhatsApp />
      <Footer />
      <MobileStickyCTA />
      <ContactModal />
      <WhatsAppModal />
      <CookieBanner />
    </div>
  );
}

/** The page routes */
function PageRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.about} element={<AboutPage />} />
      <Route path={ROUTES.services} element={<AllServicesPage />} />
      <Route path={ROUTES.contact} element={<ContactPage />} />
      <Route path={ROUTES.legalNotice} element={<LegalNoticePage />} />
      <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicyPage />} />
      <Route path={ROUTES.cookiesPolicy} element={<CookiesPolicyPage />} />
    </Routes>
  );
}

/**
 * Strips /es/ prefix and redirects to the root equivalent.
 * E.g. /es/servicios → /servicios
 */
function RedirectEsToRoot() {
  const location = useLocation();
  const pathWithoutEs = location.pathname.replace(/^\/es/, '') || '/';
  return <Navigate to={pathWithoutEs} replace />;
}

/** Wraps content with language set to English */
function EnglishRoutes() {
  return (
    <LanguageSync lang="en">
      <PageLayout>
        <PageRoutes />
      </PageLayout>
    </LanguageSync>
  );
}

/** Wraps content with language set to Catalan */
function CatalanRoutes() {
  return (
    <LanguageSync lang="ca">
      <PageLayout>
        <PageRoutes />
      </PageLayout>
    </LanguageSync>
  );
}

/** Wraps content with language set to Spanish (root, no prefix) */
function SpanishRoutes() {
  return (
    <LanguageSync lang="es">
      <PageLayout>
        <PageRoutes />
      </PageLayout>
    </LanguageSync>
  );
}

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Redirect /es/* to root (Spanish has no prefix) */}
          <Route path="/es" element={<Navigate to="/" replace />} />
          <Route path="/es/*" element={<RedirectEsToRoot />} />

          {/* EN — English with prefix */}
          <Route path="/en/*" element={<EnglishRoutes />} />

          {/* CA — Catalan with prefix */}
          <Route path="/ca/*" element={<CatalanRoutes />} />

          {/* Spanish — root routes (no prefix) */}
          <Route path="/*" element={<SpanishRoutes />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;