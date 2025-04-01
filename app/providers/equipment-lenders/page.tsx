import Link from "next/link"
import {
  ChevronLeft,
  CheckCircle2,
  Filter,
  Search,
  ArrowRight,
  Clock,
  DollarSign,
  Building,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import SiteHeader from "@/components/site-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EquipmentLendersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <SiteHeader /> */}

      {/* Hero Section */}
      <div className="bg-blue-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 max-w-3xl">
              <Button
                variant="ghost"
                size="sm"
                className="mb-2 text-blue-700 hover:text-blue-800 hover:bg-blue-100 -ml-2"
                asChild
              >
                <Link href="/providers">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Providers
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Equipment Financing Solutions</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Access the capital you need to acquire essential equipment for your business growth. Our directory
                features top equipment lenders offering competitive rates, flexible terms, and specialized industry
                expertise.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Badge variant="outline" className="bg-white text-blue-700 border-blue-200 px-3 py-1">
                  <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                  Fast Approvals
                </Badge>
                <Badge variant="outline" className="bg-white text-blue-700 border-blue-200 px-3 py-1">
                  <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                  Flexible Terms
                </Badge>
                <Badge variant="outline" className="bg-white text-blue-700 border-blue-200 px-3 py-1">
                  <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                  Industry Specialists
                </Badge>
                <Badge variant="outline" className="bg-white text-blue-700 border-blue-200 px-3 py-1">
                  <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                  $5K to $500M+ Funding
                </Badge>
              </div>
            </div>
            <Card className="w-full md:w-auto min-w-[300px] bg-white shadow-md border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-blue-900">Need Equipment Financing?</CardTitle>
                <CardDescription>Get matched with the right lender</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="mr-2 h-4 w-4" />
                      Manufacturing
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="mr-2 h-4 w-4" />
                      Construction
                    </Button>
                  </div>
                  <Button className="w-full">Find Lenders</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* How Equipment Financing Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">How Equipment Financing Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-blue-100">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-lg">Secure Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Equipment financing provides the funds needed to purchase business equipment without depleting your
                  working capital.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-lg">Fixed Repayment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make predictable payments over a set period, typically 2-7 years depending on the equipment type and
                  expected useful life.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-lg">Equipment as Collateral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The equipment itself typically serves as collateral, making it easier to qualify compared to unsecured
                  financing options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Financing vs. Leasing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Equipment Financing vs. Leasing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-blue-100">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg text-blue-900">Equipment Financing</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You own the equipment after paying off the loan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Potential tax benefits through depreciation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fixed payments for easier budgeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No restrictions on equipment use or modifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg text-blue-900">Equipment Leasing</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lower monthly payments than financing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Easier to upgrade to newer equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Potential tax advantages as operating expense</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Less upfront capital required to acquire equipment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Top Equipment Lenders */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Top Equipment Lenders</h2>
              <p className="text-gray-600 mt-1">Compare leading equipment financing providers</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input type="search" placeholder="Search lenders" className="pl-9 w-[200px] bg-white" />
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-blue-50">
              <TabsTrigger value="all">All Lenders</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="construction">Construction</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                {equipmentLenders.map((lender) => (
                  <Card key={lender.id} className="bg-white border-blue-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 p-6 flex items-center justify-center bg-blue-50 border-r border-blue-100">
                        <div className="w-40 h-24 bg-white rounded-md flex items-center justify-center p-4 shadow-sm">
                          <span className="text-xl font-bold text-blue-900">{lender.name}</span>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-semibold text-blue-900">{lender.name}</h3>
                              <p className="text-gray-600 mt-1">{lender.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {lender.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="min-w-[280px] mt-4 md:mt-0">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                              <div className="text-gray-500">Financing Amount:</div>
                              <div className="font-medium text-gray-900">{lender.financingAmount}</div>

                              <div className="text-gray-500">Term Length:</div>
                              <div className="font-medium text-gray-900">{lender.termLength}</div>

                              <div className="text-gray-500">Equipment Types:</div>
                              <div className="font-medium text-gray-900">{lender.equipmentTypes}</div>

                              <div className="text-gray-500">Min. Credit Score:</div>
                              <div className="font-medium text-gray-900">{lender.minCreditScore}</div>
                            </div>

                            <div className="flex gap-3">
                              <Button className="flex-1" asChild>
                                <Link href={`/providers/equipment-lenders/${lender.id}/apply`}>Apply Now</Link>
                              </Button>
                              <Button variant="outline" className="flex-1" asChild>
                                <Link href={`/providers/equipment-lenders/${lender.id}`}>View Details</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="mt-6">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Manufacturing Equipment Specialists</h3>
                <p className="text-gray-600 mb-4">Showing lenders specializing in manufacturing equipment financing.</p>
                <Button>View Manufacturing Lenders</Button>
              </div>
            </TabsContent>

            <TabsContent value="construction" className="mt-6">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Construction Equipment Specialists</h3>
                <p className="text-gray-600 mb-4">Showing lenders specializing in construction equipment financing.</p>
                <Button>View Construction Lenders</Button>
              </div>
            </TabsContent>

            <TabsContent value="medical" className="mt-6">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Medical Equipment Specialists</h3>
                <p className="text-gray-600 mb-4">Showing lenders specializing in medical equipment financing.</p>
                <Button>View Medical Lenders</Button>
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Technology Equipment Specialists</h3>
                <p className="text-gray-600 mb-4">Showing lenders specializing in technology equipment financing.</p>
                <Button>View Technology Lenders</Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/providers/equipment-lenders/all">
                View All Equipment Lenders
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-blue-900">
                What types of equipment can I finance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                You can finance virtually any type of business equipment, including manufacturing machinery,
                construction equipment, medical devices, IT infrastructure, restaurant equipment, vehicles, and more.
                Most lenders specialize in specific industries or equipment types.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium text-blue-900">
                What are the typical requirements for equipment financing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Requirements vary by lender, but typically include: business operating for at least 1-2 years, minimum
                credit score of 600+, annual revenue requirements (often $100K+), and a down payment of 10-20% of the
                equipment value. Some lenders offer options for startups or businesses with challenged credit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium text-blue-900">
                How long does the equipment financing approval process take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                The timeline varies by lender and loan amount. Many online lenders can approve applications within 24-48
                hours for smaller amounts (under $250K). Larger equipment loans may take several days to a week. Once
                approved, funding typically occurs within 1-5 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium text-blue-900">
                Is equipment financing or leasing better for my business?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                It depends on your specific needs. Financing is generally better if you plan to keep the equipment
                long-term, want to build equity, and can benefit from tax deductions through depreciation. Leasing may
                be preferable if you need lower monthly payments, want to regularly upgrade to newer equipment, or need
                equipment for a short-term project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium text-blue-900">
                What are typical interest rates for equipment financing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Interest rates typically range from 5% to 30% depending on your credit profile, time in business,
                equipment type, and loan term. Businesses with strong credit and established history can qualify for the
                lowest rates. Some lenders offer fixed rates while others provide variable rates that may change over
                time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Ready to Finance Your Equipment?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Compare top equipment lenders and find the perfect financing solution for your business needs. Our network
            of lenders specializes in various industries and equipment types.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/providers/equipment-lenders/apply">Get Matched With Lenders</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/providers/equipment-lenders/compare">Compare All Lenders</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            This is not an endorsement for these companies so please perform your own due diligence before working with
            them. The information provided is for general informational purposes only.
          </p>
        </div>
      </div>
    </div>
  )
}

// Sample data - in a real application, this would come from a database
const equipmentLenders = [
  {
    id: "loeb-equipment",
    name: "Loeb Equipment",
    description:
      "Specialized equipment financing for machinery & equipment with comprehensive M&E financing, sales, purchases, and appraisal services.",
    financingAmount: "$10K - $500K",
    termLength: "2-7 years",
    equipmentTypes: "Manufacturing, Industrial",
    minCreditScore: "650+",
    tags: ["Manufacturing", "Fast Approval", "Asset Disposal"],
  },
  {
    id: "stonebriar-commercial",
    name: "Stonebriar Commercial Finance",
    description:
      "Premier equipment financing for large-scale operations with flexible structures including tax leases, finance leases, and term loans.",
    financingAmount: "$5M - $500M+",
    termLength: "3-20 years",
    equipmentTypes: "Aviation, Rail, General Equipment",
    minCreditScore: "700+",
    tags: ["Large Transactions", "Aviation", "Rail Leasing"],
  },
  {
    id: "providence-equipment",
    name: "Providence Equipment Finance",
    description:
      "Specialized in funding commercial equipment needs with creative financing structures for both established businesses and growth-oriented entrepreneurs.",
    financingAmount: "$25K - $1M",
    termLength: "2-7 years",
    equipmentTypes: "Commercial, Industrial",
    minCreditScore: "620+",
    tags: ["Growth Businesses", "Customized Solutions", "Quick Decisions"],
  },
  {
    id: "universal-finance",
    name: "Universal Finance",
    description:
      "Direct lender offering fast equipment financing with decisions based on the 3 C's: Credit, Collateral & Character for personalized lending solutions.",
    financingAmount: "$10K - $2M",
    termLength: "1-10 years",
    equipmentTypes: "Various Industries",
    minCreditScore: "600+",
    tags: ["Direct Lender", "Rapid Response", "Flexible Terms"],
  },
  {
    id: "tech-equipment-funding",
    name: "Tech Equipment Funding",
    description:
      "Specialized financing for technology equipment, computers, servers, and IT infrastructure with flexible terms and competitive rates.",
    financingAmount: "$5K - $250K",
    termLength: "1-5 years",
    equipmentTypes: "Technology, IT",
    minCreditScore: "630+",
    tags: ["Technology", "IT Infrastructure", "Software Financing"],
  },
  {
    id: "medical-equipment-finance",
    name: "Medical Equipment Finance",
    description:
      "Tailored financing solutions for medical practices, hospitals, and healthcare providers with specialized knowledge of medical equipment.",
    financingAmount: "$25K - $1M",
    termLength: "2-7 years",
    equipmentTypes: "Medical, Healthcare",
    minCreditScore: "660+",
    tags: ["Healthcare", "Medical Devices", "Practice Solutions"],
  },
]

