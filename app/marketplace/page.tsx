"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, DollarSign, LineChart, Monitor, FileText, Building, ArrowRight, Star } from "lucide-react"
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

// Sample marketplace categories
const categories = [
  { name: "All Categories", value: "all" },
  { name: "Lenders", value: "lenders" },
  { name: "Brokers", value: "brokers" },
  { name: "Service Providers", value: "service-providers" },
  { name: "Software", value: "software" },
  { name: "Education", value: "education" },
]

// Sample marketplace listings
const marketplaceListings = [
  {
    id: 1,
    name: "Merchant Cash Advance",
    description: "Connect with top MCA lenders offering flexible funding options for your business needs.",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "lenders",
    featured: true,
    listings: 120,
    icon: <DollarSign className="h-6 w-6 text-accent" />,
    url: "/lenders/mca",
  },
  {
    id: 2,
    name: "Term Loan Providers",
    description: "Find lenders offering competitive rates on business term loans with flexible repayment options.",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "lenders",
    featured: true,
    listings: 85,
    icon: <LineChart className="h-6 w-6 text-accent" />,
    url: "/lenders/term-loans",
  },
  {
    id: 3,
    name: "Equipment Financing",
    description: "Specialized lenders for all types of equipment financing needs with competitive rates.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "lenders",
    featured: false,
    listings: 60,
    icon: <Monitor className="h-6 w-6 text-accent" />,
    url: "/lenders/equipment",
  },
  {
    id: 4,
    name: "Business Loan Brokers",
    description: "Connect with experienced brokers who can help you find the right financing solution.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "brokers",
    featured: true,
    listings: 250,
    icon: <Building className="h-6 w-6 text-accent" />,
    url: "/brokers/directory",
  },
  {
    id: 5,
    name: "Document Preparation",
    description: "Professional services for preparing loan documents, contracts, and legal paperwork.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "service-providers",
    featured: false,
    listings: 45,
    icon: <FileText className="h-6 w-6 text-accent" />,
    url: "/service-providers/document-preparation",
  },
  {
    id: 6,
    name: "Lending Software",
    description: "Cutting-edge software solutions for loan origination, servicing, and portfolio management.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "software",
    featured: true,
    listings: 30,
    icon: <Monitor className="h-6 w-6 text-accent" />,
    url: "/software/lending",
  },
  {
    id: 7,
    name: "Credit Analysis Services",
    description: "Expert credit analysis and risk assessment services for lenders and financial institutions.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "service-providers",
    featured: false,
    listings: 35,
    icon: <LineChart className="h-6 w-6 text-accent" />,
    url: "/service-providers/credit-analysis",
  },
  {
    id: 8,
    name: "Broker Certification",
    description: "Professional certification programs for business loan brokers to enhance credibility.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "education",
    featured: false,
    listings: 15,
    icon: <Star className="h-6 w-6 text-accent" />,
    url: "/courses",
  },
]

// Featured partners
const featuredPartners = [
  {
    id: 1,
    name: "Velocity Capital",
    logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Leading provider of business funding solutions with flexible terms",
    category: "lenders",
    url: "/partners/velocity-capital",
  },
  {
    id: 2,
    name: "Apex Funding Solutions",
    logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Specialized in fast-approval business term loans up to $500K",
    category: "lenders",
    url: "/partners/apex-funding",
  },
  {
    id: 3,
    name: "LendTech Systems",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Premium lending software with advanced analytics and automation",
    category: "software",
    url: "/partners/lendtech-systems",
  },
]

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter listings based on active category and search query
  const filteredListings = marketplaceListings.filter((listing) => {
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
              The Business Lending <span className="gold-gradient">Marketplace</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Connect with top lenders, brokers, and service providers in the business lending industry
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search for lenders, brokers, services..."
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

      {/* Featured Listings */}
      {featuredListings.length > 0 && (
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
              Featured Categories
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredListings.map((listing, index) => (
                <motion.div
                  key={listing.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group"
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
                        {listing.listings}+ Listings
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mr-3">
                        {listing.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {listing.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{listing.description}</p>

                    <Link
                      href={listing.url}
                      className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-500"
                    >
                      Browse Category <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Listings */}
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
            All Categories
          </motion.h2>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block bg-accent text-secondary text-xs px-2 py-0.5 rounded-full font-medium">
                        {listing.listings}+ Listings
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center mr-2">
                        {listing.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {listing.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">{listing.description}</p>

                    <Link
                      href={listing.url}
                      className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-500 text-sm"
                    >
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 text-lg mb-4">No listings found matching your criteria.</p>
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

      {/* Featured Partners */}
      <section className="py-16 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Featured Partners</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover industry-leading solutions from our verified partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/20 transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <div className="relative h-12 w-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{partner.description}</p>
                <Link
                  href={partner.url}
                  className="text-accent hover:text-accent-light flex items-center text-sm font-medium transition-colors duration-500"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Join the Marketplace?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              List your business in our marketplace and connect with thousands of potential clients looking for your
              services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                List Your Business
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

