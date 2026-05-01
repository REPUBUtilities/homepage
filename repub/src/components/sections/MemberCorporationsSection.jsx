import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer } from '../../lib/variants'
import corporations from '../../data/corporations.json'
import Section from '../layout/Section'
import Divider from '../ui/Divider'
import CorporationCard from '../corporations/CorporationCard'
import CorporationModal from '../corporations/CorporationModal'
import { fadeUp } from '../../lib/variants'

export default function MemberCorporationsSection() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="corporations">
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
          CORPORATIONS — IV
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          Member Corporations
        </motion.h2>

        <Divider glyph="✦" className="mb-14" />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {corporations.map((corp) => (
            <CorporationCard
              key={corp.id}
              corp={corp}
              onClick={() => setSelected(corp)}
            />
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <CorporationModal
            corp={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
