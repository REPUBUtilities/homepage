import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

const saved = localStorage.getItem('repub-lang')
const browser = (navigator.language || '').startsWith('fr') ? 'fr' : 'en'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: saved || browser,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next
