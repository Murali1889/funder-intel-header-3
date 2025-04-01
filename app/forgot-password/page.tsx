import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Forgot Password | FunderIntel",
  description: "Reset your FunderIntel account password.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <main className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Reset your password</CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input type="email" placeholder="Email address" className="pl-10" required />
              </div>
            </div>

            <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" size="lg">
              Send reset link
            </Button>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Link href="/login" className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Link>
          </CardFooter>
        </Card>
      </main>

      <SiteFooter />
    </div>
  )
}

