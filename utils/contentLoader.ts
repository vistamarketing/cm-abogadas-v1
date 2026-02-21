// Content loader maps for each page
// Since Vite doesn't support dynamic imports with template literals for JSON,
// we import all language variants statically and select at runtime.

import homeEs from '../content/pages/home.json';
import homeEn from '../content/pages/en/home.json';
import homeCa from '../content/pages/ca/home.json';

import servicesEs from '../content/pages/services.json';
import servicesEn from '../content/pages/en/services.json';
import servicesCa from '../content/pages/ca/services.json';

import aboutEs from '../content/pages/about.json';
import aboutEn from '../content/pages/en/about.json';
import aboutCa from '../content/pages/ca/about.json';

import contactEs from '../content/pages/contact.json';
import contactEn from '../content/pages/en/contact.json';
import contactCa from '../content/pages/ca/contact.json';

const contentMap: Record<string, Record<string, any>> = {
    home: { es: homeEs, en: homeEn, ca: homeCa },
    services: { es: servicesEs, en: servicesEn, ca: servicesCa },
    about: { es: aboutEs, en: aboutEn, ca: aboutCa },
    contact: { es: contactEs, en: contactEn, ca: contactCa },
};

export function getPageContent(page: string, lang: string): any {
    const pageMap = contentMap[page];
    if (!pageMap) return {};
    return pageMap[lang] || pageMap['es'] || {};
}
