"use client"

import Link from "next/link"

import { useState } from "react"
import { Star, Check, ShoppingCart, Lock, FlameIcon as Fire } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

export function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState("dark-black")
  const [selectedSize, setSelectedSize] = useState("m")

  const colors = [
    { id: "dark-black", name: "Dark Black", hex: "#000000" },
    { id: "deep-blue", name: "Deep Blue", hex: "#1E3A8A" },
    { id: "light-gray", name: "Light Gray", hex: "#D1D5DB" },
    { id: "white", name: "White", hex: "#FFFFFF" },
  ]

  const sizes = ["2XS", "XS", "M", "L", "2XL", "3XL", "4XL", "5XL"]

  const tieredPricing = [
    { units: 0, price: 45.0 },
    { units: 24, price: 44.5 },
    { units: 36, price: 42.37 },
    { units: 48, price: 40.16 },
    { units: 72, price: 39.07 },
    { units: 96, price: 38.0 },
  ]

  return (
    <div className="p-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Comfort Hoodie H1212</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-0.5">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
          </div>
          <span>4.5 (66 Reviews)</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">${tieredPricing[1].price.toFixed(2)}</span>
          <span className="text-lg text-gray-500 line-through">${tieredPricing[0].price.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 text-center text-sm font-medium">
        {tieredPricing.map((tier, index) => (
          <div
            key={tier.units}
            className={`p-2 rounded-md border ${
              index === 1 ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 text-gray-700"
            }`}
          >
            <div className="font-semibold">{tier.units === 0 ? "1" : tier.units}</div>
            <div className="text-xs">${tier.price.toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2 text-sm">
        <Fire className="w-4 h-4 text-orange-500" />
        <span>
          <span className="font-semibold">28 people</span> already ordered! Get it for{" "}
          <span className="font-semibold">${tieredPricing[4].price.toFixed(2)}</span> when we reach{" "}
          <span className="font-semibold">{tieredPricing[4].units}</span> orders —{" "}
          <Link href="#" className="underline">
            Share Now
          </Link>
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
            Color: <span className="font-semibold">Dark Black</span>
          </Label>
          <RadioGroup id="color" defaultValue="dark-black" className="flex gap-3" onValueChange={setSelectedColor}>
            {colors.map((color) => (
              <RadioGroupItem key={color.id} value={color.id} id={`color-${color.id}`} className="sr-only" />
            ))}
            {colors.map((color) => (
              <Label
                key={color.id}
                htmlFor={`color-${color.id}`}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                  selectedColor === color.id ? "border-green-500" : "border-gray-300"
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {selectedColor === color.id && <Check className="w-4 h-4 text-white drop-shadow-sm" />}
                <span className="sr-only">{color.name}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
            Size: <span className="font-semibold">M-2, L-1, 4XL-1</span>
          </Label>
          <RadioGroup id="size" defaultValue="m" className="flex flex-wrap gap-2" onValueChange={setSelectedSize}>
            {sizes.map((size) => (
              <RadioGroupItem key={size} value={size} id={`size-${size}`} className="sr-only" />
            ))}
            {sizes.map((size) => (
              <Label
                key={size}
                htmlFor={`size-${size}`}
                className={`px-4 py-2 rounded-full border cursor-pointer text-sm font-medium ${
                  selectedSize === size
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                }`}
              >
                {size}
              </Label>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-green-500 text-green-foreground hover:bg-green-600 py-3 rounded-full text-lg font-semibold shadow-md">
          <Check className="w-5 h-5 mr-2" /> Buy Now
        </Button>
        <Button
          variant="outline"
          className="w-full bg-white text-gray-900 border-gray-300 hover:bg-gray-50 py-3 rounded-full text-lg font-semibold shadow-md"
        >
          <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
        </Button>
        <Button className="w-full bg-paypalBlue text-paypalBlue-foreground hover:bg-blue-700 py-3 rounded-full text-lg font-semibold shadow-md flex items-center justify-center gap-2">
          <Lock className="w-5 h-5" /> Check Out With <span className="font-bold text-paypalGold">PayPal</span>
        </Button>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            50% Cotton
          </Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            50% Polyester
          </Badge>
        </div>
        <p>
          Show your fraternity pride in style with the Comfort Hoodie. Featuring a bold Alpha Tau Omega cookout graphic
          on ultra-soft fabric, this hoodie delivers warmth, personality, and all-day comfort — perfect for laid-back
          events or everyday wear.
        </p>
      </div>
    </div>
  )
}
