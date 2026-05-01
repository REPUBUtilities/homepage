import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Divider from '../ui/Divider'

const PILLARS = [
  {
    label: 'Proelium',
    title: 'Ready to Fight',
    body: 'Weekly fleet operations, strategic wars, and small gang combat. We field doctrine ships and fight as a unit — from skirmishes to coalition engagements.',
  },
  {
    label: 'Industria',
    title: 'Industrial Power',
    body: 'Alliance-level manufacturing, mining operations, and supply infrastructure. The Republic\'s economy is self-sustaining and built to last.',
  },
  {
    label: 'Fines',
    title: 'New Frontiers',
    body: 'The alliance is actively expanding into new areas of space. Members who join now will help shape what The Republic becomes next.',
  },
  {
    label: 'Communitas',
    title: 'Community',
    body: 'A welcoming home for capsuleers of all skill levels and timezones. Real life always comes first — we build around people, not metrics.',
  },
  {
    label: 'Doctrina',
    title: 'Learning Together',
    body: 'Veterans and new pilots operate side by side. The Republic\'s Academy and mentorship programme ensure no capsuleer is left behind.',
  },
  {
    label: 'Ambitio',
    title: 'Ambitions',
    body: 'We are building something lasting — an alliance with its own identity, its own space, and its own future in New Eden.',
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
          CAUSA — II
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          Why Join The Republic
        </motion.h2>

        <Divider glyph="✦" className="mb-14" />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PILLARS.map((pillar) => (
            <motion.div key={pillar.label} variants={fadeUp}>
              <Card className="h-full flex flex-col">
                <p
                  className="text-(--color-accent) mb-3 tracking-widest"
                  style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                >
                  {pillar.label.toUpperCase()}
                </p>
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', letterSpacing: '0.1em', fontWeight: 400 }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-(--color-light)/70 flex-1"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}
                >
                  {pillar.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
