import React, { useEffect } from 'react';

export const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-8 text-center">
                    Política de Privacidad
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        En CM Abogadas estamos comprometidos con la protección de la privacidad y el uso correcto de los datos personales
                        que tratamos y que nos facilitas. Esta política explica cómo tratamos tus datos personales.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">1. Responsable del Tratamiento</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Los datos de carácter personal que se pudieran recabar directamente del usuario a través de la presente página web
                        serán tratados de forma confidencial y quedarán incorporados a la correspondiente actividad de tratamiento titularidad de CM Abogadas.
                        <br /><br />
                        <strong>Contacto:</strong> infocmabogadas@gmail.com
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">2. Finalidad del Tratamiento</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Tratamos la información que nos facilitas con el fin de prestarte el servicio solicitado, realizar la facturación del mismo
                        y responder a las consultas planteadas a través de nuestros formularios de contacto o WhatsApp.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">3. Legitimación</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        La base legal para el tratamiento de tus datos es la ejecución de la relación precontractual o contractual,
                        o el consentimiento expreso que nos prestas al contactar con nosotras mediante los formularios de la web.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">4. Conservación de Datos</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir
                        con las obligaciones legales.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">5. Destinatarios</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal.
                        Utilizamos proveedores de servicios (como servicios de hosting o mensajería) que pueden tener acceso a datos personales
                        necesarios para realizar sus funciones, pero no pueden utilizarlos para otros fines.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">6. Derechos</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        Cualquier persona tiene derecho a obtener confirmación sobre si en CM Abogadas estamos tratando datos personales que les conciernan, o no.
                        Las personas interesadas tienen derecho a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-600">
                        <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
                        <li>Solicitar su rectificación o supresión.</li>
                        <li>Solicitar la limitación de su tratamiento.</li>
                        <li>Oponerse al tratamiento.</li>
                        <li>Solicitar la portabilidad de los datos.</li>
                    </ul>
                    <p className="text-stone-600 leading-relaxed">
                        Para ejercer sus derechos, puede enviar un correo electrónico a infocmabogadas@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    );
};
