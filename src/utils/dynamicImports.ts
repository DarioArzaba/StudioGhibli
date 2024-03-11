const languagePaths = {
  en: () => import('../locales/en/common.json'),
  es: () => import('../locales/es/common.json'),
  fr: () => import('../locales/fr/common.json'),
};

export const addResources = async (i18n, lng) => {
  const translation = await languagePaths[lng]();
  i18n.addResources(lng, 'common', translation.default);
  i18n.changeLanguage(lng);
};
