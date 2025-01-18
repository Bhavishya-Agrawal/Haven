import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { RecommendationsSection } from '@/components/RecommendationsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <RecommendationsSection />
      </main>
      <Footer />
    </div>
  )
}

