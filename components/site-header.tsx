import Link from "next/link"
import { Search, ChevronRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-950 rounded-md text-white">
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
            <span className="font-bold text-xl text-blue-950">FunderIntel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-blue-900">
                Marketplace
                <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white rounded-md shadow-lg border p-4 w-64">
                  <div className="space-y-4">
                    <Link href="/marketplace/lenders" className="block">
                      <p className="font-medium text-blue-950">Lenders</p>
                      <p className="text-sm text-blue-800">Find direct funding sources</p>
                    </Link>
                    <Link href="/marketplace/brokers" className="block">
                      <p className="font-medium text-blue-950">Brokers</p>
                      <p className="text-sm text-blue-800">Connect with loan brokers</p>
                    </Link>
                    <Link href="/marketplace/services" className="block">
                      <p className="font-medium text-blue-950">Service Providers</p>
                      <p className="text-sm text-blue-800">Discover industry solutions</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-blue-900">
                Providers
                <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white rounded-md shadow-lg border p-4 w-64">
                  <div className="space-y-3">
                    <Link
                      href="/providers/mca-companies"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      MCA Companies List
                    </Link>
                    <Link
                      href="/providers/startup-financing"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Startup Financing
                    </Link>
                    <Link
                      href="/providers/term-loan-lenders"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Term Loan Lenders
                    </Link>
                    <Link
                      href="/providers/line-of-credit"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Line of Credit Lenders
                    </Link>
                    <Link
                      href="/providers/equipment-lenders"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Equipment Lenders
                    </Link>
                    <Link
                      href="/providers/invoice-factoring"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Invoice Factoring
                    </Link>
                    <Link
                      href="/providers/cannabis-funding"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Cannabis Funding
                    </Link>
                    <Link
                      href="/providers/sba-lenders"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      SBA Lenders
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-blue-900">
                Store
                <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white rounded-md shadow-lg border p-4 w-64">
                  <div className="space-y-3">
                    <Link
                      href="/store/business-tools"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Business Tools
                    </Link>
                    <Link
                      href="/store/gift-cards"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Gift Cards
                    </Link>
                    <Link
                      href="/store/website-development"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Website Development
                    </Link>
                    <Link
                      href="/store/office-products"
                      className="block text-sm font-medium text-blue-900 hover:text-blue-700"
                    >
                      Office Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-blue-900">
                Resources
                <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white rounded-md shadow-lg border p-4 w-64">
                  <div className="space-y-4">
                    <Link href="/blog" className="block">
                      <p className="font-medium text-blue-950">Blog</p>
                      <p className="text-sm text-blue-800">Industry news and insights</p>
                    </Link>
                    <Link href="/learning-center" className="block">
                      <p className="font-medium text-blue-950">Learning Center</p>
                      <p className="text-sm text-blue-800">Educational resources</p>
                    </Link>
                    <Link href="/market-intelligence" className="block">
                      <p className="font-medium text-blue-950">Market Intelligence</p>
                      <p className="text-sm text-blue-800">Data and industry trends</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-blue-900">
                Community
                <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white rounded-md shadow-lg border p-4 w-64">
                  <div className="space-y-4">
                    <Link href="/members" className="block">
                      <p className="font-medium text-blue-950">Members</p>
                      <p className="text-sm text-blue-800">Browse industry professionals</p>
                    </Link>
                    <Link href="/forum" className="block">
                      <p className="font-medium text-blue-950">Forum</p>
                      <p className="text-sm text-blue-800">Discuss industry topics</p>
                    </Link>
                    <Link href="/events" className="block">
                      <p className="font-medium text-blue-950">Events</p>
                      <p className="text-sm text-blue-800">Industry meetups and webinars</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/deals" className="text-sm font-medium text-blue-900 hover:text-blue-700">
              Deals
            </Link>

            <Link href="/pro" className="text-sm font-medium text-blue-900 hover:text-blue-700">
              Pro Plans
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex w-full max-w-sm items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-700" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full pl-8 md:w-[200px] lg:w-[200px] text-blue-950 bg-white border-gray-100"
            />
          </div>

          {/* Replace the login/signup buttons in the desktop view */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-blue-950 border-gray-300 hover:bg-gray-50 hover:text-blue-950"
            >
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-blue-950">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-950 rounded-md text-white">
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
                  <span className="font-bold text-xl text-blue-950">FunderIntel</span>
                </Link>
                <div className="relative flex w-full max-w-sm items-center">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-700" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-full pl-8 text-blue-950 bg-white border-gray-100"
                  />
                </div>
                <nav className="flex flex-col gap-4">
                  <div className="border-b pb-2">
                    <p className="font-medium text-blue-950 mb-2">Marketplace</p>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/marketplace/lenders"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Lenders
                      </Link>
                      <Link
                        href="/marketplace/brokers"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Brokers
                      </Link>
                      <Link
                        href="/marketplace/services"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Service Providers
                      </Link>
                    </div>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium text-blue-950 mb-2">Providers</p>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/providers/mca-companies"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        MCA Companies
                      </Link>
                      <Link
                        href="/providers/startup-financing"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Startup Financing
                      </Link>
                      <Link
                        href="/providers/term-loan-lenders"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Term Loan Lenders
                      </Link>
                      <Link
                        href="/providers/line-of-credit"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Line of Credit
                      </Link>
                      <Link
                        href="/providers/equipment-lenders"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Equipment Lenders
                      </Link>
                      <Link
                        href="/providers/invoice-factoring"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Invoice Factoring
                      </Link>
                      <Link
                        href="/providers/cannabis-funding"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Cannabis Funding
                      </Link>
                      <Link
                        href="/providers/sba-lenders"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        SBA Lenders
                      </Link>
                    </div>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium text-blue-950 mb-2">Store</p>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/store/business-tools"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Business Tools
                      </Link>
                      <Link
                        href="/store/gift-cards"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Gift Cards
                      </Link>
                      <Link
                        href="/store/website-development"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Website Development
                      </Link>
                      <Link
                        href="/store/office-products"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Office Products
                      </Link>
                    </div>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium text-blue-950 mb-2">Resources</p>
                    <div className="pl-4 space-y-2">
                      <Link href="/blog" className="block text-sm font-medium text-blue-800 hover:text-blue-950">
                        Blog
                      </Link>
                      <Link
                        href="/learning-center"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Learning Center
                      </Link>
                      <Link
                        href="/market-intelligence"
                        className="block text-sm font-medium text-blue-800 hover:text-blue-950"
                      >
                        Market Intelligence
                      </Link>
                    </div>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium text-blue-950 mb-2">Community</p>
                    <div className="pl-4 space-y-2">
                      <Link href="/members" className="block text-sm font-medium text-blue-800 hover:text-blue-950">
                        Members
                      </Link>
                      <Link href="/forum" className="block text-sm font-medium text-blue-800 hover:text-blue-950">
                        Forum
                      </Link>
                      <Link href="/events" className="block text-sm font-medium text-blue-800 hover:text-blue-950">
                        Events
                      </Link>
                    </div>
                  </div>
                  <Link href="/deals" className="font-medium text-blue-950 hover:text-blue-700">
                    Deals
                  </Link>
                  <Link href="/pro" className="font-medium text-blue-950 hover:text-blue-700">
                    Pro Plans
                  </Link>
                  <div className="h-px bg-border my-2" />
                  {/* Replace the login/signup buttons in the mobile view */}
                  <div className="flex flex-col gap-2 mt-2">
                    <Button
                      variant="outline"
                      asChild
                      className="text-blue-950 border-gray-300 hover:bg-gray-50 hover:text-blue-950"
                    >
                      <Link href="/login">Log in</Link>
                    </Button>
                    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="/signup">Sign up</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

