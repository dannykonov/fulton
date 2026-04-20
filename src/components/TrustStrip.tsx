const ITEMS = [
  {
    label: 'Designed with Doctors',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <circle cx="12" cy="11" r="3" />
        <path d="M5 22V11a7 7 0 0 1 14 0v11" />
      </svg>
    ),
  },
  {
    label: 'Custom Molding Tech',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="m4.93 4.93 2.12 2.12" />
        <path d="m16.95 16.95 2.12 2.12" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.93 19.07 2.12-2.12" />
        <path d="m16.95 7.05 2.12-2.12" />
      </svg>
    ),
  },
  {
    label: 'Handcrafted in Portugal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18l-2 13H5z" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    label: '90-Day Comfort Promise',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: '100,000+ Happy Customers',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
      </svg>
    ),
  },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-cream-300/70 bg-cream-200">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-6 sm:grid-cols-2 lg:grid-cols-5">
        {ITEMS.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-center gap-3 text-brand-700"
          >
            <span className="text-gold-500">{it.icon}</span>
            <span className="text-sm font-medium tracking-tight">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
