import { RatingBreakdown, AddReviewSection } from "./rating-sections"
import { Card, CardContent } from "@/components/ui/card"

export function CombinedRatingSection() {
  return (
    <Card className="p-0 shadow-md rounded-xl">
      <CardContent className="p-0 shadow-none">
        <RatingBreakdown />
        <div className="border-t border-gray-200 mt-6 pt-6 border-none">
          <AddReviewSection />
        </div>
      </CardContent>
    </Card>
  )
}
