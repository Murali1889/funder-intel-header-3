import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Building,
  Briefcase,
  CreditCard,
  DollarSign,
  Package,
  FileText,
  Leaf,
  Landmark,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Funding Providers | FunderIntel",
  description: "Explore our comprehensive directory of funding providers across various financing categories.",
}

export default function ProvidersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <main className="flex-1">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Funding Provider Directory</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Connect with the industry's top funding sources across multiple financing categories
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MCA Companies */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>MCA Companies</CardTitle>
                <CardDescription>Merchant Cash Advance providers offering working capital solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Connect with top MCA funders providing fast, flexible funding options for businesses with daily or
                  weekly repayment structures.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/mca-companies">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Startup Financing */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Startup Financing</CardTitle>
                <CardDescription>Funding solutions for early-stage businesses and startups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Discover specialized funding options for startups including venture capital, angel investors, and
                  startup-friendly loan programs.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/startup-financing">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Term Loan Lenders */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Term Loan Lenders</CardTitle>
                <CardDescription>Traditional and alternative term loan providers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Connect with lenders offering fixed-term business loans with predictable payment schedules for
                  expansion, equipment, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/term-loan-lenders">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Line of Credit Lenders */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Line of Credit Lenders</CardTitle>
                <CardDescription>Flexible revolving credit solutions for businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Find lenders offering flexible lines of credit that allow businesses to draw funds as needed and only
                  pay interest on what they use.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/line-of-credit">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Equipment Lenders */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Equipment Lenders</CardTitle>
                <CardDescription>Specialized financing for business equipment purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Connect with lenders specializing in equipment financing and leasing options for machinery, vehicles,
                  and technology.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/equipment-lenders">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Invoice Factoring */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Invoice Factoring</CardTitle>
                <CardDescription>Convert outstanding invoices into immediate cash flow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Find factoring companies that purchase your accounts receivable, providing immediate working capital
                  without creating debt.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/invoice-factoring">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Cannabis Funding */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Cannabis Funding</CardTitle>
                <CardDescription>Specialized financing for the cannabis industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Connect with lenders who specialize in providing capital to cannabis businesses, navigating the unique
                  regulatory landscape.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/cannabis-funding">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* SBA Lenders */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Landmark className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>SBA Lenders</CardTitle>
                <CardDescription>Lenders offering SBA-backed loan programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Find approved lenders offering Small Business Administration (SBA) loans with favorable terms and
                  government guarantees.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/providers/sba-lenders">
                    View Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

