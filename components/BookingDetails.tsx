import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function BookingDetails({ id }: { id: string }) {
  // In a real application, you would fetch the parking details based on the id
  const parkingDetails = {
    name: 'XYZ Downtown Parking',
    address: '123 Main St, Cityville',
    price: '$10/hour',
    timespan: '24/7',
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Parking Spot Information</h3>
              <p>Name: {parkingDetails.name}</p>
              <p>Address: {parkingDetails.address}</p>
              <p>Price: {parkingDetails.price}</p>
              <p>Timespan: {parkingDetails.timespan}</p>
            </div>
            <div>
              <h3 className="font-semibold">Coupon Code</h3>
              <Input type="text" placeholder="Enter coupon code" />
            </div>
            <div>
              <h3 className="font-semibold">Payment</h3>
              <Button className="w-full">Pay Now</Button>
            </div>
            <div>
              <h3 className="font-semibold">Payment Flow</h3>
              <p>
                By clicking "Pay Now", you agree to our terms and conditions. Payment will be processed securely.
                Cancellations made within 24 hours of the booking time are subject to a 50% penalty fee. No refunds
                will be issued for cancellations made within 2 hours of the booking time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

