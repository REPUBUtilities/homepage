export default function Badge({ children, className = '' }) {
  return (
    <span
      className={[
        'inline-block px-2 py-0.5 text-[var(--text-xs)] tracking-widest uppercase',
        'font-display text-(--color-primary) border border-(--color-border)',
        'bg-(--color-primary-dim)',
        className,
      ].join(' ')}
      style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)' }}
    >
      {children}
    </span>
  )
}
