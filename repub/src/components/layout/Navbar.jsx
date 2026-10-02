import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faMap, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { NAV_LINKS, TOOL_LINKS, ALLIANCE_NAME, ALLIANCE_MARK } from '../../lib/constants'
import { useActiveSection } from '../../hooks/useActiveSection'
import LanguageToggle from '../ui/LanguageToggle'

const TOOL_ICONS = {
  Dashboard: faGaugeHigh,
  Maps:      faMap,
  Wiki:      faBookOpen,
  Discord:   faDiscord,
}

const SECTION_IDS = NAV_LINKS.map(({ href }) => href.replace('#', ''))

function NavLink({ href, label, active }) {
  return (
    <a
      href={href}
      className={[
        'group relative pb-0.5 transition-colors duration-300',
        active ? 'text-white' : 'text-(--color-muted) hover:text-white',
        'no-underline hover:no-underline',
      ].join(' ')}
      style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}
    >
      {label.toUpperCase()}
      <span
        className={[
          'absolute -bottom-0.5 left-0 h-px bg-(--color-primary)',
          'transition-[width] duration-300 ease-out',
          active ? 'w-full' : 'w-0 group-hover:w-full',
        ].join(' ')}
      />
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)
  const { t } = useTranslation()

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
          ? 'bg-[rgba(5,7,11,0.85)] backdrop-blur-md border-b border-(--color-border-subtle)'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto max-w-300 px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label={ALLIANCE_NAME} className="flex items-center gap-4">
          <img src={ALLIANCE_MARK} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
          <span
            className="hidden sm:inline text-white uppercase"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: '0.15em' }}
          >
            {ALLIANCE_NAME}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {/* Section links */}
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  label={t(`nav.${label.toLowerCase()}`)}
                  active={activeSection === href.replace('#', '')}
                />
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <LanguageToggle />

          {/* Tool icons pill */}
          <div
            className="flex items-center rounded-sm border border-(--color-border-subtle) overflow-hidden"
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
                  'text-(--color-muted) transition-all duration-200',
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
