"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export interface OrderItem {
  id: string
  productCode: string
  name: string
  size: string
  quantity: number
  unitPrice: number
  image: string
}

export interface OrderSummaryProps {
  items: OrderItem[]
  subtotal: number
  salesTax: string | number
  shipping: string | number
  totalAmount: number
  holdNotice?: string
  onApplyPromoCode?: (code: string) => void
}

export default function OrderSummary({
  items,
  subtotal,
  salesTax,
  shipping,
  totalAmount,
  holdNotice = "We'll put this amount on hold and will only charge you once the deadline passes.",
  onApplyPromoCode,
}: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState("")

  const handleApplyPromoCode = () => {
    if (onApplyPromoCode && promoCode.trim()) {
      onApplyPromoCode(promoCode.trim())
      setPromoCode("")
    }
  }

  const formatPrice = (price: number) => `$${price.toFixed(2)}`

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-600">{item.productCode}</div>
                <div className="text-sm text-gray-600">{item.size}</div>
              </div>
              <div className="text-sm text-gray-600">
                {item.quantity} x {formatPrice(item.unitPrice)}
              </div>
              <div className="text-sm font-medium">{formatPrice(item.quantity * item.unitPrice)}</div>
            </div>
          ))}
        </div>

        {/* Promo Code Section */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="pr-4"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-teal-500 hover:text-teal-600"
            onClick={handleApplyPromoCode}
            disabled={!promoCode.trim()}
          >
            Apply
          </Button>
        </div>

        <Separator />

        {/* Order Totals */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Sales Tax</span>
            <span className="font-medium">{typeof salesTax === "number" ? formatPrice(salesTax) : salesTax}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">{typeof shipping === "number" ? formatPrice(shipping) : shipping}</span>
          </div>

          <Separator />

          <div className="flex justify-between font-medium">
            <span>Total Amount</span>
            <span>{formatPrice(totalAmount)}</span>
          </div>
        </div>

        {/* Hold Notice */}
        {holdNotice && (
          <div className="flex gap-2 p-3 bg-amber-50 rounded-md">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
            <p className="text-sm text-amber-800">{holdNotice}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
