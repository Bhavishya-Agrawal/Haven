import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OwnerConfirmation } from '@/components/OwnerConfirmation'

export default function OwnerConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <OwnerConfirmation id={params.id} />
      </main>
      <Footer />
    </div>
  )
}

