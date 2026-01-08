export interface FormData {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    mensaje: string;
}

export interface FormResponse {
    success: boolean;
    message: string;
}

// Obtén tu API key gratuita en: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = '37a8f6f0-aa8b-4cad-a3de-c9a7bf0b35e2';

export const submitContactForm = async (formData: FormData): Promise<FormResponse> => {
    try {
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
                message: formData.mensaje || 'Sin mensaje adicional',
                subject: '🔔 Nuevo contacto desde CM Abogadas',
                from_name: 'CM Abogadas - Formulario Web',
                // Campos adicionales personalizados
                'Nombre completo': `${formData.nombre} ${formData.apellido}`,
                'Teléfono': formData.telefono,
            }),
        });

        const data = await response.json();

        if (data.success) {
            return {
                success: true,
                message: '¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.',
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
    // Validar nombre
    if (!formData.nombre.trim()) {
        return 'Por favor, ingresa tu nombre';
    }

    // Validar apellido
    if (!formData.apellido.trim()) {
        return 'Por favor, ingresa tu apellido';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        return 'Por favor, ingresa tu email';
    }
    if (!emailRegex.test(formData.email)) {
        return 'Por favor, ingresa un email válido';
    }

    // Validar teléfono
    const phoneRegex = /^[+]?[\d\s()-]{9,}$/;
    if (!formData.telefono.trim()) {
        return 'Por favor, ingresa tu teléfono';
    }
    if (!phoneRegex.test(formData.telefono)) {
        return 'Por favor, ingresa un teléfono válido';
    }

    return null; // No hay errores
};
