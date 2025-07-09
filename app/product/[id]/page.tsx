"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Star, ShoppingCart, Heart, ArrowLeft, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function ProductDetail() {
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
      <div className="min-h-screen bg-[#fffdfe] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#474b6d] mb-4">Product not found</h1>
          <Button onClick={() => router.push("/")} className="bg-[#8066f0] hover:bg-[#6b4fd1]">
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
    <div className="min-h-screen bg-[#fffdfe]">
      {/* Header with countdown */}
      <div className="bg-[#8066f0] text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span>🧑‍🍳</span>
          <span>Store closes in 04d 09h 23m 56s</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-6 text-[#8066f0] hover:text-[#6b4fd1]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Store
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-[#fbfaff] rounded-lg overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.fullName}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail images */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-[#fbfaff] rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#8066f0]"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.fullName} view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#474b6d] mb-2">{product.fullName}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-[#ffb800] text-[#ffb800]" />
                  <span className="font-medium text-[#474b6d]">{product.rating}</span>
                  <span className="text-[#337ab7]">({product.reviews} Reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-[#474b6d]">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-[#8d90aa] line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <p className="text-[#8d90aa] leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-[#474b6d] mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full border-4 ${
                      selectedColor === index ? "border-[#8066f0]" : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-[#8d90aa] mt-2">{product.colors[selectedColor].name}</p>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div>
                <h3 className="font-semibold text-[#474b6d] mb-3">Size</h3>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-[#474b6d] mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-lg font-medium text-[#474b6d] min-w-[2rem] text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button onClick={handleAddToCart} className="flex-1 bg-[#8066f0] hover:bg-[#6b4fd1] text-white py-3">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#8066f0] text-[#8066f0] hover:bg-[#8066f0] hover:text-white bg-transparent"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="font-semibold text-[#474b6d] mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#8d90aa]">
                    <div className="w-1.5 h-1.5 bg-[#8066f0] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
