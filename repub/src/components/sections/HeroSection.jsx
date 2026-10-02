import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp, fadeIn } from '../../lib/variants'
import { ALLIANCE_NAME, ALLIANCE_TAGLINE, ALLIANCE_MARK } from '../../lib/constants'
import Button from '../ui/Button'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula — four blurred clouds drifting on a slow cycle */}
      <div className="absolute inset-0 overflow-hidden bg-(--color-void) pointer-events-none" aria-hidden="true">
        {[
          { c: 'var(--color-nebula-1)', o: 0.55, w: '60%', h: '70%', l: '-10%', t: '30%', d: '26s' },
          { c: 'var(--color-nebula-2)', o: 0.5,  w: '55%', h: '60%', l: '25%',  t: '55%', d: '30s' },
          { c: 'var(--color-nebula-3)', o: 0.5,  w: '50%', h: '50%', l: '55%',  t: '-10%', d: '22s' },
          { c: 'var(--color-nebula-4)', o: 0.6,  w: '40%', h: '40%', l: '70%',  t: '60%', d: '28s' },
        ].map((n, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[100px]"
            style={{
              background: n.c, opacity: n.o, width: n.w, height: n.h, left: n.l, top: n.t,
              animation: `nebulaDrift ${n.d} ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Falcon watermark — one, faint, cropped off the right edge */}
      <img
        src={ALLIANCE_MARK}
        alt=""
        aria-hidden="true"
        className="absolute -right-[12%] top-1/2 -translate-y-1/2 w-[min(70vw,760px)] opacity-[0.12] pointer-events-none select-none"
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(var(--color-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-light) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8 tracking-widest text-(--color-primary)"
          style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)', letterSpacing: '0.22em' }}
        >
          {t('hero.eyebrow')}
        </motion.p>

        {/* Alliance name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            lineHeight: 1.1,
          }}
        >
          {ALLIANCE_NAME.toUpperCase()}
        </motion.h1>

        {/* Altar-rail divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto my-8 flex w-72 items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-7 bg-(--color-primary)" />
          <span className="h-px flex-1 bg-(--color-border-subtle)" />
          <span className="h-px w-7 bg-(--color-primary)" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-xl uppercase text-(--color-muted)"
          style={{ fontSize: '11px', fontFamily: 'var(--font-label)', letterSpacing: '0.18em' }}
        >
          {ALLIANCE_TAGLINE}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Button className="hover:shadow-[0_0_16px_rgba(10,136,205,0.3)]" onClick={() => document.getElementById('corporations')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta_primary')}
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta_secondary')}
          </Button>
        </motion.div>
      </div>

      <style>{`
        @keyframes nebulaDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(4%, 3%) scale(1.08); }
        }
      `}</style>
    </section>
  )
}
