"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Star,
  Filter,
  Heart,
  Camera,
  ThumbsUp,
  MessageCircle,
  Flag,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function PepperdinePage() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 9,
    minutes: 23,
    seconds: 56,
  })

  const [cartItemCount, setCartItemCount] = useState(3) // Example cart count

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
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const products = [
    {
      id: 1,
      name: "Pepperdine University Hoodie",
      price: 45.0,
      originalPrice: 60.0,
      image: "/placeholder.svg?height=300&width=300&text=Hoodie",
      badge: "TRENDING",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Waves T-Shirt",
      price: 25.0,
      image: "/placeholder.svg?height=300&width=300&text=T-Shirt",
      badge: "NEW",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Pepperdine Baseball Cap",
      price: 30.0,
      image: "/placeholder.svg?height=300&width=300&text=Cap",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "University Sweatshirt",
      price: 40.0,
      originalPrice: 55.0,
      image: "/placeholder.svg?height=300&width=300&text=Sweatshirt",
      badge: "SALE",
      rating: 4.5,
      reviews: 203,
    },
    {
      id: 5,
      name: "Waves Water Bottle",
      price: 15.0,
      image: "/placeholder.svg?height=300&width=300&text=Bottle",
      rating: 4.9,
      reviews: 67,
    },
    {
      id: 6,
      name: "Pepperdine Backpack",
      price: 65.0,
      image: "/placeholder.svg?height=300&width=300&text=Backpack",
      badge: "POPULAR",
      rating: 4.4,
      reviews: 98,
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder-user.jpg",
      affiliation: "Alumni",
      rating: 5,
      date: "2 days ago",
      content: "Amazing quality hoodie! The material is so soft and the fit is perfect. Definitely worth the price.",
      tags: ["Quality", "Comfort", "Fit"],
      likes: 12,
      helpful: true,
      verified: true,
      photos: ["/placeholder.svg?height=60&width=60&text=Photo1", "/placeholder.svg?height=60&width=60&text=Photo2"],
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/placeholder-user.jpg",
      affiliation: "Student",
      rating: 4,
      date: "1 week ago",
      content: "Great shirt design and colors. Shipping was fast too. Only wish it came in more sizes.",
      tags: ["Design", "Shipping"],
      likes: 8,
      helpful: false,
      verified: true,
      photos: [],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/placeholder-user.jpg",
      affiliation: "Faculty",
      rating: 5,
      date: "2 weeks ago",
      content: "Love supporting the university with these purchases. Quality is consistently good across all items.",
      tags: ["Quality", "University Pride"],
      likes: 15,
      helpful: true,
      verified: true,
      photos: ["/placeholder.svg?height=60&width=60&text=Photo3"],
    },
  ]

  const handleCartClick = () => {
    router.push("/cart")
  }

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with countdown */}
      <div className="bg-purple-700 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span>🧑‍🍳</span>
          <span>
            Store closes in {String(timeLeft.days).padStart(2, "0")}d {String(timeLeft.hours).padStart(2, "0")}h{" "}
            {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/placeholder-logo.svg" alt="Pepperdine University" width={40} height={40} className="mr-3" />
              <span className="text-xl font-bold text-gray-900">Pepperdine Store</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-full"
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative" onClick={handleCartClick}>
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pepperdine University Store</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Show your Waves pride with official merchandise</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-3 left-3 ${
                          product.badge === "TRENDING"
                            ? "bg-orange-500"
                            : product.badge === "NEW"
                              ? "bg-green-500"
                              : product.badge === "SALE"
                                ? "bg-red-500"
                                : "bg-blue-500"
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="sm" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Customers Say Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from our Pepperdine community</p>
          </div>

          {/* Review Filters */}
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="5">5 Stars</TabsTrigger>
                <TabsTrigger value="4">4 Stars</TabsTrigger>
                <TabsTrigger value="photos">With Photos</TabsTrigger>
                <TabsTrigger value="verified">Verified</TabsTrigger>
              </TabsList>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter by Tags
                  </Button>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Photos Only
                  </Button>
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="highest">Highest Rated</SelectItem>
                    <SelectItem value="lowest">Lowest Rated</SelectItem>
                    <SelectItem value="helpful">Most Helpful</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                            <AvatarFallback>
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-sm">{review.name}</h4>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-gray-600">{review.affiliation}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>

                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-sm text-gray-700 mb-4">{review.content}</p>

                      {review.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {review.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {review.photos.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {review.photos.map((photo, index) => (
                            <Image
                              key={index}
                              src={photo || "/placeholder.svg"}
                              alt={`Review photo ${index + 1}`}
                              width={60}
                              height={60}
                              className="rounded-md object-cover"
                            />
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-xs">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            Helpful ({review.likes})
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Reply
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Flag className="h-3 w-3" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Rating Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.7</div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Based on 1,234 reviews</p>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-8">{rating}★</span>
                    <Progress
                      value={rating === 5 ? 65 : rating === 4 ? 25 : rating === 3 ? 7 : rating === 2 ? 2 : 1}
                      className="flex-1 h-2"
                    />
                    <span className="text-sm text-gray-600 w-12">
                      {rating === 5 ? "65%" : rating === 4 ? "25%" : rating === 3 ? "7%" : rating === 2 ? "2%" : "1%"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pepperdine Store</h3>
              <p className="text-gray-400 text-sm">Official merchandise for the Pepperdine University community.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Gifts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Pepperdine University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
