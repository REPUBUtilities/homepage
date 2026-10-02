import { motion } from 'framer-motion'
import { revealLine } from '../../lib/variants'

/* Altar-rail divider: one hairline flanked by two short brand lines */
export default function Divider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="w-7 h-px bg-(--color-primary)" />
      <motion.div
        className="flex-1 h-px bg-(--color-border-subtle)"
        variants={revealLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <span className="w-7 h-px bg-(--color-primary)" />
    </div>
  )
}
