import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: "Valentina Rossi",
      date: "Hace 2 meses",
      rating: 5,
      text: "¡Increíbles profesionales! Me ayudaron con mi Visa de Nómada Digital cuando pensaba que no cumplía los requisitos. Analizaron mi caso al detalle y en 3 semanas tenía la resolución favorable. La atención por WhatsApp fue súper rápida.",
      initial: "V"
    },
    {
      id: 2,
      author: "Liam O'Connor",
      date: "Hace 1 mes",
      rating: 5,
      text: "The best immigration lawyers in Barcelona. They speak perfect English and explained every step of the 'Pareja de Hecho' process. No hidden fees and very transparent. Highly recommended for expats.",
      initial: "L"
    },
    {
      id: 3,
      author: "María Fernanda López",
      date: "Hace 3 semanas",
      rating: 5,
      text: "Gracias a Clara y Marta conseguí mi nacionalidad después de años de espera con otros gestores. Son serias, modernas y van al grano. Se nota que conocen bien cómo funciona extranjería hoy en día.",
      initial: "M"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-sm shadow-sm border border-gray-100">
            {/* Google G Icon SVG */}
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="font-bold text-slate-700 text-sm">4.9/5 en Google Reviews</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
            Confianza ganada caso a caso
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-500">
            Más de 500 expedientes resueltos favorablemente nos avalan.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all border border-gray-100 relative group">
              <Quote className="absolute top-6 right-6 text-brand-light w-10 h-10 group-hover:text-red-100 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xl border-2 border-white shadow-sm">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors border-b-2 border-transparent hover:border-brand-primary pb-1"
          >
            Leer más reseñas en Google Maps
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};