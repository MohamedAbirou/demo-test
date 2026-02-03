import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { FeaturesSection } from "./components/sections/FeaturesSection"
import { HeroSection } from "./components/sections/HeroSection"
import { SocialProofSection } from "./components/sections/SocialProofSection"
import { TestimonialsSection } from "./components/sections/TestimonialsSection"

function App() {
  return (
    <div className="min-h-screen w-full bg-[#26262B]">
      <Header />
      <div className="hero-gradient">
        <HeroSection />
      </div>

      <FeaturesSection />
      <SocialProofSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default App
