import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'
import { useAllianceStats } from '../../hooks/useAllianceStats'

function StatItem({ value, label, loading, centered, right }) {
  const align = centered ? 'sm:items-center sm:text-center' : right ? 'sm:items-end sm:text-right' : ''
  return (
    <div className={`flex flex-col gap-3 items-start ${align}`}>
      <span
        className="text-white tabular-nums"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', letterSpacing: '0.08em', lineHeight: 1 }}
      >
        {loading ? '—' : (value ?? '—')}
      </span>
      <span
        className="text-(--color-primary)"
        style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)', letterSpacing: '0.25em' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function AboutSection() {
  const { stats, loading } = useAllianceStats()
  const { t } = useTranslation()

  return (
    <Section id="about">
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
          {t('about.eyebrow')}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          {t('about.heading')}
        </motion.h2>

        <Divider className="mb-12" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <motion.p variants={fadeUp} style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }} className="text-(--color-light)/80">
            {t('about.p1')}
          </motion.p>

          <motion.p variants={fadeUp} style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }} className="text-(--color-light)/80">
            {t('about.p2')}
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-16 pt-12 border-t border-(--color-border) grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0"
        >
          <StatItem label={t('about.stat_capsuleers')} value={stats?.memberCount.toLocaleString()} loading={loading} />
          <StatItem label={t('about.stat_corporations')} value={stats?.corpCount} loading={loading} centered />
          <StatItem label={t('about.stat_founded')} value="YC118" loading={false} right />
        </motion.div>
      </motion.div>
    </Section>
  )
}
