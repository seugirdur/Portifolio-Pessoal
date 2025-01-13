import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Configuração do i18n
i18n
    .use(Backend) // Para carregar traduções de arquivos JSON
    .use(LanguageDetector) // Detecta o idioma do navegador
    .use(initReactI18next) // Integração com React
    .init({
        fallbackLng: "en", // Idioma padrão
        debug: true, // Ativa logs para identificar erros
        interpolation: {
            escapeValue: false, // React já faz proteção contra XSS
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json", // Caminho para os arquivos JSON
        },
    });

export default i18n;
