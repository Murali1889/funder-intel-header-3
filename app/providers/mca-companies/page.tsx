import type { Metadata } from "next"
import MCADirectoryClient from "./mca-directory-client"
import { mcaFunders } from "./data"
// import SiteHeader from "@/components/site-header" // Removed
// import SiteFooter from "@/components/site-footer" // Removed

export const metadata: Metadata = {
  title: "MCA Companies | FunderIntel",
  description: "Explore our comprehensive directory of Merchant Cash Advance providers and funding solutions.",
}

export default function MCACompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <SiteHeader /> */} {/* Removed */}
      <main className="flex-1">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">MCA / Revenue Based Financing Companies</h1>
            <p className="text-xl max-w-3xl text-blue-100">
              Connect with top Merchant Cash Advance providers offering flexible funding solutions
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">What is a Merchant Cash Advance?</h2>
            <p className="text-gray-700 mb-4">
              A Merchant Cash Advance (MCA) is a purchase of future receivables at a discount. Unlike traditional loans,
              MCAs provide quick access to capital with minimal credit requirements and flexible repayment terms based
              on your business's daily or weekly sales.
            </p>
            <p className="text-gray-700 mb-4">
              This directory includes the best merchant cash advance companies which are very well known and others that
              are new. This is the most extensive merchant cash advance companies list available publicly.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#directory"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Browse MCA Companies
              </a>
              <a
                href="/calculator"
                className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                MCA Calculator
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose an MCA?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="p-5 border border-gray-100 rounded-lg">
                <h3 className="font-semibold text-black text-lg mb-2">Quick Approval</h3>
                <p className="text-gray-700">
                  Get approved in as little as 24 hours with minimal documentation requirements.
                </p>
              </div>

              <div className="p-5 border border-gray-100 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-black">Flexible Requirements</h3>
                <p className="text-gray-700">Lower credit score requirements compared to traditional bank loans.</p>
              </div>

              <div className="p-5 border border-gray-100 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-black">No Fixed Payments</h3>
                <p className="text-gray-700">
                  Payments adjust based on your daily sales, helping manage cash flow during slow periods.
                </p>
              </div>

              <div className="p-5 border border-gray-100 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-black">No Collateral Required</h3>
                <p className="text-gray-700">
                  Unsecured funding without requiring specific business assets as collateral.
                </p>
              </div>

              <div className="p-5 border border-gray-100 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-black">Use Funds for Any Purpose</h3>
                <p className="text-gray-700">No restrictions on how you use the capital for your business needs.</p>
              </div>

              <div className="p-5 border border-gray-100 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-black">Simple Application Process</h3>
                <p className="text-gray-700">Streamlined online applications with minimal paperwork required.</p>
              </div>
            </div>
          </div>

          <div id="directory" className="scroll-mt-24">
            <MCADirectoryClient initialLenders={mcaFunders} />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Verified Direct Funder Criteria</h2>
            <p className="text-gray-700 mb-4">
              Companies listed as "Verified" in our directory have met the following criteria:
            </p>

            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>Proof of contracts and ISO agreement</li>
              <li>Funds to business owner are provided directly from funder</li>
              <li>At least some minimum percentage of business is from Direct Funding</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-blue-900">
              <p className="text-sm">
                <strong>Disclaimer:</strong> This is not an endorsement for these companies. Please perform your own due
                diligence before working with them.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="/get-verified"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Verified as a Direct MCA Funder
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* <SiteFooter /> */} {/* Removed */}
    </div>
  )
}

