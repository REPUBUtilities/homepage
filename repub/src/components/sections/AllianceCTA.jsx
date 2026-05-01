import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'
import Button from '../ui/Button'

export default function AllianceCTA() {
  return (
    <Section id="contact" className="bg-[rgba(1,40,98,0.08)]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-2xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-(--color-primary) mb-4"
          style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', letterSpacing: '0.25em' }}
        >
          CONTACT — V
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          Bring Your Corporation
        </motion.h2>

        <Divider className="mb-10" />

        <motion.p
          variants={fadeUp}
          className="text-(--color-light)/70 mb-10"
          style={{ fontSize: 'var(--text-base)', lineHeight: 1.9 }}
        >
          Is your corporation seeking an alliance with infrastructure, active operations,
          and a stable community behind it? The Republic is open to discussions with
          established corporations that share our values. Reach out through Discord
          and a member of leadership will be in touch.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            onClick={() => window.open('https://republic-alliance.com/discord', '_blank')}
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}
