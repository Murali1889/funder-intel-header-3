import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Info, Check, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function SBALendersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <SiteHeader /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button variant="outline" size="sm" className="mb-6 text-white border-white hover:bg-blue-800" asChild>
                <Link href="/providers">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Providers
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Top SBA Lenders</h1>
              <p className="text-xl opacity-90 mb-6">
                Connect with the nation's leading SBA-approved lenders offering government-backed loans with favorable
                terms
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                  <a href="#lenders">View Top Lenders</a>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-blue-800" asChild>
                  <a href="#loan-types">Explore SBA Loan Types</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
                <div className="flex gap-4 items-start">
                  <div className="mt-1">
                    <Info className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Understanding SBA Loans</h3>
                    <p className="text-gray-700 mb-4">
                      One of the most common misconceptions about SBA loans is who does the lending. The Small Business
                      Administration does not make loans directly. Instead, this government agency guarantees a
                      substantial portion of each loan, protecting lenders in the event of default.
                    </p>
                    <p className="text-gray-700">
                      This creates an incentive for banks, credit unions, and other lenders to make low-interest loans
                      with favorable terms to small business owners who might not otherwise qualify for traditional
                      financing options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose an SBA Loan?</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Lower down payments than conventional loans</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Longer repayment terms (up to 25 years for real estate)</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Competitive interest rates capped by the SBA</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">No balloon payments or prepayment penalties for most loans</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Flexible use of funds for various business purposes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding the Right SBA Lender</h2>
                  <p className="text-gray-700 mb-4">
                    While you can begin with your current financial institution, it's wise to explore multiple options.
                    Different lenders specialize in different industries and loan types, and may offer varying terms and
                    processing speeds.
                  </p>
                  <p className="text-gray-700">
                    Our curated list of top SBA lenders helps you identify reputable institutions with proven track
                    records of successfully funding small businesses through SBA programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types Section */}
        <section id="loan-types" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">SBA Loan Programs</h2>

              <Tabs defaultValue="7a" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="7a">7(a) Loans</TabsTrigger>
                  <TabsTrigger value="504">504 Loans</TabsTrigger>
                  <TabsTrigger value="express">SBA Express</TabsTrigger>
                </TabsList>

                <TabsContent value="7a" className="border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">SBA 7(a) Loan Program</h3>
                  <p className="text-gray-700 mb-4">
                    The 7(a) loan program is the SBA's primary program for providing financial assistance to small
                    businesses. These loans can be used for working capital, equipment purchases, real estate
                    acquisition, and more.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Loan Amounts</h4>
                        <p className="text-gray-700">Up to $5 million</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Interest Rates</h4>
                        <p className="text-gray-700">Prime + 1.5% to 2.75% (variable)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Terms</h4>
                        <p className="text-gray-700">
                          Up to 25 years for real estate
                          <br />
                          Up to 10 years for equipment
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Guarantee</h4>
                        <p className="text-gray-700">
                          85% for loans up to $150,000
                          <br />
                          75% for larger loans
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mt-6 mb-3">General Eligibility Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Businesses must be profitable and cash flow positive</li>
                    <li>Minimum 2 years in business</li>
                    <li>U.S. based business owned by a citizen or lawful permanent resident</li>
                    <li>FICO of 660 or higher typically required</li>
                    <li>No outstanding tax liens or recent bankruptcies</li>
                  </ul>
                </TabsContent>

                <TabsContent value="504" className="border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">SBA 504 Loan Program</h3>
                  <p className="text-gray-700 mb-4">
                    The 504 loan program provides long-term, fixed-rate financing for major fixed assets that promote
                    business growth and job creation, such as real estate or equipment purchases.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Loan Structure</h4>
                        <p className="text-gray-700">50% bank loan, 40% CDC loan, 10% down payment</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Maximum CDC Portion</h4>
                        <p className="text-gray-700">Up to $5 million ($5.5M for manufacturing)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Terms</h4>
                        <p className="text-gray-700">10, 20, or 25 years (fixed-rate)</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Eligible Uses</h4>
                        <p className="text-gray-700">Purchase land, buildings, equipment; construction or renovation</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mt-6 mb-3">Eligibility Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>For-profit company operating in the United States</li>
                    <li>Tangible net worth less than $15 million</li>
                    <li>Average net income less than $5 million after taxes for two years</li>
                    <li>Must create or retain jobs or meet other public policy goals</li>
                  </ul>
                </TabsContent>

                <TabsContent value="express" className="border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">SBA Express Loan Program</h3>
                  <p className="text-gray-700 mb-4">
                    SBA Express loans feature an accelerated turnaround time for SBA review, with approval typically
                    within 36 hours. These loans offer more flexibility and a streamlined application process.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Loan Amounts</h4>
                        <p className="text-gray-700">Up to $500,000</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Guarantee</h4>
                        <p className="text-gray-700">50% SBA guarantee</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Terms</h4>
                        <p className="text-gray-700">Up to 10 years (25 years for real estate)</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Response Time</h4>
                        <p className="text-gray-700">36-hour response from SBA</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mt-6 mb-3">Key Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Faster approval process than standard 7(a) loans</li>
                    <li>Revolving lines of credit available</li>
                    <li>Less paperwork required</li>
                    <li>Lenders have more flexibility in structuring loans</li>
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="mt-12">
                <Accordion type="single" collapsible className="bg-white rounded-lg border">
                  <AccordionItem value="eligibility">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-lg font-medium">SBA Loan Eligibility Checklist</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          While specific requirements vary by loan type, most SBA loans require:
                        </p>
                        <ul className="space-y-2">
                          {eligibilityRequirements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="documents">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-lg font-medium">Required Documentation</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Be prepared to provide these documents when applying for an SBA loan:
                        </p>
                        <ul className="space-y-2">
                          {requiredDocuments.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Score Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-purple-200 rounded-lg p-8 bg-purple-50">
                <h3 className="text-2xl font-bold text-center text-purple-900 mb-4">
                  Check Your Personal Credit Scores
                </h3>
                <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
                  Credit is a critical factor when applying for an SBA loan. Almost all forms of financing require a
                  minimum credit score. Checking won't hurt your credit scores.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700">Check Your Score</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Lenders Section */}
        <section id="lenders" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Top SBA Lenders</h2>
              <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                We've curated a list of the nation's leading SBA lenders with proven track records of helping small
                businesses secure government-backed financing with favorable terms.
              </p>

              <div className="space-y-6">
                {sbaLenders.map((lender) => (
                  <Card
                    key={lender.id}
                    className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 flex items-center justify-center md:border-r">
                          <div className="w-32 h-32 relative flex items-center justify-center bg-gray-50 rounded-lg p-4">
                            {lender.logoUrl ? (
                              <Image
                                src={lender.logoUrl || "/placeholder.svg"}
                                alt={`${lender.name} logo`}
                                width={100}
                                height={100}
                                className="object-contain"
                              />
                            ) : (
                              <div className="text-xl font-bold text-blue-900">{lender.name}</div>
                            )}
                          </div>
                        </div>
                        <div className="md:col-span-3 p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{lender.name}</h3>
                          <p className="text-gray-700 mb-4">{lender.description}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div>
                              <p className="text-sm text-gray-500">SBA Programs</p>
                              <p className="font-medium">{lender.sbaPrograms}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Loan Amount</p>
                              <p className="font-medium">{lender.loanAmount}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Interest Rate</p>
                              <p className="font-medium">{lender.interestRate}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Min. Credit Score</p>
                              <p className="font-medium">{lender.minCreditScore}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Button className="bg-blue-600 hover:bg-blue-700">Apply for Loan</Button>
                            <Button variant="outline" className="text-blue-600 border-blue-200">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  This is not an endorsement for these companies. Please perform your own due diligence before working
                  with them.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/providers/add-company">Add Your Company to This Directory</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b">
                    <AccordionTrigger className="text-left font-medium text-gray-900 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

// Sample data - in a real application, this would come from a database
const sbaLenders = [
  {
    id: "live-oak",
    name: "Live Oak Bank",
    description:
      "Live Oak Bank specializes in SBA lending across multiple industries, with a focus on providing exceptional customer service and leveraging technology to streamline the loan process.",
    logoUrl: "/placeholder.svg?height=100&width=100",
    sbaPrograms: "7(a), 504, Express",
    loanAmount: "Up to $5M",
    interestRate: "Prime + 1.5% - 2.75%",
    minCreditScore: "650+",
  },
  {
    id: "huntington",
    name: "The Huntington National Bank",
    description:
      "Huntington National Bank is a top SBA lender offering a comprehensive suite of SBA loan products with competitive rates and dedicated small business specialists.",
    logoUrl: "/placeholder.svg?height=100&width=100",
    sbaPrograms: "7(a), Express, 504",
    loanAmount: "Up to $5M",
    interestRate: "Prime + 1.75% - 3%",
    minCreditScore: "640+",
  },
  {
    id: "celtic",
    name: "Celtic Bank",
    description:
      "Celtic Bank is a nationwide SBA lender specializing in small business loans with a streamlined application process and expertise in various industries.",
    logoUrl: "/placeholder.svg?height=100&width=100",
    sbaPrograms: "7(a), Express, 504",
    loanAmount: "$50K - $5M",
    interestRate: "Prime + 1.5% - 3.75%",
    minCreditScore: "650+",
  },
  {
    id: "newtek",
    name: "Newtek",
    description:
      "Newtek Business Services Corp. provides a wide range of financial services to small businesses, including SBA loans with competitive terms and dedicated support.",
    logoUrl: "/placeholder.svg?height=100&width=100",
    sbaPrograms: "7(a), 504",
    loanAmount: "Up to $15M",
    interestRate: "Prime + 1.5% - 2.75%",
    minCreditScore: "660+",
  },
  {
    id: "byline",
    name: "Byline Bank",
    description:
      "Byline Bank offers flexible SBA financing solutions with competitive rates and terms, specializing in helping businesses achieve their growth objectives.",
    logoUrl: "/placeholder.svg?height=100&width=100",
    sbaPrograms: "7(a), 504, CAPLines",
    loanAmount: "Up to $5M",
    interestRate: "Prime + 1.5% - 2.75%",
    minCreditScore: "650+",
  },
  {
    id: "wells-fargo",
    name: "Wells Fargo Bank",
    description:
      "Wells Fargo provides SBA loans with competitive rates and terms, backed by the resources and expertise of one of the nation's largest financial institutions.",
    logoUrl: "/placeholder.svg?height=100&width=100",
    sbaPrograms: "7(a), 504",
    loanAmount: "Up to $5M",
    interestRate: "Prime + 1.75% - 3.25%",
    minCreditScore: "640+",
  },
]

const eligibilityRequirements = [
  "Operate as a for-profit business in the United States",
  "Meet SBA size standards for small business in your industry",
  "Have invested equity (time and/or money) in the business",
  "Demonstrate good character and ability to repay the loan",
  "Have a sound business purpose for the loan funds",
  "Not be delinquent on any existing debt obligations to the U.S. government",
  "Typically need a personal credit score of 650+ (though some lenders may accept lower)",
  "Usually require at least 2 years in business (though some programs accept startups)",
]

const requiredDocuments = [
  "Business and personal tax returns (typically last 3 years)",
  "Business financial statements (balance sheet, income statement, cash flow)",
  "Business debt schedule showing all existing business loans",
  "Business plan and projections (especially for newer businesses)",
  "Personal financial statement for all owners with 20%+ ownership",
  "Business licenses and registrations",
  "Legal documents (articles of incorporation, operating agreements, etc.)",
  "Collateral documentation (for secured loans)",
  "Detailed use of loan proceeds",
]

const faqs = [
  {
    question: "How long does it take to get approved for an SBA loan?",
    answer:
      "The timeline varies by lender and loan type. SBA Express loans can be approved within days, while standard 7(a) and 504 loans typically take 30-90 days from application to funding. Working with a preferred SBA lender can often expedite the process.",
  },
  {
    question: "What can I use an SBA loan for?",
    answer:
      "SBA loans can be used for various business purposes including working capital, purchasing equipment or inventory, buying real estate, refinancing debt, acquiring another business, or funding startup costs. However, there are some restrictions, such as not being able to use funds for speculative investments.",
  },
  {
    question: "Do I need collateral for an SBA loan?",
    answer:
      "While the SBA prefers loans to be fully collateralized, a lack of sufficient collateral alone is not grounds for denial. For loans under $25,000, no collateral is required. For larger loans, lenders will use available business and personal assets as collateral, but may still approve loans without full collateral coverage if other aspects of the application are strong.",
  },
  {
    question: "What is the minimum credit score for an SBA loan?",
    answer:
      "Most SBA lenders look for a minimum personal credit score of 650-680, though some may consider scores as low as 620 for certain programs. A strong business financial profile can sometimes offset a lower personal credit score.",
  },
  {
    question: "Can I get an SBA loan for a startup business?",
    answer:
      "Yes, startups can qualify for SBA loans, though the requirements are typically more stringent. You'll need a strong business plan, financial projections, industry experience, and often a larger down payment (typically 25-30% for startups vs. 10-20% for established businesses).",
  },
  {
    question: "What's the difference between a preferred and certified SBA lender?",
    answer:
      "Preferred Lenders (PLP) have been granted authority to make final credit decisions without prior SBA approval, which speeds up the process. Certified Lenders (CLP) receive expedited processing from the SBA (typically 3 days instead of 5-10 days), but still require SBA review. Standard lenders have the longest processing times as all applications must go through full SBA review.",
  },
]

