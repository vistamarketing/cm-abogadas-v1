import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicyPage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rights = t('privacyPolicy.s6Rights', { returnObjects: true }) as string[];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-8 text-center">
                    {t('privacyPolicy.title')}
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.intro')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('privacyPolicy.s1Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.s1Text')}
                        <br /><br />
                        <strong>{t('privacyPolicy.s1Contact')}</strong> infocmabogadas@gmail.com
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('privacyPolicy.s2Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.s2Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('privacyPolicy.s3Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.s3Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('privacyPolicy.s4Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.s4Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('privacyPolicy.s5Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.s5Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('privacyPolicy.s6Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('privacyPolicy.s6Text')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-600">
                        {Array.isArray(rights) && rights.map((right, i) => (
                            <li key={i}>{right}</li>
                        ))}
                    </ul>
                    <p className="text-stone-600 leading-relaxed">
                        {t('privacyPolicy.s6ContactNote')}
                    </p>
                </div>
            </div>
        </div>
    );
};
