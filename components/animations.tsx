"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  distance?: number
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  distance = 50,
}: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const getDirectionOffset = (): { x: number; y: number } => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance }
      case "down":
        return { x: 0, y: -distance }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      default:
        return { x: 0, y: 0 }
    }
  }

  const { x, y } = getDirectionOffset()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
  className?: string
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
}: StaggerContainerProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxScroll({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      ref.current.style.transform = `translateY(${scrollY * speed}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function FloatingAnimation({
  children,
  className = "",
  duration = 3,
  distance = 15,
}: {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

