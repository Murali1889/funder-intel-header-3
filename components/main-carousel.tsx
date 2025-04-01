"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=1200&text=Everest+Business+Funding",
    alt: "Everest Business Funding",
    link: "/partners/everest",
    description: "Everest Business Funding can take your business above and beyond",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=1200&text=Granite+Merchant+Funding",
    alt: "Granite Merchant Funding",
    link: "/partners/granite",
    description: "Your Trusted Partner for 750K-2MM Deals",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=1200&text=TAB+Bank",
    alt: "TAB Bank",
    link: "/partners/tab-bank",
    description: "Shift Gears and accelerate your business with Asset-Based Lending",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=1200&text=Liquid+Bee",
    alt: "Liquid Bee",
    link: "/partners/liquid-bee",
    description: "An Ocean of Funding - Find your next deal in hours",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=1200&text=Spartan+Capital",
    alt: "Spartan Capital",
    link: "/partners/spartan",
    description: "Simple • Funding • Fast - No STIPs under $20K",
  },
]

export default function MainCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-blue-950">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="min-w-full h-full relative">
            <Link href={item.link} className="block w-full h-full">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-contain"
                priority={item.id === 1}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

