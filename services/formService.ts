export interface FormData {
    // 1. Datos de contacto
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    mensaje: string;

    // 2. Situación en España
    viveEnEspana: 'si' | 'no' | '';

    // Si viveEnEspana === 'si'
    tiempoEnEspana: string;
    tienePermiso: 'si' | 'no' | 'tramite' | '';
    tipoPermiso: string;
    otroPermiso: string;

    // Si viveEnEspana === 'no'
    planVenirEspana: string;
    tieneOfertaTrabajo: 'si' | 'no' | '';
    profesionPuesto: string;
    tieneAdmisionEstudios: 'si' | 'no' | 'proceso' | '';

    // 3. Perfil del lead
    nacionalidad: string;
    servicioNecesita: string;
    otroServicio: string;
}

export interface FormResponse {
    success: boolean;
    messageKey: string; // i18n translation key
}

// Obtén tu API key gratuita en: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = '37a8f6f0-aa8b-4cad-a3de-c9a7bf0b35e2';

export const submitContactForm = async (formData: FormData): Promise<FormResponse> => {
    try {
        const mensajeCompleto = `
NOMBRE: ${formData.nombre} ${formData.apellido}
EMAIL: ${formData.email}
TELÉFONO: ${formData.telefono}
NACIONALIDAD: ${formData.nacionalidad}

--------------------------------------------------
SITUACIÓN: ${formData.viveEnEspana === 'si' ? 'Vive en España' : 'No vive en España'}
${formData.viveEnEspana === 'si' ? `
TIEMPO EN ESPAÑA: ${formData.tiempoEnEspana}
PERMISO RESIDENCIA: ${formData.tienePermiso}
TIPO PERMISO: ${formData.tipoPermiso === 'otro' ? formData.otroPermiso : formData.tipoPermiso}
` : `
PLAN PARA VENIR: ${formData.planVenirEspana}
OFERTA TRABAJO: ${formData.tieneOfertaTrabajo}
PROFESIÓN: ${formData.profesionPuesto}
ESTUDIOS: ${formData.tieneAdmisionEstudios}
`}
--------------------------------------------------
SERVICIO SOLICITADO: ${formData.servicioNecesita === 'otro' ? formData.otroServicio : formData.servicioNecesita}

DESCRIPCIÓN DEL CASO:
${formData.mensaje}
        `;

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                name: `${formData.nombre} ${formData.apellido}`,
                email: formData.email,
                phone: formData.telefono,
                message: mensajeCompleto,
                subject: `🔔 Nuevo Lead: ${formData.servicioNecesita === 'otro' ? formData.otroServicio : formData.servicioNecesita} - ${formData.nombre} ${formData.apellido}`,
                from_name: 'CM Abogadas - Formulario Web',
                'Nombre': formData.nombre,
                'Apellido': formData.apellido,
                'Servicio': formData.servicioNecesita,
                'Vive en España': formData.viveEnEspana
            }),
        });

        const data = await response.json();

        if (data.success) {
            return {
                success: true,
                messageKey: 'validation.successMessage',
            };
        } else {
            return {
                success: false,
                messageKey: 'validation.errorMessage',
            };
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            success: false,
            messageKey: 'validation.connectionError',
        };
    }
};

// Returns i18n translation keys instead of hardcoded strings
export const validateFormData = (formData: FormData): string | null => {
    // 1. Datos de contacto
    if (!formData.nombre.trim()) return 'validation.nameRequired';
    if (!formData.apellido.trim()) return 'validation.lastNameRequired';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) return 'validation.emailRequired';
    if (!emailRegex.test(formData.email)) return 'validation.emailInvalid';

    const phoneRegex = /^[+]?[\d\s()-]{9,}$/;
    if (!formData.telefono.trim()) return 'validation.phoneRequired';
    if (!phoneRegex.test(formData.telefono)) return 'validation.phoneInvalid';

    // 2. Situación en España
    if (!formData.viveEnEspana) return 'validation.livesInSpainRequired';

    if (formData.viveEnEspana === 'si') {
        if (!formData.tiempoEnEspana.trim()) return 'validation.timeInSpainRequired';
        if (!formData.tienePermiso) return 'validation.permitRequired';

        if (formData.tienePermiso === 'si') {
            if (!formData.tipoPermiso) return 'validation.permitTypeRequired';
            if (formData.tipoPermiso === 'otro' && !formData.otroPermiso.trim()) return 'validation.otherPermitRequired';
        }
    } else {
        if (!formData.planVenirEspana) return 'validation.planRequired';
        if (!formData.tieneOfertaTrabajo) return 'validation.jobOfferRequired';
        if (formData.tieneOfertaTrabajo === 'si' && !formData.profesionPuesto.trim()) return 'validation.jobTitleRequired';
        if (!formData.tieneAdmisionEstudios) return 'validation.studyAdmissionRequired';
    }

    // 3. Perfil del lead
    if (!formData.nacionalidad.trim()) return 'validation.nationalityRequired';
    if (!formData.servicioNecesita) return 'validation.serviceRequired';
    if (formData.servicioNecesita === 'otro' && !formData.otroServicio.trim()) return 'validation.otherServiceRequired';

    if (!formData.mensaje.trim()) return 'validation.caseRequired';
    if (formData.mensaje.length < 80) return 'validation.caseMinLength';

    return null;
};
