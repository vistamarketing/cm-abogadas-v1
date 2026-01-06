import React from 'react';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';
import { Contact } from './Contact';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50 animate-fade-in">
      {/* Header Section */}
      <div className="bg-brand-darker text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[100px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block font-sans">Estamos aquí para ti</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contacto</h1>
          <p className="text-xl text-stone-300 max-w-2xl font-sans">
            ¿Tienes dudas sobre tu proceso migratorio? Escríbenos y gestionaremos tu caso estés donde estés.
          </p>
        </div>
      </div>

      {/* Detailed Contact Info Grid - Moved up since Map is gone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Location Card (Generic) */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-primary">
            <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">Ubicación</h3>
            <p className="text-brand-secondary font-sans">Servicio en Barcelona y Online</p>
            <p className="text-brand-secondary font-sans">Atendemos en toda España</p>
            <p className="text-sm text-stone-400 mt-2 font-sans">Reuniones presenciales bajo cita</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-primary">
            <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-primary mb-4">
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
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-primary">
            <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-primary mb-4">
              <Instagram size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">Síguenos</h3>
            <p className="text-brand-secondary mb-4 font-sans">Consejos diarios y novedades de extranjería en nuestras redes.</p>
            <a href="#" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent font-sans">
              @cm.abogadas
            </a>
          </div>
        </div>
      </div>

      {/* Reuse Contact Form Section */}
      <div className="pb-12">
        <Contact />
      </div>

    </div>
  );
};