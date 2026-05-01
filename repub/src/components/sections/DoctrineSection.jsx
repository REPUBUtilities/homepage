import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Divider from '../ui/Divider'

const TENETS = [
  {
    label: 'Lex',
    title: 'Rule of Law',
    body: 'Every pilot operates under the same charter. The Senate governs by deliberation, not decree. Accountability is not optional.',
  },
  {
    label: 'Legio',
    title: 'Fleet Discipline',
    body: 'In the void, coordination is survival. We field doctrine ships, hold the line, and trust the FC. Ego is left at the gate.',
  },
  {
    label: 'Pax',
    title: 'Sovereign Peace',
    body: 'We build to hold, and we hold to build. Our space is productive, defended, and ours. We do not seek conflict — but we finish it.',
  },
  {
    label: 'Fides',
    title: 'Loyalty',
    body: 'We do not abandon our own. What is sworn is kept. The alliance stands behind each of its members as one body.',
  },
]

export default function DoctrineSection() {
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
          LEGIO — II
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          Core Doctrine
        </motion.h2>

        <Divider glyph="✦" className="mb-14" />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TENETS.map((tenet) => (
            <motion.div key={tenet.label} variants={fadeUp}>
              <Card className="h-full flex flex-col">
                <p
                  className="text-(--color-accent) mb-3 tracking-widest"
                  style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                >
                  {tenet.label.toUpperCase()}
                </p>
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', letterSpacing: '0.1em', fontWeight: 400 }}
                >
                  {tenet.title}
                </h3>
                <p
                  className="text-(--color-light)/70 flex-1"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}
                >
                  {tenet.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
