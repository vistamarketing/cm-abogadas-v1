import React from 'react';
import { Users, MonitorSmartphone, Heart, Scale, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CTA } from './CTA';
import { useTina } from "tinacms/dist/react";
import { getPageContent } from '../utils/contentLoader';
import { useCurrentLang } from '../hooks/useLanguage';

export const AboutPage: React.FC = () => {
  const currentLang = useCurrentLang();
  const aboutData = getPageContent('about', currentLang);

  // Only use Tina in edit mode (when in /admin or when Tina is active)
  const isEditMode = typeof window !== 'undefined' && window.location.pathname.includes('/admin');

  // Cast initial data to simple object to avoid type errors with template structure
  let data = { page: aboutData as any };

  if (isEditMode) {
    const tinaResult = useTina({
      query: `
        query PageQuery {
          page(relativePath: "about.json") {
            ... on PageAbout {
              hero {
                badge
                title
                description
                image
              }
              team {
                badge
                title
                description1
                description2
                image
              }
              model {
                badge
                title
                description1
                description2
                boxTitle
                features {
                  title
                  description
                  icon
                }
              }
              values {
                title
                items {
                  title
                  description
                  icon
                }
              }
            }
          }
        }
      `,
      variables: {},
      data: { page: aboutData },
    });
    data = tinaResult.data;
  }

  const page = data?.page || {};
  const hero = page.hero || {};
  const team = page.team || {};
  const model = page.model || {};
  const values = page.values || {};

  const iconMap: Record<string, React.ReactNode> = {
    // Team Icons
    Scale: <Scale size={20} />,
    Heart: <Heart size={20} />,

    // Model Icons
    MonitorSmartphone: <MonitorSmartphone size={24} />,
    Users: <Users size={24} />,

    // Values Icons
    ShieldCheck: <ShieldCheck size={24} />,
    Clock: <Clock size={24} />,
  };

  const getIcon = (name: string, fallback: React.ReactNode) => {
    return iconMap[name] || fallback;
  };

  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row bg-white border-b border-stone-100">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-[#f9f7f2]">
          <div className="max-w-xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">
              {hero.badge || "— SOBRE NOSOTROS —"}
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-brand-darker mb-8 leading-[1.1]">
              {hero.title || "¿Quienes somos?"}
            </h1>
            <p className="text-xl text-stone-600 mb-10 font-sans leading-relaxed">
              {hero.description || "En CM Abogadas somos un despacho joven..."}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
          <img
            src={hero.image || "/images/about-hero.jpg"}
            alt="CM Abogadas"
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-brand-darker/5"></div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Team & Expertise */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-all duration-500">
                <img
                  src={team.image || "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"}
                  alt="CM Abogadas"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-brand-darker/70 p-6 text-white text-center">
                  <p className="font-bold text-lg font-serif">Colegiadas en ICAB</p>
                  <p className="text-sm opacity-90 font-sans">Ilustre Colegio de la Abogacía de Barcelona</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block leading-none">
                {team.badge || "— EQUIPO PROFESIONAL —"}
              </div>
              <h2 className="text-3xl font-bold font-serif text-brand-darker">{team.title || "Expertas en defender tus derechos"}</h2>
              <p className="text-brand-secondary text-lg leading-relaxed font-sans">
                {team.description1 || "Nuestro equipo está integrado..."}
              </p>
              <p className="text-brand-secondary text-lg leading-relaxed font-sans">
                {team.description2 || "Trabajamos con un estilo propio..."}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-transparent p-2 rounded-sm text-brand-primary"><Scale size={20} /></div>
                  <span className="font-medium text-brand-secondary font-serif">Rigor Jurídico</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-transparent p-2 rounded-sm text-brand-primary"><Heart size={20} /></div>
                  <span className="font-medium text-brand-secondary font-serif">Trato Humano</span>
                </div>
              </div>
            </div>
          </div>

          {/* The "Model" - Highlighting Flexibility */}
          <div className="bg-[#1B0A09] rounded-sm p-8 md:p-16 text-white relative overflow-hidden mb-24">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-6 block leading-none">
                  {model.badge || "— MODELO FLEXIBLE —"}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  {model.title || "Un despacho moderno, sin barreras físicas."}
                </h2>
                <p className="text-white/90 text-lg leading-relaxed font-sans">
                  {model.description1 || "CM ABOGADAS tiene su sede en Barcelona..."}
                </p>
                <p className="text-white/90 text-lg leading-relaxed font-sans">
                  {model.description2 || "Al no depender de un despacho físico permanente..."}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white font-serif">
                  <MapPin className="text-white" />
                  {model.boxTitle || "¿Cómo nos reunimos?"}
                </h3>
                <ul className="space-y-6">
                  {model.features?.map((feature: any, index: number) => (
                    <li key={index} className="flex gap-4">
                      <div className="bg-white/10 p-3 rounded-sm h-fit text-white border border-white/20">
                        {getIcon(feature.icon, <Users size={24} />)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white font-serif">{feature.title}</h4>
                        <p className="text-gray-400 text-sm mt-1 font-sans">{feature.description}</p>
                      </div>
                    </li>
                  )) || (
                      <>
                        <li className="flex gap-4">
                          <div className="bg-white/10 p-3 rounded-sm h-fit text-white border border-white/20">
                            <MonitorSmartphone size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-white font-serif">100% Online y Disponible</h4>
                            <p className="text-gray-400 text-sm mt-1 font-sans">Videollamadas y gestión digital.</p>
                          </div>
                        </li>
                      </>
                    )}
                </ul>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-darker mb-12">{values.title || "Nuestros Valores"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.items?.map((item: any, index: number) => (
                <div key={index} className="bg-stone-50 p-8 rounded-sm border border-stone-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-transparent rounded-sm flex items-center justify-center text-brand-primary mx-auto mb-4 border border-stone-100">
                    {getIcon(item.icon, <ShieldCheck size={24} />)}
                  </div>
                  <h3 className="font-bold text-lg text-brand-darker mb-2 font-serif">{item.title}</h3>
                  <p className="text-brand-secondary font-sans">{item.description}</p>
                </div>
              )) || (
                  <div className="bg-stone-50 p-8 rounded-sm border border-stone-100">
                    <div className="w-12 h-12 bg-transparent rounded-sm flex items-center justify-center text-brand-primary mx-auto mb-4 border border-stone-100">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-brand-darker mb-2 font-serif">Transparencia</h3>
                  </div>
                )}
            </div>
          </div>

        </div>
      </section>

      <CTA />
    </div>
  );
};