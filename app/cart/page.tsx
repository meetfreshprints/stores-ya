"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size: string
  color: string
}

export default function CartPage() {
  const router = useRouter()

  // Dummy cart data
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Comfort Hoodie H1212",
      price: 44.5,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      size: "M",
      color: "Dark Black",
    },
    {
      id: "2",
      name: "Premium T-Shirt G345",
      price: 22.0,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
      size: "L",
      color: "Heather Grey",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0
  const taxRate = 0.07
  const tax = subtotal * taxRate
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with countdown */}
      <div className="bg-purple-700 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span>🧑‍🍳</span>
          <span>Store closes in 04d 09h 23m 56s</span>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {/* Back button */}
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-6 text-purple-700 hover:text-purple-800">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Store
        </Button>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-md rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Shopping Cart ({cartItems.length} items)</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] hidden sm:table-cell">Product</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">Size: {item.size}</div>
                          <div className="text-sm text-gray-500">Color: {item.color}</div>
                        </TableCell>
                        <TableCell className="text-right font-medium">${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-center">
                          <Input type="number" defaultValue={item.quantity} min="1" className="w-16 text-center" />
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                            <Trash2 className="w-5 h-5" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-6 flex justify-between items-center">
                  <Link href="/" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                    <ShoppingCart className="w-4 h-4" /> Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-md rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Estimated Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-xl text-gray-900">
                  <span>Order Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-green-500 text-white hover:bg-green-600 py-3 rounded-full text-lg font-semibold shadow-md mt-6">
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
