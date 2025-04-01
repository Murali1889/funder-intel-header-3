"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, ArrowRight } from "lucide-react"
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

// Sample news categories
const categories = [
  { name: "All News", value: "all" },
  { name: "Business Lending", value: "business-lending" },
  { name: "Fintech", value: "fintech" },
  { name: "Commercial Finance", value: "commercial-finance" },
  { name: "Regulation", value: "regulation" },
  { name: "Industry Updates", value: "industry-updates" },
]

// Sample news articles with real images
const newsArticles = [
  {
    id: 1,
    title: "Minnesota's Small Business Person of the Year scores big with Walmart contract extension",
    excerpt:
      "Small Business Administration award winner for Minnesota, veteran Beth Fynbo Benike, founded Busy Baby, a business in Oronoco, in the southeast part of the state...",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "startribune.com",
    date: "31.03.2025",
    category: "business-lending",
    url: "/forum/recent-news/1",
  },
  {
    id: 2,
    title: "6 things borrowers should know about federal student loans right now",
    excerpt:
      "NPR has spent the past few weeks catching up with student loan experts and asking the Trump administration for clarity on some of borrowers' biggest questions...",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "mprnews.org",
    date: "31.03.2025",
    category: "regulation",
    url: "/forum/recent-news/2",
  },
  {
    id: 3,
    title: "SBA Reinstates Guarantee Fees Effective March 27th",
    excerpt:
      "According to SBA notice 5000-865758, loans that have not received SBA authorization by March 27, 2025, will be subject to the reinstated guarantee fees.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "sba.gov",
    date: "27.03.2025",
    category: "business-lending",
    url: "/forum/recent-news/3",
  },
  {
    id: 4,
    title: "New Fintech Regulations Set to Impact Alternative Lenders",
    excerpt:
      "The Consumer Financial Protection Bureau announced new regulations that will significantly impact how fintech companies and alternative lenders operate...",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "wsj.com",
    date: "26.03.2025",
    category: "fintech",
    url: "/forum/recent-news/4",
  },
  {
    id: 5,
    title: "Commercial Real Estate Lending Shows Signs of Recovery",
    excerpt:
      "After a challenging period, commercial real estate lending is showing signs of recovery with increased transaction volume and stabilizing property values...",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "bloomberg.com",
    date: "25.03.2025",
    category: "commercial-finance",
    url: "/forum/recent-news/5",
  },
  {
    id: 6,
    title: "Federal Reserve Signals Potential Rate Cuts Later This Year",
    excerpt:
      "The Federal Reserve has indicated it may begin cutting interest rates later this year, a move that could provide relief to borrowers and stimulate lending activity...",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "cnbc.com",
    date: "24.03.2025",
    category: "industry-updates",
    url: "/forum/recent-news/6",
  },
  {
    id: 7,
    title: "Small Business Optimism Index Reaches Three-Year High",
    excerpt:
      "The National Federation of Independent Business (NFIB) reported that its Small Business Optimism Index reached a three-year high in March, indicating growing confidence among small business owners...",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "nfib.com",
    date: "23.03.2025",
    category: "business-lending",
    url: "/forum/recent-news/7",
  },
  {
    id: 8,
    title: "New Tax Credits Available for Clean Energy Business Investments",
    excerpt:
      "The Treasury Department has released guidance on new tax credits available for businesses investing in clean energy projects, creating opportunities for lenders in this growing sector...",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "treasury.gov",
    date: "22.03.2025",
    category: "commercial-finance",
    url: "/forum/recent-news/8",
  },
]

export default function RecentNewsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter articles based on active category and search query
  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUpVariants} custom={0}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Business Lending, Fintech, & Commercial Finance Related News
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Stay informed with the latest developments and trends in the financial industry
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="w-full md:w-auto"
            >
              <Tabs
                defaultValue="all"
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="h-9 bg-gray-100 p-1 overflow-x-auto hide-scrollbar w-full md:w-auto">
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

            {/* Search */}
            <motion.div
              className="relative w-full md:w-auto mt-3 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <Input
                type="search"
                placeholder="Search news..."
                className="w-full md:w-[260px] h-9 pl-9 border-gray-200 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="space-y-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUpVariants}
                  custom={index * 0.1}
                >
                  {/* Article Image */}
                  <div className="md:w-1/3 lg:w-1/4">
                    <div className="relative h-56 md:h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="md:w-2/3 lg:w-3/4 flex flex-col">
                    <Link href={article.url}>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary transition-colors duration-500 mb-3">
                        {article.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="mt-auto">
                      <div className="h-px w-full bg-gray-100 my-4"></div>

                      <div className="flex flex-wrap items-center justify-between gap-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>Source: {article.source}</span>
                        </div>

                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Published: {article.date}</span>
                          </div>

                          <div>
                            <span className="inline-block bg-gray-100 text-primary text-xs px-3 py-1 rounded-full">
                              {categories.find((cat) => cat.value === article.category)?.name || article.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Link href={article.url}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-primary border-primary hover:bg-primary hover:text-white transition-all duration-500 px-4 py-2"
                          >
                            View Article
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              className="py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <p className="text-gray-500 text-lg mb-4">No news articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <motion.div
              className="mt-12 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={1}
            >
              <nav className="flex items-center space-x-1">
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
                  <span className="sr-only">More pages</span>
                  ...
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  8
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-colors duration-500 hover:bg-primary hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-white mb-3">Never Miss an Update</h2>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter to receive the latest industry news directly in your inbox
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

