import Image from "next/image"
import { FlameIcon as Fire } from "lucide-react"

export function ProductGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
      <div className="relative md:col-span-7 flex justify-center items-center">
        <div className="absolute top-6 left-6 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 z-10">
          <Fire className="w-3 h-3" />
          Trending
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PSP%20opt1-EcrgnBRpOmVcMgAWUMqq5PgAEyEi9n.png"
          alt="Comfort Hoodie H1212 - Model facing back to show print"
          width={600}
          height={600}
          className="w-full rounded-lg shadow-md object-cover aspect-square"
        />
      </div>
      <div className="flex flex-col gap-4 md:col-span-5 items-center justify-center">
        {/* First Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Comfort Hoodie H1212 - Back flat"
            fill
            className="rounded-lg border border-gray-200 object-cover cursor-pointer hover:border-gray-400 transition-colors"
          />
        </div>
        {/* Second Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Comfort Hoodie H1212 - Front flat"
            fill
            className="rounded-lg border border-gray-200 object-cover cursor-pointer hover:border-gray-400 transition-colors"
          />
        </div>
      </div>
    </div>
  )
}
