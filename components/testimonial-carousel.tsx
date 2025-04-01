"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "FunderIntel has transformed our lending business. We've expanded our broker network by 300% and increased our deal flow significantly.",
    name: "John Smith",
    role: "CEO, Capital Funding Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "As an independent broker, FunderIntel has been a game-changer. I now have access to lenders I couldn't reach before and my closing rate has doubled.",
    name: "Sarah Johnson",
    role: "Independent Broker",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "Finding business funding used to be a nightmare. Through FunderIntel, we secured $2M in equipment financing in just 5 days. Incredible service!",
    name: "Michael Chen",
    role: "Owner, Chen Manufacturing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    quote:
      "The marketplace connections we've made through FunderIntel have completely changed how we operate. Our funding options have expanded tremendously.",
    name: "Jessica Williams",
    role: "CFO, Bright Solutions Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
  {
    id: 5,
    quote:
      "The market intelligence tools alone are worth the premium subscription. We've been able to identify trends and adjust our strategy accordingly.",
    name: "Robert Taylor",
    role: "Managing Director, Apex Funding",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Current testimonial */}
            <div className="bg-blue-900 border border-blue-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover h-[60px] w-[60px]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-blue-200">{testimonials[current].role}</p>
                </div>
              </div>
              <p className="text-white mb-4">"{testimonials[current].quote}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Next testimonial */}
            <div className="bg-blue-900 border border-blue-800 rounded-lg p-6 hidden md:block">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonials[(current + 1) % testimonials.length].image || "/placeholder.svg"}
                    alt={testimonials[(current + 1) % testimonials.length].name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover h-[60px] w-[60px]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonials[(current + 1) % testimonials.length].name}</h4>
                  <p className="text-sm text-blue-200">{testimonials[(current + 1) % testimonials.length].role}</p>
                </div>
              </div>
              <p className="text-white mb-4">"{testimonials[(current + 1) % testimonials.length].quote}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Third testimonial */}
            <div className="bg-blue-900 border border-blue-800 rounded-lg p-6 hidden md:block">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonials[(current + 2) % testimonials.length].image || "/placeholder.svg"}
                    alt={testimonials[(current + 2) % testimonials.length].name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover h-[60px] w-[60px]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonials[(current + 2) % testimonials.length].name}</h4>
                  <p className="text-sm text-blue-200">{testimonials[(current + 2) % testimonials.length].role}</p>
                </div>
              </div>
              <p className="text-white mb-4">"{testimonials[(current + 2) % testimonials.length].quote}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 hover:bg-gray-50 rounded-full z-10 border border-gray-200"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 hover:bg-gray-50 rounded-full z-10 border border-gray-200"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            } transition-colors duration-300`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

