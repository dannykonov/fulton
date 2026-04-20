# Fulton

A modern ecommerce product page built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | What it does                            |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start the Vite dev server (HMR enabled) |
| `npm run build`   | Type-check and build for production     |
| `npm run preview` | Preview the production build locally    |
| `npm run lint`    | Run ESLint                              |

## Structure

```
src/
├── components/
│   ├── Header.tsx        # Sticky nav with cart/account/search
│   ├── ProductPage.tsx   # Gallery, variants, price, CTA, accordions
│   └── Footer.tsx        # Multi-column footer
├── App.tsx               # Page composition
├── main.tsx              # React entry point
└── index.css             # Tailwind v4 + theme tokens
```

## Customizing the product

Edit the `PRODUCT` object near the top of `src/components/ProductPage.tsx` to change:

- Name, tagline, description
- Price and compare-at price
- Color and size variants
- Gallery images (any URL works — currently using Unsplash)
- Highlight bullets

## Theme

Tailwind v4 tokens live in `src/index.css` under the `@theme` block:

- `--color-ink-*` — neutral grayscale (50 → 900)
- `--color-accent-*` — orange accent
- `--font-sans` — Inter (loaded from Google Fonts in `index.html`)

Adjust those values to rebrand the entire site instantly.
