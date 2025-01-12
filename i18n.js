import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector) // Detecta o idioma do navegador
    .use(initReactI18next) // Inicializa o react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    title: "Hi, I'm John Doe!",
                    description: "I'm a passionate developer and this is my personal portfolio.",
                },
            },
            pt: {
                translation: {
                    title: "Olá, sou John Doe!",
                    description: "Sou um desenvolvedor apaixonado e este é meu portfólio pessoal.",
                },
            },
        },
        fallbackLng: 'en', // Idioma padrão caso o idioma do usuário não seja suportado
        interpolation: {
            escapeValue: false, // React já faz a proteção contra XSS
        },
    });

export default i18n;
