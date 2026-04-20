import { asset } from '../lib/asset'

type Product = {
  id: string
  name: string
  tagline: string
  price: number
  compareAt?: number
  rating: number
  reviewCount: number
  image: string
  badge?: { label: string; tone: 'best' | 'top' | 'new' }
  cta: string
}

const PRODUCTS: Product[] = [
  {
    id: 'classic',
    name: 'The Classic Insole',
    tagline:
      'Slip them into any shoe you already own and walk taller from the very first step.',
    price: 48,
    compareAt: 60,
    rating: 5,
    reviewCount: 1840,
    image: '/images/fulton-classic-insole.png',
    badge: { label: 'Best Seller', tone: 'best' },
    cta: 'Shop Now',
  },
  {
    id: 'athletic',
    name: 'The Athletic Insole',
    tagline:
      'Energy-return cushioning that keeps your stride strong through every mile and every shift.',
    price: 48,
    compareAt: 60,
    rating: 5,
    reviewCount: 920,
    image: '/images/fulton-athletic-insole.png',
    badge: { label: 'Top Rated', tone: 'top' },
    cta: 'Shop Now',
  },
  {
    id: 'house',
    name: 'The House Shoe',
    tagline:
      'Cork-and-suede comfort that turns your home into your favorite place to land.',
    price: 120,
    rating: 5,
    reviewCount: 412,
    image: '/images/fulton-house-shoe.png',
    badge: { label: 'New', tone: 'new' },
    cta: 'Select Options',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
        </svg>
      ))}
    </div>
  )
}

function badgeStyles(tone: 'best' | 'top' | 'new') {
  switch (tone) {
    case 'best':
      return 'bg-brand-700 text-cream-50'
    case 'top':
      return 'bg-cream-200 text-brand-800 ring-1 ring-cream-300'
    case 'new':
      return 'bg-gold-400 text-brand-900'
  }
}

export default function ProductGrid() {
  return (
    <section id="shop" className="bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
              Shop the Collection
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
              Find your perfect step.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            View all →
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-300 transition hover:shadow-lg hover:shadow-brand-900/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
                {p.badge && (
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold ${badgeStyles(
                      p.badge.tone,
                    )}`}
                  >
                    {p.badge.label}
                  </span>
                )}
                <img
                  src={asset(p.image)}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-brand-800">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-ink-700">{p.tagline}</p>

                <div className="mt-3 flex items-center gap-2">
                  <Stars />
                  <span className="text-xs text-ink-500">
                    ({p.reviewCount.toLocaleString()})
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-brand-800">
                    ${p.price}
                  </span>
                  {p.compareAt && (
                    <span className="text-sm text-ink-500 line-through">
                      ${p.compareAt}
                    </span>
                  )}
                </div>

                <button className="mt-5 w-full rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-cream-50 transition hover:bg-brand-800">
                  {p.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 rounded-full bg-cream-100 px-6 py-3 text-sm font-medium text-brand-700 ring-1 ring-cream-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gold-500">
            <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Trusted by over 100,000 customers
        </div>
      </div>
    </section>
  )
}
