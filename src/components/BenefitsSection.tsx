const BENEFITS = [
  {
    title: 'Walk Tall, Move Aligned',
    body:
      'Anatomical arch contours guide your stride into its natural posture — so your hips, knees, and back move the way they were designed to.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="m6 9 6-6 6 6" />
        <path d="m6 15 6 6 6-6" />
      </svg>
    ),
  },
  {
    title: 'End the Day with Energy',
    body:
      'Pressure-mapped cushioning spreads each step\u2019s impact across the whole foot, so 12 hours on your feet feels like 6.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m13 2-3 9h7l-9 11 3-9H4z" />
      </svg>
    ),
  },
  {
    title: 'Step with Confidence',
    body:
      'A deep heel cup and balance-tuned outsole keep every stride sure-footed \u2014 on hardwood, tile, trail, or pavement.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

export default function BenefitsSection() {
  return (
    <section id="reviews" className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Why Fulton
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Your best foot feeling — engineered.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            Every Fulton starts with a question: what would it take to make
            every step feel a little better? Here&rsquo;s what we found.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-cream-300"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cream-100 text-brand-700">
                {b.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-800">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl bg-brand-700 px-8 py-10 text-cream-50 sm:px-12 sm:py-14">
          <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                Step into your best foot feeling.
              </h3>
              <p className="mt-3 max-w-md text-sm text-cream-200 sm:text-base">
                Try Fulton for 90 days. If they don&rsquo;t become your
                favorite thing you put on every morning, send them back &mdash;
                we&rsquo;ll cover return shipping.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="cursor-default rounded-full bg-gold-400 px-6 py-3 text-center text-sm font-semibold text-brand-900 transition hover:bg-gold-300"
              >
                Shop Now
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
