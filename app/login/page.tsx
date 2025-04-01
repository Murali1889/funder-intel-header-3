import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Mail, Lock, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Login | FunderIntel",
  description: "Login to your FunderIntel account to access exclusive funding resources and industry insights.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Image/Branding */}
        <div className="hidden md:flex md:w-1/2 bg-blue-900 text-white p-8 flex-col justify-between">
          <div className="max-w-md mx-auto mt-20">
            <h1 className="text-3xl font-bold mb-6">Welcome to the Industry's Premier Funding Intelligence Platform</h1>
            <p className="text-lg mb-8 text-white">
              Access exclusive funding resources, market intelligence, and connect with top funders and brokers in the
              business lending industry.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-2 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Market Intelligence</h3>
                  <p className="text-sm text-white">Get real-time insights on funding trends and opportunities</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-2 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Exclusive Deals</h3>
                  <p className="text-sm text-white">Access special offers from top funders in the industry</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-2 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Professional Network</h3>
                  <p className="text-sm text-white">Connect with industry leaders and grow your business</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-white">© 2025 FunderIntel. All rights reserved.</div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <Card className="w-full max-w-md shadow-lg border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
              <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input type="email" placeholder="Email address" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input type="password" placeholder="Password" className="pl-10" required />
                </div>
                <div className="flex justify-end">
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" size="lg">
                Sign in
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full border-gray-300">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full border-gray-300">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                New to FunderIntel?{" "}
                <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                  Create an account
                </Link>
              </div>

              <div className="text-center text-xs text-gray-500">
                By signing in, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:underline inline-flex items-center">
                  Terms of Service <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <div className="md:hidden">
        <SiteFooter />
      </div>
    </div>
  )
}

