import type React from "react"
import OrderSummary, { type OrderItem } from "./OrderSummary"

const ExampleUsage: React.FC = () => {
  const sampleItems: OrderItem[] = [
    {
      id: "1",
      productCode: "#H1212",
      name: "Black Hoodie",
      size: "M",
      quantity: 1,
      unitPrice: 39.5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: "2",
      productCode: "#H1212",
      name: "Black Hoodie",
      size: "L",
      quantity: 1,
      unitPrice: 39.5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: "3",
      productCode: "#H1212",
      name: "Black Hoodie",
      size: "XL",
      quantity: 1,
      unitPrice: 39.5,
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  const handleApplyPromoCode = (code: string) => {
    console.log("Applying promo code:", code)
    // Handle promo code application logic here
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <OrderSummary
        items={sampleItems}
        subtotal={158.0}
        salesTax="TBD"
        shipping="FREE"
        totalAmount={158.0}
        onApplyPromoCode={handleApplyPromoCode}
      />
    </div>
  )
}

export default ExampleUsage
