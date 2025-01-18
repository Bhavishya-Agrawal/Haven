import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const recommendations = [
  { name: 'Downtown Parking', rating: 4.5, price: '$10/hr', distance: '0.5 miles' },
  { name: 'Central Plaza', rating: 4.2, price: '$8/hr', distance: '0.8 miles' },
  { name: 'Riverside Lot', rating: 4.7, price: '$12/hr', distance: '1.2 miles' },
  { name: 'Market Street Garage', rating: 4.0, price: '$9/hr', distance: '1.5 miles' },
]

export function RecommendationsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-2xl font-bold">Popular Parking Spots</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {recommendations.map((spot) => (
            <Card key={spot.name} className="w-[250px]">
              <CardHeader>
                <CardTitle>{spot.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rating: {spot.rating}</p>
                <p>Price: {spot.price}</p>
                <p>Distance: {spot.distance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

