export interface FormData {
    // 1. Datos de contacto
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    mensaje: string; // "Cuéntanos brevemente tu caso"

    // 2. Situación en España
    viveEnEspana: 'si' | 'no' | '';

    // Si viveEnEspana === 'si'
    tiempoEnEspana: string;
    tienePermiso: 'si' | 'no' | 'tramite' | '';
    tipoPermiso: string; // Obligatorio si tienePermiso === 'si'
    otroPermiso: string; // Obligatorio si tipoPermiso === 'otro'

    // Si viveEnEspana === 'no'
    planVenirEspana: string;
    tieneOfertaTrabajo: 'si' | 'no' | '';
    profesionPuesto: string; // Obligatorio si tieneOfertaTrabajo === 'si'
    tieneAdmisionEstudios: 'si' | 'no' | 'proceso' | '';

    // 3. Perfil del lead
    nacionalidad: string;
    servicioNecesita: string;
    otroServicio: string; // Obligatorio si servicioNecesita === 'otro'
}

export interface FormResponse {
    success: boolean;
    message: string;
}

// Obtén tu API key gratuita en: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = '37a8f6f0-aa8b-4cad-a3de-c9a7bf0b35e2';

export const submitContactForm = async (formData: FormData): Promise<FormResponse> => {
    try {
        // Preparar el cuerpo del mensaje para el email
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
                // Campos estructurados para integraciones (opcional)
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
                message: '¡Gracias! Hemos recibido tu información. Analizaremos tu caso y te contactaremos pronto.',
            };
        } else {
            return {
                success: false,
                message: 'Hubo un error al enviar el formulario. Por favor, intenta de nuevo.',
            };
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            success: false,
            message: 'Error de conexión. Por favor, verifica tu internet e intenta de nuevo.',
        };
    }
};

export const validateFormData = (formData: FormData): string | null => {
    // 1. Datos de contacto
    if (!formData.nombre.trim()) return 'Por favor, ingresa tu nombre';
    if (!formData.apellido.trim()) return 'Por favor, ingresa tu apellido';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) return 'Por favor, ingresa tu email';
    if (!emailRegex.test(formData.email)) return 'Por favor, ingresa un email válido';

    const phoneRegex = /^[+]?[\d\s()-]{9,}$/;
    if (!formData.telefono.trim()) return 'Por favor, ingresa tu teléfono';
    if (!phoneRegex.test(formData.telefono)) return 'Por favor, ingresa un teléfono válido';

    // 2. Situación en España
    if (!formData.viveEnEspana) return 'Por favor, indica si vives en España';

    if (formData.viveEnEspana === 'si') {
        if (!formData.tiempoEnEspana.trim()) return 'Por favor, indica cuánto tiempo llevas en España';
        if (!formData.tienePermiso) return 'Por favor, indica si tienes permiso de residencia';

        if (formData.tienePermiso === 'si') {
            if (!formData.tipoPermiso) return 'Por favor, selecciona tu tipo de permiso';
            if (formData.tipoPermiso === 'otro' && !formData.otroPermiso.trim()) return 'Por favor, especifica tu tipo de permiso';
        }
    } else {
        if (!formData.planVenirEspana) return 'Por favor, indica tu plan para venir a España';
        if (!formData.tieneOfertaTrabajo) return 'Por favor, indica si tienes oferta de trabajo';
        if (formData.tieneOfertaTrabajo === 'si' && !formData.profesionPuesto.trim()) return 'Por favor, indica tu profesión o puesto';
        if (!formData.tieneAdmisionEstudios) return 'Por favor, indica si tienes admisión de estudios';
    }

    // 3. Perfil del lead
    if (!formData.nacionalidad.trim()) return 'Por favor, ingresa tu nacionalidad';
    if (!formData.servicioNecesita) return 'Por favor, selecciona qué servicio necesitas';
    if (formData.servicioNecesita === 'otro' && !formData.otroServicio.trim()) return 'Por favor, especifica qué servicio necesitas';

    if (!formData.mensaje.trim()) return 'Por favor, descríbenos brevemente tu caso';
    if (formData.mensaje.length < 80) return 'La descripción del caso debe tener al menos 80 caracteres para poder asesorarte mejor.';

    return null; // No hay errores
};
