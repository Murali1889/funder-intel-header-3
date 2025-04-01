import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function InvoiceFactoringPage() {
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
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Invoice Factoring Directory</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Browse our comprehensive directory of Invoice Factoring providers. Convert your outstanding invoices
                into immediate working capital.
              </p>
            </div>
            <Button className="whitespace-nowrap" asChild>
              <Link href="/providers/add-company">Add Your Company</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {factoringProviders.map((provider) => (
              <div
                key={provider.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-blue-50 flex items-center justify-center p-4">
                  <div className="w-full max-w-[200px] h-20 bg-white rounded-md flex items-center justify-center p-4">
                    <span className="text-xl font-bold text-blue-900">{provider.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{provider.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Advance Rate:</span>
                      <span className="font-medium">{provider.advanceRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Factoring Fee:</span>
                      <span className="font-medium">{provider.factoringFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Industries Served:</span>
                      <span className="font-medium">{provider.industriesServed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Min. Invoice Size:</span>
                      <span className="font-medium">{provider.minInvoiceSize}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/providers/invoice-factoring/${provider.id}`}>View Details</Link>
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
const factoringProviders = [
  {
    id: "1",
    name: "Express Factoring",
    description:
      "Fast and flexible invoice factoring solutions with same-day funding options for urgent cash flow needs.",
    advanceRate: "80% - 90%",
    factoringFee: "1.5% - 3.5% per 30 days",
    industriesServed: "Manufacturing, Distribution",
    minInvoiceSize: "$5,000",
  },
  {
    id: "2",
    name: "Premier Invoice Finance",
    description: "Premium factoring services with high advance rates and competitive fees for established businesses.",
    advanceRate: "85% - 95%",
    factoringFee: "1% - 2.5% per 30 days",
    industriesServed: "Wholesale, Services",
    minInvoiceSize: "$10,000",
  },
  {
    id: "3",
    name: "Freight Factoring Solutions",
    description: "Specialized factoring services for trucking companies and freight brokers with industry expertise.",
    advanceRate: "90% - 97%",
    factoringFee: "1.5% - 3% per 30 days",
    industriesServed: "Transportation, Logistics",
    minInvoiceSize: "$1,000",
  },
  {
    id: "4",
    name: "Construction Factoring",
    description: "Tailored factoring solutions for construction companies, contractors, and subcontractors.",
    advanceRate: "70% - 85%",
    factoringFee: "2% - 4% per 30 days",
    industriesServed: "Construction, Contractors",
    minInvoiceSize: "$5,000",
  },
  {
    id: "5",
    name: "Healthcare Receivables",
    description: "Medical factoring services for healthcare providers, medical practices, and healthcare suppliers.",
    advanceRate: "75% - 90%",
    factoringFee: "1.5% - 3.5% per 30 days",
    industriesServed: "Healthcare, Medical",
    minInvoiceSize: "$10,000",
  },
  {
    id: "6",
    name: "Small Business Factoring",
    description:
      "Accessible factoring solutions designed specifically for small businesses with flexible requirements.",
    advanceRate: "75% - 85%",
    factoringFee: "2% - 4% per 30 days",
    industriesServed: "Various Small Businesses",
    minInvoiceSize: "$1,000",
  },
]

