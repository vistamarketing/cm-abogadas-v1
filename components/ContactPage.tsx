import React from 'react';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50 animate-fade-in">
      {/* Header Section */}
      {/* Header Section Split Layout */}
      <section className="relative flex flex-col lg:flex-row bg-white border-b border-stone-100">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-[#f9f7f2]">
          <div className="max-w-xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">
              — ESTAMOS AQUÍ PARA TI —
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-brand-darker mb-8 leading-[1.1]">
              Contacto
            </h1>
            <p className="text-xl text-stone-600 mb-10 font-sans leading-relaxed">
              ¿Tienes dudas sobre tu proceso migratorio? Escríbenos y gestionaremos tu caso estés donde estés.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
          <img
            src="/images/contact-hero.jpg"
            alt="Oficina de contacto"
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
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">Ubicación</h3>
            <p className="text-brand-secondary font-sans">Servicio en Barcelona y Online</p>
            <p className="text-brand-secondary font-sans">Atendemos en toda España</p>
            <p className="text-sm text-stone-400 mt-2 font-sans">Reuniones presenciales bajo cita</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-sm flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">Llámanos</h3>
            <p className="text-brand-secondary font-sans mb-1">+34 930 000 000</p>
            <a href="mailto:hola@cmabogadas.es" className="text-brand-primary hover:underline font-sans">hola@cmabogadas.es</a>
            <div className="mt-4 flex items-center gap-2 text-sm text-stone-500 font-sans">
              <Clock size={16} />
              <span>Lun - Vie: 09:00 - 18:00</span>
            </div>
          </div>

          {/* Social Card */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-sm flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
              <Instagram size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">Síguenos</h3>
            <p className="text-brand-secondary mb-4 font-sans">Consejos diarios y novedades de extranjería en nuestras redes.</p>
            <a href="https://www.instagram.com/cmabogadas.esp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent font-sans">
              @cmabogadas.esp
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};