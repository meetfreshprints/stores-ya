"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import OrderSummary, { type OrderItem } from "@/components/ui/order-summary"

interface CartItem extends OrderItem {
  color: string
  inStock: boolean
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      productCode: "PU-HOODIE-001",
      name: "Pepperdine University Hoodie",
      size: "Large",
      color: "Navy Blue",
      quantity: 2,
      unitPrice: 45.0,
      image: "/placeholder.svg?height=80&width=80&text=Hoodie",
      inStock: true,
    },
    {
      id: "2",
      productCode: "PU-TSHIRT-002",
      name: "Pepperdine Waves T-Shirt",
      size: "Medium",
      color: "White",
      quantity: 1,
      unitPrice: 25.0,
      image: "/placeholder.svg?height=80&width=80&text=T-Shirt",
      inStock: true,
    },
    {
      id: "3",
      productCode: "PU-CAP-003",
      name: "Pepperdine Baseball Cap",
      size: "One Size",
      color: "Orange",
      quantity: 1,
      unitPrice: 30.0,
      image: "/placeholder.svg?height=80&width=80&text=Cap",
      inStock: false,
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const salesTax = subtotal * 0.0875 // 8.75% tax rate
  const shipping = subtotal > 75 ? 0 : 8.99
  const totalAmount = subtotal + salesTax + shipping

  const handleApplyPromoCode = (code: string) => {
    console.log("Applying promo code:", code)
    // Handle promo code logic here
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to get started!</p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Cart Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.productCode}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-600">Size: {item.size}</span>
                          <span className="text-sm text-gray-600">Color: {item.color}</span>
                          {!item.inStock && (
                            <Badge variant="destructive" className="text-xs">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={!item.inStock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${(item.quantity * item.unitPrice).toFixed(2)}</p>
                        <p className="text-sm text-gray-600">${item.unitPrice.toFixed(2)} each</p>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Cart Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="text-sm text-gray-600">
                    <p>Free shipping on orders over $75</p>
                    {subtotal < 75 && (
                      <p className="text-blue-600">Add ${(75 - subtotal).toFixed(2)} more for free shipping!</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Save for Later</Button>
                    <Button variant="outline" onClick={() => setCartItems([])}>
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary
                items={cartItems}
                subtotal={subtotal}
                salesTax={salesTax}
                shipping={shipping}
                totalAmount={totalAmount}
                onApplyPromoCode={handleApplyPromoCode}
                holdNotice="We'll hold your items for 30 minutes while you complete your purchase."
              />

              <div className="mt-6 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  Continue Shopping
                </Button>
              </div>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium">Secure Checkout</span>
                </div>
                <p className="text-sm text-green-700 mt-1">Your payment information is encrypted and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
