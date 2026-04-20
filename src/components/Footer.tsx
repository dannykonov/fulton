export default function Footer() {
  const cols = [
    {
      title: 'Shop',
      links: ['Insoles', 'House Shoes', 'New Arrivals', 'Gift Cards', 'Comfort Quiz'],
    },
    {
      title: 'Help',
      links: ['Contact', 'Shipping', 'Returns', 'Sizing Guide', 'FAQ'],
    },
    {
      title: 'About',
      links: ['Our Story', 'Made in Portugal', 'Sustainability', 'Press', 'Reviews'],
    },
  ]

  return (
    <footer id="faq" className="bg-brand-800 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-bold tracking-[0.2em]">FULTON</p>
            <p className="mt-4 max-w-sm text-sm text-cream-200/85">
              Premium insoles and house shoes designed to give every step the
              comfort, alignment, and confidence it deserves.
            </p>

            <form className="mt-6 flex w-full max-w-sm overflow-hidden rounded-full bg-brand-700 ring-1 ring-cream-200/15">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-cream-200/60 focus:outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-gold-400 px-5 text-sm font-semibold text-brand-900 transition hover:bg-gold-300"
              >
                Join
              </button>
            </form>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream-50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cream-200/85">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-cream-50">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream-200/15 pt-6 text-xs text-cream-200/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Fulton Goods Co. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream-50">Privacy</a>
            <a href="#" className="hover:text-cream-50">Terms</a>
            <a href="#" className="hover:text-cream-50">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
