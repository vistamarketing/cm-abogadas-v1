import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cm_cookie_consent');
        if (!cookieConsent) {
            // Show banner after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cm_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cm_cookie_consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white z-[200] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-stone-200 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold text-brand-darker mb-2">
                        Valoramos tu privacidad
                    </h3>
                    <p className="text-stone-600 text-sm font-sans leading-relaxed">
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenido.
                        Puedes aceptar todas las cookies o configurarlas. Más información en nuestra{' '}
                        <Link to="/cookies-policy" className="text-brand-primary hover:underline font-bold">
                            Política de Cookies
                        </Link>.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[300px]">
                    <button
                        onClick={handleReject}
                        className="flex-1 px-6 py-3 border border-stone-300 text-stone-600 font-sans font-bold text-sm rounded-sm hover:bg-stone-50 transition-colors uppercase tracking-wide"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-sm hover:bg-brand-secondary transition-colors uppercase tracking-wide shadow-md"
                    >
                        Aceptar
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 md:hidden"
                        aria-label="Cerrar banner"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};
