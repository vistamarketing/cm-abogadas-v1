import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import { useCurrentLang, useLocalizedPath, ROUTES } from '../hooks/useLanguage';

const LANG_LABELS: Record<string, string> = {
  es: 'ES',
  en: 'EN',
  ca: 'CA',
};

const SpainFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="inline-block align-middle rounded-sm" aria-label="Spanish flag">
    <rect width="20" height="14" fill="#C60B1E" />
    <rect y="3.5" width="20" height="7" fill="#FFC400" />
  </svg>
);

const UKFlag = () => (
  <svg width="20" height="14" viewBox="0 0 60 42" className="inline-block align-middle rounded-sm" aria-label="UK flag">
    <rect width="60" height="42" fill="#012169" />
    <path d="M0,0 L60,42 M60,0 L0,42" stroke="#fff" strokeWidth="7" />
    <path d="M0,0 L60,42 M60,0 L0,42" stroke="#C8102E" strokeWidth="4" />
    <rect x="25" width="10" height="42" fill="#fff" />
    <rect y="16" width="60" height="10" fill="#fff" />
    <rect x="27" width="6" height="42" fill="#C8102E" />
    <rect y="18" width="60" height="6" fill="#C8102E" />
  </svg>
);

const CatalanFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="inline-block align-middle rounded-sm" aria-label="Catalan flag">
    <rect width="20" height="14" fill="#FCDD09" />
    <rect y="1.56" width="20" height="1.56" fill="#DA121A" />
    <rect y="4.67" width="20" height="1.56" fill="#DA121A" />
    <rect y="7.78" width="20" height="1.56" fill="#DA121A" />
    <rect y="10.89" width="20" height="1.56" fill="#DA121A" />
  </svg>
);

const LANG_FLAGS: Record<string, React.ReactNode> = {
  es: <SpainFlag />,
  en: <UKFlag />,
  ca: <CatalanFlag />,
};

export const Navbar: React.FC = () => {
  const { openModal } = useModal();
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const localizedPath = useLocalizedPath();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setIsLangOpen(false);
    if (isLangOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLangOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);

    // If it's an anchor link (#)
    if (href.startsWith('#')) {
      const homePath = localizedPath('/');
      if (!location.pathname.endsWith('/') && location.pathname !== homePath.replace(/\/$/, '')) {
        navigate(homePath);
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const switchLanguage = (newLang: string) => {
    // Strip any existing lang prefix to get the page slug
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|ca)/, '') || '/';
    if (newLang === 'es') {
      navigate(pathWithoutLang);
    } else {
      navigate(`/${newLang}${pathWithoutLang}`);
    }
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: localizedPath('/') },
    { name: t('nav.about'), href: localizedPath(ROUTES.about) },
    { name: t('nav.services'), href: localizedPath(ROUTES.services) },
    { name: t('nav.contact'), href: localizedPath(ROUTES.contact) },
  ];

  const isHome = location.pathname === localizedPath('/') || location.pathname === '/';

  const LanguageSelector = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsLangOpen(!isLangOpen);
        }}
        className={`flex items-center gap-1.5 font-medium text-sm transition-colors ${isMobile
          ? 'w-full justify-center px-4 py-3 border border-stone-200 rounded-sm text-brand-secondary'
          : `px-3 py-1.5 rounded-sm border ${isScrolled || !isHome ? 'border-stone-200 text-brand-secondary' : 'border-white/30 text-brand-darker'}`
          }`}
      >
        <span>{LANG_FLAGS[currentLang]}</span>
        <span>{LANG_LABELS[currentLang]}</span>
        <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
      </button>

      {isLangOpen && (
        <div className={`absolute ${isMobile ? 'bottom-full mb-1 left-0 right-0' : 'top-full mt-1 right-0'} bg-white border border-stone-200 rounded-sm shadow-lg overflow-hidden z-50 min-w-[120px]`}>
          {Object.entries(LANG_LABELS).map(([code, label]) => (
            <button
              key={code}
              onClick={(e) => {
                e.stopPropagation();
                switchLanguage(code);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${code === currentLang
                ? 'bg-brand-light text-brand-primary'
                : 'text-brand-secondary hover:bg-stone-50'
                }`}
            >
              <span>{LANG_FLAGS[code]}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-4 lg:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={localizedPath('/')} onClick={() => setIsOpen(false)} className="flex items-center gap-3 group no-underline focus:outline-none">
              <img
                src="https://primary.jwwb.nl/public/s/o/c/temp-vtfdvofpizsgkegbrzwi/image-high-4fxvzd.png?enable-io=true&width=200"
                alt="CM Abogadas"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-medium text-lg transition-colors hover:text-brand-primary flex items-center ${isScrolled || !isHome ? 'text-brand-secondary' : 'text-brand-darker'}`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium text-lg transition-colors hover:text-brand-primary flex items-center ${isScrolled || !isHome ? 'text-brand-secondary' : 'text-brand-darker'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <LanguageSelector />
            <button
              onClick={() => openModal()}
              className="bg-brand-primary text-white px-8 py-3 rounded-sm font-bold hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg tracking-[0.2em] text-xs uppercase"
            >
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-darker hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left px-4 py-4 rounded-md text-lg font-medium text-brand-secondary hover:text-brand-primary hover:bg-brand-light flex items-center gap-2"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-4 rounded-md text-lg font-medium text-brand-secondary hover:text-brand-primary hover:bg-brand-light flex items-center gap-2"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-3">
              <LanguageSelector isMobile />
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="block w-full text-center mt-6 bg-brand-primary text-white px-5 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-sm"
            >
              {t('nav.ctaMobile')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};