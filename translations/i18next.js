import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// import { getLocales } from 'react-native-localize';
import { en, hi } from './localize';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'hi', // getLocales()[0].languageCode,

  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: en
    },
    hi: {
      translation: hi
    }
  },
  react: {
    useSuspense: false /* in case you have any suspense related errors */
    /*
    Mark this false if you dont want to use suspense else
    you will end up getting a no fallback ui error for sure
    */
  }
});

export default i18n;
