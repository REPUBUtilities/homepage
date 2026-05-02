import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'

const PILLAR_KEYS = ['combat', 'industry', 'expansion', 'community', 'training', 'vision']

const PILLAR_IMAGES = {
  combat:    '/img/EVE Online - Battlecruisers.jpg',
  industry:  '/img/Refinery.jpg',
  expansion: '/img/Mining Ship.jpg',
  community: '/img/EVE Online Mining Fleet.jpg',
  training:  '/img/Warhead Upgrades Release.jpg',
  vision:    '/img/EVE Keynote picture (6).png',
}

function PillarCard({ pillarKey }) {
  const { t } = useTranslation()

  return (
    <motion.div variants={fadeUp} className="h-full">
      <div
        className={[
          'h-full flex flex-col rounded-sm overflow-hidden',
          'border border-(--color-border) backdrop-blur-sm bg-(--color-surface)',
          'transition-all duration-300 hover:border-[rgba(10,136,205,0.5)] hover:-translate-y-0.5',
        ].join(' ')}
      >
        {/* Image header */}
        <div className="relative h-44 overflow-hidden shrink-0">
          <img
            src={PILLAR_IMAGES[pillarKey]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.15) 0%, rgba(9,9,9,0.60) 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p
            className="text-(--color-accent) mb-3 tracking-widest"
            style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
          >
            {t(`doctrine.pillars.${pillarKey}.label`).toUpperCase()}
          </p>
          <h3
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', letterSpacing: '0.1em', fontWeight: 400 }}
          >
            {t(`doctrine.pillars.${pillarKey}.title`)}
          </h3>
          <p
            className="text-(--color-light)/70 flex-1"
            style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}
          >
            {t(`doctrine.pillars.${pillarKey}.body`)}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function DoctrineSection() {
  const { t } = useTranslation()

  return (
    <Section id="doctrine" className="bg-[rgba(1,40,98,0.08)]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p
          variants={fadeUp}
          className="text-(--color-primary) tracking-widest mb-4"
          style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', letterSpacing: '0.25em' }}
        >
          {t('doctrine.eyebrow')}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          {t('doctrine.heading')}
        </motion.h2>

        <Divider glyph="✦" className="mb-14" />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PILLAR_KEYS.map((key) => (
            <PillarCard key={key} pillarKey={key} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
