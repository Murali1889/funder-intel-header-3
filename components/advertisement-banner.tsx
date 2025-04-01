import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface AdvertisementBannerProps {
  src: string
  alt: string
  href: string
  className?: string
}

export default function AdvertisementBanner({ src, alt, href, className }: AdvertisementBannerProps) {
  return (
    <div className={cn("relative rounded-lg overflow-hidden border", className)}>
      <Link href={href} className="block">
        <Image src={src || "/placeholder.svg"} alt={alt} width={970} height={90} className="w-full h-auto" />
        <div className="absolute top-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">Advertisement</div>
      </Link>
    </div>
  )
}

