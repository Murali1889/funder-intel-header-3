"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Lock, Mail, DollarSign } from "lucide-react"
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

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setIsLoading(true)

    try {
      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll just redirect to the home page
      // In a real app, you would handle authentication with a backend
      localStorage.setItem("isLoggedIn", "true")
      router.push("/")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-6xl flex rounded-xl shadow-lg overflow-hidden">
          {/* Left side - Image */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Business funding"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
              <div className="bg-accent/20 backdrop-blur-sm p-4 rounded-full mb-6">
                <DollarSign className="h-12 w-12 text-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center">Access the Business Lending Intelligence Platform</h2>
              <p className="text-white/80 text-lg mb-8 text-center">
                Connect with top lenders, access market intelligence, and grow your business with FunderIntel.
              </p>
              <div className="space-y-4 w-full max-w-md">
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/90">Access to 350+ verified funding sources</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/90">Real-time market intelligence dashboard</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/90">Connect with 5,000+ industry professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-8 md:p-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
          >
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Welcome back</h1>
                <p className="text-gray-600">Sign in to your FunderIntel account</p>
              </div>

              {error && (
                <motion.div
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="space-y-2" variants={fadeInUpVariants} custom={0.2}>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUpVariants} custom={0.3}>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-accent hover:text-accent-dark transition-colors duration-500 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </motion.div>

                <motion.div className="flex items-center space-x-2" variants={fadeInUpVariants} custom={0.4}>
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal cursor-pointer text-gray-600">
                    Remember me for 30 days
                  </Label>
                </motion.div>

                <motion.div variants={fadeInUpVariants} custom={0.5}>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary-dark text-white transition-colors duration-500 font-medium text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </motion.div>

                <motion.div className="text-center text-sm text-gray-600" variants={fadeInUpVariants} custom={0.6}>
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-accent hover:text-accent-dark font-medium transition-colors duration-500"
                  >
                    Create an account
                  </Link>
                </motion.div>
              </form>

              <motion.div className="mt-8" variants={fadeInUpVariants} custom={0.7}>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-12 border-gray-300 hover:bg-gray-50 hover:border-primary transition-colors duration-500"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path
                          fill="#4285F4"
                          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        />
                      </g>
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-gray-300 hover:bg-gray-50 hover:border-primary transition-colors duration-500"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </motion.div>

              <motion.p
                className="mt-8 text-center text-sm text-gray-500"
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                custom={0.8}
              >
                By signing in, you agree to our{" "}
                <Link href="/terms" className="text-accent hover:underline transition-colors duration-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-accent hover:underline transition-colors duration-500">
                  Privacy Policy
                </Link>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

