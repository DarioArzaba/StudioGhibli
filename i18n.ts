import i18next from 'i18next';
import * as RNLocalize from 'react-native-localize';
import {initReactI18next} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import Backend from 'i18next-http-backend';

import en from './src/locales/en/translation.json';
import es from './src/locales/es/translation.json';

const resources = {
  en: {translation: en},
  es: {translation: es},
};

const locales = RNLocalize.getLocales()[0].languageTag;

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    react: {useSuspense: false},
    compatibilityJSON: 'v3',
    resources,
    lng: locales,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation'],
    backend: {
      loadPath: './src/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18next;
