"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, DollarSign, LineChart, Clock, Building, CheckCircle, Star } from "lucide-react"
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

// Sample lender categories
const categories = [
  { name: "All Lenders", value: "all" },
  { name: "MCA Providers", value: "mca" },
  { name: "Term Loans", value: "term-loans" },
  { name: "Equipment Financing", value: "equipment" },
  { name: "Line of Credit", value: "loc" },
  { name: "SBA Lenders", value: "sba" },
]

// Sample lender listings
const lenderListings = [
  {
    id: 1,
    name: "Merchant Cash Advance Providers",
    description: "Connect with top MCA lenders offering flexible funding options for your business needs.",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "mca",
    featured: true,
    listings: 120,
    fundingTime: "24-48 hours",
    minCreditScore: 500,
    maxAmount: "$1,000,000",
    icon: <DollarSign className="h-6 w-6 text-accent" />,
    url: "/lenders/mca",
  },
  {
    id: 2,
    name: "Term Loan Lenders",
    description: "Find lenders offering competitive rates on business term loans with flexible repayment options.",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "term-loans",
    featured: true,
    listings: 85,
    fundingTime: "3-7 days",
    minCreditScore: 650,
    maxAmount: "$5,000,000",
    icon: <LineChart className="h-6 w-6 text-accent" />,
    url: "/lenders/term-loans",
  },
  {
    id: 3,
    name: "Equipment Financing Companies",
    description: "Specialized lenders for all types of equipment financing needs with competitive rates.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "equipment",
    featured: true,
    listings: 60,
    fundingTime: "5-10 days",
    minCreditScore: 600,
    maxAmount: "$2,000,000",
    icon: <Building className="h-6 w-6 text-accent" />,
    url: "/lenders/equipment",
  },
  {
    id: 4,
    name: "Business Line of Credit Providers",
    description: "Access revolving credit lines for your business with flexible draw periods and competitive rates.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "loc",
    featured: false,
    listings: 70,
    fundingTime: "2-5 days",
    minCreditScore: 620,
    maxAmount: "$500,000",
    icon: <LineChart className="h-6 w-6 text-accent" />,
    url: "/lenders/loc",
  },
  {
    id: 5,
    name: "SBA Loan Lenders",
    description: "Connect with SBA-approved lenders offering government-backed loans with favorable terms.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "sba",
    featured: true,
    listings: 45,
    fundingTime: "30-90 days",
    minCreditScore: 680,
    maxAmount: "$5,000,000+",
    icon: <Building className="h-6 w-6 text-accent" />,
    url: "/lenders/sba",
  },
]

// Featured lenders
const featuredLenders = [
  {
    id: 1,
    name: "Velocity Capital",
    logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Leading provider of merchant cash advances with flexible terms",
    category: "mca",
    rating: 4.8,
    reviews: 156,
    url: "/lenders/velocity-capital",
  },
  {
    id: 2,
    name: "Apex Funding Solutions",
    logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Specialized in fast-approval business term loans up to $500K",
    category: "term-loans",
    rating: 4.7,
    reviews: 124,
    url: "/lenders/apex-funding",
  },
  {
    id: 3,
    name: "Equipment Finance Pro",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Premium equipment financing with competitive rates and flexible terms",
    category: "equipment",
    rating: 4.6,
    reviews: 98,
    url: "/lenders/equipment-finance-pro",
  },
]

export default function LendersPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter listings based on active category and search query
  const filteredListings = lenderListings.filter((listing) => {
    const matchesCategory = activeCategory === "all" || listing.category === activeCategory
    const matchesSearch =
      listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get featured listings
  const featuredListings = filteredListings.filter((listing) => listing.featured)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Business Lending <span className="gold-gradient">Directory</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Find the perfect funding solution for your business from our comprehensive directory of lenders
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search for lenders by name, type, or funding options..."
                className="h-14 pl-12 pr-4 rounded-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus-visible:ring-accent/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 bg-accent hover:bg-accent-light text-secondary transition-colors duration-500"
                size="sm"
              >
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b border-gray-200 sticky top-20 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="h-10 bg-gray-100 p-1 overflow-x-auto hide-scrollbar w-full">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.value}
                      value={category.value}
                      className="px-4 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/20 transition-all duration-500"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-primary mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            Featured Lenders
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredLenders.map((lender, index) => (
              <motion.div
                key={lender.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                <div className="p-6">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="relative h-12 w-full">
                      <Image
                        src={lender.logo || "/placeholder.svg"}
                        alt={lender.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{lender.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(lender.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill={i < Math.floor(lender.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {lender.rating} ({lender.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 text-center">{lender.description}</p>
                  <div className="flex justify-center">
                    <Link href={lender.url}>
                      <Button className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lender Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-primary mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            Lender Categories
          </motion.h2>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing, index) => (
                <motion.div
                  key={listing.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 h-full flex flex-col group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUpVariants}
                  custom={index * 0.1 + 0.2}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-accent text-secondary text-xs px-3 py-1 rounded-full font-medium">
                        {listing.listings}+ Lenders
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mr-3">
                        {listing.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {listing.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{listing.description}</p>

                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">Funding Time</p>
                          <p className="text-sm font-medium flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-accent" />
                            {listing.fundingTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Min. Credit Score</p>
                          <p className="text-sm font-medium">{listing.minCreditScore}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Max Amount</p>
                          <p className="text-sm font-medium">{listing.maxAmount}</p>
                        </div>
                      </div>

                      <Link href={listing.url}>
                        <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                          View Lenders
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 text-lg mb-4">No lender categories found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                }}
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Choose Our Lender Directory</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've vetted and verified each lender in our directory to ensure you find the best funding solution for
              your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.2}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Verified Lenders</h3>
              <p className="text-gray-600 text-sm text-center">
                All lenders in our directory are thoroughly vetted and verified to ensure legitimacy and quality
                service.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.3}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Unbiased Reviews</h3>
              <p className="text-gray-600 text-sm text-center">
                Read authentic reviews from real business owners who have worked with these lenders.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.4}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Transparent Terms</h3>
              <p className="text-gray-600 text-sm text-center">
                We provide clear information about rates, terms, and requirements for each lender.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative">
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
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect lender for your business needs. Our matching service is free and takes
              just minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-secondary transition-colors duration-500"
              >
                Apply For Funding
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-500"
              >
                Compare Lenders
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

