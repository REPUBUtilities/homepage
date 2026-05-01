import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { modalBackdrop, modalPanel } from '../../lib/variants'
import Button from '../ui/Button'

const ESI_IMG = 'https://images.evetech.net'

export default function CorporationModal({ corp, onClose }) {
  const [portraitError, setPortraitError] = useState(false)
  const [logoError, setLogoError]         = useState(false)
  const closeRef = useRef(null)

  // Scroll lock + focus close button on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [])

  // Escape to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      {/* Backdrop tint */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      <motion.div
        className={[
          'relative z-[201] w-full max-w-lg rounded-sm',
          'border border-(--color-border) bg-[rgba(9,9,9,0.92)] backdrop-blur-md',
          'shadow-[0_0_60px_rgba(10,136,205,0.12)]',
          'overflow-hidden',
        ].join(' ')}
        variants={modalPanel}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={corp.name}
      >
        {/* Header band */}
        <div className="flex items-start gap-4 p-6 border-b border-(--color-border-subtle)">
          {/* Corp logo */}
          <div className="shrink-0 w-14 h-14 rounded-sm overflow-hidden border border-(--color-border-subtle)">
            {logoError ? (
              <div className="w-full h-full bg-(--color-primary-dim) flex items-center justify-center">
                <span className="text-(--color-primary) opacity-30 text-xl">✦</span>
              </div>
            ) : (
              <img
                src={`${ESI_IMG}/corporations/${corp.id}/logo?size=64`}
                alt=""
                className="w-full h-full object-cover"
                onError={() => setLogoError(true)}
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h2
              className="text-white leading-snug"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', letterSpacing: '0.12em', fontWeight: 400 }}
            >
              {corp.name}
            </h2>
            <p
              className="mt-1 text-(--color-light)/45"
              style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)', letterSpacing: '0.1em' }}
            >
              [{corp.ticker}] · {corp.role}
            </p>
          </div>

          {/* Close */}
          <button
            ref={closeRef}
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-(--color-light)/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--color-border)"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* CEO row */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border border-(--color-border-subtle)">
              {portraitError ? (
                <div className="w-full h-full bg-(--color-primary-dim) flex items-center justify-center rounded-full">
                  <span className="text-(--color-primary) opacity-30 text-lg">✦</span>
                </div>
              ) : (
                <img
                  src={`${ESI_IMG}/characters/${corp.ceoId}/portrait?size=128`}
                  alt={corp.ceoName}
                  className="w-full h-full object-cover"
                  onError={() => setPortraitError(true)}
                />
              )}
            </div>
            <div>
              <p
                className="text-white"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', letterSpacing: '0.1em' }}
              >
                {corp.ceoName}
              </p>
              <p
                className="text-(--color-light)/40 mt-0.5"
                style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)', letterSpacing: '0.08em' }}
              >
                Chief Executive Officer · {corp.memberCount.toLocaleString()} members
              </p>
            </div>
          </div>

          {/* Description */}
          {corp.description && (
            <p
              className="text-(--color-light)/70 leading-relaxed whitespace-pre-line"
              style={{ fontSize: 'var(--text-sm)' }}
            >
              {corp.description}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 pb-6 gap-4">
          <span
            className={[
              'px-3 py-1 rounded-sm border text-[10px] tracking-widest uppercase',
              corp.recruiting
                ? 'border-(--color-border) text-(--color-primary) bg-(--color-primary-dim)'
                : 'border-[rgba(192,82,195,0.3)] text-(--color-accent) bg-(--color-accent-dim)',
            ].join(' ')}
          >
            {corp.recruiting ? 'Recruiting' : 'Not Recruiting'}
          </span>

          <div className="flex items-center gap-3">
            {corp.discordUrl && (
              <a
                href={corp.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] tracking-widest border border-(--color-border-subtle) text-(--color-light)/60 hover:text-white hover:border-(--color-border) transition-all"
              >
                <FontAwesomeIcon icon={faDiscord} />
                DISCORD
              </a>
            )}
            <Button variant="secondary" onClick={onClose}
              className="text-[10px] tracking-widest py-1.5 px-4">
              CLOSE
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}
