import { asset } from '../lib/asset'

function Badge({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-700">
      <span className="text-gold-500">{icon}</span>
      {children}
    </span>
  )
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-ink-800">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-700/10 text-brand-700">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  )
}

const PRESS = ['InStyle', 'Forbes', 'TODAY', 'Travel+Leisure', 'Wirecutter']

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
        </svg>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-12 lg:py-16">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Badge
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" /></svg>
              }
            >
              90-Day Comfort Guarantee
            </Badge>
            <Badge
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" /></svg>
              }
            >
              100,000+ Happy Customers
            </Badge>
          </div>

          <h1 className="mt-5 text-5xl leading-[1.05] font-semibold text-brand-800 md:text-6xl lg:text-7xl">
            Step into Comfort
            <br />
            and Confidence
          </h1>

          <p className="mt-5 max-w-md text-base text-ink-700 md:text-lg">
            Premium insoles and house shoes engineered for your best foot
            feeling — better posture, lighter steps, every day.
          </p>

          <ul className="mt-6 grid max-w-md gap-2.5">
            <CheckRow>
              <strong className="font-semibold text-brand-800">
                97% feel better within 30 days
              </strong>{' '}
              — backed by our 90-day comfort promise.
            </CheckRow>
            <CheckRow>
              Doctor-designed arch support that puts your stride back in line.
            </CheckRow>
            <CheckRow>
              Hand-finished in small batches in Porto, Portugal.
            </CheckRow>
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="inline-flex cursor-default items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-brand-800"
            >
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>

            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm font-semibold text-brand-800">
                4.8/5
              </span>
              <span className="text-sm text-ink-500">· 2,500+ reviews</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream-300/70 pt-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
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
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 hidden h-72 w-72 rounded-full bg-cream-200/60 blur-3xl md:block" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-200 shadow-[0_30px_60px_-20px_rgba(15,77,58,0.25)]">
            <img
              src={asset('images/fulton-hero.png')}
              alt="A pair of Fulton house-shoe slides on natural linen"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-cream-300">
              <div className="text-xl font-semibold text-brand-800">97%</div>
              <div className="text-[11px] text-ink-500">Feel better fast</div>
            </div>
            <div className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-cream-300">
              <div className="flex items-center justify-center gap-1 text-xl font-semibold text-brand-800">
                4.8
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gold-500"
                >
                  <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
                </svg>
              </div>
              <div className="text-[11px] text-ink-500">2,500+ reviews</div>
            </div>
            <div className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-cream-300">
              <div className="text-xl font-semibold text-brand-800">90-day</div>
              <div className="text-[11px] text-ink-500">Comfort promise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
