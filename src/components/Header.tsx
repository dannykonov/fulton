export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cream-300/60 bg-cream-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-[0.18em] text-brand-700">
          FULTON
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium text-ink-700 md:flex">
          {['Shop', 'Comfort Quiz', 'Reviews', 'FAQ'].map((label) => (
            <button
              key={label}
              type="button"
              onClick={(e) => e.preventDefault()}
              className="cursor-default bg-transparent transition hover:text-brand-700"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-ink-700">
          <button
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-cream-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </button>
          <button
            aria-label="Account"
            className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-cream-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
