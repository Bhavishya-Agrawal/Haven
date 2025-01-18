import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LoginProfile } from '@/components/LoginProfile'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <LoginProfile />
      </main>
      <Footer />
    </div>
  )
}

