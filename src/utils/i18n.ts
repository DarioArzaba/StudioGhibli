import i18next from 'i18next';
import * as RNLocalize from 'react-native-localize';
import {initReactI18next} from 'react-i18next';

import resourcesToBackend from 'i18next-resources-to-backend';

import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

const locales = RNLocalize.getLocales()[0].languageTag;

i18next.use(initReactI18next).init({
  debug: false,
  compatibilityJSON: 'v3',
  resources,
  lng: locales,
  fallbackLng: 'en',
  ns: ['translation'],
});

console.log(i18next.languages);

export default i18next;
