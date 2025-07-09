import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating?: number
  reviewCount?: number
}

export function ProductCard({ id, name, price, originalPrice, image, rating, reviewCount }: ProductCardProps) {
  return (
    <Card className="shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <Link href={`/product/${id}`}>
        <div className="relative w-full aspect-square">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </Link>
      <CardContent className="p-4 space-y-2">
        <Link href={`/product/${id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 hover:underline">{name}</h3>
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          {originalPrice && <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>}
        </div>
        {rating && reviewCount !== undefined && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span className="font-medium">⭐ {rating.toFixed(1)}</span>
            <span>({reviewCount} Reviews)</span>
          </div>
        )}
        <Button className="w-full bg-green-500 text-green-foreground hover:bg-green-600 py-2 rounded-full text-base font-semibold mt-4">
          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
