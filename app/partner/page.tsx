import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Partner with Us</h1>
        <p className="mb-4">Join our network of parking space owners and start earning today!</p>
        <ul className="list-disc pl-5 mb-6">
          <li>List your parking space</li>
          <li>Set your own rates and availability</li>
          <li>Earn money from your unused parking space</li>
        </ul>
        <button className="bg-black text-white px-6 py-2 rounded">Become a Partner</button>
      </main>
      <Footer />
    </div>
  )
}

