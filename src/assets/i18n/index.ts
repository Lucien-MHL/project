import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh_tw from './zh.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      zh: zh_tw,
    },
    lng: 'zh', // if you're using a language detector, do not define the lng option
    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })
