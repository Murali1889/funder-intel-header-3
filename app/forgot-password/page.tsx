"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
}

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!email) {
      setError("Please enter your email address")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll just show success message
      setIsSubmitted(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <div className="flex-grow flex items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
        <div className="w-full max-w-md relative z-10">
          {!isSubmitted ? (
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              custom={0}
            >
              <div className="mb-6">
                <Link
                  href="/login"
                  className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors duration-500"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </Link>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Forgot your password?</h1>
                <p className="text-gray-600 mt-2">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              {error && (
                <motion.div
                  className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <motion.div className="space-y-2" variants={fadeInUpVariants} custom={0.2}>
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-11"
                        required
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={0.3}>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-primary hover:bg-primary-dark text-white transition-colors duration-500"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send reset link"}
                    </Button>
                  </motion.div>

                  <motion.div className="text-center text-sm text-gray-600" variants={fadeInUpVariants} custom={0.4}>
                    Remember your password?{" "}
                    <Link
                      href="/login"
                      className="text-accent hover:text-accent-dark font-medium transition-colors duration-500"
                    >
                      Sign in
                    </Link>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              custom={0}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Check your email</h1>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <span className="font-medium">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                If you don't see it in your inbox, please check your spam folder.
              </p>
              <Button
                onClick={() => router.push("/login")}
                className="w-full h-11 bg-primary hover:bg-primary-dark text-white transition-colors duration-500"
              >
                Return to login
              </Button>
            </motion.div>
          )}

          <motion.p
            className="mt-6 text-center text-sm text-gray-600"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0.5}
          >
            Need help?{" "}
            <Link href="/contact" className="text-accent hover:text-accent-dark transition-colors duration-500">
              Contact support
            </Link>
          </motion.p>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

