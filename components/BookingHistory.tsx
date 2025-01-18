import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, Clock } from 'lucide-react'

type Booking = {
  id: number
  parkingName: string
  dateTime: string
  status: 'Completed' | 'Upcoming'
  price: string
}

const mockBookings: Booking[] = [
  { id: 1, parkingName: 'Downtown Parking', dateTime: '2023-05-15 14:00', status: 'Completed', price: '$10' },
  { id: 2, parkingName: 'Central Plaza', dateTime: '2023-05-20 10:30', status: 'Upcoming', price: '$8' },
  { id: 3, parkingName: 'Riverside Lot', dateTime: '2023-05-18 09:00', status: 'Completed', price: '$12' },
]

export function BookingHistory() {
  const [filter, setFilter] = useState('All')
  const [expandedBooking, setExpandedBooking] = useState<number | null>(null)

  const filteredBookings = mockBookings.filter(booking => 
    filter === 'All' || booking.status === filter
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Booking History</h1>
      <div className="mb-4">
        <Select onValueChange={setFilter}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter bookings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{booking.parkingName}</span>
                {booking.status === 'Completed' ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Clock className="h-5 w-5 text-yellow-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date & Time: {booking.dateTime}</p>
              <p>Status: {booking.status}</p>
              <p>Price: {booking.price}</p>
              {expandedBooking === booking.id ? (
                <div className="mt-2">
                  <p>Additional booking details here...</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedBooking(null)}
                    className="mt-2"
                  >
                    Hide Details
                  </Button>
                </div>
              ) : (
                <div className="mt-2 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedBooking(booking.id)}
                  >
                    View Details
                  </Button>
                  {booking.status === 'Upcoming' && (
                    <Link href={`/owner-confirmation/${booking.id}`}>
                      <Button size="sm">Owner Confirmation</Button>
                    </Link>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

