
import React from 'react';
import { ShieldCheck, FileCheck, ArrowRight, CheckCircle2, FileText, Stamp, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Contact } from './Contact';


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
      {/* Header */}
      <div className="bg-brand-darker text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[100px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Catálogo de Servicios</h1>
          <p className="text-xl text-stone-300 max-w-2xl font-sans">
            Descubre en detalle cómo podemos ayudarte. Desde trámites complejos de extranjería hasta la gestión del día a día.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section 1: Extranjería */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 border-b border-stone-100 pb-4">
            <div className="bg-brand-light p-3 rounded-full text-brand-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-darker font-serif">Trámites de Extranjería</h2>
              <p className="text-brand-secondary font-sans">Gestión integral de expedientes ante la Oficina de Extranjería</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immigrationServices.map((item, idx) => (
              <div key={idx} className="bg-white border border-stone-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-l-brand-primary/20 hover:border-l-brand-primary">
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

        {/* Section 2: Otros Servicios */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-stone-100 pb-4">
            <div className="bg-brand-secondary/10 p-3 rounded-full text-brand-secondary">
              <FileText size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-darker font-serif">Otros Servicios y Gestiones</h2>
              <p className="text-brand-secondary font-sans">Soporte administrativo complementario para tu vida en España</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administrativeServices.map((item, idx) => (
              <div key={idx} className="bg-stone-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-stone-200">
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

      {/* Reuse Contact Section */}
      <div className="bg-stone-50 border-t border-stone-200">
        <Contact />
      </div>
    </div>
  );
};