import React, { useEffect } from 'react';

export const LegalNoticePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-8 text-center">
                    Aviso Legal
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">
                    <h2 className="text-2xl font-serif font-bold text-brand-darker mt-0 mb-4">1. Datos Identificativos</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio,
                        de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos:
                    </p>
                    <ul className="list-none pl-0 space-y-2 mb-8 text-stone-600">
                        <li><strong>Denominación social:</strong> CM Abogadas</li>
                        <li><strong>Domicilio social:</strong> Barcelona, España</li>
                        <li><strong>CIF/NIF:</strong> [Pendiente de Insertar]</li>
                        <li><strong>Correo electrónico:</strong> infocmabogadas@gmail.com</li>
                        <li><strong>Teléfono:</strong> +34 686 401 557</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">2. Usuarios</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        El acceso y/o uso de este portal de CM Abogadas atribuye la condición de USUARIO, que acepta,
                        desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">3. Uso del Portal</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos")
                        en Internet pertenecientes a CM Abogadas a los que el USUARIO puede tener acceso. El USUARIO asume la responsabilidad del uso del portal.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">4. Protección de Datos</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        CM Abogadas cumple con las directrices del Reglamento General de Protección de Datos (RGPD) y demás normativa vigente,
                        y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario. Para más información,
                        visite nuestra Política de Privacidad.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">5. Propiedad Intelectual e Industrial</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        CM Abogadas por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web,
                        así como de los elementos contenidos en la misma. Todos los derechos reservados.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">6. Exclusión de Garantías y Responsabilidad</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        CM Abogadas no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar,
                        a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos
                        o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">7. Modificaciones</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        CM Abogadas se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal.
                    </p>

                    <h2 className="text-2xl font-serif font-bold text-brand-darker mb-4">8. Legislación Aplicable y Jurisdicción</h2>
                    <p className="text-stone-600 leading-relaxed">
                        La relación entre CM Abogadas y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá
                        a los Juzgados y tribunales de la ciudad de Barcelona.
                    </p>
                </div>
            </div>
        </div>
    );
};
