import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';

export const FeaturedServices: React.FC = () => {
    const { openModal } = useModal();
    const { t } = useTranslation();

    const services = [
        {
            id: 'regularizacion',
            title: t('featuredServices.service1Title'),
            price: t('featuredServices.service1Price'),
            description: t('featuredServices.service1Description'),
            highlights: [
                t('featuredServices.service1Highlight1'),
                t('featuredServices.service1Highlight2'),
                t('featuredServices.service1Highlight3')
            ]
        },
        {
            id: 'nacionalidad',
            title: t('featuredServices.service2Title'),
            price: t('featuredServices.service2Price'),
            description: t('featuredServices.service2Description'),
            highlights: [
                t('featuredServices.service2Highlight1'),
                t('featuredServices.service2Highlight2'),
                t('featuredServices.service2Highlight3')
            ]
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-red-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold text-brand-darker mb-4 font-serif">
                        {t('featuredServices.title')}
                    </h2>
                    <p className="text-lg lg:text-xl text-brand-secondary max-w-2xl mx-auto">
                        {t('featuredServices.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service) => {
                        return (
                            <div
                                key={service.id}
                                className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Header */}
                                <div className="bg-brand-primary p-5 sm:p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                    <div className="text-3xl font-extrabold">{service.price}</div>
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-8">
                                    <p className="text-brand-secondary mb-6 text-lg">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {service.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start gap-3 text-brand-secondary">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => openModal()}
                                        className="w-full inline-flex justify-center items-center px-6 py-4 text-lg font-bold rounded-sm text-white bg-brand-primary hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg group-hover:translate-x-1 transform duration-300"
                                    >
                                        {t('featuredServices.requestInfo')}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
