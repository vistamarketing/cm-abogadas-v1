import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const CookiesPolicyPage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-8 text-center">
                    {t('cookiesPolicy.title')}
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('cookiesPolicy.intro')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('cookiesPolicy.s1Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('cookiesPolicy.s1Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('cookiesPolicy.s2Title')}</h2>
                    <p className="text-stone-600 mb-4 leading-relaxed">
                        {t('cookiesPolicy.s2Intro')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-600">
                        <li><strong>{t('cookiesPolicy.s2Technical')}</strong> {t('cookiesPolicy.s2TechnicalDesc')}</li>
                        <li><strong>{t('cookiesPolicy.s2Consent')}</strong> {t('cookiesPolicy.s2ConsentDesc')}</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('cookiesPolicy.s3Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('cookiesPolicy.s3Text')}
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-600">
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">{t('cookiesPolicy.s3Chrome')}</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">{t('cookiesPolicy.s3Firefox')}</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">{t('cookiesPolicy.s3Safari')}</a></li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('cookiesPolicy.s4Title')}</h2>
                    <p className="text-stone-600 leading-relaxed">
                        {t('cookiesPolicy.s4Text')}
                    </p>
                </div>
            </div>
        </div>
    );
};
