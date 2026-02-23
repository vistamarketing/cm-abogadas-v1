import React from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { useTina } from "tinacms/dist/react";
import { getPageContent } from '../utils/contentLoader';
import { useCurrentLang } from '../hooks/useLanguage';

export const ContactPage: React.FC = () => {
  const currentLang = useCurrentLang();
  const contactData = getPageContent('contact', currentLang);

  // Only use Tina in edit mode (when in /admin or when Tina is active)
  const isEditMode = typeof window !== 'undefined' && window.location.pathname.includes('/admin');

  // Cast initial data to simple object to avoid type errors with template structure
  let data = { page: contactData as any };

  if (isEditMode) {
    const tinaResult = useTina({
      query: `
        query PageQuery {
          page(relativePath: "contact.json") {
            ... on PageContact {
              hero {
                badge
                title
                description
                image
              }
              info {
                location {
                  title
                  line1
                  line2
                  note
                }
                phone {
                  title
                  number
                  email
                  hours
                }
                social {
                  title
                  description
                  handle
                  link
                }
              }
            }
          }
        }
      `,
      variables: {},
      data: { page: contactData },
    });
    data = tinaResult.data;
  }

  const page = data?.page || {};
  const hero = page.hero || {};
  const info = page.info || {};

  return (
    <div className="pt-24 min-h-screen bg-stone-50 animate-fade-in">
      {/* Header Section */}
      <section className="relative flex flex-col lg:flex-row bg-white border-b border-stone-100">
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-[#f9f7f2]">
          <div className="max-w-xl">
            <span className="text-brand-primary font-bold tracking-wider sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-6 sm:mb-8 block leading-none">
              {hero.badge || "— ESTAMOS AQUÍ PARA TI —"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-brand-darker mb-6 sm:mb-8 leading-[1.1]">
              {hero.title || "Contacto"}
            </h1>
            <p className="text-xl text-stone-600 mb-10 font-sans leading-relaxed">
              {hero.description || "¿Tienes dudas sobre tu proceso migratorio?..."}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
          <img
            src={hero.image || "/images/contact-hero.jpg"}
            alt="CM Abogadas Contact"
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-brand-darker/5"></div>
        </div>
      </section>

      {/* Detailed Contact Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Location Card */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-sm flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">{info.location?.title || "Ubicación"}</h3>
            <p className="text-brand-secondary font-sans">{info.location?.line1 || "Servicio en Barcelona y Online"}</p>
            <p className="text-brand-secondary font-sans">{info.location?.line2 || "Atendemos en toda España"}</p>
            <p className="text-sm text-stone-400 mt-2 font-sans">{info.location?.note || "Reuniones presenciales bajo cita"}</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-sm flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">{info.phone?.title || "Llámanos"}</h3>
            <p className="text-brand-secondary font-sans mb-1">{info.phone?.number || "+34 686 401 557"}</p>
            <a href={`mailto:${info.phone?.email || "infocmabogadas@gmail.com"}`} className="text-brand-primary hover:underline font-sans">{info.phone?.email || "infocmabogadas@gmail.com"}</a>
            <div className="mt-4 flex items-center gap-2 text-sm text-stone-500 font-sans">
              <Clock size={16} />
              <span>{info.phone?.hours || "Lun - Vie: 09:00 - 18:00"}</span>
            </div>
          </div>

          {/* Social Card */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-sm flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
              <Instagram size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">{info.social?.title || "Síguenos"}</h3>
            <p className="text-brand-secondary mb-4 font-sans">{info.social?.description || "Consejos diarios..."}</p>
            <a href={info.social?.link || "https://www.instagram.com/cmabogadas.esp/"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent font-sans">
              {info.social?.handle || "@cmabogadas.esp"}
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};