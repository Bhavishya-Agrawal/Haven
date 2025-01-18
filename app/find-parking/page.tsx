import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FindParkingResults } from '@/components/FindParkingResults'

export default function FindParkingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <FindParkingResults />
      </main>
      <Footer />
    </div>
  )
}

