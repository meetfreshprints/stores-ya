import OrderSummary, { type OrderItem } from "./order-summary"

// Example usage of the OrderSummary component
export default function ExampleUsage() {
  const sampleItems: OrderItem[] = [
    {
      id: "1",
      productCode: "#H1212",
      name: "Black Hoodie",
      size: "M",
      quantity: 1,
      unitPrice: 39.5,
      image: "/product-image.png",
    },
    {
      id: "2",
      productCode: "#H1212",
      name: "Black Hoodie",
      size: "L",
      quantity: 1,
      unitPrice: 39.5,
      image: "/product-image.png",
    },
    {
      id: "3",
      productCode: "#H1212",
      name: "Black Hoodie",
      size: "XL",
      quantity: 1,
      unitPrice: 39.5,
      image: "/product-image.png",
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
