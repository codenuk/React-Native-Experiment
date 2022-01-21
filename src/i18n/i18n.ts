// https://medium.com/@raazthemystery273/how-to-use-i18next-react-i18next-in-react-native-f81ece184cd2

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { languagesTH } from './th'
import { languagesEN } from './en'

i18n.use(initReactI18next).init({
  fallbackLng: ['en', 'th'],
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: languagesEN,
    },
    th: {
      translation: languagesTH,
    },
  },
})
export default i18n
