import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, Stamp, Landmark } from 'lucide-react';
import { CTA } from './CTA';
import { useTina } from "tinacms/dist/react";
import { getPageContent } from '../utils/contentLoader';
import { useCurrentLang } from '../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

export const AllServicesPage: React.FC = () => {
  const currentLang = useCurrentLang();
  const { t } = useTranslation();
  const servicesData = getPageContent('services', currentLang);

  // Only use Tina in edit mode (when in /admin or when Tina is active)
  const isEditMode = typeof window !== 'undefined' && window.location.pathname.includes('/admin');

  // Cast initial data to simple object to avoid type errors with template structure
  let data = { page: servicesData as any };

  if (isEditMode) {
    const tinaResult = useTina({
      query: `
        query PageQuery {
          page(relativePath: "services.json") {
            ... on PageServices {
              hero {
                badge
                title
                description
                image
              }
              immigration {
                title
                subtitle
                items {
                  title
                  description
                }
              }
              admin {
                title
                subtitle
                items {
                  title
                  description
                }
              }
            }
          }
        }
      `,
      variables: {},
      data: { page: servicesData },
    });
    data = tinaResult.data;
  }

  const page = data?.page || {};
  const hero = page.hero || {};
  const immigration = page.immigration || {};
  const admin = page.admin || {};

  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row bg-white border-b border-stone-100">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-[#f9f7f2]">
          <div className="max-w-xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">
              {hero.badge || "— Áreas de Práctica —"}
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-brand-darker mb-8 leading-[1.1]">
              {hero.title || "Nuestros Servicios"}
            </h1>
            <p className="text-xl text-stone-600 mb-10 font-sans leading-relaxed">
              {hero.description || "Te acompañamos en tus trámites de extranjería..."}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
          <img
            src={hero.image || "/images/services-hero.jpg"}
            alt="CM Abogadas"
            className="absolute inset-0 w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-brand-darker/5"></div>
        </div>
      </section>

      <div id="catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section 1: Extranjería */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10 border-b border-stone-100 pb-4 text-center md:text-left">
            <div className="bg-transparent p-3 rounded-sm text-brand-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-darker font-serif">{immigration.title || "Trámites de Extranjería"}</h2>
              <p className="text-brand-secondary font-sans">{immigration.subtitle || "Gestión integral de expedientes..."}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immigration.items?.map((item: any, idx: number) => (
              <div key={idx} className="bg-white border border-stone-100 rounded-sm p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-l-brand-primary/20 hover:border-l-brand-primary">
                <h3 className="font-bold text-lg text-brand-secondary mb-3 flex items-start justify-between font-serif">
                  {item.title}
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                </h3>
                <p className="text-brand-secondary/80 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            )) || (
                // Fallback just in case
                <div className="p-6">{t('loading')}</div>
              )}
          </div>
        </div>

        {/* Section 2: Otros Servicios */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10 border-b border-stone-100 pb-4 text-center md:text-left">
            <div className="bg-transparent p-3 rounded-sm text-brand-secondary">
              <FileText size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-darker font-serif">{admin.title || "Otros Servicios y Gestiones"}</h2>
              <p className="text-brand-secondary font-sans">{admin.subtitle || "Soporte administrativo complementario..."}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admin.items?.map((item: any, idx: number) => (
              <div key={idx} className="bg-stone-50 rounded-sm p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-stone-200">
                <div className="mb-4 text-brand-secondary/40">
                  {idx % 2 === 0 ? <Stamp size={24} /> : <Landmark size={24} />}
                </div>
                <h3 className="font-bold text-brand-secondary mb-2 font-serif">{item.title}</h3>
                <p className="text-brand-secondary/70 text-sm font-sans">
                  {item.description}
                </p>
              </div>
            )) || (
                <div className="p-6">{t('loadingAdmin')}</div>
              )}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};