import { useEffect, useState } from 'react'
import PromoBar from './components/PromoBar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import SocialProof from './components/SocialProof'
import Scenarios from './components/Scenarios'
import HowItWorks from './components/HowItWorks'
import ProductGrid from './components/ProductGrid'
import BenefitsSection from './components/BenefitsSection'
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'

function getRoute() {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const path = window.location.pathname.replace(base, '') || '/'
  if (path.startsWith('/product')) return 'product'
  return 'home'
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onPop = () => setRoute(getRoute())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route])

  return (
    <div className="flex min-h-screen flex-col">
      <PromoBar />
      <Header />
      <main className="flex-1">
        {route === 'product' ? (
          <ProductPage />
        ) : (
          <>
            <Hero />
            <TrustStrip />
            <SocialProof />
            <Scenarios />
            <HowItWorks />
            <ProductGrid />
            <BenefitsSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
