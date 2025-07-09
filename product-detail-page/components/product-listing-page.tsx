import { ProductCard } from "./product-card"

export function ProductListingPage() {
  const products = [
    {
      id: "comfort-hoodie-h1212",
      name: "Comfort Hoodie H1212",
      price: 44.5,
      originalPrice: 46.0,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.5,
      reviewCount: 66,
    },
    {
      id: "premium-tshirt-g345",
      name: "Premium T-Shirt G345",
      price: 22.0,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.2,
      reviewCount: 120,
    },
    {
      id: "athletic-shorts-s789",
      name: "Athletic Shorts S789",
      price: 35.0,
      originalPrice: 38.0,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.0,
      reviewCount: 45,
    },
    {
      id: "classic-sweatpants-p101",
      name: "Classic Sweatpants P101",
      price: 55.0,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.7,
      reviewCount: 88,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
