"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    alt: "Business funding solutions",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    alt: "Business growth and financing",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop",
    alt: "Financial partnerships",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={carouselItems[currentSlide].image || "/placeholder.svg"}
            alt={carouselItems[currentSlide].alt}
            fill
            className="object-cover rounded-xl"
            priority={currentSlide === 0}
          />
          {/* Gradient overlays to blend with background */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-blue-950 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

