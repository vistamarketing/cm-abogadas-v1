import React, { useState, useEffect } from 'react';
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
    isCompact?: boolean;
    variant?: ContactFormVariant;
}

const initialFormData: FormData = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
    viveEnEspana: '',
    tiempoEnEspana: '',
    tienePermiso: '',
    tipoPermiso: '',
    otroPermiso: '',
    planVenirEspana: '',
    tieneOfertaTrabajo: '',
    profesionPuesto: '',
    tieneAdmisionEstudios: '',
    nacionalidad: '',
    servicioNecesita: '',
    otroServicio: ''
};

const permitOptions = [
    "Familiar de ciudadano UE/Español",
    "Estudiante",
    "Trabajo por cuenta ajena",
    "Trabajo por cuenta propia (autónomo)",
    "Arraigo (social/laboral/familiar/para la formación)",
    "Residencia no lucrativa",
    "Asilo / protección internacional",
    "Otro"
];

const planOptions = [
    "Tengo oferta de trabajo",
    "Vendré a estudiar",
    "Reagrupación / pareja / familia",
    "Emprender / autónomo",
    "No estoy seguro/a todavía"
];

const serviceOptions = [
    "Residencia por familiar de ciudadano español/UE",
    "Pareja de hecho / pareja estable",
    "Arraigo (social/laboral/familiar/para la formación)",
    "Estancia por estudios / visado estudiante",
    "Modificación a trabajo",
    "Renovación de residencia",
    "Nacionalidad española",
    "Reagrupación familiar",
    "Asesoría laboral / contrato / alta Seguridad Social",
    "Otro (especificar)"
];

export const ContactForm: React.FC<ContactFormProps> = ({ isCompact, variant = 'default' }) => {
    const effectiveVariant = variant !== 'default' ? variant : (isCompact ? 'compact' : 'default');

    // Styles
    const containerClasses = {
        default: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
        compact: "bg-stone-50 rounded-sm p-8 lg:p-12 shadow-xl border border-stone-100",
        modal: "px-1 py-1",
    };

    const inputClasses = "w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-red-100 outline-none transition-all font-sans text-base disabled:bg-gray-100 disabled:cursor-not-allowed";
    const labelClasses = "block text-sm font-bold text-brand-darker mb-1.5 font-sans";
    const sectionTitleClasses = "text-lg font-bold text-brand-primary border-b border-gray-100 pb-2 mb-4 mt-6 uppercase tracking-wide";
    const radioGroupClasses = "flex flex-col sm:flex-row gap-4 mt-2";
    const radioOptionClasses = "flex items-center space-x-2 cursor-pointer";

    const buttonClasses = effectiveVariant === 'modal'
        ? "w-full bg-brand-primary text-white font-bold py-4 rounded-sm hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl tracking-wide uppercase text-sm font-sans disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
        : "w-full bg-brand-primary text-white font-bold py-5 rounded-sm hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl tracking-wide uppercase text-base font-sans disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8";

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [countryCode, setCountryCode] = useState('+34');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

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

        const fullPhoneNumber = `${countryCode} ${formData.telefono}`;
        const submissionData = {
            ...formData,
            telefono: fullPhoneNumber,
        };

        const validationError = validateFormData(submissionData);
        if (validationError) {
            setSubmitStatus('error');
            setStatusMessage(validationError);

            // Scroll to top of form or error message in modal
            const errorElement = document.getElementById('form-status-message');
            if (errorElement) errorElement.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        const response = await submitContactForm(submissionData);

        setIsSubmitting(false);
        setSubmitStatus(response.success ? 'success' : 'error');
        setStatusMessage(response.message);

        if (response.success) {
            setFormData(initialFormData);
            setCountryCode('+34');
            setTimeout(() => {
                setSubmitStatus('idle');
                setStatusMessage('');
            }, 5000);
        }
    };

    const formContent = (
        <div className={effectiveVariant === 'compact' ? containerClasses.compact : containerClasses.modal}>
            <div id="form-status-message">
                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-start gap-3 animate-in fade-in">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-green-800 font-sans text-sm">{statusMessage}</p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3 animate-in fade-in">
                        <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-red-800 font-sans text-sm">{statusMessage}</p>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Datos de Contacto */}
                <div>
                    <h3 className="text-brand-darker font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                        Datos de Contacto
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>Nombre *</label>
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
                            <label className={labelClasses}>Apellido *</label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className={labelClasses}>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                className={inputClasses}
                                placeholder="ejemplo@correo.com"
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Teléfono *</label>
                            <div className="flex gap-2">
                                <select
                                    value={countryCode}
                                    onChange={handleCountryCodeChange}
                                    disabled={isSubmitting}
                                    className={`${inputClasses} bg-gray-50/50 cursor-pointer`}
                                    style={{ width: '110px', paddingRight: '12px' }}
                                >
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.flag} {country.code}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className={`flex-1 ${inputClasses}`}
                                    placeholder="600 000 000"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Situación en España */}
                <div className="pt-2">
                    <h3 className="text-brand-darker font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                        Situación en España
                    </h3>

                    <div className="mb-4">
                        <label className={labelClasses}>¿Actualmente vives en España? *</label>
                        <div className={radioGroupClasses}>
                            <label className={`${radioOptionClasses} p-3 border rounded-sm ${formData.viveEnEspana === 'si' ? 'border-brand-primary bg-red-50/30' : 'border-gray-200'}`}>
                                <input
                                    type="radio"
                                    name="viveEnEspana"
                                    value="si"
                                    checked={formData.viveEnEspana === 'si'}
                                    onChange={handleInputChange}
                                    className="text-brand-primary focus:ring-brand-primary"
                                />
                                <span>Sí, vivo en España</span>
                            </label>
                            <label className={`${radioOptionClasses} p-3 border rounded-sm ${formData.viveEnEspana === 'no' ? 'border-brand-primary bg-red-50/30' : 'border-gray-200'}`}>
                                <input
                                    type="radio"
                                    name="viveEnEspana"
                                    value="no"
                                    checked={formData.viveEnEspana === 'no'}
                                    onChange={handleInputChange}
                                    className="text-brand-primary focus:ring-brand-primary"
                                />
                                <span>No, aún no vivo en España</span>
                            </label>
                        </div>
                    </div>

                    {/* Rama SÍ VIVE EN ESPAÑA */}
                    {formData.viveEnEspana === 'si' && (
                        <div className="pl-4 border-l-2 border-brand-primary/20 space-y-4 animate-in slide-in-from-left-2 duration-300">
                            <div>
                                <label className={labelClasses}>¿Desde hace cuánto tiempo vives en España? *</label>
                                <input
                                    type="text"
                                    name="tiempoEnEspana"
                                    value={formData.tiempoEnEspana}
                                    onChange={handleInputChange}
                                    className={inputClasses}
                                    placeholder="Ej.: 6 meses / desde marzo de 2023"
                                />
                            </div>

                            <div>
                                <label className={labelClasses}>¿Tienes permiso de residencia vigente? *</label>
                                <div className={radioGroupClasses}>
                                    {['si', 'no', 'tramite'].map(opt => (
                                        <label key={opt} className={radioOptionClasses}>
                                            <input
                                                type="radio"
                                                name="tienePermiso"
                                                value={opt}
                                                checked={formData.tienePermiso === opt}
                                                onChange={handleInputChange}
                                                className="text-brand-primary focus:ring-brand-primary"
                                            />
                                            <span className="capitalize">{opt === 'tramite' ? 'En trámite / pendiente' : opt === 'si' ? 'Sí' : 'No'}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {formData.tienePermiso === 'si' && (
                                <div className="animate-in fade-in">
                                    <label className={labelClasses}>¿Qué tipo de permiso tienes? *</label>
                                    <select
                                        name="tipoPermiso"
                                        value={formData.tipoPermiso}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                    >
                                        <option value="">Selecciona una opción</option>
                                        {permitOptions.map((opt) => (
                                            <option key={opt} value={opt === 'Otro' ? 'otro' : opt}>{opt}</option>
                                        ))}
                                    </select>

                                    {formData.tipoPermiso === 'otro' && (
                                        <div className="mt-2 animate-in fade-in">
                                            <input
                                                type="text"
                                                name="otroPermiso"
                                                value={formData.otroPermiso}
                                                onChange={handleInputChange}
                                                className={inputClasses}
                                                placeholder="Escribe el nombre del permiso"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Rama NO VIVE EN ESPAÑA */}
                    {formData.viveEnEspana === 'no' && (
                        <div className="pl-4 border-l-2 border-brand-primary/20 space-y-4 animate-in slide-in-from-left-2 duration-300">
                            <div>
                                <label className={labelClasses}>¿Cuál es tu plan principal para venir a España? *</label>
                                <select
                                    name="planVenirEspana"
                                    value={formData.planVenirEspana}
                                    onChange={handleInputChange}
                                    className={inputClasses}
                                >
                                    <option value="">Selecciona una opción</option>
                                    {planOptions.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className={labelClasses}>¿Tienes una oferta de trabajo? *</label>
                                <div className={radioGroupClasses}>
                                    <label className={radioOptionClasses}>
                                        <input
                                            type="radio"
                                            name="tieneOfertaTrabajo"
                                            value="si"
                                            checked={formData.tieneOfertaTrabajo === 'si'}
                                            onChange={handleInputChange}
                                            className="text-brand-primary focus:ring-brand-primary"
                                        />
                                        <span>Sí</span>
                                    </label>
                                    <label className={radioOptionClasses}>
                                        <input
                                            type="radio"
                                            name="tieneOfertaTrabajo"
                                            value="no"
                                            checked={formData.tieneOfertaTrabajo === 'no'}
                                            onChange={handleInputChange}
                                            className="text-brand-primary focus:ring-brand-primary"
                                        />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>

                            {formData.tieneOfertaTrabajo === 'si' && (
                                <div className="animate-in fade-in">
                                    <label className={labelClasses}>Profesión / puesto de trabajo *</label>
                                    <input
                                        type="text"
                                        name="profesionPuesto"
                                        value={formData.profesionPuesto}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                        placeholder="Ej.: Ingeniero de Software"
                                    />
                                </div>
                            )}

                            <div>
                                <label className={labelClasses}>¿Tienes admisión o matrícula en un centro de estudios? *</label>
                                <div className={radioGroupClasses}>
                                    {['si', 'no', 'proceso'].map(opt => (
                                        <label key={opt} className={radioOptionClasses}>
                                            <input
                                                type="radio"
                                                name="tieneAdmisionEstudios"
                                                value={opt}
                                                checked={formData.tieneAdmisionEstudios === opt}
                                                onChange={handleInputChange}
                                                className="text-brand-primary focus:ring-brand-primary"
                                            />
                                            <span className="capitalize">{opt === 'proceso' ? 'En proceso' : opt === 'si' ? 'Sí' : 'No'}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 3. Perfil del lead */}
                <div className="pt-2">
                    <h3 className="text-brand-darker font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                        Otros Datos
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className={labelClasses}>Nacionalidad *</label>
                            <input
                                type="text"
                                name="nacionalidad"
                                value={formData.nacionalidad}
                                onChange={handleInputChange}
                                className={inputClasses}
                                placeholder="Tu nacionalidad"
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>¿Qué servicio necesitas? *</label>
                            <select
                                name="servicioNecesita"
                                value={formData.servicioNecesita}
                                onChange={handleInputChange}
                                className={inputClasses}
                            >
                                <option value="">Selecciona el servicio</option>
                                {serviceOptions.map((opt) => (
                                    <option key={opt} value={opt === 'Otro (especificar)' ? 'otro' : opt}>{opt}</option>
                                ))}
                            </select>

                            {formData.servicioNecesita === 'otro' && (
                                <div className="mt-2 animate-in fade-in">
                                    <input
                                        type="text"
                                        name="otroServicio"
                                        value={formData.otroServicio}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                        placeholder="Especifica qué servicio necesitas"
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label className={labelClasses}>
                                Cuéntanos brevemente tu caso *
                            </label>
                            <textarea
                                rows={4}
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleInputChange}
                                className={`${inputClasses} resize-none`}
                                placeholder="Describe tu situación actual, fechas y qué necesitas gestionar."
                            ></textarea>
                            <div className="flex justify-between items-start mt-1 gap-4">
                                <p className="text-xs text-gray-500">
                                    Mínimo 80 caracteres. Describe tu situación actual, fechas y qué necesitas gestionar.
                                </p>
                                <span className={`text-xs font-medium whitespace-nowrap ${formData.mensaje.length < 80 ? 'text-brand-primary' : 'text-green-600'}`}>
                                    {formData.mensaje.length}/80 min
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
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
                            'Enviar Datos y Solicitar Cita'
                        )}
                    </button>

                    <p className="text-xs text-center text-brand-secondary/50 mt-4 font-sans">
                        Tus datos serán tratados con total confidencialidad y rapidez.
                    </p>
                </div>
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
                        Rellena este formulario para que podamos analizar tu caso en detalle
                    </p>
                </div>

                {/* Formulario */}
                {formContent}
            </div>
        </section>
    );
};
