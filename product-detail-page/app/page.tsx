import { Header } from "@/components/header"
import { ProductListingPage } from "@/components/product-listing-page" // Import the new component

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProductListingPage /> {/* Render the product listing page */}
      </main>
    </div>
  )
}
