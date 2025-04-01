"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Clock, ChevronDown, MoreVertical } from "lucide-react"
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

// Sample blog categories
const categories = [
  { name: "All Posts", slug: "all" },
  { name: "Alt Finance", slug: "alt-finance" },
  { name: "Commercial Finance", slug: "commercial-finance" },
  { name: "Videos", slug: "videos" },
  { name: "Business", slug: "business" },
  { name: "Fintech", slug: "fintech" },
  { name: "Regulation", slug: "regulation" },
  { name: "Industry News", slug: "industry-news" },
]

// Sample blog posts with real images
const blogPosts = [
  {
    id: 1,
    title: "Par Funding CEO Joseph LaForte Sentenced in $404M Fraud Case",
    excerpt:
      "Joseph LaForte, the CEO of Par Funding (officially Complete Business Solutions Group), was sentenced to 20 years in prison for his role in a $404 million fraud scheme that affected thousands of investors.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Alt Finance",
    author: "Staff Writer",
    date: "5 days ago",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Governor Youngkin Vetoes Virginia SB 1252: A Win for Fintech or a Setback?",
    excerpt:
      "Governor Youngkin's decision to veto SB 1252 protects access to safe, responsible credit for Virginia consumers and businesses. The bill would have imposed severe restrictions on certain lending practices.",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Regulation",
    author: "Staff Writer",
    date: "5 days ago",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 3,
    title: "SBA Reinstates Guarantee Fees Effective March 27th",
    excerpt:
      "According to SBA notice 5000-865758, loans that have not received SBA authorization by March 27, 2025, will be subject to the reinstated guarantee fees. This change affects all SBA loan programs.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Business",
    author: "Staff Writer",
    date: "Mar 24",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 4,
    title: "Saturday Business & Finance Brief: SBA Loan Updates",
    excerpt:
      "This week's business and finance brief covers the latest SBA loan program changes, interest rate impacts, and new opportunities for small business owners seeking capital.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Business",
    author: "Staff Writer",
    date: "Mar 22",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "SmartBiz Acquisition of Centrust Bank: A New Era for Small Business Lending",
    excerpt:
      "The acquisition of Centrust Bank by SmartBiz represents a significant shift in the small business lending landscape, potentially streamlining the loan approval process for entrepreneurs.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Fintech",
    author: "Staff Writer",
    date: "Mar 19",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "What does it take to start a funding company in 2025?",
    excerpt:
      "Starting a funding company in today's regulatory environment requires more than capital. We explore the licensing, compliance, technology, and partnership requirements for new entrants.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Industry News",
    author: "Shane Mahabir",
    date: "Mar 17",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "Here's why banks don't want the CFPB to disappear",
    excerpt:
      "Contrary to popular belief, many banks support the continued existence of the Consumer Financial Protection Bureau. We examine the reasons behind this surprising stance.",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Regulation",
    author: "Shane Mahabir",
    date: "Mar 12",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "The Future of Consumer Financial Regulation Under New Leadership",
    excerpt:
      "With new leadership at key regulatory agencies, we analyze the potential shifts in consumer financial regulation and what it means for lenders and fintech companies.",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Regulation",
    author: "Shane Mahabir",
    date: "Mar 4",
    readTime: "6 min read",
  },
  {
    id: 9,
    title: "Small Business Cash Flow Trend Report: Q1 2025",
    excerpt:
      "Our quarterly analysis of small business cash flow trends reveals important insights for lenders, investors, and business owners about the current economic landscape.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Business",
    author: "Shane Mahabir",
    date: "Feb 28",
    readTime: "8 min read",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Separate featured posts
  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUpVariants} custom={0}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">FunderIntel Blog</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Stay informed with the latest news, insights, and trends in the business lending industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="border-b border-gray-200 sticky top-20 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Categories */}
            <motion.div
              className="flex items-center overflow-x-auto hide-scrollbar space-x-1 md:space-x-2 pb-2 md:pb-0 w-full md:w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {categories.map((category, index) => (
                <Button
                  key={category.slug}
                  variant="ghost"
                  size="sm"
                  className={`whitespace-nowrap rounded-full px-4 transition-all duration-500 ${
                    activeCategory === category.slug
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "text-gray-600 hover:text-white hover:bg-primary/80"
                  }`}
                  onClick={() => setActiveCategory(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-primary hover:bg-gray-100 whitespace-nowrap rounded-full px-4"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Search */}
            <motion.div
              className="relative w-full md:w-auto mt-3 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full md:w-[260px] h-9 pl-9 border-gray-200 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-2xl font-bold text-primary mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0}
            >
              Featured Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <motion.div
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpVariants}
                    custom={index * 0.1 + 0.2}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 m-3">
                        <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs mr-2">
                            {post.author.charAt(0)}
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-500 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-primary mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            Latest Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {regularPosts.length > 0 ? (
              regularPosts.map((post, index) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <motion.article
                    className="group relative flex flex-col h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpVariants}
                    custom={index * 0.1 + 0.2}
                  >
                    <div className="relative h-52 w-full overflow-hidden rounded-lg mb-4">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 m-3">
                        <button className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-500">
                          <MoreVertical className="h-4 w-4 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs mr-2">
                          {post.author.charAt(0)}
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-500 mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary font-medium">{post.category}</span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))
            ) : (
              <motion.div
                className="col-span-full py-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </div>

          {/* Pagination */}
          {regularPosts.length > 0 && (
            <motion.div
              className="mt-12 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={1}
            >
              <nav className="flex items-center space-x-1">
                <Button variant="outline" size="icon" className="w-9 h-9" disabled>
                  <span className="sr-only">First page</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="w-9 h-9" disabled>
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-white border-primary hover:bg-primary/90 hover:text-white transition-colors duration-500"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  4
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  5
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  <span className="sr-only">Last page</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L8.586 10 4.293 14.293a1 1 0 000 1.414zm6 0a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L14.586 10l-4.293 4.293a1 1 0 000 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-6">
              Get the latest industry news and insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-accent/30"
              />
              <Button className="h-10 bg-accent hover:bg-accent-light text-secondary whitespace-nowrap transition-colors duration-500">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

