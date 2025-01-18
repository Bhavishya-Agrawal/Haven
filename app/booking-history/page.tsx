import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BookingHistory } from '@/components/BookingHistory'

export default function BookingHistoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <BookingHistory />
      </main>
      <Footer />
    </div>
  )
}

