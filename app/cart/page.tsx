"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
      image: "/placeholder.svg?width=80&height=80&text=Hoodie",
      quantity: 2,
      unitPrice: 45.0,
      color: "Navy Blue",
      inStock: true,
    },
    {
      id: "2",
      productCode: "PU-TSHIRT-002",
      name: "Pepperdine Waves T-Shirt",
      size: "Medium",
      image: "/placeholder.svg?width=80&height=80&text=T-Shirt",
      quantity: 1,
      unitPrice: 25.0,
      color: "White",
      inStock: true,
    },
    {
      id: "3",
      productCode: "PU-CAP-003",
      name: "Pepperdine Baseball Cap",
      size: "One Size",
      image: "/placeholder.svg?width=80&height=80&text=Cap",
      quantity: 1,
      unitPrice: 30.0,
      color: "Orange",
      inStock: false,
    },
  ])

  // ----- cart helpers -------------------------------------------------------
  const updateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  // ----- totals -------------------------------------------------------------
  const subtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
  const salesTax = subtotal * 0.0875 // 8.75 % CA tax
  const shipping = subtotal >= 75 ? 0 : 8.99
  const totalAmount = subtotal + salesTax + shipping

  const handleApplyPromo = (code: string) => {
    console.log("Promo applied:", code)
  }

  // ----- empty state --------------------------------------------------------
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some items to get started!</p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  // ----- cart UI ------------------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <p className="text-gray-600 mt-1">
          {cartItems.length} item{cartItems.length > 1 && "s"} in your cart
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* cart items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
                  {/* image */}
                  <div className="relative h-24 w-24 shrink-0 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      fill
                      alt={item.name}
                      className="object-cover object-center"
                    />
                  </div>

                  {/* info */}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.productCode}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span>Size: {item.size}</span>
                      <span>Color: {item.color}</span>
                      {!item.inStock && (
                        <Badge variant="destructive" className="text-xs">
                          Out of stock
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* qty controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={!item.inStock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* price & remove */}
                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="font-medium text-gray-900">${(item.unitPrice * item.quantity).toFixed(2)}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Separator className="my-4" />

            {/* cart actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-sm text-gray-600">
                Free shipping on orders over $75.{" "}
                {subtotal < 75 && (
                  <span className="text-blue-600">Add ${(75 - subtotal).toFixed(2)} more to qualify!</span>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Save for later</Button>
                <Button variant="outline" onClick={() => setCartItems([])}>
                  Clear cart
                </Button>
              </div>
            </div>
          </div>

          {/* order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <OrderSummary
                items={cartItems}
                subtotal={subtotal}
                salesTax={salesTax}
                shipping={shipping}
                totalAmount={totalAmount}
                onApplyPromoCode={handleApplyPromo}
                holdNotice="We'll hold your items for 30 minutes during checkout."
              />

              <Button className="w-full bg-blue-600 hover:bg-blue-700">Proceed to Checkout</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
