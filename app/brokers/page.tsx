"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, BookOpen, Award, ArrowRight, CheckCircle, Star } from "lucide-react"
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

// Sample broker categories
const categories = [
  { name: "All Resources", value: "all" },
  { name: "Find Brokers", value: "directory" },
  { name: "Resources", value: "resources" },
  { name: "Certification", value: "certification" },
  { name: "Training", value: "training" },
]

// Sample broker resources
const brokerResources = [
  {
    id: 1,
    name: "Broker Directory",
    description: "Find and connect with experienced business loan brokers across the country.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "directory",
    featured: true,
    count: 250,
    icon: <Users className="h-6 w-6 text-accent" />,
    url: "/brokers/directory",
  },
  {
    id: 2,
    name: "Broker Resources",
    description: "Access tools, templates, and guides to help you succeed as a business loan broker.",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "resources",
    featured: true,
    count: 85,
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    url: "/brokers/resources",
  },
  {
    id: 3,
    name: "Broker Certification",
    description: "Enhance your credibility with our industry-recognized broker certification program.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "certification",
    featured: true,
    count: 60,
    icon: <Award className="h-6 w-6 text-accent" />,
    url: "/brokers/certification",
  },
  {
    id: 4,
    name: "Broker Training",
    description: "Comprehensive training programs for new and experienced business loan brokers.",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "training",
    featured: false,
    count: 40,
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    url: "/brokers/training",
  },
]

// Featured brokers
const featuredBrokers = [
  {
    id: 1,
    name: "John Smith",
    company: "Smith Financial Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Specializing in SBA loans and equipment financing with 10+ years of experience",
    rating: 4.9,
    reviews: 87,
    certified: true,
    url: "/brokers/john-smith",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Premier Business Funding",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Expert in MCA and working capital solutions for small businesses",
    rating: 4.8,
    reviews: 64,
    certified: true,
    url: "/brokers/sarah-johnson",
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Growth Capital Partners",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Focused on startup funding and venture capital connections",
    rating: 4.7,
    reviews: 52,
    certified: true,
    url: "/brokers/michael-chen",
  },
]

export default function BrokersPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter resources based on active category and search query
  const filteredResources = brokerResources.filter((resource) => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
              Business Loan <span className="gold-gradient">Brokers</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Find certified brokers, access valuable resources, and enhance your skills as a business loan broker
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search for brokers, resources, or training..."
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

      {/* Featured Brokers */}
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
            Featured Brokers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBrokers.map((broker, index) => (
              <motion.div
                key={broker.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={broker.avatar || "/placeholder.svg"}
                        alt={broker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {broker.name}
                      </h3>
                      <p className="text-sm text-gray-600">{broker.company}</p>
                      {broker.certified && (
                        <div className="flex items-center mt-1">
                          <Award className="h-3 w-3 text-accent mr-1" />
                          <span className="text-xs text-accent">Certified Broker</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(broker.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill={i < Math.floor(broker.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {broker.rating} ({broker.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{broker.description}</p>

                  <Link href={broker.url}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/brokers/directory">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500"
              >
                View All Brokers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Broker Resources */}
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
            Broker Resources
          </motion.h2>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      alt={resource.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block bg-accent text-secondary text-xs px-2 py-0.5 rounded-full font-medium">
                        {resource.count}+ Resources
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center mr-2">
                        {resource.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                        {resource.name}
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

      {/* Certification Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.2}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Become a Certified Business Loan Broker
              </h2>
              <p className="text-gray-600 mb-6">
                Enhance your credibility and expertise with our industry-recognized certification program. Stand out
                from the competition and gain access to exclusive resources and opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Comprehensive training on all aspects of business lending</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Access to exclusive lender relationships and programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    Professional certification badge for your website and marketing materials
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    Ongoing education and support to stay current with industry trends
                  </span>
                </li>
              </ul>
              <Link href="/brokers/certification">
                <Button className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                  Learn About Certification
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.3}
            >
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Business Loan Broker Certification"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-accent mr-2" />
                    <h3 className="text-lg font-bold text-primary">Certified Business Loan Broker</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Join over 500 certified brokers who have enhanced their careers through our program.
                  </p>
                </div>
              </div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Grow Your Broker Business?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join our community of successful business loan brokers and access the tools, resources, and connections
              you need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-secondary transition-colors duration-500"
              >
                Join as a Broker
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-500"
              >
                Explore Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

