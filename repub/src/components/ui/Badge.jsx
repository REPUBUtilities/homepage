export default function Badge({ children, className = '' }) {
  return (
    <span
      className={[
        'inline-block px-2 py-0.5 text-[var(--text-xs)] tracking-widest uppercase',
        'text-(--color-primary) border border-(--color-border) rounded-sm',
        'bg-(--color-primary-dim)',
        className,
      ].join(' ')}
      style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-label)' }}
    >
      {children}
    </span>
  )
}
