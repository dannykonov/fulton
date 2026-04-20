function FootSilhouette({ misaligned }: { misaligned?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 200"
      className={`h-44 w-auto ${misaligned ? 'text-rose-300' : 'text-brand-300'}`}
      fill="currentColor"
      aria-hidden
    >
      <ellipse cx="60" cy="20" rx="18" ry="18" />
      <path
        d={
          misaligned
            ? 'M60 38 C 30 60, 25 100, 40 140 C 48 165, 50 185, 50 195 L 70 195 C 70 180, 78 160, 85 140 C 100 100, 90 60, 60 38 Z'
            : 'M60 38 C 38 60, 38 100, 50 140 C 56 165, 56 185, 55 195 L 65 195 C 64 180, 64 165, 70 140 C 82 100, 82 60, 60 38 Z'
        }
      />
    </svg>
  )
}

const HELPS = [
  {
    title: 'Custom Arch Support',
    outcome: 'Better posture, every step.',
    body:
      'A doctor-designed arch contour distributes your weight evenly across the whole foot, so your hips, knees, and back finally line up the way they should.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18c4-10 14-10 18 0" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
  {
    title: 'Deep Heel Cup',
    outcome: 'Sure-footed, stride after stride.',
    body:
      'A sculpted heel pocket locks your foot into its strongest position — meaning less wobble, less rolling, and more confident steps on every surface.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 0 1 16 0v6H4z" />
      </svg>
    ),
  },
  {
    title: 'Cool, Cushioned Cork',
    outcome: 'Fresh feet from sunrise to sundown.',
    body:
      'Natural cork plus plant-based foam wicks moisture and bounces back after every step — so your feet stay dry, supported, and energized all day.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="14" r="4" />
        <circle cx="14" cy="9" r="4" />
        <circle cx="17" cy="16" r="3" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            The Fulton Difference
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Built for your best step.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            Most insoles just cushion. Fulton rebuilds the foundation your feet
            stand on — so every step feels stronger, lighter, and more like you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Comparison */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cream-300">
            <div className="grid grid-cols-2 items-end gap-6">
              <div className="flex flex-col items-center text-center">
                <FootSilhouette misaligned />
                <p className="mt-3 text-sm font-semibold text-rose-500">
                  Without Fulton
                </p>
                <p className="text-xs text-ink-500">Off-balance posture</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FootSilhouette />
                <p className="mt-3 text-sm font-semibold text-brand-700">
                  With Fulton
                </p>
                <p className="text-xs text-ink-500">Aligned, confident stride</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-cream-100 py-2 text-xs font-medium text-brand-700">
              <svg
                aria-hidden
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              Fulton restores your natural posture from the ground up
            </div>
          </div>

          {/* How Fulton helps */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cream-300">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-800">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gold-500">
                <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
              </svg>
              Why Fulton Works
            </h3>

            <ul className="mt-5 space-y-5">
              {HELPS.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream-100 text-brand-700">
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-800">
                      {h.title}
                      <span className="ml-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-500">
                        {h.outcome}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-ink-700">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-cream-100 p-4">
              <div>
                <p className="text-sm font-semibold text-brand-800">
                  90-Day Comfort Promise
                </p>
                <p className="text-xs text-ink-700">
                  Wear them, walk in them, run in them. If they aren&rsquo;t
                  your new favorite, we&rsquo;ll take them back.
                </p>
              </div>
              <a
                href="#shop"
                className="shrink-0 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-semibold text-cream-50 transition hover:bg-brand-800"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
          {[
            'Made in Small Batches in Porto, Portugal',
            'Designed by Doctors',
            'Ethically Sourced',
          ].map((label) => (
            <span key={label} className="inline-flex items-center gap-2">
              <svg
                aria-hidden
                width="8"
                height="8"
                viewBox="0 0 8 8"
                className="text-gold-500"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
