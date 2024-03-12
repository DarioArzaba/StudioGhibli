import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {readData} from './asyncStorageManager';
import {addResources} from './dynamicImports';
import * as RNLocalize from 'react-native-localize';

const setDefaultLanguage = async i18n => {
  const profile = await readData('profile');
  if (profile === null) {
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
    addResources(i18n, locale);
  } else {
    const lng = JSON.parse(profile).language;
    addResources(i18n, lng);
  }
};

i18next.use(initReactI18next).init({
  resources: {},
  ns: ['common'],
  lng: 'cimode',
  debug: false,
  compatibilityJSON: 'v3',
  partialBundledLanguages: true,
});

setDefaultLanguage(i18next);

export default i18next;
