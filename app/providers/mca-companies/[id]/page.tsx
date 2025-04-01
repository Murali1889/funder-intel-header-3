import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BadgeCheck, MapPin, Mail, Phone, Globe, ChevronRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

import { mcaFunders } from "../data"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const funder = mcaFunders.find((f) => f.id === params.id)

  if (!funder) {
    return {
      title: "Funder Not Found | FunderIntel",
      description: "The requested MCA funder could not be found.",
    }
  }

  return {
    title: `${funder.name} | MCA Companies | FunderIntel`,
    description: funder.description || `Learn about ${funder.name} and their merchant cash advance offerings.`,
  }
}

export default function MCAFunderPage({ params }: { params: { id: string } }) {
  const funder = mcaFunders.find((f) => f.id === params.id)

  if (!funder) {
    notFound()
  }

  // Format currency
  const formatCurrency = (amount: number | null) => {
    if (amount === null) return "Varies"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <SiteHeader /> */}

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/providers" className="hover:text-blue-600">
                Providers
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/providers/mca-companies" className="hover:text-blue-600">
                MCA Companies
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium">{funder.name}</span>
            </div>
          </div>
        </div>

        {/* Funder Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                <Image src={funder.logo || "/placeholder.svg"} alt={funder.name} fill className="object-contain" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold text-gray-900">{funder.name}</h1>
                  {funder.verified && <BadgeCheck className="h-6 w-6 text-blue-500" />}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{funder.fileType}</Badge>
                  <span>{funder.claimed ? "Direct Funder" : "Broker"}</span>
                  {funder.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {funder.location}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 max-w-3xl">{funder.description}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                  Apply for Funding
                </Button>
                {funder.website && (
                  <Button variant="outline" asChild>
                    <Link href={funder.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-white border-b border-gray-200 w-full justify-start rounded-none h-auto p-0 mb-6">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 py-3 px-4"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="requirements"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 py-3 px-4"
                  >
                    Requirements
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 py-3 px-4"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Funding Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Maximum Funding</h3>
                            <p className="text-lg font-semibold">{formatCurrency(funder.maxFunding)}</p>
                          </div>

                          {funder.factorRates && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-1">Factor Rates</h3>
                              <p className="text-lg font-semibold">
                                {funder.factorRates.min} - {funder.factorRates.max}
                              </p>
                            </div>
                          )}

                          {funder.termLength && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-1">Term Length</h3>
                              <p className="text-lg font-semibold">
                                {funder.termLength.min} - {funder.termLength.max} months
                              </p>
                            </div>
                          )}

                          {funder.fundingSpeed !== undefined && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-1">Funding Speed</h3>
                              <p className="text-lg font-semibold">
                                {funder.fundingSpeed === 1 ? "Same Day" : `${funder.fundingSpeed} Days`}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {funder.industries && funder.industries.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Industries Served</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {funder.industries.map((industry) => (
                              <Badge key={industry} variant="secondary" className="bg-blue-50 text-blue-700">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <Card>
                      <CardHeader>
                        <CardTitle>About {funder.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          {funder.description ||
                            `${funder.name} is a provider of merchant cash advances and revenue-based financing solutions for small to medium-sized businesses.`}
                        </p>

                        {funder.onboardingISOs && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <h3 className="font-medium mb-2">ISO Information</h3>
                            <p className="text-gray-700 flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              This funder onboards ISOs (Independent Sales Organizations)
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Eligibility Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {funder.minTimeInBusiness !== undefined && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-1">Time in Business</h3>
                              <p className="text-lg font-semibold">
                                {funder.minTimeInBusiness === 0 ? "Startups OK" : `${funder.minTimeInBusiness}+ months`}
                              </p>
                            </div>
                          )}

                          {funder.minCreditScore !== undefined && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-1">Minimum Credit Score</h3>
                              <p className="text-lg font-semibold">{funder.minCreditScore}+</p>
                            </div>
                          )}
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-3">Required Documentation</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5" />
                              <span>Last 3 months of business bank statements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5" />
                              <span>Valid ID (driver's license or passport)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5" />
                              <span>Voided business check</span>
                            </li>
                            {funder.minTimeInBusiness && funder.minTimeInBusiness > 0 && (
                              <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>Proof of business ownership for {funder.minTimeInBusiness}+ months</span>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reviews & Ratings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">Reviews coming soon</p>
                        <Button variant="outline">Be the first to leave a review</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {funder.website && (
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Website</h3>
                          <a
                            href={funder.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {funder.website.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      </div>
                    )}

                    {funder.contactEmail && (
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Email</h3>
                          <a href={`mailto:${funder.contactEmail}`} className="text-blue-600 hover:underline">
                            {funder.contactEmail}
                          </a>
                        </div>
                      </div>
                    )}

                    {funder.contactPhone && (
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Phone</h3>
                          <a href={`tel:${funder.contactPhone}`} className="text-blue-600 hover:underline">
                            {funder.contactPhone}
                          </a>
                        </div>
                      </div>
                    )}

                    {funder.location && (
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Location</h3>
                          <p>{funder.location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Apply for Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Ready to get started? Apply now to see if you qualify for funding from {funder.name}.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Funders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mcaFunders
                      .filter((f) => f.id !== funder.id && f.fileType === funder.fileType)
                      .slice(0, 3)
                      .map((similarFunder) => (
                        <div key={similarFunder.id} className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                            <Image
                              src={similarFunder.logo || "/placeholder.svg"}
                              alt={similarFunder.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate">{similarFunder.name}</h3>
                            <p className="text-sm text-gray-500">Max: {formatCurrency(similarFunder.maxFunding)}</p>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/providers/mca-companies/${similarFunder.id}`}>View</Link>
                          </Button>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

