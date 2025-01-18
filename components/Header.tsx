import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">HAVEN</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
              <span className="font-bold">HAVEN</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/profile" className="text-sm font-medium">Profile</Link>
            <Link href="/booking-history" className="text-sm font-medium">Booking History</Link>
            <Link href="/partner" className="text-sm font-medium">Partner with Us</Link>
            <Link href="/support" className="text-sm font-medium">Support</Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground">
              <nav className="flex flex-col space-y-4">
                <Link href="/profile" className="text-lg font-medium">Profile</Link>
                <Link href="/booking-history" className="text-lg font-medium">Booking History</Link>
                <Link href="/partner" className="text-lg font-medium">Partner with Us</Link>
                <Link href="/support" className="text-lg font-medium">Support</Link>
                <hr className="border-primary-foreground/20" />
                <Link href="/settings" className="text-lg font-medium">Settings</Link>
                <Link href="/privacy" className="text-lg font-medium">Privacy Policy</Link>
                <Link href="/terms" className="text-lg font-medium">Terms of Service</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

