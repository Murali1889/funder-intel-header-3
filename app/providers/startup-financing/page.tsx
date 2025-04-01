import Link from "next/link"
import type { Metadata } from "next"
import { ChevronLeft, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Startup Financing | FunderIntel",
  description: "Explore startup financing options and connect with leading venture capital firms and angel investors.",
}

export default function StartupFinancingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <div className="bg-white text-blue-900 py-16 border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" className="mb-4 text-gray-700" asChild>
              <Link href="/providers">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Providers
              </Link>
            </Button>

            <h1 className="text-4xl font-bold mb-4">Startup Financing</h1>
            <p className="text-xl max-w-3xl text-gray-700">
              Connect with venture capital firms, angel investors, and other funding sources for your startup
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search investors..." className="pl-10" />
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button variant="primary">Find Investors</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Categories */}
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Venture Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Connect with VC firms investing in early to growth-stage startups across various industries.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Series A</Badge>
                    <Badge variant="secondary">Series B</Badge>
                    <Badge variant="secondary">Growth</Badge>
                  </div>
                  <p className="text-sm text-gray-500">42 firms available</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild>
                    <Link href="/providers/startup-financing/venture-capital">Browse VC Firms</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Angel Investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Find individual investors who provide capital for startups, typically in exchange for equity.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Pre-seed</Badge>
                    <Badge variant="secondary">Seed</Badge>
                    <Badge variant="secondary">Early Stage</Badge>
                  </div>
                  <p className="text-sm text-gray-500">78 investors available</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild>
                    <Link href="/providers/startup-financing/angel-investors">Browse Angel Investors</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Accelerators & Incubators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Programs that provide mentorship, resources, and often funding to help startups grow.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Mentorship</Badge>
                    <Badge variant="secondary">Resources</Badge>
                    <Badge variant="secondary">Networking</Badge>
                  </div>
                  <p className="text-sm text-gray-500">35 programs available</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild>
                    <Link href="/providers/startup-financing/accelerators">Browse Programs</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Crowdfunding Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Raise capital from a large number of people, typically via online platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Equity</Badge>
                    <Badge variant="secondary">Rewards</Badge>
                    <Badge variant="secondary">Donation</Badge>
                  </div>
                  <p className="text-sm text-gray-500">12 platforms available</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild>
                    <Link href="/providers/startup-financing/crowdfunding">Browse Platforms</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Grants & Competitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Non-dilutive funding opportunities through grants, competitions, and challenges.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Government</Badge>
                    <Badge variant="secondary">Private</Badge>
                    <Badge variant="secondary">Non-profit</Badge>
                  </div>
                  <p className="text-sm text-gray-500">28 opportunities available</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild>
                    <Link href="/providers/startup-financing/grants">Browse Opportunities</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Corporate Venture Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Investment funds from established corporations looking to invest in innovative startups.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Strategic</Badge>
                    <Badge variant="secondary">Industry</Badge>
                    <Badge variant="secondary">Corporate</Badge>
                  </div>
                  <p className="text-sm text-gray-500">19 funds available</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild>
                    <Link href="/providers/startup-financing/corporate-vc">Browse Corporate VCs</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Featured Investors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Investor 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-800">VC1</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Featured</Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">Sequoia Capital</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 text-sm mb-4">
                    Leading venture capital firm focused on technology, healthcare, and consumer sectors.
                  </p>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Investment Stage</p>
                      <p className="font-medium">Seed to Late</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Check Size</p>
                      <p className="font-medium">$1M - $100M+</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild className="w-full">
                    <Link href="/providers/startup-financing/sequoia-capital">View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Featured Investor 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-800">YC</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Featured</Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">Y Combinator</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 text-sm mb-4">
                    Startup accelerator providing seed funding, advice, and connections to early-stage companies.
                  </p>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Investment Stage</p>
                      <p className="font-medium">Seed</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Check Size</p>
                      <p className="font-medium">$125K - $500K</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild className="w-full">
                    <Link href="/providers/startup-financing/y-combinator">View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Featured Investor 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-800">A16Z</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Featured</Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">Andreessen Horowitz</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 text-sm mb-4">
                    VC firm investing in technology companies across consumer, enterprise, bio/healthcare, crypto, and
                    fintech.
                  </p>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Investment Stage</p>
                      <p className="font-medium">Seed to Growth</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Check Size</p>
                      <p className="font-medium">$500K - $50M+</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" asChild className="w-full">
                    <Link href="/providers/startup-financing/andreessen-horowitz">View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Startup Financing Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pitch Deck Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access professionally designed pitch deck templates to help you present your startup to investors.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/resources/pitch-decks">View Templates</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fundraising Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Step-by-step guides on how to raise capital for your startup at different stages.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/resources/fundraising-guides">Read Guides</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Valuation Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estimate your startup's valuation using our interactive calculator tool.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/tools/valuation-calculator">Use Calculator</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Investor Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Search our comprehensive database of investors filtered by industry, stage, and location.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/tools/investor-database">Search Database</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

