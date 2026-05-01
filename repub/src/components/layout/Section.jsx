export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {children}
      </div>
    </section>
  )
}
