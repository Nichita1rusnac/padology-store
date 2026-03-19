import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from "@/shared/content";


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        detection: {
            order: ['path', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0,
            caches: ['localStorage'],
        },
        fallbackLng: "ro",
        supportedLngs: ['ru', 'ro', 'en'],
        defaultNS: "main",
        ns: ['common', 'contacts', 'goods', 'price', 'specialists', 'top_services'],
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;