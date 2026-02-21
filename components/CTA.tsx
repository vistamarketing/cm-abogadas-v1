import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';

export const CTA: React.FC = () => {
    const { openModal } = useModal();
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-stone-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-darker mb-6">
                    {t('cta.title')}
                </h2>
                <p className="text-xl text-brand-secondary mb-10 max-w-2xl mx-auto font-sans">
                    {t('cta.subtitle')}
                </p>
                <button
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-4 rounded-sm font-bold hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-primary/20 text-lg uppercase tracking-wide font-sans"
                >
                    {t('cta.button')}
                    <ArrowRight size={24} />
                </button>
            </div>
        </section>
    );
};
