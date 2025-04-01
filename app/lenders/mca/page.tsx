"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Check, ChevronDown, ChevronUp, Search } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
}

// Sample MCA funders data
const mcaFunders = [
  {
    id: 1,
    name: "Shopify Capital",
    logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileType: "A-B",
    claimed: true,
    maxAmount: 150000,
    onboardingISOs: false,
    verified: true,
  },
  {
    id: 2,
    name: "Silver Street Funding",
    logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileType: "B-C",
    claimed: true,
    maxAmount: 13500,
    onboardingISOs: false,
    verified: true,
  },
  {
    id: 3,
    name: "Silverline Capital Group",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileType: "B-C",
    claimed: true,
    maxAmount: 500000,
    onboardingISOs: false,
    verified: true,
  },
  {
    id: 4,
    name: "Simply Funding",
    logo: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileType: "A-C",
    claimed: true,
    maxAmount: 1000000,
    onboardingISOs: false,
    verified: true,
  },
  {
    id: 5,
    name: "Slim Capital",
    logo: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileType: "B-C",
    claimed: true,
    maxAmount: 1000000,
    onboardingISOs: false,
    verified: false,
  },
]

export default function MCAPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [filterVerified, setFilterVerified] = useState<boolean | null>(null)
  const [filterClaimed, setFilterClaimed] = useState<boolean | null>(null)
  const [filterFileType, setFilterFileType] = useState<string | null>(null)
  const [filterOnboardingISOs, setFilterOnboardingISOs] = useState<boolean | null>(null)

  // Filter and sort funders
  const filteredFunders = mcaFunders
    .filter((funder) => {
      // Search filter
      const matchesSearch = funder.name.toLowerCase().includes(searchQuery.toLowerCase())

      // Verified filter
      const matchesVerified = filterVerified === null || funder.verified === filterVerified

      // Claimed filter
      const matchesClaimed = filterClaimed === null || funder.claimed === filterClaimed

      // File Type filter
      const matchesFileType = filterFileType === null || funder.fileType === filterFileType

      // Onboarding ISOs filter
      const matchesOnboardingISOs = filterOnboardingISOs === null || funder.onboardingISOs === filterOnboardingISOs

      return matchesSearch && matchesVerified && matchesClaimed && matchesFileType && matchesOnboardingISOs
    })
    .sort((a, b) => {
      if (!sortField) return 0

      let comparison = 0

      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name)
          break
        case "fileType":
          comparison = a.fileType.localeCompare(b.fileType)
          break
        case "maxAmount":
          comparison = a.maxAmount - b.maxAmount
          break
        default:
          comparison = 0
      }

      return sortDirection === "asc" ? comparison : -comparison
    })

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const resetFilters = () => {
    setSearchQuery("")
    setSortField(null)
    setSortDirection("asc")
    setFilterVerified(null)
    setFilterClaimed(null)
    setFilterFileType(null)
    setFilterOnboardingISOs(null)
  }

  // Get unique file types for filter dropdown
  const fileTypes = Array.from(new Set(mcaFunders.map((funder) => funder.fileType)))

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-blue-950 py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUpVariants} custom={0}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              MCA / Revenue Based Financing Companies List
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Comprehensive directory of merchant cash advance providers and revenue-based financing companies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="bg-white rounded-lg shadow-sm p-6 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0.2}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">About MCA Companies</h2>

            <p className="text-gray-700 mb-4">
              Below are MCA, also called revenue based financing, companies that directly provide financing to business
              owners across the country. This is mainly a list of merchant cash advance companies (or sales-based
              financing) but some also offer business Term Loans and Lines of Credit with amounts to $500,000 or more.
              This MCA companies list includes the best merchant cash advance companies which are very well known and
              others that are new. This is the most extensive merchant cash advance companies list available publicly.
            </p>

            <p className="text-gray-700 mb-6">
              For lenders that offer Invoice Factoring, Equipment Leasing, SBA Loans, and Real Estate backed loans,
              please see our Menu-Provider Lists.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-700 font-medium">
                ISOs/business loan brokers can request to be contacted by any of the mca companies who have claimed
                their profile by going to their funding company page.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">Merchant Cash Advance</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">What is a Merchant Cash Advance?</h4>
              <p className="text-gray-700 mb-4">
                By definition, a Merchant Cash Advance (revenue-based advance) is a purchase of Future Receivables at a
                discount. This is where the Buyer is the MCA direct funder(mca lender) and the Seller is the Merchant.
                An MCA agreement must have an indefinite term for repayment contingencies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-blue-950 hover:bg-blue-900 text-white transition-colors duration-500">
                Apply For Funding
              </Button>
              <Button
                variant="outline"
                className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-500"
              >
                <Calculator className="mr-2 h-4 w-4" />
                MCA Calculator
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funders Table Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0.4}
          >
            {/* Search and Filter Controls */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Input
                      type="search"
                      placeholder="Search funders..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-4 h-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  </div>

                  <Select
                    value={filterFileType || "all"}
                    onValueChange={(value) => setFilterFileType(value === "all" ? null : value)}
                  >
                    <SelectTrigger className="w-full sm:w-40 h-10">
                      <SelectValue placeholder="File Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All File Types</SelectItem>
                      {fileTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select
                    value={filterVerified === null ? "all" : filterVerified ? "verified" : "not-verified"}
                    onValueChange={(value) => {
                      if (value === "all") setFilterVerified(null)
                      else setFilterVerified(value === "verified")
                    }}
                  >
                    <SelectTrigger className="w-full sm:w-40 h-10">
                      <SelectValue placeholder="Verification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Verification</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="not-verified">Not Verified</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 w-full md:w-auto justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetFilters}
                    className="h-10 transition-colors duration-500"
                  >
                    Reset Filters
                  </Button>

                  <div className="flex gap-2">
                    <Button className="bg-blue-950 hover:bg-blue-900 text-white h-10 transition-colors duration-500">
                      Compare Funders
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white h-10 transition-colors duration-500"
                    >
                      Add Biz / Claim Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-950/5">
                    <TableHead className="w-[50px]">Verified</TableHead>
                    <TableHead className="min-w-[200px]">
                      <button
                        className="flex items-center font-medium hover:text-blue-950 transition-colors duration-500"
                        onClick={() => handleSort("name")}
                      >
                        Funder
                        {sortField === "name" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-1 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-1 h-4 w-4" />
                          ))}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        className="flex items-center font-medium hover:text-blue-950 transition-colors duration-500"
                        onClick={() => handleSort("fileType")}
                      >
                        File Type
                        {sortField === "fileType" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-1 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-1 h-4 w-4" />
                          ))}
                      </button>
                    </TableHead>
                    <TableHead>Claimed</TableHead>
                    <TableHead>
                      <button
                        className="flex items-center font-medium hover:text-blue-950 transition-colors duration-500"
                        onClick={() => handleSort("maxAmount")}
                      >
                        Max $
                        {sortField === "maxAmount" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-1 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-1 h-4 w-4" />
                          ))}
                      </button>
                    </TableHead>
                    <TableHead>Onboarding ISOs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFunders.length > 0 ? (
                    filteredFunders.map((funder) => (
                      <TableRow key={funder.id} className={funder.claimed ? "bg-blue-50/50" : ""}>
                        <TableCell>
                          {funder.verified && (
                            <div className="flex justify-center">
                              <div className="bg-green-100 rounded-full p-1">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                              <Image
                                src={funder.logo || "/placeholder.svg"}
                                alt={`${funder.name} logo`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <Link
                              href={`/providers/mca-funders/${funder.id}`}
                              className="font-medium text-blue-950 hover:underline transition-colors duration-500"
                            >
                              {funder.name}
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>{funder.fileType}</TableCell>
                        <TableCell>
                          {funder.claimed && (
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Claimed
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          {funder.maxAmount.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>
                        <TableCell>
                          {funder.onboardingISOs ? "Yes" : funder.onboardingISOs === false ? "No" : ""}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No funders found matching your criteria.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-950 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Funding for Your Business?</h2>
            <p className="text-xl text-white/80 mb-8">
              Connect with top MCA providers and get the capital you need to grow your business
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-medium transition-colors duration-500"
              >
                Apply For Funding
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-500"
              >
                Compare Funders
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

