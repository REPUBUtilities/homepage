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
        className="text-(--color-primary) tabular-nums"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-3xl)', letterSpacing: '0.04em', lineHeight: 1 }}
      >
        {loading ? '—' : (value ?? '—')}
      </span>
      <span
        className="text-(--color-primary)"
        style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)', letterSpacing: '0.2em' }}
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
          style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)', letterSpacing: '0.25em' }}
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
          className="relative mt-16 p-8 sm:p-10 border border-(--color-border-subtle) grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 before:absolute before:-top-px before:-left-px before:size-3.5 before:border-t before:border-l before:border-(--color-primary) before:content-[''] after:absolute after:-bottom-px after:-right-px after:size-3.5 after:border-b after:border-r after:border-(--color-primary) after:content-['']"
        >
          <StatItem label={t('about.stat_capsuleers')} value={stats?.memberCount.toLocaleString()} loading={loading} />
          <StatItem label={t('about.stat_corporations')} value={stats?.corpCount} loading={loading} centered />
          <StatItem label={t('about.stat_founded')} value="YC118" loading={false} right />
        </motion.div>
      </motion.div>
    </Section>
  )
}
