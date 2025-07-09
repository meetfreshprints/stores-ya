import CartPage from "@/components/cart-page"
import { Header } from "@/components/header"

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <CartPage />
      </main>
    </div>
  )
}
