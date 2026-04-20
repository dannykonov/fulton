import { asset } from '../lib/asset'

const SCENARIOS = [
  {
    label: 'At Home',
    title: 'Made for the long way home.',
    body:
      'Slip into the House Shoe the moment you walk in — cork-and-suede comfort that turns "off the clock" into a feeling.',
    image: '/images/fulton-lifestyle.png',
    aspect: 'aspect-[4/5]',
  },
  {
    label: 'On the Weekend',
    title: 'Sunday strolls, sunlit patios.',
    body:
      'Light enough for the cafe down the street, supportive enough for the hours you spend there.',
    image: '/images/fulton-scenario-weekends.png',
    aspect: 'aspect-[4/3]',
  },
  {
    label: 'In Training',
    title: 'Stronger strides, every workout.',
    body:
      'Drop the Athletic Insole into your trainers and feel the energy return through every mile, rep, and shift.',
    image: '/images/fulton-scenario-training.png',
    aspect: 'aspect-[4/3]',
  },
  {
    label: 'At Work',
    title: 'Built into the shoes you already love.',
    body:
      'The Classic Insole slides into loafers, dress shoes, and sneakers — turning your everyday pair into your most supportive.',
    image: '/images/fulton-scenario-everyday.png',
    aspect: 'aspect-[4/5]',
  },
]

export default function Scenarios() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Wherever you stand
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-brand-800 md:text-5xl">
            Built for every kind of step.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            Athletic, dress, casual — at home, on the move, in training. One
            foundation, every occasion.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCENARIOS.map((s) => (
            <article
              key={s.label}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-300"
            >
              <div className={`relative ${s.aspect} overflow-hidden bg-cream-200`}>
                <img
                  src={asset(s.image)}
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
