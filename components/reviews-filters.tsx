import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { ReviewCard } from "./review-card"

export function ReviewsFilters() {
  const filterTags = [
    { name: "Rush & Bid", count: 67 },
    { name: "PR & General", count: 67 },
    { name: "True to Size", count: 56 },
    { name: "Soft", count: 22 },
    { name: "Embroidery", count: 22 },
    { name: "Screen Print", count: 56 },
    { name: "Comfortable", count: 30 },
    { name: "Durable", count: 15 },
  ]

  const customerPhotos = [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ]

  const reviews = [
    {
      reviewerName: "Olivern Bloom",
      reviewerAffiliation: "Chi Omega – New York University",
      tags: ["Rush & Bid", "True to Size", "Soft"],
      rating: 5,
      date: "3 Days Ago",
      reviewText:
        "These prints are absolutely perfect! They fit like a dream and the comfort level is off the charts. Plus, the design is super cute and exactly what we envisioned. Working with our rep, Mridul, was a breeze!",
      userImages: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
    },
    {
      reviewerName: "Sarah Johnson",
      reviewerAffiliation: "Chi Omega, New York University",
      tags: ["PR & General", "True to Size", "Soft"],
      rating: 5,
      date: "1 Week Ago",
      reviewText:
        "The prints turned out amazing! They fit perfectly and are so comfy to wear. The design is just what we wanted, and the quality is top-notch!",
      userImages: ["/placeholder.svg?height=80&width=80"],
    },
    {
      reviewerName: "Emma Wilson",
      reviewerAffiliation: "Alpha Phi, UCLA",
      tags: ["Formal", "True to Size", "Soft"],
      rating: 5,
      date: "2 Weeks Ago",
      reviewText:
        "I am in love with these prints! They fit so well and are incredibly comfortable. The design is adorable and the print quality is top-notch.",
      userImages: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
    },
    {
      reviewerName: "Madison Taylor",
      reviewerAffiliation: "Kappa Delta, University of Georgia",
      tags: ["Karaoke Night", "True to Size", "Soft"],
      rating: 4,
      date: "3 Weeks Ago",
      reviewText:
        "These prints are everything! The fit is spot on, and they are super comfy. The design is so cute, and the ordering process was seamless!",
      userImages: ["/placeholder.svg?height=80&width=80"],
    },
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">What Customers Say</h3>
        <p className="text-sm text-gray-700">
          Customers say they love Fresh Prints for the amazing service they receive. Many return as their businesses
          expand, appreciating the company&apos;s commitment to their satisfaction. Fresh Prints even goes the extra
          mile by offering samples to ensure everything is just right.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filterTags.map((tag) => (
          <Badge
            key={tag.name}
            variant="secondary"
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {tag.name} {tag.count}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {customerPhotos.map((src, index) => (
          <Image
            key={index}
            src={src || "/placeholder.svg"}
            alt={`Customer photo ${index + 1}`}
            width={200}
            height={200}
            className="w-full h-auto rounded-xl object-cover shadow-sm"
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Chapters <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Chapters</DropdownMenuItem>
            <DropdownMenuItem>Chi Omega</DropdownMenuItem>
            <DropdownMenuItem>Alpha Phi</DropdownMenuItem>
            <DropdownMenuItem>Kappa Delta</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Perfect For <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Rush & Bid</DropdownMenuItem>
            <DropdownMenuItem>PR & General</DropdownMenuItem>
            <DropdownMenuItem>Formal</DropdownMenuItem>
            <DropdownMenuItem>Karaoke Night</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Size & Fit <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>True to Size</DropdownMenuItem>
            <DropdownMenuItem>Runs Small</DropdownMenuItem>
            <DropdownMenuItem>Runs Large</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Fabric <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Cotton</DropdownMenuItem>
            <DropdownMenuItem>Polyester</DropdownMenuItem>
            <DropdownMenuItem>Cotton Blend</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Print Type <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Screen Print</DropdownMenuItem>
            <DropdownMenuItem>Embroidery</DropdownMenuItem>
            <DropdownMenuItem>Heat Transfer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Newest <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Oldest</DropdownMenuItem>
            <DropdownMenuItem>Highest Rated</DropdownMenuItem>
            <DropdownMenuItem>Lowest Rated</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Customer Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            reviewerName={review.reviewerName}
            reviewerAffiliation={review.reviewerAffiliation}
            tags={review.tags}
            rating={review.rating}
            date={review.date}
            reviewText={review.reviewText}
            userImages={review.userImages}
          />
        ))}
      </div>
    </div>
  )
}
