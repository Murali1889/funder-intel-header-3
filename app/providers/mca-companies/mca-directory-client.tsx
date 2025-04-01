"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  DollarSign,
  Clock,
  Building,
  Users,
  BadgeCheck,
  ChevronRight,
  X,
  ChevronLeft,
  Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import type { MCAFunder } from "./data"

interface MCADirectoryClientProps {
  initialLenders: MCAFunder[]
}

export default function MCADirectoryClient({ initialLenders }: MCADirectoryClientProps) {
  const [lenders, setLenders] = useState<MCAFunder[]>(initialLenders)
  const [filteredLenders, setFilteredLenders] = useState<MCAFunder[]>(initialLenders)
  const [viewMode, setViewMode] = useState<"grid" | "list" | "table">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [filterDialogOpen, setFilterDialogOpen] = useState(false)

  // Filter states
  const [fundingRange, setFundingRange] = useState([0, 5000000])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [minCreditScore, setMinCreditScore] = useState<string>("any")
  const [timeInBusiness, setTimeInBusiness] = useState<string>("any")
  const [fundingSpeed, setFundingSpeed] = useState<string>("any")
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [directFunderOnly, setDirectFunderOnly] = useState(false)
  const [fileType, setFileType] = useState<string>("any")

  // Track if any filters are active
  const [filtersActive, setFiltersActive] = useState(false)

  const itemsPerPage = 9
  const totalPages = Math.ceil(filteredLenders.length / itemsPerPage)

  // Get all unique industries from the data
  const allIndustries = Array.from(new Set(initialLenders.flatMap((lender) => lender.industries || []))).sort()

  // Check if any filters are active
  useEffect(() => {
    const hasActiveFilters =
      fundingRange[0] > 0 ||
      fundingRange[1] < 5000000 ||
      selectedIndustries.length > 0 ||
      minCreditScore !== "any" ||
      timeInBusiness !== "any" ||
      fundingSpeed !== "any" ||
      verifiedOnly ||
      directFunderOnly ||
      fileType !== "any"

    setFiltersActive(hasActiveFilters)
  }, [
    fundingRange,
    selectedIndustries,
    minCreditScore,
    timeInBusiness,
    fundingSpeed,
    verifiedOnly,
    directFunderOnly,
    fileType,
  ])

  // Apply filters
  useEffect(() => {
    setIsLoading(true)

    // Simulate API delay
    const timer = setTimeout(() => {
      let results = [...initialLenders]

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        results = results.filter(
          (lender) =>
            lender.name.toLowerCase().includes(query) ||
            (lender.description && lender.description.toLowerCase().includes(query)),
        )
      }

      // Funding range filter
      if (fundingRange[1] < 5000000 || fundingRange[0] > 0) {
        results = results.filter((lender) => {
          if (lender.maxFunding === null) return true
          return lender.maxFunding >= fundingRange[0] && lender.maxFunding <= fundingRange[1]
        })
      }

      // Industry filter
      if (selectedIndustries.length > 0) {
        results = results.filter(
          (lender) => lender.industries && selectedIndustries.some((industry) => lender.industries?.includes(industry)),
        )
      }

      // Credit score filter
      if (minCreditScore !== "any") {
        const minScore = Number.parseInt(minCreditScore)
        results = results.filter((lender) => lender.minCreditScore !== undefined && lender.minCreditScore <= minScore)
      }

      // Time in business filter
      if (timeInBusiness !== "any") {
        const months = Number.parseInt(timeInBusiness)
        results = results.filter(
          (lender) => lender.minTimeInBusiness !== undefined && lender.minTimeInBusiness <= months,
        )
      }

      // Funding speed filter
      if (fundingSpeed !== "any") {
        const days = Number.parseInt(fundingSpeed)
        results = results.filter((lender) => lender.fundingSpeed !== undefined && lender.fundingSpeed <= days)
      }

      // File type filter
      if (fileType !== "any") {
        results = results.filter((lender) => lender.fileType.includes(fileType))
      }

      // Verified filter
      if (verifiedOnly) {
        results = results.filter((lender) => lender.verified)
      }

      // Direct funder filter - assuming all claimed are direct funders
      if (directFunderOnly) {
        results = results.filter((lender) => lender.claimed)
      }

      setFilteredLenders(results)
      setCurrentPage(1)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [
    initialLenders,
    searchQuery,
    fundingRange,
    selectedIndustries,
    minCreditScore,
    timeInBusiness,
    fundingSpeed,
    verifiedOnly,
    directFunderOnly,
    fileType,
  ])

  // Get current page items
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return filteredLenders.slice(indexOfFirstItem, indexOfLastItem)
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setFundingRange([0, 5000000])
    setSelectedIndustries([])
    setMinCreditScore("any")
    setTimeInBusiness("any")
    setFundingSpeed("any")
    setVerifiedOnly(false)
    setDirectFunderOnly(false)
    setFileType("any")
  }

  // Toggle industry selection
  const toggleIndustry = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter((i) => i !== industry))
    } else {
      setSelectedIndustries([...selectedIndustries, industry])
    }
  }

  // Remove a specific industry
  const removeIndustry = (industry: string) => {
    setSelectedIndustries(selectedIndustries.filter((i) => i !== industry))
  }

  // Format currency
  const formatCurrency = (amount: number | null) => {
    if (amount === null) return "Varies"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Get credit score display text
  const getCreditScoreText = (value: string) => {
    if (value === "any") return null
    return `${value}+ Credit Score`
  }

  // Get time in business display text
  const getTimeInBusinessText = (value: string) => {
    if (value === "any") return null
    if (value === "0") return "Startups OK"
    if (value === "12") return "1+ Year in Business"
    if (value === "24") return "2+ Years in Business"
    return `${value}+ Months in Business`
  }

  // Get funding speed display text
  const getFundingSpeedText = (value: string) => {
    if (value === "any") return null
    if (value === "1") return "Same Day Funding"
    if (value === "2") return "1-2 Days Funding"
    if (value === "5") return "3-5 Days Funding"
    return `${value} Days Funding`
  }

  return (
    <div className="flex flex-col">
      {/* Search and View Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search MCA companies..."
            className="w-full pl-10 bg-white border-gray-200 text-gray-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          {/* Filter Button */}
          <Button
            variant="outline"
            onClick={() => setFilterDialogOpen(true)}
            className="bg-white text-gray-800 border-gray-200 hover:bg-gray-50 font-medium"
          >
            <Filter className="mr-2 h-4 w-4 text-gray-600" />
            Filters{" "}
            {filtersActive && <span className="ml-1 text-xs bg-blue-100 text-blue-700 rounded-full px-1.5">•</span>}
          </Button>

          {/* View Toggle */}
          <Tabs defaultValue={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list" | "table")}>
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger value="grid" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Grid className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </TabsTrigger>
              <TabsTrigger value="list" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </TabsTrigger>
              <TabsTrigger value="table" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
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
                  className="h-4 w-4"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 9h18"></path>
                  <path d="M3 15h18"></path>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
                <span className="sr-only">Table view</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Active Filters */}
      {filtersActive && (
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          <span className="text-sm text-gray-500">Active filters:</span>

          {(fundingRange[0] > 0 || fundingRange[1] < 5000000) && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              {formatCurrency(fundingRange[0])} - {formatCurrency(fundingRange[1])}
              <button onClick={() => setFundingRange([0, 5000000])} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove funding range filter</span>
              </button>
            </Badge>
          )}

          {selectedIndustries.map((industry) => (
            <Badge
              key={industry}
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1"
            >
              {industry}
              <button onClick={() => removeIndustry(industry)} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {industry} filter</span>
              </button>
            </Badge>
          ))}

          {getCreditScoreText(minCreditScore) && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              {getCreditScoreText(minCreditScore)}
              <button onClick={() => setMinCreditScore("any")} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove credit score filter</span>
              </button>
            </Badge>
          )}

          {getTimeInBusinessText(timeInBusiness) && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              {getTimeInBusinessText(timeInBusiness)}
              <button onClick={() => setTimeInBusiness("any")} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove time in business filter</span>
              </button>
            </Badge>
          )}

          {getFundingSpeedText(fundingSpeed) && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              {getFundingSpeedText(fundingSpeed)}
              <button onClick={() => setFundingSpeed("any")} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove funding speed filter</span>
              </button>
            </Badge>
          )}

          {fileType !== "any" && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              File Type: {fileType}
              <button onClick={() => setFileType("any")} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove file type filter</span>
              </button>
            </Badge>
          )}

          {verifiedOnly && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              Verified Only
              <button onClick={() => setVerifiedOnly(false)} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove verified filter</span>
              </button>
            </Badge>
          )}

          {directFunderOnly && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              Direct Funders Only
              <button onClick={() => setDirectFunderOnly(false)} className="ml-1 rounded-full hover:bg-blue-100">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove direct funder filter</span>
              </button>
            </Badge>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-sm text-gray-500 hover:text-gray-700 p-0 h-auto hover:bg-transparent"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredLenders.length} {filteredLenders.length === 1 ? "result" : "results"}
        </p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredLenders.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-gray-800">No results found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700 text-white">
            Reset Filters
          </Button>
        </div>
      )}

      {/* Grid View */}
      {!isLoading && viewMode === "grid" && filteredLenders.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentItems().map((lender) => (
            <Card
              key={lender.id}
              className="overflow-hidden bg-white border-gray-200 shadow-sm hover:border-blue-300 transition-colors"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                      <Image
                        src={lender.logo || "/placeholder.svg"}
                        alt={lender.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-gray-900">{lender.name}</h3>
                        {lender.verified && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <BadgeCheck className="h-4 w-4 text-blue-500" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">Verified Direct Funder</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{lender.claimed ? "Direct Funder" : "Broker"}</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{lender.fileType}</Badge>
                </div>

                <p className="text-sm text-gray-700 mb-4 line-clamp-2">{lender.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">Max Funding: {formatCurrency(lender.maxFunding)}</span>
                  </div>
                  {lender.fundingSpeed !== undefined && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">
                        {lender.fundingSpeed === 1 ? "Same Day Funding" : `${lender.fundingSpeed} Days`}
                      </span>
                    </div>
                  )}
                  {lender.minTimeInBusiness !== undefined && (
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">
                        {lender.minTimeInBusiness === 0
                          ? "Startups OK"
                          : `${lender.minTimeInBusiness}+ months in business`}
                      </span>
                    </div>
                  )}
                </div>

                {lender.industries && lender.industries.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lender.industries.slice(0, 3).map((industry) => (
                      <Badge key={industry} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {industry}
                      </Badge>
                    ))}
                    {lender.industries.length > 3 && (
                      <Badge variant="outline" className="text-gray-700 border-gray-300">
                        +{lender.industries.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                    <Link href={`/providers/mca-companies/${lender.id}`}>View Profile</Link>
                  </Button>
                  {lender.website && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-200 text-gray-900 hover:bg-gray-50"
                      asChild
                    >
                      <Link href={lender.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit website</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* List View */}
      {!isLoading && viewMode === "list" && filteredLenders.length > 0 && (
        <div className="space-y-4">
          {getCurrentItems().map((lender) => (
            <Card
              key={lender.id}
              className="overflow-hidden bg-white border-gray-200 shadow-sm hover:border-blue-300 transition-colors"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                        <Image
                          src={lender.logo || "/placeholder.svg"}
                          alt={lender.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-bold text-gray-900">{lender.name}</h3>
                          {lender.verified && <BadgeCheck className="h-4 w-4 text-blue-500" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-600">{lender.claimed ? "Direct Funder" : "Broker"}</p>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{lender.fileType}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Max: {formatCurrency(lender.maxFunding)}</span>
                      </div>
                      {lender.fundingSpeed !== undefined && (
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-700">
                            {lender.fundingSpeed === 1 ? "Same Day" : `${lender.fundingSpeed} Days`}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:w-2/4">
                    <p className="text-sm text-gray-700 mb-4">{lender.description}</p>

                    {lender.industries && lender.industries.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {lender.industries.map((industry) => (
                          <Badge key={industry} variant="secondary" className="bg-blue-50 text-blue-700">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      {lender.minTimeInBusiness !== undefined && (
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-700">
                            {lender.minTimeInBusiness === 0
                              ? "Startups OK"
                              : `${lender.minTimeInBusiness}+ months in business`}
                          </span>
                        </div>
                      )}
                      {lender.minCreditScore !== undefined && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-700">Min Credit: {lender.minCreditScore}+</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:w-1/4 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <Button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                        <Link href={`/providers/mca-companies/${lender.id}`}>View Profile</Link>
                      </Button>
                      {lender.website && (
                        <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50" asChild>
                          <Link href={lender.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Table View */}
      {!isLoading && viewMode === "table" && filteredLenders.length > 0 && (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 border-b font-medium text-gray-700">Company</th>
                <th className="p-3 border-b font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    File Type
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-3 w-3 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs max-w-xs">
                            File type indicates the quality rating of the funder, with A being the highest quality.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </th>
                <th className="p-3 border-b font-medium text-gray-700">
                  <div className="flex items-center gap-1">Max Funding</div>
                </th>
                <th className="p-3 border-b font-medium text-gray-700">
                  <div className="flex items-center gap-1">Funding Speed</div>
                </th>
                <th className="p-3 border-b font-medium text-gray-700">
                  <div className="flex items-center gap-1">Min Time in Business</div>
                </th>
                <th className="p-3 border-b font-medium text-gray-700">
                  <div className="flex items-center gap-1">Min Credit Score</div>
                </th>
                <th className="p-3 border-b font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getCurrentItems().map((lender) => (
                <tr key={lender.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                        <Image
                          src={lender.logo || "/placeholder.svg"}
                          alt={lender.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-gray-900">{lender.name}</span>
                          {lender.verified && <BadgeCheck className="h-4 w-4 text-blue-500" />}
                        </div>
                        <div className="text-xs text-gray-500">{lender.claimed ? "Direct Funder" : "Broker"}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-gray-700">{lender.fileType}</td>
                  <td className="p-3 text-gray-700">{formatCurrency(lender.maxFunding)}</td>
                  <td className="p-3 text-gray-700">
                    {lender.fundingSpeed === undefined
                      ? "N/A"
                      : lender.fundingSpeed === 1
                        ? "Same Day"
                        : `${lender.fundingSpeed} Days`}
                  </td>
                  <td className="p-3 text-gray-700">
                    {lender.minTimeInBusiness === undefined
                      ? "N/A"
                      : lender.minTimeInBusiness === 0
                        ? "Startups OK"
                        : `${lender.minTimeInBusiness}+ months`}
                  </td>
                  <td className="p-3 text-gray-700">
                    {lender.minCreditScore === undefined ? "N/A" : `${lender.minCreditScore}+`}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                        asChild
                      >
                        <Link href={`/providers/mca-companies/${lender.id}`}>View</Link>
                      </Button>
                      {lender.website && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-200 text-gray-900 hover:bg-gray-50"
                          asChild
                        >
                          <Link href={lender.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {!isLoading && filteredLenders.length > 0 && totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0 bg-white border-gray-200 text-gray-700"
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Logic to show pages around current page
              let pageNum = i + 1
              if (totalPages > 5) {
                if (currentPage > 3) {
                  pageNum = currentPage - 3 + i
                }
                if (currentPage > totalPages - 2) {
                  pageNum = totalPages - 4 + i
                }
              }

              return pageNum <= totalPages ? (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`h-8 w-8 p-0 ${currentPage === pageNum ? "bg-white text-gray-900 border-gray-900" : "bg-white border-gray-200 text-gray-700"}`}
                >
                  <span className="sr-only">Go to page {pageNum}</span>
                  {pageNum}
                </Button>
              ) : null
            })}

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0 bg-white border-gray-200 text-gray-700"
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}

      {/* Filter Dialog */}
      <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white border border-gray-200 p-0 shadow-lg">
          <DialogHeader className="px-6 pt-6 pb-2 border-b border-gray-100">
            <DialogTitle className="text-xl font-semibold text-gray-900">Filter MCA Companies</DialogTitle>
          </DialogHeader>

          <div className="px-6 py-4">
            <Accordion
              type="multiple"
              defaultValue={["funding", "industries", "requirements", "file-type"]}
              className="border-gray-200"
            >
              <AccordionItem value="funding" className="border-gray-200">
                <AccordionTrigger className="text-gray-800 hover:text-gray-900 py-4">Funding Amount</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{formatCurrency(fundingRange[0])}</span>
                      <span className="font-medium text-gray-800">{formatCurrency(fundingRange[1])}</span>
                    </div>
                    <Slider
                      value={fundingRange}
                      min={0}
                      max={5000000}
                      step={10000}
                      onValueChange={setFundingRange}
                      className="[&>span]:bg-blue-600"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="industries">
                <AccordionTrigger className="text-gray-800 hover:text-gray-900 py-4">Industries</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-3">
                    {allIndustries.map((industry) => (
                      <div key={industry} className="flex items-center space-x-2">
                        <Checkbox
                          id={`industry-${industry}`}
                          checked={selectedIndustries.includes(industry)}
                          onCheckedChange={() => toggleIndustry(industry)}
                        />
                        <label
                          htmlFor={`industry-${industry}`}
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {industry}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="requirements">
                <AccordionTrigger className="text-gray-800 hover:text-gray-900 py-4">Requirements</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-800">Min Credit Score</label>
                      <Select value={minCreditScore} onValueChange={setMinCreditScore}>
                        <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                          <SelectValue placeholder="Any Credit Score" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Credit Score</SelectItem>
                          <SelectItem value="500">500+</SelectItem>
                          <SelectItem value="550">550+</SelectItem>
                          <SelectItem value="600">600+</SelectItem>
                          <SelectItem value="650">650+</SelectItem>
                          <SelectItem value="700">700+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-800">Time in Business</label>
                      <Select value={timeInBusiness} onValueChange={setTimeInBusiness}>
                        <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                          <SelectValue placeholder="Any Time in Business" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Time in Business</SelectItem>
                          <SelectItem value="0">Startups (0+ months)</SelectItem>
                          <SelectItem value="3">3+ months</SelectItem>
                          <SelectItem value="6">6+ months</SelectItem>
                          <SelectItem value="12">1+ year</SelectItem>
                          <SelectItem value="24">2+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-800">Funding Speed</label>
                      <Select value={fundingSpeed} onValueChange={setFundingSpeed}>
                        <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                          <SelectValue placeholder="Any Funding Speed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Funding Speed</SelectItem>
                          <SelectItem value="1">Same Day</SelectItem>
                          <SelectItem value="2">1-2 Days</SelectItem>
                          <SelectItem value="5">3-5 Days</SelectItem>
                          <SelectItem value="10">6-10 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="file-type">
                <AccordionTrigger className="text-gray-800 hover:text-gray-900 py-4">File Type</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-2">
                    <Select value={fileType} onValueChange={setFileType}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                        <SelectValue placeholder="Any File Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any File Type</SelectItem>
                        <SelectItem value="A">A (Highest Quality)</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-2">
                      File type indicates the quality rating of the funder, with A being the highest quality.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="verified-only"
                  checked={verifiedOnly}
                  onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                />
                <label
                  htmlFor="verified-only"
                  className="text-sm font-medium leading-none flex items-center gap-1 text-gray-800"
                >
                  Verified Only
                  <BadgeCheck className="h-4 w-4 text-blue-500" />
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="direct-funder"
                  checked={directFunderOnly}
                  onCheckedChange={(checked) => setDirectFunderOnly(checked as boolean)}
                />
                <label htmlFor="direct-funder" className="text-sm font-medium leading-none text-gray-800">
                  Direct Funders Only
                </label>
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
            <Button
              variant="outline"
              onClick={resetFilters}
              className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Reset All
            </Button>
            <Button
              onClick={() => setFilterDialogOpen(false)}
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
            >
              Apply Filters
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

