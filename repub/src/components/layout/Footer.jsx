import { useTranslation } from 'react-i18next'
import { ALLIANCE_NAME, ALLIANCE_TAGLINE, ALLIANCE_MARK, EXTERNAL_LINKS } from '../../lib/constants'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--color-border-subtle) py-12 mt-32">
      <div className="mx-auto max-w-300 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left">
          <img src={ALLIANCE_MARK} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
          <p
            className="text-white"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: '0.15em' }}
          >
            {ALLIANCE_NAME.toUpperCase()}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {EXTERNAL_LINKS.discord && (
            <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer"
              className="text-(--color-muted) hover:text-(--color-primary) transition-colors"
              style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>
              DISCORD
            </a>
          )}
          {EXTERNAL_LINKS.zkillboard && (
            <a href={EXTERNAL_LINKS.zkillboard} target="_blank" rel="noopener noreferrer"
              className="text-(--color-muted) hover:text-(--color-primary) transition-colors"
              style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>
              ZKILLBOARD
            </a>
          )}
          {EXTERNAL_LINKS.forums && (
            <a href={EXTERNAL_LINKS.forums} target="_blank" rel="noopener noreferrer"
              className="text-(--color-muted) hover:text-(--color-primary) transition-colors"
              style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>
              FORUMS
            </a>
          )}
        </div>

        <p
          className="text-(--color-muted)"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          {t('footer.copyright', { year, name: ALLIANCE_NAME })}
        </p>
      </div>
      <p
        className="mt-10 text-center uppercase text-(--color-muted)"
        style={{ fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.18em' }}
      >
        {ALLIANCE_TAGLINE}
      </p>
    </footer>
  )
}
