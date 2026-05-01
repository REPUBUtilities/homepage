import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Divider from '../ui/Divider'

const ESI_IMG = 'https://images.evetech.net'

const LEADERSHIP = [
  { id: 2118959330, name: 'Alurel Kansene',  title: 'Executor' },
  { id: 634816057,  name: 'Kyra Skeako',     title: 'Co-Executor' },
  { id: 182040020,  name: 'Elldis',           title: 'Director of Logistics' },
  { id: 2119155034, name: 'Draykey',          title: 'Director of Operations' },
  { id: 2024942792, name: 'Dmoney3788',       title: 'Director of Special Operations' },
]

function LeaderCard({ person, className = '' }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div variants={fadeUp} className={`h-full ${className}`}>
      <Card className="h-full flex flex-col">
        <div className="w-full aspect-square mb-5 rounded-sm overflow-hidden border border-(--color-border-subtle)">
          {imgError ? (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'var(--color-primary-dim)' }}
            >
              <span
                className="text-(--color-primary) opacity-30 select-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', letterSpacing: '0.1em' }}
              >
                ✦
              </span>
            </div>
          ) : (
            <img
              src={`${ESI_IMG}/characters/${person.id}/portrait?size=256`}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <p
          className="text-white mb-1"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', letterSpacing: '0.12em' }}
        >
          {person.name}
        </p>
        <p
          className="text-(--color-primary)"
          style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em' }}
        >
          {person.title.toUpperCase()}
        </p>
      </Card>
    </motion.div>
  )
}

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
          LEADERSHIP — III
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LEADERSHIP.map((person) => (
            <LeaderCard key={person.id} person={person} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
