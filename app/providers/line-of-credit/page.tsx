import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function LineOfCreditPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* <SiteHeader /> */}

      <div className="container py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-4 text-gray-700" asChild>
            <Link href="/providers">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Providers
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Line of Credit Lenders Directory</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Browse our comprehensive directory of Business Line of Credit providers. Find flexible funding solutions
                for your ongoing business needs.
              </p>
            </div>
            <Button className="whitespace-nowrap" asChild>
              <Link href="/providers/add-company">Add Your Company</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {locLenders.map((lender) => (
              <div
                key={lender.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-blue-50 flex items-center justify-center p-4">
                  <div className="w-full max-w-[200px] h-20 bg-white rounded-md flex items-center justify-center p-4">
                    <span className="text-xl font-bold text-blue-900">{lender.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{lender.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lender.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Credit Line:</span>
                      <span className="font-medium">{lender.creditLine}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Draw Period:</span>
                      <span className="font-medium">{lender.drawPeriod}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Interest Rate:</span>
                      <span className="font-medium">{lender.interestRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Min. Credit Score:</span>
                      <span className="font-medium">{lender.minCreditScore}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/providers/line-of-credit/${lender.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

// Sample data - in a real application, this would come from a database
const locLenders = [
  {
    id: "1",
    name: "Flex Capital",
    description:
      "Revolving lines of credit for established businesses with flexible draw options and competitive rates.",
    creditLine: "$10K - $250K",
    drawPeriod: "Ongoing",
    interestRate: "8% - 15%",
    minCreditScore: "650+",
  },
  {
    id: "2",
    name: "Business Credit Line",
    description: "Secured and unsecured lines of credit with transparent fee structures and quick access to funds.",
    creditLine: "$25K - $500K",
    drawPeriod: "5 years",
    interestRate: "7% - 14%",
    minCreditScore: "670+",
  },
  {
    id: "3",
    name: "Working Capital Solutions",
    description: "Lines of credit designed specifically for managing working capital and cash flow fluctuations.",
    creditLine: "$5K - $150K",
    drawPeriod: "2 years",
    interestRate: "9% - 16%",
    minCreditScore: "620+",
  },
  {
    id: "4",
    name: "Prime Business LOC",
    description: "Premium lines of credit for businesses with strong credit profiles and established revenue history.",
    creditLine: "$50K - $1M",
    drawPeriod: "Ongoing",
    interestRate: "6% - 12%",
    minCreditScore: "700+",
  },
  {
    id: "5",
    name: "Express Credit Line",
    description: "Fast-approval lines of credit with minimal documentation requirements and quick access to funds.",
    creditLine: "$5K - $100K",
    drawPeriod: "1 year",
    interestRate: "10% - 18%",
    minCreditScore: "600+",
  },
  {
    id: "6",
    name: "Seasonal Business Credit",
    description:
      "Lines of credit tailored for businesses with seasonal revenue patterns and fluctuating cash flow needs.",
    creditLine: "$15K - $300K",
    drawPeriod: "3 years",
    interestRate: "8% - 15%",
    minCreditScore: "640+",
  },
]

