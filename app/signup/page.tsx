import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Check, Info, Mail, User, Building, Phone, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Sign Up | FunderIntel",
  description: "Create your FunderIntel account to access exclusive funding resources and industry insights.",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Image/Branding */}
        <div className="hidden md:flex md:w-1/2 bg-blue-900 text-white p-8 flex-col justify-between">
          <div className="max-w-md mx-auto mt-20">
            <h1 className="text-3xl font-bold mb-6">Join the Premier Network for Funding Professionals</h1>
            <p className="text-lg mb-8 text-white">
              Connect with top funders, access exclusive deals, and stay ahead with market intelligence in the business
              lending industry.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-2 rounded-full mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Verified Industry Network</h3>
                  <p className="text-sm text-white">Connect with pre-vetted funders and brokers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-2 rounded-full mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Exclusive Resources</h3>
                  <p className="text-sm text-white">Access premium content and industry insights</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-2 rounded-full mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Business Growth</h3>
                  <p className="text-sm text-white">Find new opportunities and expand your business</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-white">© 2025 FunderIntel. All rights reserved.</div>
        </div>

        {/* Right side - Signup Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-white">
          <Card className="w-full max-w-md shadow-lg border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create your account</CardTitle>
              <CardDescription className="text-center">
                Join the premier network for funding professionals
              </CardDescription>

              <Alert className="bg-blue-50 border-blue-200 mt-4">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800 text-xs">
                  Your identity will need to be verified before approval
                </AlertDescription>
              </Alert>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="business">Business Info</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="First Name" className="pl-10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Last Name" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Company Email" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Phone Number" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input type="password" placeholder="Password" className="pl-10" required />
                    </div>
                    <p className="text-xs text-gray-500">
                      Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        terms and conditions
                      </Link>
                    </label>
                  </div>

                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 mt-2"
                    size="lg"
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>

                <TabsContent value="business" className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Company Name" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Company Website" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="broker">Broker</SelectItem>
                        <SelectItem value="funder">Funder</SelectItem>
                        <SelectItem value="iso">ISO</SelectItem>
                        <SelectItem value="lender">Lender</SelectItem>
                        <SelectItem value="service-provider">Service Provider</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Input placeholder="LinkedIn Profile URL" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">How did you hear about us?</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="event">Industry Event</SelectItem>
                        <SelectItem value="advertisement">Advertisement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="subscribe" defaultChecked />
                      <label
                        htmlFor="subscribe"
                        className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to blogs and alerts
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="community" defaultChecked />
                      <label
                        htmlFor="community"
                        className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Join the Community Forum
                      </label>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 mt-2"
                    size="lg"
                  >
                    Complete Registration
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or sign up with</span>
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

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in
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

