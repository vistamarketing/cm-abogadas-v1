import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    
    if (href === 'about') {
      onNavigate('about');
      return;
    }
    
    if (href === 'all-services') {
      onNavigate('all-services');
      return;
    }

    if (href === 'contact') {
      onNavigate('contact');
      return;
    }

    // If it's an anchor link (#)
    if (href.startsWith('#')) {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        onNavigate('home');
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: 'about' },
    { name: 'Servicios', href: 'all-services' },
    { name: 'Contacto', href: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group no-underline focus:outline-none">
               <img 
                 src="https://primary.jwwb.nl/public/s/o/c/temp-vtfdvofpizsgkegbrzwi/image-high-4fxvzd.png?enable-io=true&width=200" 
                 alt="CM Abogadas" 
                 className="h-14 w-auto object-contain"
               />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`font-medium text-lg transition-colors hover:text-brand-primary flex items-center ${isScrolled || currentPage !== 'home' ? 'text-brand-secondary' : 'text-brand-darker'}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-brand-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide text-base"
            >
              AGENDAR CITA
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
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-4 py-4 rounded-md text-lg font-medium text-brand-secondary hover:text-brand-primary hover:bg-brand-light flex items-center gap-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="block w-full text-center mt-6 bg-brand-primary text-white px-5 py-4 rounded-sm font-bold uppercase tracking-wide text-lg"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};