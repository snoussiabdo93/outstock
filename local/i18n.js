import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//
import enLocales from './en.json';
import arLocales from './ar.json';
import frLocales from './fr.json';

// ----------------------------------------------------------------------
const lang = localStorage.getItem('lang')
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      ar: { translations: arLocales },
      fr: { translations: frLocales }
    },
    lng: lang || 'fr',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
