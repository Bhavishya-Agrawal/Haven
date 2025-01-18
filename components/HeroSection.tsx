import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MapPin, Search } from 'lucide-react'

export function HeroSection() {
  const router = useRouter()
  const [selectedCity, setSelectedCity] = useState('New York')
  const [searchCity, setSearchCity] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchCity.toLowerCase())
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/find-parking?query=${searchQuery}&city=${selectedCity}`)
  }

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl">Find Your Safe Haven for Parking</h1>
      <div className="mx-auto max-w-lg space-y-4">
        <form onSubmit={handleSearch} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter place near which parking is wanted"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>{selectedCity}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <div className="p-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search for city"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              <DropdownMenuItem onSelect={() => {
                setSelectedCity('Detect My Location')
                // Implement location detection logic here
              }}>
                <MapPin className="mr-2 h-4 w-4" />
                <span>Detect My Location</span>
              </DropdownMenuItem>
              {filteredCities.map((city) => (
                <DropdownMenuItem key={city} onSelect={() => setSelectedCity(city)}>
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button type="submit">Search</Button>
        </form>
      </div>
    </section>
  )
}

