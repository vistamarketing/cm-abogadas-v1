import React from 'react';
import { ArrowLeft, Users, MonitorSmartphone, Heart, Scale, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Contact } from './Contact';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-stone-50 py-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-stone-200 rounded-full blur-3xl opacity-40 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="flex items-center text-brand-secondary/70 hover:text-brand-primary mb-8 transition-colors group font-medium font-sans"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a Inicio
          </Link>

          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block font-sans">Sobre Nosotros</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-darker mb-6 leading-tight">
              Rigor jurídico y <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">trato humano</span>.
            </h1>
            <p className="text-xl text-brand-secondary leading-relaxed font-sans">
              En CM Abogadas somos un despacho joven, cercano y comprometido, fundado en abril de 2024. Hemos experimentado un crecimiento constante gracias a la confianza de quienes nos eligen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Team & Expertise */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
                  alt="Abogadas trabajando"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-darker/90 to-transparent p-6 text-white">
                  <p className="font-bold text-lg font-serif">Colegiadas en ICAB</p>
                  <p className="text-sm opacity-90 font-sans">Ilustre Colegio de la Abogacía de Barcelona</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-secondary text-sm font-medium border border-red-100 font-sans">
                <Users size={16} />
                <span>Equipo Profesional</span>
              </div>
              <h2 className="text-3xl font-bold font-serif text-brand-darker">Expertas en defender tus derechos</h2>
              <p className="text-brand-secondary text-lg leading-relaxed font-sans">
                Nuestro equipo está integrado por abogadas colegiadas en el Ilustre Colegio de la Abogacía de Barcelona, con amplia experiencia en derecho de extranjería y un firme compromiso con la defensa de los derechos de nuestros clientes.
              </p>
              <p className="text-brand-secondary text-lg leading-relaxed font-sans">
                Trabajamos con un estilo propio que combina rigor jurídico, flexibilidad y disponibilidad. Nuestro objetivo es que encuentres no solo respuestas legales, sino la tranquilidad de sentirte respaldado.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-light p-2 rounded-full text-brand-primary"><Scale size={20} /></div>
                  <span className="font-medium text-brand-secondary font-serif">Rigor Jurídico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-light p-2 rounded-full text-brand-primary"><Heart size={20} /></div>
                  <span className="font-medium text-brand-secondary font-serif">Trato Humano</span>
                </div>
              </div>
            </div>
          </div>

          {/* The "Model" - Highlighting Flexibility */}
          <div className="bg-brand-darker rounded-3xl p-8 md:p-16 text-white relative overflow-hidden mb-24">
            {/* Abstract techy background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary text-white text-sm font-medium font-sans">
                  <MonitorSmartphone size={16} />
                  <span>Modelo Flexible</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  Un despacho moderno, sin barreras físicas.
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed font-sans">
                  CM ABOGADAS tiene su sede en Barcelona, pero hemos elegido un modelo de trabajo flexible que nos permite ofrecer servicios en toda España y el extranjero.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-sans">
                  Al no depender de un despacho físico permanente, nos adaptamos a tus horarios y necesidades de manera ágil. Ofrecemos <strong>atención personalizada directa</strong> sin limitaciones de ubicación.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white font-serif">
                  <MapPin className="text-white" />
                  ¿Cómo nos reunimos?
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-lg h-fit text-white border border-white/20">
                      <MonitorSmartphone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white font-serif">100% Online y Disponible</h4>
                      <p className="text-gray-400 text-sm mt-1 font-sans">Videollamadas y gestión digital para que avances desde tu casa, estés donde estés.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-lg h-fit text-white border border-white/20">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white font-serif">Presencial cuando lo necesitas</h4>
                      <p className="text-gray-400 text-sm mt-1 font-sans">Si es necesario, organizamos entrevistas presenciales en espacios adecuados en Barcelona, combinando cercanía y comodidad.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-darker mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-50 p-8 rounded-xl border border-stone-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary mx-auto mb-4 shadow-sm border border-stone-100">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-lg text-brand-darker mb-2 font-serif">Transparencia</h3>
                <p className="text-brand-secondary font-sans">Comunicación clara desde el primer momento. Sin sorpresas, con honestidad sobre la viabilidad de tu caso.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-xl border border-stone-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary mx-auto mb-4 shadow-sm border border-stone-100">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-lg text-brand-darker mb-2 font-serif">Dedicación</h3>
                <p className="text-brand-secondary font-sans">Cada cliente es único. Trabajamos para que te sientas valorado, comprendido y acompañado en cada paso.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-xl border border-stone-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary mx-auto mb-4 shadow-sm border border-stone-100">
                  <Heart size={24} />
                </div>
                <h3 className="font-bold text-lg text-brand-darker mb-2 font-serif">Cercanía</h3>
                <p className="text-brand-secondary font-sans">Rigor jurídico con humanidad. Queremos que encuentres en nosotras no solo abogadas, sino aliadas.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section Reuse */}
      <div className="bg-stone-50 border-t border-stone-200">
        <Contact />
      </div>
    </div>
  );
};