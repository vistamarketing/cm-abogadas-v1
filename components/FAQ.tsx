import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC<{ data?: any }> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = data?.faq || {};

  const title = faqData.title || "Preguntas Frecuentes";
  const subtitle = faqData.subtitle || "Transparencia y claridad desde el primer momento.";
  const ctaText = faqData.ctaText || "¿Tienes una duda más específica?";

  const faqs: FAQItem[] = faqData.items || [
    {
      question: "¿Cuál es el proceso para contratar vuestros servicios?",
      answer: "Es muy sencillo. Ponte en contacto con nosotros. Si con la información disponible es suficiente, te remitiremos un presupuesto directo. En caso de que sea necesario analizar el caso en profundidad, propondremos una primera consulta para estudiar la viabilidad jurídica."
    },
    {
      question: "¿Ofrecen atención online si aún no estoy en España?",
      answer: "Sí. Hemos optado por un modelo flexible que nos permite atender con plena disponibilidad a clientes dentro y fuera de España. Nos adaptamos a tus necesidades, ya sea por videollamada o presencialmente en Barcelona."
    },
    {
      question: "¿Cuál es vuestra política de precios?",
      answer: "Nuestra política es transparente y adaptada a las necesidades de cada cliente. Ofrecemos la posibilidad de establecer un plan de pagos ajustado a tu situación para que el coste no sea una barrera para tu regularización."
    },
    {
      question: "¿Es obligatorio contratar a un abogado para mis trámites?",
      answer: "No es legalmente obligatorio, pero la burocracia puede ser compleja. Un error pequeño puede significar una denegación. Contar con CM Abogadas asegura que tu expediente esté perfecto y riguroso desde el primer día."
    },
    {
      question: "¿Cuánto tiempo tarda en salir la Nacionalidad Española?",
      answer: "Los plazos varían, pero la presentación telemática profesional suele agilizar mucho el proceso. En CM Abogadas trabajamos con dedicación para que tu proceso sea lo más sencillo y exitoso posible."
    }
  ];

  // Generate Schema.org JSON-LD structure
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Schema.org Metadata for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-transparent rounded-sm mb-4 text-brand-primary">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-sans">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-sm transition-all duration-300 ${openIndex === index ? 'border-brand-primary bg-brand-light/30 shadow-sm' : 'border-gray-200 hover:border-brand-primary/50'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg font-serif ${openIndex === index ? 'text-brand-primary' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-1 rounded-sm ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-gray-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4 font-sans">{ctaText}</p>
          <a href="#contact" className="text-brand-primary font-bold hover:underline inline-flex items-center gap-1 font-sans">
            Escríbenos directamente
          </a>
        </div>
      </div>
    </section>
  );
};