import { motion } from 'framer-motion'
import { revealLine } from '../../lib/variants'

export default function Divider({ glyph = null, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div
        className="flex-1 h-px bg-(--color-border)"
        variants={revealLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      {glyph && (
        <span className="text-(--color-accent) opacity-40 text-sm">{glyph}</span>
      )}
      <motion.div
        className="flex-1 h-px bg-(--color-border)"
        variants={revealLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ originX: 1 }}
      />
    </div>
  )
}
