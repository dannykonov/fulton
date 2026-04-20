import { asset } from '../lib/asset'

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
        </svg>
      ))}
    </div>
  )
}

const TESTIMONIALS = [
  {
    initials: 'MR',
    quote:
      'I\u2019m on my feet 12 hours a day. Fulton is the first thing that makes me feel better at the end of a shift, not worse.',
    name: 'Maya R.',
    role: 'ICU Nurse · Verified buyer',
  },
  {
    initials: 'DP',
    quote:
      'My morning runs feel lighter and my evening walks feel longer. I forget I\u2019m wearing them \u2014 in the best way.',
    name: 'Daniel P.',
    role: 'Marathoner · Verified buyer',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.15fr] md:gap-14 lg:py-20">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-cream-200">
            <img
              src={asset('images/fulton-lifestyle.png')}
              alt="A customer wearing Fulton house shoes at home"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 bottom-6 hidden rounded-2xl bg-white/95 p-4 shadow-xl shadow-brand-900/10 ring-1 ring-cream-300 sm:block">
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-sm font-semibold text-brand-800">4.8/5</span>
            </div>
            <p className="mt-1 text-xs text-ink-700">2,500+ verified reviews</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Real people. Real strides.
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            From morning coffee to closing shift
          </h2>
          <p className="mt-4 max-w-lg text-base text-ink-700">
            Worn by nurses, runners, parents, and teachers — Fulton is built to
            help every kind of foot feel its best, in every kind of day.
          </p>

          <div className="mt-7 grid gap-4">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.initials}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cream-300"
              >
                <Stars />
                <blockquote className="mt-3 text-base leading-snug text-brand-800 md:text-lg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-sm">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-200 text-xs font-semibold text-brand-800">
                    {t.initials}
                  </span>
                  <span>
                    <span className="font-semibold text-brand-800">{t.name}</span>{' '}
                    <span className="text-ink-500">· {t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
