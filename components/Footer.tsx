import React from 'react';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import { useLocalizedPath, ROUTES } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const { openModal } = useModal();
    const { t } = useTranslation();
    const localizedPath = useLocalizedPath();
    return (
        <footer className="bg-[#1B0A09] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Columna 1: Logo y Descripción */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-serif text-white">CM Abogadas</h3>
                        <p className="text-stone-300 mb-6 font-sans leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/cmabogadas.esp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-white hover:bg-white/10 p-3 rounded-sm transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <button
                                onClick={() => openModal('whatsapp')}
                                className="bg-transparent border border-white hover:bg-white/10 p-3 rounded-sm transition-colors flex items-center justify-center cursor-pointer"
                                aria-label="WhatsApp"
                            >
                                <img
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/%3E%3C/svg%3E"
                                    alt="WhatsApp"
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Columna 2: Contacto */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-serif text-white">{t('footer.contactTitle')}</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300">
                                        <a href="tel:+34686401557" className="hover:text-white transition-colors">
                                            +34 686 401 557
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <img
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/%3E%3C/svg%3E"
                                    alt="WhatsApp"
                                    className="w-5 h-5 flex-shrink-0 mt-1"
                                />
                                <div>
                                    <p className="font-sans text-stone-300">
                                        <button onClick={() => openModal('whatsapp')} className="hover:text-white transition-colors cursor-pointer text-left">
                                            WhatsApp: +34 686 401 557
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300">
                                        <a href="mailto:infocmabogadas@gmail.com" className="hover:text-white transition-colors">
                                            infocmabogadas@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 3: Ubicación y Horario */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-serif text-white">{t('footer.locationTitle')}</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300">{t('footer.location')}</p>
                                    <p className="font-sans text-stone-400 text-sm">{t('footer.locationService')}</p>
                                    <p className="font-sans text-stone-400 text-sm">{t('footer.locationCoverage')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300 font-medium">{t('footer.schedule')}</p>
                                    <p className="font-sans text-stone-400 text-sm">{t('footer.weekdays')}</p>
                                    <p className="font-sans text-stone-400 text-sm">09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Enlaces Rápidos */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-serif text-white">{t('footer.quickLinksTitle')}</h4>
                        <ul className="space-y-3 font-sans">
                            <li>
                                <Link to={localizedPath('/')} className="text-stone-300 hover:text-white transition-colors">
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li>
                                <Link to={localizedPath(ROUTES.services)} className="text-stone-300 hover:text-white transition-colors">
                                    {t('nav.services')}
                                </Link>
                            </li>
                            <li>
                                <Link to={localizedPath(ROUTES.about)} className="text-stone-300 hover:text-white transition-colors">
                                    {t('footer.aboutLink')}
                                </Link>
                            </li>
                            <li>
                                <Link to={localizedPath(ROUTES.contact)} className="text-stone-300 hover:text-white transition-colors">
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-stone-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-stone-400 text-sm font-sans">
                            {t('footer.copyright', { year: new Date().getFullYear() })}
                        </p>
                        <div className="flex gap-6 text-sm font-sans">
                            <Link to={localizedPath(ROUTES.legalNotice)} className="text-stone-400 hover:text-white transition-colors">
                                {t('footer.legalNotice')}
                            </Link>
                            <Link to={localizedPath(ROUTES.privacyPolicy)} className="text-stone-400 hover:text-white transition-colors">
                                {t('footer.privacy')}
                            </Link>
                            <Link to={localizedPath(ROUTES.cookiesPolicy)} className="text-stone-400 hover:text-white transition-colors">
                                {t('footer.cookies')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
