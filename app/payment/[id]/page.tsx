import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PaymentDetails } from '@/components/PaymentDetails'

export default function PaymentPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <PaymentDetails id={params.id} />
      </main>
      <Footer />
    </div>
  )
}

