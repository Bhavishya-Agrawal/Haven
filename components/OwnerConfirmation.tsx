import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function OwnerConfirmation({ id }: { id: string }) {
  const [photos, setPhotos] = useState<File[]>([])

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPhotos(Array.from(event.target.files))
    }
  }

  const handleConfirm = () => {
    // Here you would implement the logic to finalize the booking and release payment
    console.log('Booking confirmed, payment released')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Owner Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Booking Details</h3>
              <p>Booking ID: {id}</p>
              {/* Add more booking details here */}
            </div>
            <div>
              <h3 className="font-semibold">Vehicle Condition Photos</h3>
              <Input type="file" multiple onChange={handlePhotoUpload} accept="image/*" />
              <p className="mt-2">
                {photos.length} photo{photos.length !== 1 ? 's' : ''} selected
              </p>
            </div>
            <Button className="w-full" onClick={handleConfirm}>
              Confirm Booking and Release Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

