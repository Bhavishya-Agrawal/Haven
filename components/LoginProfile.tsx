import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Lock, User, LogOut } from 'lucide-react'

export function LoginProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement actual login logic here
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <Card className="w-full">
        <CardHeader className="text-center">
          <User className="mx-auto h-12 w-12" />
          <CardTitle className="text-2xl font-bold">
            {isLoggedIn ? 'Profile' : 'Login'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoggedIn ? (
            <div className="space-y-4 text-center">
              <p className="font-medium">Welcome, {email}</p>
              <Button className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Log Out
              </Button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

