import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Divider from '../ui/Divider'

const LEADERSHIP = [
  { name: 'Placeholder', title: 'Executor', corp: 'The Republic HQ' },
  { name: 'Placeholder', title: 'Director of Military', corp: 'Legio I' },
  { name: 'Placeholder', title: 'Director of Diplomacy', corp: 'Senatus Extern' },
]

export default function LeadershipSection() {
  return (
    <Section id="leadership">
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
          SENATUS — III
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          Leadership
        </motion.h2>

        <Divider className="mb-14" />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl"
        >
          {LEADERSHIP.map((person, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card>
                {/* Portrait placeholder */}
                <div
                  className="w-full aspect-square mb-5 rounded-sm border border-(--color-border-subtle) flex items-center justify-center"
                  style={{ background: 'var(--color-primary-dim)' }}
                >
                  <span
                    className="text-(--color-primary) opacity-30 select-none"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', letterSpacing: '0.1em' }}
                  >
                    ✦
                  </span>
                </div>

                <p
                  className="text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', letterSpacing: '0.12em' }}
                >
                  {person.name}
                </p>
                <p
                  className="text-(--color-primary) mb-1"
                  style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em' }}
                >
                  {person.title.toUpperCase()}
                </p>
                <p
                  className="text-(--color-light)/40"
                  style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-data)' }}
                >
                  {person.corp}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
