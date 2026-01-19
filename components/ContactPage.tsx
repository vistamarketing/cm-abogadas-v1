import React from 'react';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50 animate-fade-in">
      {/* Header Section */}
      {/* Header Section Split Layout */}
      <section className="relative flex flex-col lg:flex-row bg-white border-b border-stone-100">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#f9f7f2]">
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
            src="https://images.unsplash.com/photo-1596524430615-b46476dd9f56?q=80&w=2070&auto=format&fit=crop"
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
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-darker mb-2">Ubicación</h3>
            <p className="text-brand-secondary font-sans">Servicio en Barcelona y Online</p>
            <p className="text-brand-secondary font-sans">Atendemos en toda España</p>
            <p className="text-sm text-stone-400 mt-2 font-sans">Reuniones presenciales bajo cita</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-primary">
            <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
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
            <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center text-brand-primary mb-4 border border-stone-100">
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

      {/* Main Contact Section (Side-by-side) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-darker mb-8 font-serif leading-tight">
                Hablemos de tu futuro en Barcelona
              </h2>
              <p className="text-xl text-brand-secondary mb-8 font-sans leading-relaxed">
                En <strong>CM Abogadas</strong> ofrecemos un modelo flexible. Nos adaptamos a ti, tanto si ya estás en Barcelona como si te encuentras fuera de España.
              </p>
              <p className="text-xl text-brand-secondary mb-14 font-sans leading-relaxed">
                Reserva tu primera consulta y recibe un plan legal a tu medida.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="bg-transparent p-4 rounded-lg text-brand-primary border border-stone-100 italic">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-darker text-xl font-serif mb-1">Ubicación</h4>
                    <p className="text-brand-secondary text-lg font-sans">Barcelona y Servicio Online</p>
                    <p className="text-brand-secondary text-lg font-sans">Cobertura en toda España</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-transparent p-4 rounded-lg text-brand-primary border border-stone-100 italic">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-darker text-xl font-serif mb-1">Email</h4>
                    <a href="mailto:hola@cmabogadas.es" className="text-brand-primary text-lg hover:underline font-sans">hola@cmabogadas.es</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-transparent p-4 rounded-lg text-brand-primary border border-stone-100 italic">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-darker text-xl font-serif mb-1">Teléfono</h4>
                    <p className="text-brand-secondary text-lg font-sans">+34 930 000 000</p>
                    <p className="text-base text-brand-secondary/60 font-sans">Lun-Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <p className="font-medium text-brand-darker mb-4 font-serif text-lg">Síguenos para tips rápidos:</p>
                <a href="https://www.instagram.com/cmabogadas.esp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-primary text-lg font-bold hover:text-brand-accent font-sans">
                  <Instagram size={24} /> @cmabogadas.esp
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <ContactForm isCompact={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};