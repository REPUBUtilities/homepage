export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={[
        'rounded-sm border border-(--color-border) backdrop-blur-sm',
        'bg-(--color-surface) p-6',
        'transition-all duration-300',
        'hover:border-[rgba(10,136,205,0.5)] hover:-translate-y-0.5',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
