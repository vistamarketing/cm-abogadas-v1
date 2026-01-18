import React from 'react';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-darker text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Columna 1: Logo y Descripción */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-serif text-white">CM Abogadas</h3>
                        <p className="text-stone-300 mb-6 font-sans leading-relaxed">
                            Especialistas en extranjería comprometidas con tu futuro en Barcelona.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/cmabogadas.esp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-primary hover:bg-brand-accent p-3 rounded-lg transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://wa.me/34930000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#20BA5A] p-3 rounded-lg transition-colors flex items-center justify-center"
                                aria-label="WhatsApp"
                            >
                                <img
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/%3E%3C/svg%3E"
                                    alt="WhatsApp"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Contacto */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-serif text-white">Contacto</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300">
                                        <a href="tel:+34930000000" className="hover:text-white transition-colors">
                                            +34 930 000 000
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
                                        <a href="https://wa.me/34930000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            WhatsApp: +34 930 000 000
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300">
                                        <a href="mailto:hola@cmabogadas.es" className="hover:text-white transition-colors">
                                            hola@cmabogadas.es
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 3: Ubicación y Horario */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-serif text-white">Ubicación</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300">Barcelona, España</p>
                                    <p className="font-sans text-stone-400 text-sm">Servicio presencial y online</p>
                                    <p className="font-sans text-stone-400 text-sm">Cobertura en toda España</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="text-stone-300 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-sans text-stone-300 font-medium">Horario de Atención</p>
                                    <p className="font-sans text-stone-400 text-sm">Lunes - Viernes</p>
                                    <p className="font-sans text-stone-400 text-sm">09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Enlaces Rápidos */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-serif text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-3 font-sans">
                            <li>
                                <a href="/" className="text-stone-300 hover:text-white transition-colors">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-stone-300 hover:text-white transition-colors">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-stone-300 hover:text-white transition-colors">
                                    Sobre Nosotras
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-stone-300 hover:text-white transition-colors">
                                    Contacto
                                </a>
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
                            © {new Date().getFullYear()} CM Abogadas. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm font-sans">
                            <a href="#" className="text-stone-400 hover:text-white transition-colors">
                                Aviso Legal
                            </a>
                            <a href="#" className="text-stone-400 hover:text-white transition-colors">
                                Privacidad
                            </a>
                            <a href="#" className="text-stone-400 hover:text-white transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
