import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Filter,
  Search,
  Plus,
  ArrowRight,
  Clock,
  Building,
  DollarSign,
  Briefcase,
  Check,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeadCenterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Lead Center</h1>
              <p className="text-muted-foreground text-lg">Connect with partners and find new business opportunities</p>
            </div>
            <Button className="w-full md:w-auto" variant="primary" asChild>
              <Link href="/lead-center/post-deal">
                <Plus className="mr-2 h-4 w-4" />
                Post a Deal
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="deals" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="deals">Broker Deals</TabsTrigger>
            <TabsTrigger value="programs">Funder Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="deals" className="mt-0">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search deals by industry, amount, etc." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Deal 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2">Restaurant</Badge>
                      <CardTitle>$150K Working Capital</CardTitle>
                      <CardDescription>Posted 2 hours ago by John D. (Verified Broker)</CardDescription>
                    </div>
                    <Badge variant="outline">New York</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Business Age</p>
                        <p className="text-sm text-muted-foreground">4 years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Monthly Revenue</p>
                        <p className="text-sm text-muted-foreground">$45,000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Use of Funds</p>
                        <p className="text-sm text-muted-foreground">Expansion</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Urgency</p>
                        <p className="text-sm text-muted-foreground">High (7 days)</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Established restaurant with strong financials seeking working capital for expansion. Owner has
                    excellent credit (720+) and no current advances. Clean bank statements with consistent deposits.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="secondary">MCA / Term Loan</Badge>
                  <Button variant="secondary" asChild>
                    <Link href="/lead-center/deals/1">
                      Contact Broker
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Deal 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2">Construction</Badge>
                      <CardTitle>$75K Equipment Financing</CardTitle>
                      <CardDescription>Posted 1 day ago by Sarah M. (Verified Broker)</CardDescription>
                    </div>
                    <Badge variant="outline">Texas</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Business Age</p>
                        <p className="text-sm text-muted-foreground">2 years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Monthly Revenue</p>
                        <p className="text-sm text-muted-foreground">$30,000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Use of Funds</p>
                        <p className="text-sm text-muted-foreground">Equipment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Urgency</p>
                        <p className="text-sm text-muted-foreground">Medium (14 days)</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Growing construction company needs to finance new equipment. Owner has fair credit (650) and one
                    existing MCA with 50% paid down. Company has secured a large contract requiring additional
                    equipment.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="secondary">Equipment Financing</Badge>
                  <Button variant="secondary" asChild>
                    <Link href="/lead-center/deals/2">
                      Contact Broker
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Deal 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2">Healthcare</Badge>
                      <CardTitle>$250K Practice Acquisition</CardTitle>
                      <CardDescription>Posted 3 days ago by Michael R. (Verified Broker)</CardDescription>
                    </div>
                    <Badge variant="outline">California</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Business Age</p>
                        <p className="text-sm text-muted-foreground">10+ years (acquisition)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Monthly Revenue</p>
                        <p className="text-sm text-muted-foreground">$80,000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Use of Funds</p>
                        <p className="text-sm text-muted-foreground">Acquisition</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Urgency</p>
                        <p className="text-sm text-muted-foreground">High (30 days)</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dentist looking to acquire established practice. Buyer has excellent credit (780+) and 5 years
                    experience. Practice has consistent cash flow and established patient base. Seller financing 30% of
                    purchase price.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="secondary">SBA / Term Loan</Badge>
                  <Button variant="secondary" asChild>
                    <Link href="/lead-center/deals/3">
                      Contact Broker
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/lead-center/deals">
                  View All Deals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="programs" className="mt-0">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search programs by funder, type, etc." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Program 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2">New Program</Badge>
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=GF"
                      alt="Granite Funding"
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </div>
                  <CardTitle>Granite Funding</CardTitle>
                  <CardDescription>Restaurant Financing Program</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    New program for restaurants with at least 1 year in business. Funding up to $250K with competitive
                    rates. Fast approvals and minimal documentation required.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Range:</span>
                      <span className="font-medium">$25K - $250K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Term Length:</span>
                      <span className="font-medium">6-18 months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Min. Requirements:</span>
                      <span className="font-medium">1+ year in business, $15K monthly revenue</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="accent" asChild>
                    <Link href="/lead-center/programs/1">
                      Submit Deals
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Program 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2">Limited Time</Badge>
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=LB"
                      alt="Liquid Bee"
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </div>
                  <CardTitle>Liquid Bee</CardTitle>
                  <CardDescription>Equipment Financing Special</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    Special equipment financing program with reduced documentation and expedited funding. Available for
                    all industries with focus on construction and manufacturing.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Range:</span>
                      <span className="font-medium">$10K - $500K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Term Length:</span>
                      <span className="font-medium">24-60 months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Min. Requirements:</span>
                      <span className="font-medium">600+ credit score, 6+ months in business</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="accent" asChild>
                    <Link href="/lead-center/programs/2">
                      Submit Deals
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Program 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2">High Commission</Badge>
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=SC"
                      alt="Spartan Capital"
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </div>
                  <CardTitle>Spartan Capital</CardTitle>
                  <CardDescription>Small Ticket Program</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    New small ticket program with same-day approvals and funding in 24-48 hours. No STIPS under $20K and
                    increased commission rates for brokers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Range:</span>
                      <span className="font-medium">$5K - $50K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Term Length:</span>
                      <span className="font-medium">3-12 months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Min. Requirements:</span>
                      <span className="font-medium">3+ months in business, $8K monthly revenue</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="accent" asChild>
                    <Link href="/lead-center/programs/3">
                      Submit Deals
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/lead-center/programs">
                  View All Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-slate-50 p-8 rounded-lg border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Maximize Your Deal Flow</h2>
              <p className="mb-6">
                Premium members get unlimited access to our Lead Center with priority placement and advanced filtering
                options.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <Check className="h-4 w-4 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">For Funders</p>
                    <p className="text-sm text-muted-foreground">
                      Access all broker-posted deals and get notified of new opportunities that match your criteria.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <Check className="h-4 w-4 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">For Brokers</p>
                    <p className="text-sm text-muted-foreground">
                      Post unlimited deals and get your opportunities in front of hundreds of qualified funders.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" variant="primary" asChild>
                <Link href="/pro">
                  Upgrade to Premium
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Deal+Flow+Analytics+Dashboard"
                alt="Deal Flow Analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

