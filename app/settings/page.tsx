import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
            <button className="bg-black text-white px-4 py-2 rounded">Change Password</button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Receive email notifications
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
            <button className="bg-black text-white px-4 py-2 rounded">Manage Payment Methods</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

