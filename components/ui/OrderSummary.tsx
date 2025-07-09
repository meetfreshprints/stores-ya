"use client"

import type React from "react"
import { useState } from "react"

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

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  salesTax,
  shipping,
  totalAmount,
  holdNotice = "We'll put this amount on hold and will only charge you once the deadline passes.",
  onApplyPromoCode,
}) => {
  const [promoCode, setPromoCode] = useState("")

  const handleApplyPromoCode = () => {
    if (onApplyPromoCode && promoCode.trim()) {
      onApplyPromoCode(promoCode.trim())
      setPromoCode("")
    }
  }

  const formatPrice = (price: number) => `$${price.toFixed(2)}`

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="pt-5 px-6">
        <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      </div>

      <div className="p-6 pt-5">
        {/* Order Items */}
        <div className="space-y-4 mb-5">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg?height=48&width=48"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-600">{item.productCode}</div>
                <div className="text-sm text-gray-600">{item.size}</div>
              </div>
              <div className="text-sm text-gray-600 whitespace-nowrap">
                {item.quantity} x {formatPrice(item.unitPrice)}
              </div>
              <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                {formatPrice(item.quantity * item.unitPrice)}
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code Section */}
        <div className="flex gap-2 mb-5">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 border-2 border-teal-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
          <button
            className="px-4 py-3 text-sm font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors disabled:text-gray-400 disabled:hover:bg-transparent disabled:cursor-not-allowed"
            onClick={handleApplyPromoCode}
            disabled={!promoCode.trim()}
          >
            Apply
          </button>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200 mb-4"></div>

        {/* Order Totals */}
        <div className="space-y-2 mb-5">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm font-medium text-gray-900">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Sales Tax</span>
            <span className="text-sm font-medium text-gray-900">
              {typeof salesTax === "number" ? formatPrice(salesTax) : salesTax}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Shipping</span>
            <span className="text-sm font-medium text-gray-900">
              {typeof shipping === "number" ? formatPrice(shipping) : shipping}
            </span>
          </div>

          {/* Separator */}
          <div className="h-px bg-gray-200 my-4"></div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">Total Amount</span>
            <span className="font-medium text-gray-900">{formatPrice(totalAmount)}</span>
          </div>
        </div>

        {/* Hold Notice */}
        {holdNotice && (
          <div className="flex gap-2 p-3 bg-amber-50 rounded-lg">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">{holdNotice}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderSummary
