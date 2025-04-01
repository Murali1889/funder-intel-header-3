import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-white text-gray-800 py-16 border-t">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-950 rounded-md flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="font-bold text-xl">FunderIntel</span>
            </div>
            <p className="text-gray-600 mb-6">
              The premier marketplace and intelligence platform for the business lending industry.
            </p>
            <div className="flex space-x-4 mb-6">
              <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                <Link href="https://facebook.com" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                <Link href="https://twitter.com" className="text-gray-500 hover:text-blue-600">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                <Link href="https://instagram.com" className="text-gray-500 hover:text-blue-600">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Link href="tel:954-861-0821" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                954-861-0821
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-5">
            <h3 className="font-bold text-lg mb-4 text-blue-950">Quick Links</h3>
            <div className="grid grid-cols-1 gap-y-3">
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/forum" className="text-gray-600 hover:text-blue-600">
                Community Forum
              </Link>
              <Link href="/courses/broker" className="text-gray-600 hover:text-blue-600">
                Broker Course
              </Link>
              <Link href="/pro-plans" className="text-gray-600 hover:text-blue-600">
                Premium Plans
              </Link>
              <Link href="/contact/book-call" className="text-gray-600 hover:text-blue-600">
                Book A Call
              </Link>
              <Link href="/advertise" className="text-gray-600 hover:text-blue-600">
                Advertise With Us
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <h3 className="font-bold text-lg mb-4 text-blue-950">Funders Directory</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/mca-companies" className="text-gray-700 hover:text-blue-700 font-medium">
                  MCA Providers
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/equipment-lenders" className="text-gray-700 hover:text-blue-700 font-medium">
                  Equipment Lenders
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/term-loan-lenders" className="text-gray-700 hover:text-blue-700 font-medium">
                  Term Loan Lenders
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/invoice-factoring" className="text-gray-700 hover:text-blue-700 font-medium">
                  Invoice Factoring
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/line-of-credit" className="text-gray-700 hover:text-blue-700 font-medium">
                  Line of Credit
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/cannabis-funding" className="text-gray-700 hover:text-blue-700 font-medium">
                  Cannabis Funding
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/startup-financing" className="text-gray-700 hover:text-blue-700 font-medium">
                  Startup Financing
                </Link>
              </div>
              <div className="bg-gray-50 p-3 rounded-md hover:bg-blue-50 transition-colors">
                <Link href="/providers/sba-lenders" className="text-gray-700 hover:text-blue-700 font-medium">
                  SBA Lenders
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2021-2025 by Funder Intel LLC, All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-blue-600">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

