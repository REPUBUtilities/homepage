import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'

const PILLARS = [
  {
    label: 'Combat',
    title: 'Ready to Fight',
    body: 'Weekly fleet operations, strategic wars, and small gang combat. We field doctrine ships and fight as a unit — from skirmishes to coalition engagements.',
    img: '/img/EVE Online - Battlecruisers.jpg',
  },
  {
    label: 'Industry',
    title: 'Industrial Power',
    body: 'Alliance-level manufacturing, mining operations, and supply infrastructure. The Republic\'s economy is self-sustaining and built to last.',
    img: '/img/Refinery.jpg',
  },
  {
    label: 'Expansion',
    title: 'New Frontiers',
    body: 'The alliance is actively expanding into new areas of space. Members who join now will help shape what The Republic becomes next.',
    img: '/img/Mining Ship.jpg',
  },
  {
    label: 'Community',
    title: 'A Place to Belong',
    body: 'A welcoming home for capsuleers of all skill levels and timezones. Real life always comes first — we build around people, not metrics.',
    img: '/img/EVE Online Mining Fleet.jpg',
  },
  {
    label: 'Training',
    title: 'Learning Together',
    body: 'Veterans and new pilots operate side by side. The Republic\'s Academy and mentorship programme ensure no capsuleer is left behind.',
    img: '/img/Warhead Upgrades Release.jpg',
  },
  {
    label: 'Vision',
    title: 'Ambitions',
    body: 'We are building something lasting — an alliance with its own identity, its own space, and its own future in New Eden.',
    img: '/img/EVE Keynote picture (6).png',
  },
]

function PillarCard({ pillar }) {
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
            src={pillar.img}
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
        </div>
      </div>
    </motion.div>
  )
}

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
          MEMBERSHIP — II
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
            <PillarCard key={pillar.label} pillar={pillar} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
