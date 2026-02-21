import { useLocation } from 'react-router-dom';

// Spanish slug definitions used across the app
export const ROUTES = {
    home: '/',
    about: '/sobre-nosotros',
    services: '/servicios',
    contact: '/contacto',
    legalNotice: '/aviso-legal',
    privacyPolicy: '/politica-de-privacidad',
    cookiesPolicy: '/politica-de-cookies',
};

/**
 * Returns the current language by inspecting the URL path.
 * /en/* → 'en', /ca/* → 'ca', everything else → 'es'
 */
export function useCurrentLang(): string {
    const location = useLocation();
    const match = location.pathname.match(/^\/(en|ca)(\/|$)/);
    return match ? match[1] : 'es';
}

/**
 * Returns a function that generates correctly prefixed paths.
 * - Spanish: no prefix (e.g., '/servicios')
 * - English: '/en/servicios'
 * - Catalan: '/ca/servicios'
 */
export function useLocalizedPath() {
    const lang = useCurrentLang();
    return (path: string) => {
        if (lang === 'es') return path;
        return `/${lang}${path}`;
    };
}
