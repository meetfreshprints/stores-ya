import Image from "next/image"
import { Star, MessageSquare, ThumbsUp, Share2, Verified } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ReviewCardProps {
  reviewerName: string
  reviewerAffiliation: string
  tags: string[]
  rating: number
  date: string
  reviewText: string
  userImages?: string[]
}

export function ReviewCard({
  reviewerName,
  reviewerAffiliation,
  tags,
  rating,
  date,
  reviewText,
  userImages,
}: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt={`${reviewerName}'s avatar`} />
          <AvatarFallback>
            {reviewerName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-gray-900">{reviewerName}</div>
          <div className="text-sm text-gray-600">{reviewerAffiliation}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-gray-900">Loved it!</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{reviewText}</p>
      </div>

      {userImages && userImages.length > 0 && (
        <div className="flex gap-2 mt-2">
          {userImages.map((src, index) => (
            <Image
              key={index}
              src={src || "/placeholder.svg"}
              alt={`User photo ${index + 1}`}
              width={80}
              height={80}
              className="w-20 h-20 rounded-xl object-cover shadow-sm"
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
          <ThumbsUp className="w-4 h-4" /> <span>24</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
          <MessageSquare className="w-4 h-4" /> <span>3</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
          <Share2 className="w-4 h-4" /> <span>Share</span>
        </div>
        <div className="ml-auto flex items-center gap-1 text-green-600">
          <Verified className="w-4 h-4" /> <span>Verified Purchase</span>
        </div>
      </div>
    </div>
  )
}
