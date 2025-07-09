"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { RatingBreakdown, AddReviewSection } from "@/components/rating-sections"
import { ReviewsFilters } from "@/components/reviews-filters"

export default function ProductDetailPage() {
  const router = useRouter()
  const params = useParams()
  const productId = Number.parseInt(params.id as string)

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Mock product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Port Authority K100",
      fullName: "Port Authority K100 Polo Shirt",
      price: 44.5,
      originalPrice: 45.0,
      rating: 4.8,
      reviews: "1.2k",
      description:
        "Classic polo shirt perfect for any occasion. Made with high-quality cotton blend for comfort and durability. Features the ATO Greek letters embroidered on the chest.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      colors: [
        { name: "Stone Gray", hex: "#8d90aa" },
        { name: "White", hex: "#ffffff" },
        { name: "Black", hex: "#000000" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      features: [
        "100% Cotton blend",
        "Machine washable",
        "Embroidered Greek letters",
        "Classic fit",
        "Ribbed collar and cuffs",
      ],
    },
    {
      id: 2,
      name: "Comfort Colors C1717",
      fullName: "Comfort Colors C1717 T-Shirt",
      price: 68.5,
      rating: 3.9,
      reviews: "71",
      description:
        "Premium comfort colors t-shirt featuring the Alpha Tau Omega cookout design. Soft, pre-shrunk cotton for the perfect fit and feel.",
      images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
      colors: [
        { name: "Navy", hex: "#474b6d" },
        { name: "Stone Gray", hex: "#8d90aa" },
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      features: ["100% Ring-spun cotton", "Pre-shrunk", "Cookout design print", "Comfort Colors brand", "Relaxed fit"],
    },
    {
      id: 3,
      name: "Comfort Hoodie H1212",
      fullName: "Comfort Hoodie H1212",
      price: 39.5,
      rating: 4.4,
      reviews: "63",
      description:
        "Cozy hoodie perfect for cooler weather. Features the Alpha Tau Omega cookout design on the back with a comfortable fleece lining.",
      images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Stone Gray", hex: "#8d90aa" },
        { name: "White", hex: "#ffffff" },
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      features: ["Cotton/Polyester blend", "Fleece lined", "Drawstring hood", "Kangaroo pocket", "Back design print"],
    },
    {
      id: 4,
      name: "Otto Cap 32-467",
      fullName: "Otto Cap 32-467 Baseball Cap",
      price: 51.5,
      rating: 4.2,
      reviews: "321",
      description:
        "Classic baseball cap with embroidered ATO Date Dash design. Adjustable strap for perfect fit. Perfect for everyday wear.",
      images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
      colors: [
        { name: "Khaki", hex: "#fcdbc2" },
        { name: "Stone Gray", hex: "#8d90aa" },
      ],
      sizes: ["One Size"],
      features: ["100% Cotton twill", "Embroidered design", "Adjustable strap", "Pre-curved visor", "Structured crown"],
    },
  ]

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <Button onClick={() => router.push("/")} className="bg-purple-700 hover:bg-purple-600">
            Back to Store
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert("Please select a size")
      return
    }
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with countdown */}
      <div className="bg-purple-700 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span>🧑‍🍳</span>
          <span>Store closes in 04d 09h 23m 56s</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Gallery and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery images={product.images} />
          <ProductInfo
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Rating Summary - Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <RatingBreakdown rating={product.rating} reviews={product.reviews} />
            <AddReviewSection />
          </div>

          {/* Reviews and Filters - Right Columns */}
          <div className="lg:col-span-3">
            <ReviewsFilters />
          </div>
        </div>
      </div>
    </div>
  )
}
