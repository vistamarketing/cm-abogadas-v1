
import React from 'react';
import { Users, Globe2, Home, GraduationCap, HeartHandshake, FileCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  // We group the extensive list into 6 main categories for the homepage
  const services: ServiceItem[] = [
    {
      id: 'ue-family',
      title: 'Ciudadanos UE y Familiares',
      description: 'Tramitación de NIE/CUE, Tarjeta Familiar Comunitario (TFC) y procesos de Pareja de Hecho. Resolvemos tu situación si tienes vínculos europeos.',
      icon: <Users className="w-10 h-10" />,
    },
    {
      id: 'work-nomad',
      title: 'Trabajo y Nómadas Digitales',
      description: 'Desde Visas para Nómadas Digitales hasta permisos para Personal Altamente Cualificado (PAC). Facilitamos tu llegada laboral a España.',
      icon: <Globe2 className="w-10 h-10" />,
    },
    {
      id: 'arraigo',
      title: 'Arraigos',
      description: 'Regularización por circunstancias excepcionales: Arraigo Social, Laboral, Socioformativo o Familiar. Encontramos la vía que se adapta a ti.',
      icon: <Home className="w-10 h-10" />,
    },
    {
      id: 'study',
      title: 'Estudiantes',
      description: 'Gestión integral de Visas de Estudios, renovación de estancia y modificación a permiso de trabajo o búsqueda de empleo.',
      icon: <GraduationCap className="w-10 h-10" />,
    },
    {
      id: 'nationality',
      title: 'Nacionalidad y Renovaciones',
      description: 'Presentación de Nacionalidad Española, renovación de permisos y autorizaciones de regreso. Mantenemos tu estatus legal al día.',
      icon: <HeartHandshake className="w-10 h-10" />,
    },
    {
      id: 'admin',
      title: 'Gestoría Administrativa',
      description: 'Te ayudamos con el DNI, Empadronamiento, Certificados Digitales, Apostillas y apertura de cuentas bancarias.',
      icon: <FileCheck className="w-10 h-10" />,
    },
  ];

  return (
    <section id="services" className="py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">— NUESTROS SERVICIOS —</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-brand-darker font-serif">
            Soluciones legales integrales
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-2xl text-brand-secondary font-sans leading-relaxed">
            Cubrimos todo el espectro de trámites de extranjería y gestiones administrativas para que no tengas que preocuparte por nada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-10 border border-stone-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 group relative">
              <div className="w-12 h-12 flex items-center justify-center text-brand-primary mb-8 border-b-2 border-brand-primary/20 pb-2">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-darker mb-4 font-serif">{service.title}</h3>
              <p className="text-brand-secondary text-lg leading-relaxed font-sans opacity-80 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-brand-primary text-brand-primary px-10 py-4 rounded-sm font-bold hover:bg-brand-primary hover:text-white transition-colors uppercase text-base tracking-wide font-sans"
          >
            Ver desglose completo de servicios
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
};