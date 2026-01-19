
import React from 'react';
import { ShieldCheck, FileCheck, ArrowRight, CheckCircle2, FileText, Stamp, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from './CTA';

export const AllServicesPage: React.FC = () => {
  const immigrationServices = [
    { title: "Tramitación CUE (NIE Unión Europea)", desc: "Certificado de registro para ciudadanos de la UE que van a residir en España por más de 3 meses." },
    { title: "TIE (Cita de Huellas)", desc: "Gestión y acompañamiento para la obtención física de la Tarjeta de Identidad de Extranjero." },
    { title: "Tarjeta Familiar Comunitario (TFC)", desc: "Residencia de 5 años para familiares de ciudadanos de la Unión Europea que residan en España." },
    { title: "Pareja de Hecho / Arraigo Familiar", desc: "Regularización por vínculo afectivo con ciudadano español o comunitario. Incluye registro y residencia." },
    { title: "PAC (Personal Altamente Cualificado)", desc: "Visado especial para perfiles directivos o técnicos que vienen a ocupar puestos específicos con sueldos cualificados." },
    { title: "Visa de Estudios", desc: "Gestión completa para estudiantes: matrícula, seguro, medios económicos y obtención de estancia por estudios." },
    { title: "Visa Nómada Digital", desc: "La opción estrella para teletrabajadores internacionales. Permite residir en España trabajando para empresas extranjeras." },
    { title: "Arraigos (Social, Laboral, Formación)", desc: "Vías excepcionales de regularización para personas que ya se encuentran en España, con o sin contrato laboral previo." },
    { title: "Residencia No Lucrativa", desc: "Para quienes disponen de medios económicos suficientes y desean residir en España sin realizar actividad laboral." },
    { title: "Nacionalidad Española", desc: "Presentación telemática del expediente de nacionalidad por residencia, opción o carta de naturaleza." },
    { title: "Renovaciones de Residencia", desc: "Control de plazos y presentación de renovaciones para evitar la irregularidad sobrevenida." },
    { title: "Autorización de Regreso", desc: "Permiso para viajar fuera de España y poder volver mientras tu tarjeta está en renovación." },
    { title: "Disolución de Pareja de Hecho", desc: "Comunicación formal a la Oficina de Extranjería sobre el cese de la convivencia o relación." },
    { title: "Recursos y Alegaciones", desc: "Presentación de escritos y documentos en procedimientos ya iniciados o denegados." }
  ];

  const administrativeServices = [
    { title: "Tramitación de DNI Español", desc: "Asistencia para obtener el primer DNI tras la concesión de nacionalidad." },
    { title: "Registro Civil", desc: "Inscripciones de nacimiento, matrimonio y defunción." },
    { title: "Gestiones en Notaría", desc: "Coordinación para poderes, actas de manifestaciones o compudidas." },
    { title: "Apostilla de La Haya", desc: "Legalización de documentos para que surtan efectos en el extranjero o en España." },
    { title: "Certificado Digital en 24h", desc: "Obtención rápida para que puedas interactuar con la administración telemáticamente." },
    { title: "Empadronamiento", desc: "Gestión de citas y documentación para el registro en el ayuntamiento." },
    { title: "Cuentas Bancarias y Seguros", desc: "Acompañamiento para la apertura de cuenta y contratación de seguro médico válido para extranjería." },
    { title: "Cancelación de Antecedentes", desc: "Limpieza de antecedentes penales y policiales para trámites de nacionalidad o renovación." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in">
      {/* Mantenemos el nuevo Header Split */}
      <section className="relative flex flex-col lg:flex-row bg-white border-b border-stone-100">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#f9f7f2]">
          <div className="max-w-xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">
              — Áreas de Práctica —
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-brand-darker mb-8 leading-[1.1]">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-stone-600 mb-10 font-sans leading-relaxed">
              Te acompañamos en tus trámites de extranjería y gestiones administrativas con soluciones ágiles y eficaces.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
          <img
            src="/images/services-hero.jpg"
            alt="Abogada trabajando en despacho"
            className="absolute inset-0 w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-brand-darker/5"></div>
        </div>
      </section>

      {/* Restauramos el resto de la página a la estructura anterior */}
      <div id="catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section 1: Extranjería (Versión Anterior) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 border-b border-stone-100 pb-4">
            <div className="bg-transparent p-3 rounded-sm text-brand-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-darker font-serif">Trámites de Extranjería</h2>
              <p className="text-brand-secondary font-sans">Gestión integral de expedientes ante la Oficina de Extranjería</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immigrationServices.map((item, idx) => (
              <div key={idx} className="bg-white border border-stone-100 rounded-sm p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-l-brand-primary/20 hover:border-l-brand-primary">
                <h3 className="font-bold text-lg text-brand-secondary mb-3 flex items-start justify-between font-serif">
                  {item.title}
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                </h3>
                <p className="text-brand-secondary/80 text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Otros Servicios (Versión Anterior) */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-stone-100 pb-4">
            <div className="bg-transparent p-3 rounded-sm text-brand-secondary">
              <FileText size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-darker font-serif">Otros Servicios y Gestiones</h2>
              <p className="text-brand-secondary font-sans">Soporte administrativo complementario para tu vida en España</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administrativeServices.map((item, idx) => (
              <div key={idx} className="bg-stone-50 rounded-sm p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-stone-200">
                <div className="mb-4 text-brand-secondary/40">
                  {idx % 2 === 0 ? <Stamp size={24} /> : <Landmark size={24} />}
                </div>
                <h3 className="font-bold text-brand-secondary mb-2 font-serif">{item.title}</h3>
                <p className="text-brand-secondary/70 text-sm font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};