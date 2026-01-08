import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm, validateFormData, FormData } from '../services/formService';

// Lista de códigos de país más comunes para el público objetivo
const countryCodes = [
    { code: '+34', country: 'España', flag: '🇪🇸' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+52', country: 'México', flag: '🇲🇽' },
    { code: '+51', country: 'Perú', flag: '🇵🇪' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+1', country: 'USA/Canadá', flag: '🇺🇸' },
    { code: '+55', country: 'Brasil', flag: '🇧🇷' },
    { code: '+33', country: 'Francia', flag: '🇫🇷' },
    { code: '+44', country: 'Reino Unido', flag: '🇬🇧' },
    { code: '+49', country: 'Alemania', flag: '🇩🇪' },
    { code: '+39', country: 'Italia', flag: '🇮🇹' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
];

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
    });

    const [countryCode, setCountryCode] = useState('+34'); // España por defecto
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        // Clear status when user starts typing again
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
            setStatusMessage('');
        }
    };

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Combinar código de país con número de teléfono
        const fullPhoneNumber = `${countryCode} ${formData.telefono}`;
        const submissionData = {
            ...formData,
            telefono: fullPhoneNumber,
        };

        // Validate form
        const validationError = validateFormData(submissionData);
        if (validationError) {
            setSubmitStatus('error');
            setStatusMessage(validationError);
            return;
        }

        // Submit form
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const response = await submitContactForm(submissionData);

        setIsSubmitting(false);
        setSubmitStatus(response.success ? 'success' : 'error');
        setStatusMessage(response.message);

        // Reset form on success
        if (response.success) {
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                mensaje: '',
            });
            setCountryCode('+34'); // Reset to Spain

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
                setStatusMessage('');
            }, 5000);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-darker mb-4 font-serif">
                        Comienza tu proceso migratorio hoy
                    </h2>
                    <p className="text-xl text-brand-secondary font-sans">
                        Completa el formulario y te contactaremos para agendar tu primera consulta
                    </p>
                </div>

                {/* Formulario */}
                <div className="bg-stone-50 rounded-2xl p-8 lg:p-12 shadow-xl border border-stone-100">
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                            <p className="text-green-800 font-sans text-sm">{statusMessage}</p>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                            <p className="text-red-800 font-sans text-sm">{statusMessage}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Tu apellido"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Teléfono</label>
                            <div className="flex gap-3">
                                {/* Country Code Selector */}
                                <select
                                    value={countryCode}
                                    onChange={handleCountryCodeChange}
                                    disabled={isSubmitting}
                                    className="px-4 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed bg-white"
                                    style={{ minWidth: '140px' }}
                                >
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.flag} {country.code}
                                        </option>
                                    ))}
                                </select>

                                {/* Phone Number Input */}
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="600 000 000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-base font-medium text-brand-secondary mb-3 font-sans">Mensaje (Opcional)</label>
                            <textarea
                                rows={4}
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
                                placeholder="Cuéntanos brevemente sobre tu caso..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-primary text-white font-bold py-5 rounded-xl hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl tracking-wide uppercase text-base font-sans disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar Datos'
                            )}
                        </button>

                        <p className="text-sm text-center text-brand-secondary/50 mt-6 font-sans">
                            Tus datos serán tratados con total confidencialidad.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};
