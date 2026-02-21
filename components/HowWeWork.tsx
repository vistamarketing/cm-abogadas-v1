import React from 'react';
import { useTranslation } from 'react-i18next';

export const HowWeWork: React.FC = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: t('howWeWork.step1Number'),
            title: t('howWeWork.step1Title'),
            description: t('howWeWork.step1Description')
        },
        {
            number: t('howWeWork.step2Number'),
            title: t('howWeWork.step2Title'),
            description: t('howWeWork.step2Description')
        },
        {
            number: t('howWeWork.step3Number'),
            title: t('howWeWork.step3Title'),
            description: t('howWeWork.step3Description')
        }
    ];

    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">
                        {t('howWeWork.badge')}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-darker mb-6">
                        {t('howWeWork.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto font-sans">
                        {t('howWeWork.subtitle')}
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-10 border border-stone-100 hover:shadow-2xl transition-all duration-500 group"
                        >
                            {/* Step Text */}
                            <div className="text-xl font-bold text-brand-primary mb-4 font-sans tracking-wide uppercase">
                                {step.number}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-brand-darker mb-4 font-serif">
                                {step.title}
                            </h3>
                            <p className="text-brand-secondary leading-relaxed font-sans">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-brand-secondary mb-6 font-sans">
                        <strong className="text-brand-darker">{t('howWeWork.bottomCta1')}</strong>{t('howWeWork.bottomCta2')}
                    </p>
                </div>
            </div>
        </section>
    );
};
