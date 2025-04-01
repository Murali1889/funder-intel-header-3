import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Check, ExternalLink, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/site-header"

export default function TermLoanLendersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <SiteHeader /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 py-12 border-b">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="space-y-4 max-w-3xl">
                <div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mb-4 text-blue-700 hover:text-blue-800 hover:bg-blue-100 -ml-2"
                    asChild
                  >
                    <Link href="/providers">
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Back to Providers
                    </Link>
                  </Button>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Business Term Loan Lenders</h1>
                </div>
                <p className="text-gray-700 text-lg">
                  Term loans provide businesses with a lump sum of capital that is repaid with regular payments over a
                  set period. Unlike other financing options, term loans offer predictable payment schedules,
                  competitive rates, and flexible use of funds for various business needs.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                    Fixed Payments
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                    Predictable Terms
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                    Business Expansion
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                    Equipment Purchase
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                    Working Capital
                  </Badge>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <Card className="bg-white shadow-md border-blue-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Find Your Ideal Term Loan</CardTitle>
                    <CardDescription>Compare top lenders in minutes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Access $2,500 to $5M+ in funding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Terms from 3 months to 25 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Fast approvals, some same-day</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200">
                      Compare Lenders
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Term Loan Overview */}
        <section className="py-12 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a Business Term Loan?</h2>
                <p className="text-gray-700 mb-4">
                  A business term loan provides a lump sum of capital that is repaid with regular payments over a set
                  period. Unlike revolving credit, term loans have a fixed end date and typically offer lower interest
                  rates for businesses with strong credit profiles.
                </p>
                <p className="text-gray-700">
                  Term loans are ideal for established businesses looking to finance specific growth initiatives, large
                  purchases, or expansion projects that will generate returns over time.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Benefits of Term Loans</h2>
                <ul className="space-y-3">
                  {termLoanBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Important Consideration</h3>
                  <p className="text-gray-700 text-sm">
                    Several companies have started following the term loan product that is structured legally as a
                    simple interest loan but seems very similar to a factoring product like an MCA. The key is in the
                    language and terms in the contract which should be thoroughly explained by ISOs and brokers to the
                    merchant.
                  </p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Top Term Loan Lenders</h2>
                <TabsList className="bg-blue-50">
                  <TabsTrigger value="all">All Lenders</TabsTrigger>
                  <TabsTrigger value="fast">Fast Funding</TabsTrigger>
                  <TabsTrigger value="large">Large Amounts</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6">
                  {termLoanLenders.map((lender) => (
                    <LenderCard key={lender.id} lender={lender} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fast" className="mt-0">
                <div className="grid gap-6">
                  {termLoanLenders
                    .filter((lender) => lender.tags.includes("fast-funding"))
                    .map((lender) => (
                      <LenderCard key={lender.id} lender={lender} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="large" className="mt-0">
                <div className="grid gap-6">
                  {termLoanLenders
                    .filter((lender) => lender.tags.includes("large-amounts"))
                    .map((lender) => (
                      <LenderCard key={lender.id} lender={lender} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50 border-t">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="max-w-3xl">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-sm text-gray-500">
              <p>
                This is not an endorsement for these companies so please perform your own due diligence before working
                with them.
              </p>
              <p>Advertising Disclosure</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function LenderCard({ lender }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-64 p-6 flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-40 h-40 relative flex items-center justify-center">
            {lender.logoUrl ? (
              <Image
                src={lender.logoUrl || "/placeholder.svg"}
                alt={`${lender.name} logo`}
                width={160}
                height={160}
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-md">
                <span className="text-xl font-bold text-blue-700">{lender.name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{lender.name}</h3>
              <p className="text-gray-700 mb-4">{lender.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-4">
                {lender.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {lender.details.map((detail, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-md">
                    <p className="text-xs text-gray-500 mb-1">{detail.label}</p>
                    <p className="font-medium text-gray-900">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200">
              Apply for Loan
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Visit Site</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const termLoanBenefits = [
  "Predictable payment structure with fixed monthly payments for easier budgeting",
  "Flexible use of funds for various business purposes including expansion, equipment, and working capital",
  "Longer repayment terms compared to short-term financing options (up to 25 years for some loans)",
  "Lower interest rates for qualified borrowers compared to other financing options",
  "Build business credit with consistent on-time payments",
  "Potential tax benefits as interest payments may be tax-deductible (consult your tax advisor)",
]

const faqs = [
  {
    question: "What credit score do I need for a business term loan?",
    answer:
      "Credit score requirements vary by lender, but generally, traditional banks require scores of 680+ for the best rates, while alternative lenders may work with scores as low as 600. Higher scores typically qualify for better rates and terms.",
  },
  {
    question: "How long does it take to get approved for a term loan?",
    answer:
      "Approval times vary widely. Traditional banks may take weeks to months for approval and funding, while online lenders can approve applications in hours and fund within 1-3 business days. The timeline depends on the lender, loan amount, and completeness of your application.",
  },
  {
    question: "What documents are typically required for a term loan application?",
    answer:
      "Common requirements include business and personal tax returns (2-3 years), bank statements (3-6 months), profit and loss statements, balance sheets, business licenses, articles of incorporation, and a detailed business plan. Specific requirements vary by lender.",
  },
  {
    question: "Can I get a business term loan for a startup?",
    answer:
      "Traditional term loans are challenging for startups to obtain as most lenders require 1-2+ years in business. Startups may need to explore alternatives like SBA loans, equipment financing, business credit cards, or startup-specific lenders that focus more on growth potential than business history.",
  },
  {
    question: "What's the difference between a term loan and a line of credit?",
    answer:
      "A term loan provides a lump sum upfront that's repaid over a fixed period with regular payments. A line of credit gives access to a pool of funds you can draw from as needed and only pay interest on what you use. Term loans are better for one-time large purchases, while lines of credit work well for ongoing or unexpected expenses.",
  },
]

const termLoanLenders = [
  {
    id: "ascentium-capital",
    name: "Ascentium Capital",
    logoUrl: "/placeholder.svg?height=160&width=160",
    description:
      "Ascentium Capital provides short-term business loans with fast approvals and flexible terms to help businesses drive growth and accelerate profits.",
    features: [
      "Simple credit application process",
      "Flexible terms from 1 to 24 months",
      "Fast approvals with same-day funding",
      "Holistic business evaluation beyond credit score",
    ],
    details: [
      { label: "Loan Amount", value: "Up to $250,000" },
      { label: "Term Length", value: "1-24 months" },
      { label: "Approval Time", value: "Same day" },
      { label: "Min. Credit Score", value: "Not specified" },
    ],
    tags: ["fast-funding"],
  },
  {
    id: "breakout-finance",
    name: "Breakout Finance",
    logoUrl: "/placeholder.svg?height=160&width=160",
    description:
      "Breakout Finance offers tailored financing strategies with expertise in alternative financing, including working capital term loans and invoice factoring.",
    features: [
      "Flexible payback schedule (daily, weekly, monthly)",
      "Funding up to $1,000,000",
      "Terms up to 24 months",
      "Rates starting at 1.25% per month",
    ],
    details: [
      { label: "Loan Amount", value: "Up to $1M" },
      { label: "Term Length", value: "Up to 24 months" },
      { label: "Min. Time in Business", value: "1 year" },
      { label: "Min. Credit Score", value: "600" },
    ],
    tags: ["large-amounts"],
  },
  {
    id: "can-capital",
    name: "CAN Capital",
    logoUrl: "/placeholder.svg?height=160&width=160",
    description:
      "CAN Capital offers term loans for small businesses to finance working capital needs, with fast approval and funding processes.",
    features: [
      "Funding from $2,500 to $250,000",
      "6 to 24 month terms",
      "Fast approval process",
      "Next-day funding available",
    ],
    details: [
      { label: "Loan Amount", value: "$2.5K-$250K" },
      { label: "Term Length", value: "6-24 months" },
      { label: "Payment Schedule", value: "Daily/Weekly" },
      { label: "Special Feature", value: "Pre-payment discount" },
    ],
    tags: ["fast-funding"],
  },
  {
    id: "funding-circle",
    name: "Funding Circle",
    logoUrl: "/placeholder.svg?height=160&width=160",
    description:
      "Funding Circle offers flexible loans with low monthly payments, no prepayment penalties, and faster-than-bank decisions through a simple application process.",
    features: [
      "Approval as fast as 24 hours",
      "Funding in as few as 3 days",
      "Loans up to $500,000 with fixed rates",
      "Term lengths from 6 months to 7 years",
    ],
    details: [
      { label: "Loan Amount", value: "Up to $500K" },
      { label: "Term Length", value: "6 mo - 7 years" },
      { label: "Approval Time", value: "24 hours" },
      { label: "Special Feature", value: "No prepayment penalties" },
    ],
    tags: ["large-amounts"],
  },
  {
    id: "iou-financial",
    name: "IOU Financial",
    logoUrl: "/placeholder.svg?height=160&width=160",
    description:
      "IOU Financial offers flexible small business loans with a 3-minute application process and pre-approval in seconds.",
    features: [
      "3-minute application, pre-approved in seconds",
      "Premier PLUS term loan for businesses 5+ years old",
      "High credit score rewards",
      "36 monthly installments available",
    ],
    details: [
      { label: "Loan Amount", value: "Not specified" },
      { label: "Term Length", value: "Up to 36 months" },
      { label: "Min. Time in Business", value: "5 years (for PLUS)" },
      { label: "Application Time", value: "3 minutes" },
    ],
    tags: ["fast-funding"],
  },
  {
    id: "newtekone",
    name: "NewtekOne",
    logoUrl: "/placeholder.svg?height=160&width=160",
    description:
      "NewtekOne (NASDAQ: NEWT) provides business solutions designed to help organizations grow sales, reduce costs, and minimize risk.",
    features: [
      "Loans from $1,000 to $15 million",
      "Payback terms up to 25 years",
      "48-hour pre-qualification turnaround",
      "Dedicated lending specialist throughout process",
    ],
    details: [
      { label: "Loan Amount", value: "$1K-$15M" },
      { label: "Term Length", value: "Up to 25 years" },
      { label: "Pre-qualification", value: "48 hours" },
      { label: "Special Feature", value: "Complete application docs for you" },
    ],
    tags: ["large-amounts"],
  },
]

