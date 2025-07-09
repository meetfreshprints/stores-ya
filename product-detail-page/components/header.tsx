import Link from "next/link"
import { ShoppingCart, Clock } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-purple-700 text-white py-2 px-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5" />
        <span className="text-sm font-medium">Store closes in 04d 09h 23m 56s</span>
      </div>
      <Link href="/cart" className="relative">
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
          3
        </span>
      </Link>
    </header>
  )
}
