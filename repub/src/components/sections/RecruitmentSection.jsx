import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Divider from '../ui/Divider'
import Button from '../ui/Button'

const REQUIREMENTS = [
  'Minimum 10M skill points',
  'Full ESI authorisation required',
  'Voice comms (Mumble/Discord) mandatory for fleets',
  'Active participation in alliance operations',
  'No active wars against blue standings',
]

export default function RecruitmentSection() {
  return (
    <Section id="recruitment" className="bg-[rgba(1,40,98,0.08)]">
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
          LEGIO — IV
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-white mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.15em' }}
        >
          Recruitment
        </motion.h2>

        <Divider glyph="✦" className="mb-14" />

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
          <motion.div variants={fadeUp}>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', letterSpacing: '0.12em', fontWeight: 400 }}
            >
              Requirements
            </h3>
            <ul className="space-y-3">
              {REQUIREMENTS.map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-(--color-light)/75"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7 }}
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-(--color-primary) shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', letterSpacing: '0.12em', fontWeight: 400 }}
            >
              How to Apply
            </h3>
            <p
              className="text-(--color-light)/75 mb-8"
              style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}
            >
              Join our public Discord and open a recruitment ticket. An interviewer from the Senatus will
              review your application and conduct a brief interview. Expect a response within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Join Discord</Button>
              <Button variant="secondary">Read the Charter</Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
