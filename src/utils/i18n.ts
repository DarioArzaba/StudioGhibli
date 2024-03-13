import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {backendResourceLoader} from './backendResourceLoader';

i18next
  .use(initReactI18next)
  .use(resourcesToBackend(backendResourceLoader))
  .init({
    ns: ['common'],
    lng: 'en',
    debug: false,
    compatibilityJSON: 'v3',
    partialBundledLanguages: true,
    react: {
      useSuspense: false,
    },
  });

export default i18next;
