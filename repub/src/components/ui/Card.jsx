export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={[
        'rounded-sm border border-(--color-border-subtle) backdrop-blur-sm',
        'bg-(--color-surface) p-6',
        'transition-all duration-300',
        'hover:border-(--color-border) hover:-translate-y-0.5',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
