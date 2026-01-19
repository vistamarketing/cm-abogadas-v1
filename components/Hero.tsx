import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const heroImages = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  "/images/hero-slide-2.jpg"
];

export const Hero: React.FC = () => {
  const { openModal } = useModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="text-brand-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs mb-8 block leading-relaxed">
              — MIGRAR CON PLAN, MIGRAR MEJOR —
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-darker leading-tight font-serif">
              Abogadas especialistas en derecho migratorio
            </h1>

            <p className="text-xl text-brand-secondary max-w-xl leading-relaxed mx-auto lg:mx-0">
              En <strong>CM Abogadas</strong> somos un despacho joven y comprometido. Combinamos la excelencia jurídica con un trato humano para que tu proceso migratorio sea seguro y sin estrés.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button
                id="hero-cta-button"
                onClick={openModal}
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-sm text-white bg-brand-primary hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-primary/20"
              >
                Agendar Cita
                <ArrowRight className="ml-2 w-6 h-6" />
              </button>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-sm text-brand-primary bg-white border border-red-100 hover:bg-brand-light transition-all"
              >
                Ver Servicios
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-100 flex gap-8 text-base text-brand-secondary/80 font-medium justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-primary w-6 h-6" />
                <span>Honestidad y Transparencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-primary w-6 h-6" />
                <span>Atención Flexible (Online/Presencial)</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[700px] rounded-sm overflow-hidden shadow-2xl group border-8 border-white">
            <div className="absolute inset-0 bg-brand-darker/20 z-10"></div>

            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`CM Abogadas - Imagen ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform group-hover:scale-105 transition-transform duration-[2000ms] ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}

            <div className="absolute bottom-10 left-10 z-20 text-white max-w-xs">
              <div className="bg-brand-primary/90 backdrop-blur-sm p-4 rounded-sm shadow-lg">
                <p className="text-red-50 font-serif text-lg italic">"Defendemos tus derechos, construimos tu futuro."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};