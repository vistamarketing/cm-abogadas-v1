import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-darker mb-8 font-serif">
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
                <div className="bg-brand-light p-4 rounded-lg text-brand-primary border border-red-100">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-darker text-xl font-serif mb-1">Ubicación</h4>
                  <p className="text-brand-secondary text-lg font-sans">Barcelona y Servicio Online</p>
                  <p className="text-brand-secondary text-lg font-sans">Cobertura en toda España</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-brand-light p-4 rounded-lg text-brand-primary border border-red-100">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-darker text-xl font-serif mb-1">Email</h4>
                  <a href="mailto:hola@cmabogadas.es" className="text-brand-primary text-lg hover:underline font-sans">hola@cmabogadas.es</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-brand-light p-4 rounded-lg text-brand-primary border border-red-100">
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
                <a href="#" className="inline-flex items-center gap-2 text-brand-primary text-lg font-bold hover:text-brand-accent font-sans">
                    <Instagram size={24} /> @cm.abogadas
                </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 rounded-2xl p-8 lg:p-12 shadow-xl border border-stone-100">
            <h3 className="text-3xl font-bold text-brand-darker mb-8 font-serif">Solicita Presupuesto o Cita</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Nombre</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Apellido</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg" placeholder="Tu apellido" />
                </div>
              </div>

              <div>
                <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Email</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg" placeholder="tucorreo@ejemplo.com" />
              </div>

              <div>
                <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Motivo de contacto</label>
                <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white text-brand-secondary font-sans text-lg">
                    <option>Solicitar Presupuesto</option>
                    <option>Agendar Primera Consulta</option>
                    <option>Dudas sobre Visa de Estudiante</option>
                    <option>Nómada Digital</option>
                    <option>Nacionalidad</option>
                    <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Mensaje</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none font-sans text-lg" placeholder="Descríbenos brevemente tu caso para que podamos darte la mejor orientación..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand-primary text-white font-bold py-5 rounded-xl hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl tracking-wide uppercase text-base font-sans">
                Enviar Solicitud
              </button>
              
              <p className="text-sm text-center text-brand-secondary/50 mt-6 font-sans">
                Tus datos serán tratados con total confidencialidad.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};