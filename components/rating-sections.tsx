import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function RatingBreakdown() {
  const ratings = [
    { stars: 5, percentage: 72 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ]

  return (
    <div className="p-6 rounded-xl text-center bg-white shadow-md">
      <h2 className="text-4xl font-bold text-gray-900">4.1/5</h2>
      <div className="flex items-center justify-center gap-0.5 mt-2">
        {[...Array(4)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        ))}
        <Star className="w-6 h-6 fill-gray-300 text-gray-300" />
      </div>

      <div className="mt-6 space-y-2">
        {ratings.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 w-8 text-right">{rating.stars}★</span>
            <Progress value={rating.percentage} className="h-2 flex-grow" />
            <span className="text-sm text-gray-600 w-8 text-left">{rating.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AddReviewSection() {
  return (
    <div className="bg-white p-6 rounded-xl text-center shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">Add a Review</h3>
      <p className="text-sm text-gray-600 mt-2">Your review will help other customers tremendously.</p>
      <div className="flex items-center justify-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-8 h-8 text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors" />
        ))}
      </div>
      <Button className="w-full bg-green-500 text-white hover:bg-green-600 py-3 rounded-full text-lg font-semibold mt-6">
        <Star className="w-5 h-5 mr-2" /> Add a Review
      </Button>
    </div>
  )
}
