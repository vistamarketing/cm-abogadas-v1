import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import en from './locales/en.json';
import ca from './locales/ca.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en },
            ca: { translation: ca },
        },
        lng: 'es', // default language
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false, // React already escapes
        },
    });

export default i18n;
