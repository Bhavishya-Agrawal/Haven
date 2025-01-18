import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const dummyResults = [
  {
    id: 1,
    name: 'XYZ Central Park Parking',
    price: '$15/hour',
  },
  {
    id: 2,
    name: 'XYZ Times Square Garage',
    price: '$20/hour',
  },
  {
    id: 3,
    name: 'XYZ Broadway Lot',
    price: '$18/hour',
  },
]

export function PaymentDetails({ id }: { id: string }) {
  const [couponCode, setCouponCode] = useState('')

  // In a real application, you would fetch the parking details based on the id
  const parkingDetails = dummyResults.find(result => result.id === parseInt(id))

  const handlePayment = () => {
    // Implement payment logic here
    console.log('Processing payment...')
  }

  if (!parkingDetails) {
    return <div>Parking spot not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Parking Spot</h3>
              <p>{parkingDetails.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Price</h3>
              <p>{parkingDetails.price}</p>
            </div>
            <div>
              <h3 className="font-semibold">Coupon Code</h3>
              <Input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>
            <Button className="w-full" onClick={handlePayment}>
              Pay Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

