import React, { useEffect } from 'react';

export const CookiesPolicyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-8 text-center">
                    Política de Cookies
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Esta web utiliza cookies para mejorar la experiencia del usuario. A continuación, encontrarás información sobre qué son las cookies,
                        qué tipo de cookies utiliza este portal, cómo puedes desactivarlas en tu navegador y cómo bloquear específicamente la instalación de Cookies de terceros.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">1. ¿Qué son las Cookies?</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Las cookies son pequeños archivos que algunas plataformas, como las páginas web, pueden instalar en su ordenador, teléfono inteligente, tablet o televisión conectada.
                        Sus funciones pueden ser muy variadas: almacenar tus preferencias de navegación, recopilar información estadística, permitir ciertas funcionalidades técnicas, etc.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">2. Tipos de Cookies que utilizamos</h2>
                    <p className="text-stone-600 mb-4 leading-relaxed">
                        En esta web utilizamos los siguientes tipos de cookies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-600">
                        <li><strong>Cookies Técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                        <li><strong>Cookies de Consentimiento:</strong> Utilizamos una cookie técnica para recordar si has aceptado o rechazado nuestra política de cookies.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">3. Cómo configurar o deshabilitar las cookies</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de internet.
                        En caso de que no permitas la instalación de cookies en tu navegador es posible que no puedas acceder a algunos de los servicios y que tu experiencia en nuestra web pueda resultar menos satisfactoria.
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-600">
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Configuración para Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Configuración para Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Configuración para Safari</a></li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">4. Actualización</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Esta Política de Cookies puede ser modificada en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política
                        a las instrucciones dictadas por la Agencia Española de Protección de Datos.
                    </p>
                </div>
            </div>
        </div>
    );
};
