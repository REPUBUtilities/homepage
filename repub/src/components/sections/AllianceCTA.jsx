import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'
import Button from '../ui/Button'

export default function AllianceCTA() {
  const { t } = useTranslation()

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
          {t('cta.eyebrow')}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          {t('cta.heading')}
        </motion.h2>

        <Divider className="mb-10" />

        <motion.p
          variants={fadeUp}
          className="text-(--color-light)/70 mb-10"
          style={{ fontSize: 'var(--text-base)', lineHeight: 1.9 }}
        >
          {t('cta.body')}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            onClick={() => window.open('https://republic-alliance.com/discord', '_blank')}
          >
            {t('cta.button')}
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}
