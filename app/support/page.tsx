import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Support</h1>
        <p className="mb-4">Need help? We're here for you!</p>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc pl-5 mb-6">
          <li>How do I book a parking space?</li>
          <li>What if I need to cancel my reservation?</li>
          <li>How can I become a parking space owner?</li>
        </ul>
        <p className="mb-4">Can't find what you're looking for? Contact us directly:</p>
        <button className="bg-black text-white px-6 py-2 rounded">Contact Support</button>
      </main>
      <Footer />
    </div>
  )
}

