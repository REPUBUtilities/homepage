export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.1em] rounded-sm transition-all duration-200 cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

  const variants = {
    primary: [
      'border-(--color-primary) text-(--color-primary) bg-transparent',
      'hover:bg-(--color-primary-dim)',
    ].join(' '),
    secondary: [
      'border-(--color-border-subtle) text-(--color-muted)',
      'hover:border-(--color-border) hover:text-(--color-ink)',
    ].join(' '),
  }

  return (
    <button style={{ fontFamily: 'var(--font-label)' }} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
