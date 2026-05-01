import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'

export default function AboutSection() {
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
          SENATUS — I
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
            The Republic is an alliance built on the principles of order, mutual defence, and sovereign governance
            in the stars of New Eden. Founded by capsuleers who believe that lasting power is built on law and
            loyalty — not on brute force alone.
          </motion.p>

          <motion.p variants={fadeUp} style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }} className="text-(--color-light)/80">
            We operate across multiple theatres: nullsec sovereignty, wormhole expeditions, and strategic
            deployments wherever the Senate deems necessary. Our members are held to a high standard, and in
            return they are afforded the full protection and resources of the alliance.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  )
}
