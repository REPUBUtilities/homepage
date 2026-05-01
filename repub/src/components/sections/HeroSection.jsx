import { motion } from 'framer-motion'
import { fadeUp, fadeIn } from '../../lib/variants'
import { ALLIANCE_NAME, ALLIANCE_TAGLINE } from '../../lib/constants'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(1,40,98,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 70% 20%, rgba(10,136,205,0.08) 0%, transparent 60%)
          `,
          animation: 'heroGradientDrift 28s ease-in-out infinite alternate',
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(var(--color-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-light) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8 tracking-widest text-(--color-primary)"
          style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >
          EVE ONLINE — NEW EDEN ALLIANCE
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
            fontWeight: 400,
            letterSpacing: '0.2em',
            lineHeight: 1.1,
          }}
        >
          {ALLIANCE_NAME.toUpperCase()}
        </motion.h1>

        {/* Rule line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto my-8 h-px w-48 bg-(--color-primary)"
          style={{ boxShadow: '0 0 12px rgba(10,136,205,0.6)' }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-xl italic text-(--color-light)/70"
          style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
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
          <Button onClick={() => document.getElementById('recruitment')?.scrollIntoView({ behavior: 'smooth' })}>
            Apply to Join
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroGradientDrift {
          from { transform: scale(1) translate(0, 0); }
          to   { transform: scale(1.08) translate(2%, 2%); }
        }
      `}</style>
    </section>
  )
}
