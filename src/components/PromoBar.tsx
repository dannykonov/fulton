import { useEffect, useState } from 'react'

function format(seconds: number) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}

export default function PromoBar() {
  const [remaining, setRemaining] = useState(12 * 3600 + 29 * 60 + 9)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-brand-700 text-cream-50">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-xs font-medium sm:text-sm">
        <svg
          aria-hidden
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gold-300"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <span className="hidden sm:inline">
          Limited release — ships before we restock
        </span>
        <span className="sm:hidden">Limited release</span>
        <span className="font-mono tabular-nums text-cream-200">
          {format(remaining)}
        </span>
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="ml-2 cursor-default rounded-full bg-gold-400 px-4 py-1.5 text-xs font-semibold text-brand-900 shadow-sm transition hover:bg-gold-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  )
}
