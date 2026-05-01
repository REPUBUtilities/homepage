import { ALLIANCE_NAME, ALLIANCE_TAGLINE, EXTERNAL_LINKS } from '../../lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--color-border-subtle) py-12 mt-32">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p
            className="text-white tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
          >
            {ALLIANCE_NAME.toUpperCase()}
          </p>
          <p
            className="mt-1 italic"
            style={{ fontSize: 'var(--text-xs)', color: 'var(--color-primary)', letterSpacing: '0.1em' }}
          >
            {ALLIANCE_TAGLINE}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {EXTERNAL_LINKS.discord && (
            <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer"
              className="text-(--color-light)/50 hover:text-(--color-primary) transition-colors"
              style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em' }}>
              DISCORD
            </a>
          )}
          {EXTERNAL_LINKS.zkillboard && (
            <a href={EXTERNAL_LINKS.zkillboard} target="_blank" rel="noopener noreferrer"
              className="text-(--color-light)/50 hover:text-(--color-primary) transition-colors"
              style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em' }}>
              ZKILLBOARD
            </a>
          )}
          {EXTERNAL_LINKS.forums && (
            <a href={EXTERNAL_LINKS.forums} target="_blank" rel="noopener noreferrer"
              className="text-(--color-light)/50 hover:text-(--color-primary) transition-colors"
              style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em' }}>
              FORUMS
            </a>
          )}
        </div>

        <p
          className="text-(--color-light)/30"
          style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.08em' }}
        >
          © {year} {ALLIANCE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
