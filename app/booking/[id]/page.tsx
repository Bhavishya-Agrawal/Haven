import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BookingDetails } from '@/components/BookingDetails'

export default function BookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <BookingDetails id={params.id} />
      </main>
      <Footer />
    </div>
  )
}

