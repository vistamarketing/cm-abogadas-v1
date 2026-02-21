import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import { useCurrentLang } from '../hooks/useLanguage';

export const MobileStickyCTA: React.FC = () => {
    const { openModal } = useModal();
    const { t } = useTranslation();
    const location = useLocation();
    const currentLang = useCurrentLang();
    const [isVisible, setIsVisible] = useState(true);

    const homePath = `/${currentLang}/`;
    const homePathAlt = `/${currentLang}`;

    useEffect(() => {
        if (location.pathname !== homePath && location.pathname !== homePathAlt) {
            setIsVisible(true);
            return;
        }

        setIsVisible(false);

        const heroButton = document.getElementById('hero-cta-button');
        if (!heroButton) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(heroButton);

        return () => observer.disconnect();
    }, [location.pathname, homePath, homePathAlt]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[90] bg-white border-t border-stone-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden animate-in slide-in-from-bottom duration-300">
            <button
                onClick={() => openModal()}
                className="w-full bg-brand-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-brand-secondary transition-colors"
                aria-label={t('nav.ctaMobile')}
            >
                <Calendar size={18} />
                {t('nav.ctaMobile')}
            </button>
        </div>
    );
};
