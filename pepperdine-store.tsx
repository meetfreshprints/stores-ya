"use client"

import { useState, useEffect } from "react"
import { Star, ShoppingCart, Heart, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 9,
    minutes: 23,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  const products = [
    {
      id: 1,
      name: "Port Authority K100",
      price: 44.5,
      originalPrice: 45.0,
      rating: 4.8,
      reviews: "1.2k",
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#8d90aa", "#ffffff", "#000000"],
    },
    {
      id: 2,
      name: "Comfort Colors C1717",
      price: 68.5,
      rating: 3.9,
      reviews: "71",
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#474b6d", "#8d90aa"],
    },
    {
      id: 3,
      name: "Comfort Hoodie H1212",
      price: 39.5,
      rating: 4.4,
      reviews: "63",
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#000000", "#8d90aa", "#ffffff"],
    },
    {
      id: 4,
      name: "Otto Cap 32-467",
      price: 51.5,
      rating: 4.2,
      reviews: "321",
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#fcdbc2", "#8d90aa"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#fffdfe]">
      {/* Header with countdown */}
      <div className="bg-[#8066f0] text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span>🧑‍🍳</span>
          <span>
            Store closes in {String(timeLeft.days).padStart(2, "0")}d {String(timeLeft.hours).padStart(2, "0")}h{" "}
            {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#474b6d] mb-2">Pepperdine ATO Philo Shirts Spring 2024</h1>
            <p className="text-[#8d90aa] text-lg mb-4">The trendiest collection this Fall at budget friendly prices.</p>
            <div className="flex items-center gap-2 text-sm text-[#8d90aa]">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-[#d35555] text-[#d35555]" />
              <span>by Brandon Davis</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-[#8066f0]">
            <ShoppingCart className="w-6 h-6" />
          </Button>
        </div>

        {/* Trending badge */}
        <div className="mb-6">
          <Badge variant="secondary" className="bg-[#fcf1e8] text-[#ff5700] border-0 gap-1">
            <Flame className="w-4 h-4" />
            Trending
          </Badge>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-[#fbfaff] rounded-t-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Color swatches */}
                <div className="flex gap-1 justify-center py-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="p-4 pt-0">
                  <h3 className="font-semibold text-[#474b6d] mb-2">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-[#474b6d]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-[#8d90aa] line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#ffb800] text-[#ffb800]" />
                    <span className="text-sm font-medium text-[#474b6d]">{product.rating}</span>
                    <span className="text-sm text-[#337ab7]">{product.reviews} Reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-[#337ab7]">
            <span className="text-sm">Curated By</span>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-[#337ab7] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">FP</span>
              </div>
              <span className="font-semibold">FRESH PRINTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
