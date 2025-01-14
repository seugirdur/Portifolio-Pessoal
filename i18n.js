import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
        lng: "en", // Idioma padrão
        fallbackLng: "en",
        debug: true,
        backend: {
            loadPath: "/Portifolio-Pessoal/locales/{{lng}}/{{ns}}.json",
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
