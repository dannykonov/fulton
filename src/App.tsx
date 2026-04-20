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

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <PromoBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <SocialProof />
        <Scenarios />
        <HowItWorks />
        <ProductGrid />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
