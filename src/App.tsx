import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { FeaturesSection } from "./components/sections/FeaturesSection"
import { HeroSection } from "./components/sections/HeroSection"

function App() {
  return (
    <div className="min-h-screen w-full bg-[#26262B]">
      <Header />
      <div className="hero-gradient">
        <HeroSection />
      </div>

      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default App
