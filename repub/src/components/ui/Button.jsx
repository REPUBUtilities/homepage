export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-2 text-sm tracking-widest font-body transition-all duration-300 cursor-pointer border'

  const variants = {
    primary: [
      'border-(--color-primary) text-(--color-primary) bg-transparent',
      'hover:bg-(--color-primary-dim) hover:shadow-[0_0_16px_rgba(10,136,205,0.3)]',
    ].join(' '),
    secondary: [
      'border-(--color-border-subtle) text-(--color-light)/70',
      'hover:border-(--color-border) hover:text-(--color-light)',
    ].join(' '),
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
