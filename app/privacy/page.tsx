import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">At Haven, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-5 mb-6">
          <li>Personal information such as name, email, and phone number</li>
          <li>Location data when you use our services</li>
          <li>Payment information</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use your information to provide and improve our services, process payments, and communicate with you about your bookings and account.</p>
        <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
        <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information.</p>
      </main>
      <Footer />
    </div>
  )
}

