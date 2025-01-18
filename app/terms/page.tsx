import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">By using Haven, you agree to the following terms and conditions:</p>
        <h2 className="text-2xl font-bold mb-4">Use of Service</h2>
        <p className="mb-4">You agree to use Haven for finding and booking parking spaces in accordance with all applicable laws and regulations.</p>
        <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
        <p className="mb-4">You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        <h2 className="text-2xl font-bold mb-4">Booking and Payments</h2>
        <p className="mb-4">All bookings are subject to availability. Payments are processed securely, and refunds are subject to our cancellation policy.</p>
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="mb-4">Haven is not responsible for any damages or losses related to your use of the service. We do not guarantee the accuracy of parking space information provided by owners.</p>
      </main>
      <Footer />
    </div>
  )
}

