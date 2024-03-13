export const backendResourceLoader = (
  language: string,
  namespace: string,
  callback: (error: any, resources: any) => void,
) => {
  try {
    let resources;
    const languageWithoutRegion = language.split('-')[0];
    switch (languageWithoutRegion) {
      case 'en':
        resources = require('../locales/en/common.json');
        break;
      case 'es':
        resources = require('../locales/es/common.json');
        break;
      case 'fr':
        resources = require('../locales/fr/common.json');
        break;
      default:
        throw new Error(`Language ${language} not found`);
    }
    if (resources && namespace === 'common') {
      callback(null, resources);
    } else {
      throw new Error(`Namespace ${language} not found`);
    }
  } catch (error) {
    callback(error, null);
  }
};
