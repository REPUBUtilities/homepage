import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp } from '../../lib/variants'

const ESI_IMG = 'https://images.evetech.net'

export default function CorporationCard({ corp, onClick }) {
  const [logoError, setLogoError] = useState(false)
  const { t, i18n } = useTranslation()
  const isFr = i18n.language === 'fr'
  const role = isFr ? (corp.role_fr || corp.role) : corp.role

  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      className={[
        'group w-full text-left rounded-sm border border-(--color-border)',
        'bg-(--color-surface) backdrop-blur-sm p-5',
        'flex flex-col',
        'transition-all duration-300 cursor-pointer',
        'hover:border-[rgba(10,136,205,0.5)] hover:-translate-y-0.5',
        'hover:bg-[rgba(1,40,98,0.5)]',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--color-primary)',
      ].join(' ')}
    >
      {/* Corp logo */}
      <div className="mb-4 w-12 h-12 rounded-sm overflow-hidden border border-(--color-border-subtle)">
        {logoError ? (
          <div className="w-full h-full bg-(--color-primary-dim) flex items-center justify-center">
            <span className="text-(--color-primary) opacity-40 text-lg select-none">✦</span>
          </div>
        ) : (
          <img
            src={`${ESI_IMG}/corporations/${corp.id}/logo?size=64`}
            alt={`${corp.name} logo`}
            className="w-full h-full object-cover"
            onError={() => setLogoError(true)}
          />
        )}
      </div>

      {/* Name */}
      <p
        className="text-white line-clamp-2 mb-1 leading-snug group-hover:text-(--color-primary) transition-colors"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', letterSpacing: '0.1em' }}
      >
        {corp.name}
      </p>

      {/* Role */}
      <p
        className="text-(--color-light)/50 mb-3"
        style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)', letterSpacing: '0.08em' }}
      >
        {role}
      </p>

      {/* Footer row */}
      <div className="mt-auto flex items-center justify-between">
        <span
          className="text-(--color-light)/35"
          style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)' }}
        >
          {corp.memberCount.toLocaleString()} {t('corps.members')}
        </span>

        {corp.recruiting && (
          <span className="px-2 py-0.5 rounded-sm border text-[10px] tracking-widest uppercase border-(--color-border) text-(--color-primary) bg-(--color-primary-dim)">
            {t('corps.recruiting')}
          </span>
        )}
      </div>
    </motion.button>
  )
}
