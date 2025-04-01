import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ChevronRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import SiteHeader from "@/components/site-header"
import MarketplacePreview from "@/components/marketplace-preview"
import FeaturedPartners from "@/components/featured-partners"

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
            alt="Business marketplace"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold mb-2">Business Lending Marketplace</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Connect with top lenders, brokers, and service providers in the business lending industry
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-300" />
              <Input
                type="search"
                placeholder="Search marketplace..."
                className="w-full pl-8 bg-blue-900/50 border-blue-700 text-white placeholder:text-blue-300"
              />
            </div>
            <Button variant="outline" className="bg-blue-900/50 border-blue-700 text-white hover:bg-blue-800">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <Tabs defaultValue="lenders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="lenders">Lenders</TabsTrigger>
            <TabsTrigger value="brokers">Brokers</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="lenders" className="mt-0">
            <FadeIn>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Lenders</h2>
                <p className="text-muted-foreground mb-6">
                  Discover top-rated direct lenders offering various financing solutions for your business needs
                </p>
              </div>
            </FadeIn>

            <MarketplacePreview />

            <FadeIn direction="up" delay={0.2}>
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Browse by Loan Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Merchant Cash Advance",
                      description: "Quick funding based on future sales",
                      image:
                        "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2070&auto=format&fit=crop",
                      link: "/marketplace/mca",
                    },
                    {
                      title: "Term Loans",
                      description: "Fixed repayment schedule over time",
                      image:
                        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop",
                      link: "/marketplace/term-loans",
                    },
                    {
                      title: "Equipment Financing",
                      description: "Fund new or used equipment purchases",
                      image:
                        "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=2069&auto=format&fit=crop",
                      link: "/marketplace/equipment",
                    },
                    {
                      title: "SBA Loans",
                      description: "Government-backed business loans",
                      image:
                        "https://images.unsplash.com/photo-1436303945392-0d1e373a40d9?q=80&w=2048&auto=format&fit=crop",
                      link: "/marketplace/sba",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-all bg-white border border-gray-200"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-white/80 mb-3">{item.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-white/50 bg-black/30 hover:bg-black/50"
                          asChild
                        >
                          <Link href={item.link}>
                            View Lenders
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Our Funding Partners</h2>
                <FeaturedPartners />
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="brokers" className="mt-0">
            <FadeIn>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Business Loan Brokers</h2>
                <p className="text-muted-foreground mb-6">
                  Find experienced brokers who can help you secure the best financing for your business
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Capital Finders",
                    specialty: "MCA, SBA, Equipment",
                    location: "New York, NY",
                    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop",
                  },
                  {
                    name: "Prime Business Financing",
                    specialty: "Term Loans, Equipment, Real Estate",
                    location: "Chicago, IL",
                    image:
                      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
                  },
                  {
                    name: "Sterling Finance Group",
                    specialty: "SBA, Term Loans, Lines of Credit",
                    location: "Los Angeles, CA",
                    image:
                      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "Meridian Capital Advisors",
                    specialty: "Real Estate, Construction, Cannabis",
                    location: "Miami, FL",
                    image:
                      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "Pinnacle Funding Solutions",
                    specialty: "MCA, Working Capital, Equipment",
                    location: "Dallas, TX",
                    image:
                      "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "Alliance Business Capital",
                    specialty: "Medical, Transportation, Manufacturing",
                    location: "Denver, CO",
                    image:
                      "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop",
                  },
                ].map((broker, index) => (
                  <StaggerItem key={index}>
                    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all bg-white border border-gray-200">
                      <div className="h-48 relative">
                        <Image
                          src={broker.image || "/placeholder.svg"}
                          alt={broker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 text-gray-900">{broker.name}</h3>
                        <div className="text-sm text-gray-600 mb-3">
                          <div className="flex items-center mb-1">
                            <span className="mr-2 font-medium">Specialty:</span> {broker.specialty}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2 font-medium">Location:</span> {broker.location}
                          </div>
                        </div>
                        <Button size="sm" className="w-full text-blue-600" asChild>
                          <Link href={`/marketplace/brokers/${broker.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            View Profile
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex justify-center mt-12">
                <Button asChild>
                  <Link href="/marketplace/brokers">
                    View All Brokers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="services" className="mt-0">
            <FadeIn>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Service Providers</h2>
                <p className="text-muted-foreground mb-6">
                  Discover tools, software, and services to optimize your lending business operations
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "LendingSoft",
                    category: "CRM & Loan Management",
                    for: "Brokers & Funders",
                    pricing: "Starting at $99/mo",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "DocSign Pro",
                    category: "Document Automation",
                    for: "Brokers & Funders",
                    pricing: "Starting at $49/mo",
                    image:
                      "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "FundingAnalytics",
                    category: "Business Intelligence",
                    for: "Funders",
                    pricing: "Starting at $199/mo",
                    image:
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                  },
                  {
                    name: "LeadGenix",
                    category: "Marketing & Lead Generation",
                    for: "Brokers",
                    pricing: "Starting at $149/mo",
                    image:
                      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "ComplianceGuard",
                    category: "Legal & Compliance",
                    for: "Brokers & Funders",
                    pricing: "Starting at $79/mo",
                    image:
                      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    name: "FundingFlow",
                    category: "Payment Processing",
                    for: "Funders",
                    pricing: "Transaction-based",
                    image:
                      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
                  },
                ].map((service, index) => (
                  <StaggerItem key={index}>
                    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all bg-white border border-gray-200">
                      <div className="h-48 relative">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 text-gray-900">{service.name}</h3>
                        <div className="text-sm text-gray-600 mb-3">
                          <div className="flex items-center mb-1">
                            <span className="mr-2 font-medium">Category:</span> {service.category}
                          </div>
                          <div className="flex items-center mb-1">
                            <span className="mr-2 font-medium">For:</span> {service.for}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2 font-medium">Pricing:</span> {service.pricing}
                          </div>
                        </div>
                        <Button size="sm" className="w-full text-blue-600" asChild>
                          <Link href={`/marketplace/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex justify-center mt-12">
                <Button asChild>
                  <Link href="/marketplace/services">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </TabsContent>
        </Tabs>

        {/* Call-to-action section */}
        <FadeIn direction="up" delay={0.2}>
          <section className="mt-24 bg-blue-900 text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                alt="Business partnership"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">List Your Business</h2>
                <p className="mb-6">
                  Join thousands of companies in the FunderIntel marketplace and get discovered by potential clients and
                  partners.
                </p>
                <Button size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400" asChild>
                  <Link href="/marketplace/add-listing">Add Your Listing</Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Business Listing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

