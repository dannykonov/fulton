import { useEffect, useMemo, useState } from 'react'
import { asset } from '../lib/asset'

// ────────────────────────────────────────────────────────────────────────────
// Small reusable bits
// ────────────────────────────────────────────────────────────────────────────

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
        </svg>
      ))}
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
      {children}
    </p>
  )
}

// Inline line-icon set (Insight 1/Fix 01: replace emojis with clean line icons)
const Icon = {
  Doctor: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M3 3h3" />
      <path d="M18 3h3" />
      <path d="M12 15v3a3 3 0 0 0 6 0v-1" />
      <circle cx="18" cy="14" r="2" />
    </svg>
  ),
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Hammer: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 6 8.5 11.5" />
      <path d="m21 11-6-6-3 3 6 6z" />
      <path d="m3 21 6.5-6.5" />
      <path d="M9 14.5 12.5 18" />
    </svg>
  ),
  Mold: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 17c4-10 14-10 18 0" />
      <path d="M3 17h18" />
      <path d="M7 17v-2" />
      <path d="M17 17v-2" />
    </svg>
  ),
  Clock: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Leaf: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 0 14h-2z" />
      <path d="M4 4 20 20" />
    </svg>
  ),
  Wave: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </svg>
  ),
  Footprint: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="14" rx="5" ry="7" />
      <circle cx="7.5" cy="5" r="1.5" />
      <circle cx="11" cy="3.5" r="1.3" />
      <circle cx="14.5" cy="3.5" r="1.3" />
      <circle cx="17.5" cy="5.5" r="1.3" />
    </svg>
  ),
  Spark: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="m15.5 15.5 2.5 2.5" />
      <path d="m6 18 2.5-2.5" />
      <path d="m15.5 8.5 2.5-2.5" />
    </svg>
  ),
  Grip: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 18h16" />
      <path d="M4 18v-3" />
      <path d="M8 18v-5" />
      <path d="M12 18v-7" />
      <path d="M16 18v-5" />
      <path d="M20 18v-3" />
    </svg>
  ),
  Truck: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="17.5" cy="18" r="1.7" />
    </svg>
  ),
  HSA: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M12 14v3" />
      <path d="M10.5 15.5h3" />
    </svg>
  ),
  Plus: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  ),
  Minus: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
}

// ────────────────────────────────────────────────────────────────────────────
// HERO — leads with credibility, stat, guarantee, and outcome language
// (Insight 1/Fix 01 + Insight 3/Fix 03)
// ────────────────────────────────────────────────────────────────────────────

const COLORS = [
  { id: 'forest', name: 'Forest Stripe', swatch: 'linear-gradient(90deg,#f5edd8 35%,#0f4d3a 35% 45%,#f5edd8 45% 55%,#0f4d3a 55% 65%,#f5edd8 65%)' },
  { id: 'sand', name: 'Sand', swatch: '#e9dcb8' },
  { id: 'stone', name: 'Stone', swatch: '#bdb6a6' },
] as const

const SIZES_W = [5, 6, 7, 8, 9, 10, 11, 12]
const SIZES_M = [7, 8, 9, 10, 11, 12, 13, 14]

const GALLERY = [
  {
    src: '/images/slide-hero-main.png',
    alt: 'Pair of Fulton Slide cork sandals on linen with eucalyptus',
  },
  {
    src: '/images/slide-gallery-topdown.png',
    alt: 'Top-down view of The Slide showing the knit strap',
  },
  {
    src: '/images/slide-gallery-footbed.png',
    alt: 'Macro of the molded cork footbed and embossed Fulton mark',
  },
  {
    src: '/images/slide-gallery-side.png',
    alt: 'Side profile of The Slide showing arch and brass FULTON plate',
  },
]

function HeroBuyBox() {
  const [activeImg, setActiveImg] = useState(0)
  const [color, setColor] = useState<(typeof COLORS)[number]['id']>('forest')
  const [gender, setGender] = useState<'women' | 'men'>('women')
  const [size, setSize] = useState<number | null>(null)
  const sizes = gender === 'women' ? SIZES_W : SIZES_M

  const sizeChosen = size !== null

  return (
    <section className="bg-cream-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-12 lg:py-14">
        {/* Gallery */}
        <div className="md:sticky md:top-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-200 shadow-[0_30px_60px_-20px_rgba(15,77,58,0.25)]">
            <img
              src={asset(GALLERY[activeImg].src)}
              alt={GALLERY[activeImg].alt}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-800 backdrop-blur">
              New · The Slide
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {GALLERY.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setActiveImg(i)}
                aria-label={`Show image ${i + 1}`}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200 ring-1 transition ${
                  activeImg === i
                    ? 'ring-2 ring-brand-700'
                    : 'ring-cream-300 hover:ring-brand-300'
                }`}
              >
                <img
                  src={asset(g.src)}
                  alt={g.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Buy box — leads with credibility (Fix 03) and value (Fix 01) */}
        <div>
          {/* Credibility row first — not buried at the bottom */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-brand-700">
            <span className="inline-flex items-center gap-1.5">
              <Icon.Doctor className="h-4 w-4 text-gold-500" />
              Designed with Doctors
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon.Hammer className="h-4 w-4 text-gold-500" />
              Made in Porto, Portugal
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon.Shield className="h-4 w-4 text-gold-500" />
              90-Day Comfort Guarantee
            </span>
          </div>

          <h1 className="mt-4 text-5xl leading-[1.05] font-semibold text-brand-800 md:text-6xl">
            The Slide
          </h1>
          <p className="mt-3 max-w-md text-base text-ink-700 md:text-lg">
            All-day support, in your favorite warm-weather shoe.
          </p>

          {/* Reviews + price */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm font-semibold text-brand-800">4.8</span>
              <a
                href="#reviews"
                className="text-sm text-ink-500 underline-offset-4 hover:underline"
              >
                312 reviews
              </a>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-brand-800">$98</span>
              <span className="text-sm text-ink-500 line-through">$120</span>
              <span className="rounded-full bg-gold-400/40 px-2 py-0.5 text-[11px] font-semibold text-brand-800">
                Save $22
              </span>
            </div>
          </div>

          {/* Lead with the stat (Fix 01) */}
          <div className="mt-5 grid gap-2.5 rounded-2xl bg-white/70 p-4 ring-1 ring-cream-300">
            <p className="flex items-start gap-2.5 text-sm text-ink-800">
              <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>
                <strong className="font-semibold text-brand-800">
                  97% feel better within 30 days
                </strong>{' '}
                — backed by our 90-day comfort promise.
              </span>
            </p>
            <p className="flex items-start gap-2.5 text-sm text-ink-800">
              <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>
                Molds to your foot in 60 seconds — the same support custom
                orthotics give you.
              </span>
            </p>
            <p className="flex items-start gap-2.5 text-sm text-ink-800">
              <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>
                Open-knit weave moves air across your foot so you stay cool,
                even on long days.
              </span>
            </p>
          </div>

          {/* Color */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
              Color:{' '}
              <span className="text-brand-800">
                {COLORS.find((c) => c.id === color)?.name}
              </span>
            </p>
            <div className="mt-2 flex gap-2.5">
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setColor(c.id)}
                  aria-label={c.name}
                  className={`h-10 w-14 rounded-xl ring-1 transition ${
                    color === c.id
                      ? 'ring-2 ring-brand-700'
                      : 'ring-cream-300 hover:ring-brand-300'
                  }`}
                  style={{ background: c.swatch }}
                />
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
              Fit
            </p>
            <div className="mt-2 inline-flex rounded-full bg-cream-200 p-1 ring-1 ring-cream-300">
              {(['women', 'men'] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => {
                    setGender(g)
                    setSize(null)
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
                    gender === g
                      ? 'bg-white text-brand-800 shadow-sm'
                      : 'text-ink-700 hover:text-brand-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                Size{size !== null && <span className="ml-1 text-brand-800">· US {size}</span>}
              </p>
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="cursor-default text-xs font-medium text-brand-700 underline-offset-4 hover:underline"
              >
                Size chart
              </button>
            </div>
            <div className="mt-2 grid grid-cols-8 gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`grid h-11 place-items-center rounded-xl text-sm font-medium ring-1 transition ${
                    size === s
                      ? 'bg-brand-700 text-cream-50 ring-brand-700'
                      : 'bg-white text-ink-800 ring-cream-300 hover:ring-brand-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="mt-6 inline-flex w-full cursor-default items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-4 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-brand-800"
          >
            {sizeChosen ? `Add to bag · $98` : 'Select a size'}
            <Icon.Arrow className="h-4 w-4" />
          </button>

          {/* Visible guarantees / payment options (Fix 01: surface the guarantee) */}
          <ul className="mt-5 grid gap-2 text-xs text-ink-700 sm:grid-cols-3">
            <li className="inline-flex items-center gap-2">
              <Icon.Truck className="h-4 w-4 text-brand-700" />
              Free shipping over $130
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon.Shield className="h-4 w-4 text-brand-700" />
              90-day comfort promise
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon.HSA className="h-4 w-4 text-brand-700" />
              HSA / FSA eligible
            </li>
          </ul>

          {/* Anchor stats (Fix 01: anchor the top of the page with stats) */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white px-3 py-3 text-center shadow-sm ring-1 ring-cream-300">
              <div className="text-xl font-semibold text-brand-800">97%</div>
              <div className="text-[11px] text-ink-500">feel better fast</div>
            </div>
            <div className="rounded-2xl bg-white px-3 py-3 text-center shadow-sm ring-1 ring-cream-300">
              <div className="text-xl font-semibold text-brand-800">100k+</div>
              <div className="text-[11px] text-ink-500">happy customers</div>
            </div>
            <div className="rounded-2xl bg-white px-3 py-3 text-center shadow-sm ring-1 ring-cream-300">
              <div className="flex items-center justify-center gap-1 text-xl font-semibold text-brand-800">
                4.8
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gold-500"
                >
                  <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
                </svg>
              </div>
              <div className="text-[11px] text-ink-500">312 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// PRESS — surfaces credibility immediately (Fix 03)
// ────────────────────────────────────────────────────────────────────────────

function PressStrip() {
  const PRESS = ['InStyle', 'Forbes', 'Outside', 'Travel+Leisure', 'Wirecutter']
  return (
    <section className="border-y border-cream-300/70 bg-cream-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          As featured in
        </span>
        {PRESS.map((p) => (
          <span
            key={p}
            className="text-base font-semibold tracking-tight text-brand-800"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// CREDIBILITY STRIP — Fix 03: lead with credibility, line icons (Fix 01)
// ────────────────────────────────────────────────────────────────────────────

function CredibilityStrip() {
  const ITEMS = [
    {
      label: 'Designed with Doctors',
      sub: 'Clinical input',
      icon: <Icon.Doctor className="h-6 w-6" />,
    },
    {
      label: 'Proven Pain Relief',
      sub: '97% feel better in 30 days',
      icon: <Icon.Shield className="h-6 w-6" />,
    },
    {
      label: 'Handcrafted Quality',
      sub: 'Made in Porto',
      icon: <Icon.Hammer className="h-6 w-6" />,
    },
    {
      label: 'Custom Molding Tech',
      sub: 'Cork shapes to your arch',
      icon: <Icon.Mold className="h-6 w-6" />,
    },
    {
      label: '90-Day Guarantee',
      sub: 'Risk-free trial',
      icon: <Icon.Clock className="h-6 w-6" />,
    },
  ]
  return (
    <section className="bg-cream-200">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
        {ITEMS.map((it) => (
          <div
            key={it.label}
            className="flex flex-col items-center text-center text-brand-800"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-400/30 text-brand-700">
              {it.icon}
            </span>
            <p className="mt-2 text-sm font-semibold">{it.label}</p>
            <p className="text-[11px] text-ink-500">{it.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// OUTCOMES — Fix 02: rewrite every feature in outcome / specific language
// ────────────────────────────────────────────────────────────────────────────

function Outcomes() {
  const items = [
    {
      icon: <Icon.Footprint className="h-5 w-5" />,
      title: 'Step into all-day comfort',
      body: 'Pressure-mapped cushioning spreads each step\u2019s impact across the whole foot, so 12 hours on your feet feels like 6.',
    },
    {
      icon: <Icon.Mold className="h-5 w-5" />,
      title: 'Custom support in 60 seconds',
      body: 'Cork molds to your unique arch the moment you walk in them — the same support custom orthotics give you, without the $400 fitting.',
    },
    {
      icon: <Icon.Wave className="h-5 w-5" />,
      title: 'Stay cool through long days',
      body: 'An open-knit weave channels air across the top of your foot, so heat and moisture move out instead of pooling in.',
    },
    {
      icon: <Icon.Grip className="h-5 w-5" />,
      title: 'Confident on any surface',
      body: 'A deep heel cup locks your foot into its strongest position, and a low-profile rubber sole grips wet patio, pool deck, and hardwood alike.',
    },
  ]
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What you actually feel</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Designed for the way your day actually moves.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            Every feature was rebuilt around a single question: what would make
            this the most comfortable shoe you own?
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cream-300"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-cream-100 text-brand-700">
                {it.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-800">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// 60-SECOND MOLD — explains the WHY (Fix 02: don't just claim, explain)
// ────────────────────────────────────────────────────────────────────────────

function MoldSteps() {
  const steps = [
    {
      n: '01',
      title: 'Slip them on',
      body: 'The footbed feels firm at first. That\u2019s the cork, ready to learn the shape of your arch.',
    },
    {
      n: '02',
      title: 'Walk for 60 seconds',
      body: 'Body heat softens the cork. Your weight shapes the contour to match exactly how you stand.',
    },
    {
      n: '03',
      title: 'Walk in support that\u2019s yours',
      body: 'The footbed sets to a perfect, personal mold — the same kind of support custom orthotics charge $400 for.',
    },
  ]
  return (
    <section className="bg-cream-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-20">
        <div className="relative">
          <div className="aspect-[5/4] overflow-hidden rounded-3xl bg-cream-200 shadow-[0_30px_60px_-20px_rgba(15,77,58,0.25)]">
            <img
              src={asset('/images/slide-gallery-footbed.png')}
              alt="Close-up of cork footbed forming to the foot"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-cream-300 sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">
              Custom Molding Tech
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-800">
              Sets in 60 seconds · supports for years
            </p>
          </div>
        </div>

        <div>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Custom orthotic support — in the time it takes to brew coffee.
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink-700">
            Most slides cushion. Ours rebuild the foundation your foot stands
            on. Here&rsquo;s exactly how that happens — no fitting appointment,
            no $400 prescription.
          </p>
          <ol className="mt-8 space-y-5">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cream-300"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-700 text-sm font-semibold text-cream-50">
                  {s.n}
                </span>
                <div>
                  <p className="text-base font-semibold text-brand-800">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-700">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// SCENARIOS — speak to everyone (Insight 3): athletic, dress, casual, at-home
// ────────────────────────────────────────────────────────────────────────────

function Scenarios() {
  const scenes = [
    {
      label: 'At Home',
      title: 'Hardwood mornings, soft landings.',
      body: 'Slip them on with coffee in hand and your feet feel held — not flattened by the floor.',
      img: '/images/slide-lifestyle-home.png',
      aspect: 'aspect-[4/5]',
    },
    {
      label: 'On the Patio',
      title: 'For the long, slow afternoons.',
      body: 'Garden, grill, or porch — the rubber sole grips wet stone and the cork keeps you upright through hours of standing.',
      img: '/images/slide-lifestyle-patio.png',
      aspect: 'aspect-[4/3]',
    },
    {
      label: 'On the Move',
      title: 'Boardwalks, beach trips, errands.',
      body: 'Light enough for the walk to the car, supportive enough for a full day on your feet.',
      img: '/images/slide-lifestyle-walk.png',
      aspect: 'aspect-[4/3]',
    },
    {
      label: 'Dressed Up',
      title: 'A warm-weather shoe that earns linen.',
      body: 'Cream knit and brushed brass quietly upgrade tailored trousers, sundresses, and shirt-and-shorts evenings.',
      img: '/images/slide-lifestyle-office.png',
      aspect: 'aspect-[4/5]',
    },
  ]

  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Made for everyone, every kind of day</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Worn by every kind of foot.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            Athletic, dress, casual — at home, in the garden, on the boardwalk.
            One shoe, every kind of day.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s) => (
            <article
              key={s.label}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-300"
            >
              <div className={`relative ${s.aspect} overflow-hidden bg-cream-200`}>
                <img
                  src={asset(s.img)}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-800 backdrop-blur">
                  {s.label}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-brand-800">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-700">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// MATERIALS — explain WHY each material matters (Fix 02)
// ────────────────────────────────────────────────────────────────────────────

function Materials() {
  const items = [
    {
      title: 'Portuguese cork midsole',
      claim: 'Why it matters',
      body: 'Naturally elastic and dense — softens to your foot without flattening over time, so your support gets better the longer you wear them.',
      icon: <Icon.Mold className="h-5 w-5" />,
    },
    {
      title: 'Open-knit cotton strap',
      claim: 'Why it matters',
      body: 'Hugs the foot without trapping heat. Knit (not solid leather) lets air move so your skin stays dry on long, warm days.',
      icon: <Icon.Wave className="h-5 w-5" />,
    },
    {
      title: 'Vegan suede footbed',
      claim: 'Why it matters',
      body: 'Soft contact layer that grips your foot a little more every step, so the slide stays put — no scuff, no slap.',
      icon: <Icon.Footprint className="h-5 w-5" />,
    },
    {
      title: 'Low-profile rubber outsole',
      claim: 'Why it matters',
      body: 'Patterned for traction on wet patio, pool deck, and hardwood. Confident grip with a slim, dressed-down silhouette.',
      icon: <Icon.Grip className="h-5 w-5" />,
    },
  ]
  return (
    <section className="bg-brand-800 text-cream-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Materials that earn their place
          </p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Every layer is here for a reason.
          </h2>
          <p className="mt-4 max-w-md text-base text-cream-200">
            We don&rsquo;t list materials — we explain what each one does for
            you, so you know exactly what you&rsquo;re standing on.
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-3xl ring-1 ring-cream-50/15 lg:block">
            <img
              src={asset('/images/slide-gallery-side.png')}
              alt="Side profile detail of The Slide"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl bg-brand-700/60 p-6 ring-1 ring-cream-50/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-brand-900">
                {it.icon}
              </div>
              <p className="mt-4 text-base font-semibold">{it.title}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                {it.claim}
              </p>
              <p className="mt-2 text-sm text-cream-200">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// REVIEWS — diverse customers, outcome language (Insight 3)
// ────────────────────────────────────────────────────────────────────────────

function Reviews() {
  const reviews = [
    {
      title: 'My morning floor pain is gone',
      body: 'I have plantar fasciitis. After two weeks in The Slide, my first steps out of bed stopped hurting. I didn\u2019t expect a sandal to do that.',
      name: 'Maya R.',
      role: 'ICU nurse · Verified buyer',
      initials: 'MR',
    },
    {
      title: 'Finally, sandals my dad will wear',
      body: 'My father is 67 and stubborn about shoes. He\u2019s worn these every day for a month. He says his lower back has stopped barking.',
      name: 'Daniel P.',
      role: 'Verified buyer',
      initials: 'DP',
    },
    {
      title: 'Walked 8 miles in Lisbon, no pain',
      body: 'I expected blisters. I got nothing. The cork really does shape to your foot — by day three they felt custom-made for me.',
      name: 'Aïsha K.',
      role: 'Traveler · Verified buyer',
      initials: 'AK',
    },
    {
      title: 'They look like nothing else I own',
      body: 'I wear them with linen pants to the office and with shorts on weekends. Cream and brass, the way a sandal should look.',
      name: 'Jordan S.',
      role: 'Designer · Verified buyer',
      initials: 'JS',
    },
  ]
  return (
    <section id="reviews" className="bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Real people. Real strides.</Eyebrow>
            <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
              Pain-free customers, all kinds of feet.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-cream-300">
            <span className="text-3xl font-semibold text-brand-800">4.8</span>
            <div>
              <Stars />
              <p className="text-xs text-ink-500">Based on 312 verified reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.initials}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cream-300"
            >
              <Stars />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
                {r.title}
              </p>
              <blockquote className="mt-3 flex-1 text-base leading-snug text-brand-800">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cream-200 text-xs font-semibold text-brand-800">
                  {r.initials}
                </span>
                <span>
                  <span className="font-semibold text-brand-800">{r.name}</span>{' '}
                  <span className="text-ink-500">· {r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// FAQ — simple accordion
// ────────────────────────────────────────────────────────────────────────────

function FAQ() {
  const items = [
    {
      q: 'How is The Slide different from a regular sandal?',
      a: 'Most sandals cushion. The Slide rebuilds the support beneath your arch. A doctor-designed cork footbed shapes to your foot in the first 60 seconds you wear them, so you walk in support that\u2019s personal — not generic.',
    },
    {
      q: 'Will they work for my arch type?',
      a: 'Yes. The cork footbed adapts to all arch types — flat, neutral, and high. The longer you wear them, the more they conform to your unique stride.',
    },
    {
      q: 'Are they comfortable right out of the box?',
      a: 'They feel firmer than a foam slide on day one — that\u2019s the cork ready to mold. Walk in them for an hour and they will feel noticeably softer; walk in them for a week and they will feel like yours.',
    },
    {
      q: 'Can I wear them outdoors?',
      a: 'Yes. The patterned rubber outsole is built for short outdoor wear — boardwalks, patios, the walk to the cafe. They handle wet stone and pool deck without slipping.',
    },
    {
      q: 'What\u2019s the 90-day comfort guarantee?',
      a: 'Wear them at home, on the patio, around town. If they don\u2019t become your favorite warm-weather shoe within 90 days, send them back. We cover return shipping.',
    },
    {
      q: 'Are they HSA / FSA eligible?',
      a: 'Yes — The Slide qualifies as supportive footwear under most HSA / FSA plans. We can provide documentation at checkout.',
    },
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <div className="text-center">
          <Eyebrow>Good questions, straight answers</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Everything you might want to know.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-cream-300/80 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-300">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={it.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-800">
                    {it.q}
                  </span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream-100 text-brand-700">
                    {isOpen ? (
                      <Icon.Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Icon.Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-ink-700">
                    {it.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// FINAL CTA banner
// ────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl bg-brand-700 px-8 py-10 text-cream-50 sm:px-12 sm:py-14">
          <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Risk-free for 90 days
              </p>
              <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Step into The Slide. If they don&rsquo;t become your favorite
                shoe, send them back.
              </h3>
              <p className="mt-3 max-w-md text-sm text-cream-200 sm:text-base">
                We cover return shipping, no questions asked. That&rsquo;s how
                certain we are about how they&rsquo;ll feel.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="cursor-default rounded-full bg-gold-400 px-6 py-3 text-center text-sm font-semibold text-brand-900 transition hover:bg-gold-300"
              >
                Add to bag — $98
              </button>
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="cursor-default rounded-full border border-cream-200/40 px-6 py-3 text-center text-sm font-semibold text-cream-50 transition hover:bg-brand-800"
              >
                Take the Comfort Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// STICKY MOBILE / DESKTOP ADD-TO-BAG BAR — keeps CTA visible (Fix 01)
// ────────────────────────────────────────────────────────────────────────────

function StickyBuyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="pointer-events-auto mx-auto max-w-7xl px-4 pb-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-cream-300 backdrop-blur sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="hidden h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-cream-200 sm:block">
              <img
                src={asset('/images/slide-hero-main.png')}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-brand-800">
                The Slide
              </p>
              <p className="truncate text-xs text-ink-500">
                Forest Stripe · 90-day comfort guarantee
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden text-sm font-semibold text-brand-800 sm:inline">
              $98
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="cursor-default rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-brand-800"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────────────

export default function ProductPage() {
  // Set a focused page title while on /product
  const title = useMemo(
    () => 'The Slide — Cork-Footbed Sandal | Fulton',
    [],
  )
  useEffect(() => {
    const prev = document.title
    document.title = title
    return () => {
      document.title = prev
    }
  }, [title])

  return (
    <>
      <HeroBuyBox />
      <PressStrip />
      <CredibilityStrip />
      <Outcomes />
      <MoldSteps />
      <Scenarios />
      <Materials />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <StickyBuyBar />
    </>
  )
}
