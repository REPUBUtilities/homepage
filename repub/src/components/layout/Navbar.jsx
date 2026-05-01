import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faMap, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { NAV_LINKS, TOOL_LINKS, ALLIANCE_NAME } from '../../lib/constants'

const TOOL_ICONS = {
  Dashboard: faGaugeHigh,
  Maps:      faMap,
  Wiki:      faBookOpen,
  Discord:   faDiscord,
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[rgba(9,9,9,0.85)] backdrop-blur-md border-b border-(--color-border-subtle)'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label={ALLIANCE_NAME}>
          <img
            src="/repub-logo.png"
            alt={ALLIANCE_NAME}
            className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {/* Section links */}
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-(--color-light)/60 hover:text-(--color-primary) transition-colors"
                  style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em' }}
                >
                  {label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* Tool icons pill */}
          <div
            className="flex items-center rounded-full border border-(--color-border-subtle) overflow-hidden"
            style={{ background: 'rgba(247, 247, 247, 0.04)' }}
          >
            {TOOL_LINKS.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={[
                  'group flex items-center justify-center w-9 h-8',
                  'text-(--color-light)/30 transition-all duration-200',
                  'hover:text-(--color-primary) hover:bg-(--color-primary-dim)',
                  i < TOOL_LINKS.length - 1 ? 'border-r border-(--color-border-subtle)' : '',
                ].join(' ')}
              >
                <FontAwesomeIcon
                  icon={TOOL_ICONS[label]}
                  className="transition-transform duration-200 group-hover:scale-110"
                  style={{ fontSize: '0.7rem' }}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
