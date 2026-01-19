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

export type ContactFormVariant = 'default' | 'compact' | 'modal';

interface ContactFormProps {
    isCompact?: boolean; // Deprecated, keep for backward compat for a moment or remove if we update all calls
    variant?: ContactFormVariant;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isCompact, variant = 'default' }) => {
    // Determine effective variant
    const effectiveVariant = variant !== 'default' ? variant : (isCompact ? 'compact' : 'default');

    // Styles based on variant
    const containerClasses = {
        default: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
        compact: "bg-stone-50 rounded-sm p-8 lg:p-12 shadow-xl border border-stone-100",
        modal: "px-1 py-2", // Minimal padding for modal, let the modal container handle edges
    };

    const inputClasses = effectiveVariant === 'modal'
        ? "w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-base disabled:bg-gray-100 disabled:cursor-not-allowed" // Smaller for modal
        : "w-full px-5 py-4 rounded-sm border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-lg disabled:bg-gray-100 disabled:cursor-not-allowed";

    const labelClasses = effectiveVariant === 'modal'
        ? "block text-sm font-bold text-brand-darker mb-1.5 font-sans" // Compact label
        : "block text-base font-medium text-brand-secondary mb-3 font-sans";

    const spaceClasses = effectiveVariant === 'modal' ? "space-y-4" : "space-y-6";

    const buttonClasses = effectiveVariant === 'modal'
        ? "w-full bg-brand-primary text-white font-bold py-4 rounded-sm hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl tracking-wide uppercase text-sm font-sans disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        : "w-full bg-brand-primary text-white font-bold py-5 rounded-sm hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl tracking-wide uppercase text-base font-sans disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2";

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

    const formContent = (
        <div className={effectiveVariant === 'compact' ? containerClasses.compact : containerClasses.modal}>
            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-green-800 font-sans text-sm">{statusMessage}</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-red-800 font-sans text-sm">{statusMessage}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={spaceClasses}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className={inputClasses}
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>Apellido</label>
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className={inputClasses}
                            placeholder="Tu apellido"
                        />
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={inputClasses}
                        placeholder="tucorreo@ejemplo.com"
                    />
                </div>

                <div>
                    <label className={labelClasses}>Teléfono</label>
                    <div className="flex gap-3">
                        {/* Country Code Selector */}
                        <select
                            value={countryCode}
                            onChange={handleCountryCodeChange}
                            disabled={isSubmitting}
                            className={`${inputClasses} bg-white`}
                            style={{ minWidth: '100px', width: 'auto' }}
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
                            className={`flex-1 ${inputClasses}`}
                            style={{ width: '100%' }}
                            placeholder="600 000 000"
                        />
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Mensaje (Opcional)</label>
                    <textarea
                        rows={effectiveVariant === 'modal' ? 2 : 4}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`${inputClasses} resize-none`}
                        placeholder="Cuéntanos brevemente sobre tu caso..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={buttonClasses}
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
    );

    if (effectiveVariant === 'compact' || effectiveVariant === 'modal') {
        return formContent;
    }

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
                {formContent}
            </div>
        </section>
    );
};
