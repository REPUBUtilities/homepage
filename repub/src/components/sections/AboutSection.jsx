import { motion } from 'framer-motion'
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
          OVERVIEW — I
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          About The Republic
        </motion.h2>

        <Divider className="mb-12" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <motion.p variants={fadeUp} style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }} className="text-(--color-light)/80">
            The Republic is an alliance guided by a clear set of core principles, codified in our founding
            document — Pax Ludos. We welcome capsuleers of all skill levels and play styles. Whether you are
            a veteran fleet commander or a pilot taking your first steps into New Eden, there is a place for
            you here.
          </motion.p>

          <motion.p variants={fadeUp} style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }} className="text-(--color-light)/80">
            We are built around collaboration — member corporations each bring their own strengths and contribute
            to our shared goals. Governance is transparent, decisions are made collectively, and every member
            has the opportunity to shape what The Republic becomes.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-16 pt-12 border-t border-(--color-border) grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0"
        >
          <StatItem label="CAPSULEERS" value={stats?.memberCount.toLocaleString()} loading={loading} />
          <StatItem label="CORPORATIONS" value={stats?.corpCount} loading={loading} centered />
          <StatItem label="FOUNDED" value="YC118" loading={false} right />
        </motion.div>
      </motion.div>
    </Section>
  )
}
