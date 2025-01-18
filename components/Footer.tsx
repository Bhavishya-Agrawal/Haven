import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <Link href="/about" className="hover:underline">About Us</Link>
          </div>
          <div>
            <Link href="/socials" className="hover:underline">Socials</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

