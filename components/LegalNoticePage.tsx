import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LegalNoticePage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-8 text-center">
                    {t('legalNotice.title')}
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">
                    <h2 className="text-2xl font-serif font-bold text-brand-darker mt-0 mb-4">{t('legalNotice.section1Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section1Text')}
                    </p>
                    <ul className="list-none pl-0 space-y-2 mb-8 text-stone-600">
                        <li><strong>{t('legalNotice.companyName')}</strong> CM Abogadas</li>
                        <li><strong>{t('legalNotice.address')}</strong> {t('legalNotice.addressValue')}</li>
                        <li><strong>{t('legalNotice.taxId')}</strong> {t('legalNotice.taxIdValue')}</li>
                        <li><strong>{t('legalNotice.emailLabel')}</strong> infocmabogadas@gmail.com</li>
                        <li><strong>{t('legalNotice.phoneLabel')}</strong> +34 686 401 557</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section2Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section2Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section3Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section3Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section4Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section4Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section5Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section5Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section6Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section6Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section7Title')}</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        {t('legalNotice.section7Text')}
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">{t('legalNotice.section8Title')}</h2>
                    <p className="text-stone-600 leading-relaxed">
                        {t('legalNotice.section8Text')}
                    </p>
                </div>
            </div>
        </div>
    );
};
