"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, BarChart, Video, BookOpen, Download, ArrowRight, Calendar } from "lucide-react"
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

// Sample resource categories
const categories = [
  { name: "All Resources", value: "all" },
  { name: "Blog", value: "blog" },
  { name: "Market Intelligence", value: "intelligence" },
  { name: "Industry Reports", value: "reports" },
  { name: "Webinars", value: "webinars" },
  { name: "Templates", value: "templates" },
]

// Sample resources
const resources = [
  {
    id: 1,
    title: "Business Lending Blog",
    description: "Stay informed with the latest news, insights, and trends in the business lending industry.",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "blog",
    featured: true,
    count: 120,
    icon: <FileText className="h-6 w-6 text-accent" />,
    url: "/blog",
  },
  {
    id: 2,
    title: "Market Intelligence Dashboard",
    description: "Access real-time data and analytics on the business lending market to make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "intelligence",
    featured: true,
    count: 15,
    icon: <BarChart className="h-6 w-6 text-accent" />,
    url: "/resources/intelligence",
  },
  {
    id: 3,
    title: "Industry Reports",
    description: "Comprehensive reports on market trends, lender performance, and industry forecasts.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "reports",
    featured: true,
    count: 25,
    icon: <FileText className="h-6 w-6 text-accent" />,
    url: "/resources/reports",
  },
  {
    id: 4,
    title: "Educational Webinars",
    description: "Live and recorded webinars featuring industry experts discussing key topics in business lending.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "webinars",
    featured: true,
    count: 40,
    icon: <Video className="h-6 w-6 text-accent" />,
    url: "/resources/webinars",
  },
  {
    id: 5,
    title: "Document Templates",
    description: "Professionally crafted templates for loan applications, term sheets, and other essential documents.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "templates",
    featured: false,
    count: 35,
    icon: <Download className="h-6 w-6 text-accent" />,
    url: "/resources/templates",
  },
  {
    id: 6,
    title: "Educational Guides",
    description:
      "In-depth guides on various aspects of business lending, funding options, and industry best practices.",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "blog",
    featured: false,
    count: 28,
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    url: "/resources/guides",
  },
]

// Upcoming webinars
const upcomingWebinars = [
  {
    id: 1,
    title: "The Future of Commercial Lending in 2025",
    speaker: "John Anderson, CEO of Capital Insights",
    date: "April 15, 2025",
    time: "2:00 PM EST",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "/resources/webinars/future-commercial-lending",
  },
  {
    id: 2,
    title: "Navigating SBA Loan Changes: What Brokers Need to Know",
    speaker: "Sarah Johnson, SBA Lending Expert",
    date: "April 22, 2025",
    time: "1:00 PM EST",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "/resources/webinars/sba-loan-changes",
  },
  {
    id: 3,
    title: "Alternative Lending Strategies for Challenging Credits",
    speaker: "Michael Chen, Alternative Funding Specialist",
    date: "May 5, 2025",
    time: "3:00 PM EST",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "/resources/webinars/alternative-lending-strategies",
  },
]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter resources based on active category and search query
  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get featured resources
  const featuredResources = filteredResources.filter((resource) => resource.featured)

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
              Business Lending <span className="gold-gradient">Resources</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Access valuable insights, tools, and educational content to help you succeed in the business lending
              industry
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search for resources, guides, reports..."
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

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
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
              Featured Resources
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.slice(0, 3).map((resource, index) => (
                <motion.div
                  key={resource.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group h-full flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUpVariants}
                  custom={index * 0.1 + 0.2}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-accent text-secondary text-xs px-3 py-1 rounded-full font-medium">
                        {resource.count}+ Items
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mr-3">
                        {resource.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {resource.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">{resource.description}</p>

                    <Link href={resource.url}>
                      <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                        Explore {resource.title.split(" ")[0]}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
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
            All Resources
          </motion.h2>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 h-full flex flex-col group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUpVariants}
                  custom={index * 0.1 + 0.2}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block bg-accent text-secondary text-xs px-2 py-0.5 rounded-full font-medium">
                        {resource.count}+ Items
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center mr-2">
                        {resource.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {resource.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">{resource.description}</p>

                    <Link
                      href={resource.url}
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
              <p className="text-gray-500 text-lg mb-4">No resources found matching your criteria.</p>
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

      {/* Upcoming Webinars */}
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Upcoming Webinars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our live webinars featuring industry experts discussing the latest trends and insights in business
              lending
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={webinar.image || "/placeholder.svg"}
                    alt={webinar.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg flex items-center">
                      <Calendar className="h-4 w-4 text-accent mr-2" />
                      <span className="text-xs font-medium text-gray-800">
                        {webinar.date} • {webinar.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500 mb-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Speaker:</span> {webinar.speaker}
                  </p>
                  <Link href={webinar.url}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/resources/webinars">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500"
              >
                View All Webinars <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Premium Access</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Upgrade to our premium plan to access exclusive resources, reports, and tools to help you stay ahead in
              the business lending industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-secondary transition-colors duration-500"
              >
                Upgrade to Premium
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-500"
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

