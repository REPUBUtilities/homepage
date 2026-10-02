import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const setLang = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('repub-lang', lang)
  }

  return (
    <div
      className="flex items-center gap-1"
      style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', letterSpacing: '0.12em' }}
    >
      <button
        onClick={() => setLang('en')}
        className="transition-colors duration-200"
        style={{ color: current === 'en' ? 'var(--color-primary)' : 'var(--color-muted)' }}
        aria-pressed={current === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span style={{ color: 'var(--color-border-subtle)' }}>·</span>
      <button
        onClick={() => setLang('fr')}
        className="transition-colors duration-200"
        style={{ color: current === 'fr' ? 'var(--color-primary)' : 'var(--color-muted)' }}
        aria-pressed={current === 'fr'}
        aria-label="Passer en français"
      >
        FR
      </button>
    </div>
  )
}
