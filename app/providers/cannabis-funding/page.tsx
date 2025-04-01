import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function CannabisFinancingPage() {
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
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Cannabis Funding Directory</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Browse our comprehensive directory of Cannabis Industry Funding providers. Find specialized financing
                solutions for this growing industry.
              </p>
            </div>
            <Button className="whitespace-nowrap" asChild>
              <Link href="/providers/add-company">Add Your Company</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {cannabisLenders.map((lender) => (
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
                      <span className="text-gray-500">Funding Range:</span>
                      <span className="font-medium">{lender.fundingRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Funding Type:</span>
                      <span className="font-medium">{lender.fundingType}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Business Stage:</span>
                      <span className="font-medium">{lender.businessStage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">States Served:</span>
                      <span className="font-medium">{lender.statesServed}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/providers/cannabis-funding/${lender.id}`}>View Details</Link>
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
const cannabisLenders = [
  {
    id: "1",
    name: "Green Growth Capital",
    description: "Specialized funding solutions for licensed cannabis businesses across the supply chain.",
    fundingRange: "$50K - $5M",
    fundingType: "Debt, Equity",
    businessStage: "Startup, Growth",
    statesServed: "CA, CO, WA, OR, MI",
  },
  {
    id: "2",
    name: "Cannabis Industry Finance",
    description: "Providing capital to established cannabis operators with proven revenue and compliance history.",
    fundingRange: "$250K - $10M",
    fundingType: "Term Loans, Lines of Credit",
    businessStage: "Established",
    statesServed: "All legal states",
  },
  {
    id: "3",
    name: "Cannapreneur Funding",
    description: "Early-stage funding for cannabis entrepreneurs and startups with innovative business models.",
    fundingRange: "$25K - $500K",
    fundingType: "Seed Capital, Convertible Notes",
    businessStage: "Startup, Early",
    statesServed: "CA, CO, IL, MA, MI, NV",
  },
  {
    id: "4",
    name: "Real Estate Cannabis Fund",
    description: "Specialized real estate financing for cannabis cultivation, processing, and retail facilities.",
    fundingRange: "$500K - $25M",
    fundingType: "Real Estate Loans, Sale-Leaseback",
    businessStage: "Any",
    statesServed: "All legal states",
  },
  {
    id: "5",
    name: "Equipment Finance Cannabis",
    description: "Equipment financing and leasing solutions specifically for cannabis cultivation and processing.",
    fundingRange: "$50K - $2M",
    fundingType: "Equipment Loans, Leasing",
    businessStage: "Any",
    statesServed: "CA, CO, WA, OR, MI, IL, MA",
  },
  {
    id: "6",
    name: "Cannabis Merchant Advances",
    description: "Alternative funding solutions for cannabis retailers and dispensaries based on sales volume.",
    fundingRange: "$10K - $500K",
    fundingType: "Merchant Cash Advance",
    businessStage: "Operational",
    statesServed: "All legal states",
  },
]

