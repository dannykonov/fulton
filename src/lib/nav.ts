export function hrefFor(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}`
}

export function navigate(path: string) {
  const url = hrefFor(path)
  if (window.location.pathname === url) return
  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
