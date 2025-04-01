"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Play, Clock, Calendar, Headphones, Volume2 } from "lucide-react"
import { motion } from "framer-motion"

// Sample podcast categories
const categories = [
  { name: "All Episodes", value: "all" },
  { name: "Business Lending", value: "business-lending" },
  { name: "Fintech", value: "fintech" },
  { name: "Industry News", value: "industry-news" },
  { name: "Interviews", value: "interviews" },
]

// Sample podcast episodes
const podcastEpisodes = [
  {
    id: 1,
    title: "Why aren't more people prosecuted for backdooring files?",
    excerpt:
      "A person is essentially stealing the file to do with it what they want, sell it to someone else, or get it funded themselves. It happens so often now it is almost accepted as the cost of doing business.",
    image: "/placeholder.svg?height=400&width=600",
    date: "1/19/2025",
    duration: "19 min",
    category: "industry-news",
    isLatest: true,
    url: "/forum/podcast/1",
  },
  {
    id: 2,
    title: "SBA has best year in 16 years!",
    excerpt:
      "The Small Business Administration reported its best performance in 16 years, with record loan approvals and significant improvements in processing times.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10/26/2024",
    duration: "18 min",
    category: "business-lending",
    isLatest: false,
    url: "/forum/podcast/2",
  },
  {
    id: 3,
    title: "The Future of Fintech: AI and Machine Learning Applications",
    excerpt:
      "We explore how artificial intelligence and machine learning are transforming the fintech landscape, from fraud detection to personalized financial services.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10/12/2024",
    duration: "25 min",
    category: "fintech",
    isLatest: false,
    url: "/forum/podcast/3",
  },
  {
    id: 4,
    title: "Interview with Jane Smith, CEO of NextGen Lending",
    excerpt:
      "Jane Smith shares insights on building a successful lending platform, navigating regulatory challenges, and the future of digital lending.",
    image: "/placeholder.svg?height=400&width=600",
    date: "9/28/2024",
    duration: "32 min",
    category: "interviews",
    isLatest: false,
    url: "/forum/podcast/4",
  },
  {
    id: 5,
    title: "Regulatory Changes Affecting Commercial Lenders in 2025",
    excerpt:
      "A comprehensive overview of the regulatory changes coming in 2025 that will impact commercial lenders and how to prepare for them.",
    image: "/placeholder.svg?height=400&width=600",
    date: "9/14/2024",
    duration: "22 min",
    category: "business-lending",
    isLatest: false,
    url: "/forum/podcast/5",
  },
  {
    id: 6,
    title: "The Rise of Embedded Finance: Opportunities and Challenges",
    excerpt:
      "Exploring how embedded finance is changing the way financial services are delivered and what it means for traditional lenders and fintech companies.",
    image: "/placeholder.svg?height=400&width=600",
    date: "8/31/2024",
    duration: "27 min",
    category: "fintech",
    isLatest: false,
    url: "/forum/podcast/6",
  },
  {
    id: 7,
    title: "Small Business Funding Strategies for Economic Uncertainty",
    excerpt:
      "Practical advice for small businesses seeking funding during periods of economic uncertainty, with insights from successful entrepreneurs and lenders.",
    image: "/placeholder.svg?height=400&width=600",
    date: "8/17/2024",
    duration: "24 min",
    category: "business-lending",
    isLatest: false,
    url: "/forum/podcast/7",
  },
  {
    id: 8,
    title: "Interview with Michael Johnson, Chief Economist at Global Finance Institute",
    excerpt:
      "Michael Johnson discusses economic trends affecting the lending industry and provides forecasts for interest rates and credit availability.",
    image: "/placeholder.svg?height=400&width=600",
    date: "8/3/2024",
    duration: "29 min",
    category: "interviews",
    isLatest: false,
    url: "/forum/podcast/8",
  },
]

export default function PodcastPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter episodes based on active category and search query
  const filteredEpisodes = podcastEpisodes.filter((episode) => {
    const matchesCategory = activeCategory === "all" || episode.category === activeCategory
    const matchesSearch =
      episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get latest episode
  const latestEpisode = podcastEpisodes.find((episode) => episode.isLatest)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Funder Intel Podcast</h1>
                <p className="text-lg text-white/80 max-w-xl">
                  The latest intel for the business lending, commercial finance, and fintech industries. Insights,
                  interviews, and analysis to help you move your business forward.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-white">
                    <Headphones className="mr-2 h-5 w-5" />
                    Subscribe Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Latest Episode
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Funder Intel Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <div className="bg-accent rounded-full p-2 mr-3">
                        <Volume2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Available on</p>
                        <div className="flex space-x-3 mt-1">
                          <span className="text-xs">Spotify</span>
                          <span className="text-xs">Apple Podcasts</span>
                          <span className="text-xs">Google Podcasts</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm opacity-80">Founded by Shane Mahabir</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b border-gray-200 sticky top-16 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Categories */}
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
                    className="px-4 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Search */}
            <div className="relative w-full md:w-auto mt-3 md:mt-0">
              <Input
                type="search"
                placeholder="Search episodes..."
                className="w-full md:w-[260px] h-9 pl-9 border-gray-200 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode (if available and no filters applied) */}
      {latestEpisode && activeCategory === "all" && searchQuery === "" && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-6">Latest Episode</h2>

            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 lg:w-1/4">
                  <div className="relative h-56 md:h-full w-full">
                    <Image
                      src={latestEpisode.image || "/placeholder.svg"}
                      alt={latestEpisode.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-none"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Button size="icon" className="h-16 w-16 rounded-full bg-accent hover:bg-accent-light text-white">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
                      Latest Episode
                    </span>
                  </div>

                  <Link href={latestEpisode.url}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary transition-colors mb-3">
                      {latestEpisode.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-6">{latestEpisode.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{latestEpisode.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{latestEpisode.duration}</span>
                    </div>
                    <div>
                      <span className="inline-block bg-gray-100 text-primary text-xs px-3 py-1 rounded-full">
                        {categories.find((cat) => cat.value === latestEpisode.category)?.name || latestEpisode.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="bg-primary hover:bg-primary-dark text-white">
                      <Play className="mr-2 h-4 w-4" />
                      Play Episode
                    </Button>
                    <Button variant="outline" className="border-gray-200">
                      <Headphones className="mr-2 h-4 w-4" />
                      Show Notes
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Episodes */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {activeCategory === "all"
              ? "All Episodes"
              : `${categories.find((cat) => cat.value === activeCategory)?.name} Episodes`}
          </h2>

          {filteredEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEpisodes.map((episode) => (
                <motion.article
                  key={episode.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={episode.image || "/placeholder.svg"}
                      alt={episode.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <Button
                        size="icon"
                        className="h-10 w-10 rounded-full bg-accent hover:bg-accent-light text-white mr-3"
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                      <span className="text-white text-sm font-medium">{episode.duration}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{episode.date}</span>
                      <span className="inline-block bg-gray-100 text-primary text-xs px-3 py-1 rounded-full">
                        {categories.find((cat) => cat.value === episode.category)?.name || episode.category}
                      </span>
                    </div>

                    <Link href={episode.url}>
                      <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors mb-3 line-clamp-2">
                        {episode.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{episode.excerpt}</p>

                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full border-gray-200">
                        <Headphones className="mr-2 h-4 w-4" />
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 text-lg mb-4">No podcast episodes found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredEpisodes.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-white border-primary hover:bg-primary/90 hover:text-white"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  <span className="sr-only">More pages</span>
                  ...
                </Button>
                <Button variant="outline" size="sm">
                  8
                </Button>
                <Button variant="outline" size="sm">
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-3">Subscribe to Our Podcast</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Never miss an episode. Subscribe to the Funder Intel Podcast on your favorite platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </Button>
            <Button className="bg-[#7D3DAF] hover:bg-[#7D3DAF]/90 text-white">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.337 0 4.443.891 6.467 2.04 0 .001.002.001.003.002.202.116.404.233.603.352.599.361 1.175.757 1.723 1.178.548.421 1.066.869 1.55 1.342.15.148.289.3.423.45.134.15.265.3.387.455.61.77 1.069 1.587 1.328 2.447.259.86.364 1.76.364 2.698 0 .506-.043 1.011-.13 1.516-.086.505-.215 1.01-.386 1.516-.345 1.01-.861 2.02-1.553 3.029-.691 1.01-1.553 2.02-2.587 3.029-.432.337-.864.675-1.294 1.01-.43.337-.857.673-1.293 1.01-.864.674-1.727 1.347-2.59 2.022-.864.674-1.727 1.347-2.59 2.02-.173.169-.37.253-.59.253-.147 0-.282-.042-.407-.126-.125-.084-.22-.2-.282-.337-.063-.127-.094-.264-.094-.412V5.318c0-.148.02-.285.062-.412.042-.126.104-.242.188-.348.084-.105.188-.19.313-.252.125-.063.261-.095.407-.095.295 0 .549.126.762.38.764.59 1.533 1.169 2.305 1.736.773.568 1.553 1.116 2.337 1.642.785.527 1.575 1.032 2.37 1.516.795.484 1.596.937 2.402 1.357.807.421 1.628.8 2.463 1.137.835.337 1.686.632 2.55.884.087.042.173.063.258.063.084 0 .158-.021.22-.063.063-.042.116-.095.158-.158.041-.063.062-.137.062-.221V7.076c0-.253-.063-.463-.188-.632-.126-.168-.345-.337-.658-.505-.544-.337-1.11-.632-1.696-.884-.587-.253-1.18-.463-1.776-.632-.598-.169-1.196-.295-1.792-.38-.597-.084-1.185-.126-1.76-.126-1.077 0-2.058.19-2.945.569-.887.38-1.649.905-2.285 1.578-.636.674-1.133 1.463-1.49 2.367-.36.905-.539 1.873-.539 2.904 0 1.052.179 2.03.538 2.935.358.905.855 1.684 1.49 2.336.636.653 1.398 1.169 2.285 1.548.887.38 1.868.569 2.945.569.82 0 1.628-.116 2.43-.348.801-.232 1.575-.569 2.32-1.01.744-.442 1.417-.99 2.02-1.642.602-.653 1.091-1.41 1.467-2.273.126-.21.274-.337.446-.38.17-.042.32-.021.445.063.127.084.211.19.251.316.042.127.032.274-.03.443-.463 1.178-1.133 2.199-2.008 3.06-.876.863-1.858 1.548-2.945 2.052-1.088.505-2.232.842-3.435 1.01-1.203.17-2.358.254-3.466.254-1.382 0-2.661-.211-3.84-.632-1.178-.421-2.19-.99-3.028-1.705-.84-.716-1.49-1.547-1.948-2.493-.459-.947-.688-1.957-.688-3.03 0-1.094.22-2.125.658-3.092.44-.968 1.04-1.81 1.802-2.525.762-.716 1.649-1.284 2.66-1.705 1.01-.421 2.09-.632 3.247-.632z" />
              </svg>
              Apple Podcasts
            </Button>
            <Button className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L16.2 12l-6.516 3.54z" />
              </svg>
              Google Podcasts
            </Button>
            <Button className="bg-[#5A5A5A] hover:bg-[#5A5A5A]/90 text-white">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.906 6.108c-.033-.195-.119-.382-.254-.53-.141-.155-.316-.267-.51-.325-.46-.14-.928-.253-1.399-.338-.465-.084-.932-.155-1.402-.211-.465-.056-.93-.098-1.398-.127-.465-.028-.93-.042-1.395-.042-.465 0-.93.014-1.396.042-.465.029-.93.07-1.395.127-.47.056-.937.127-1.402.211-.47.085-.938.197-1.399.338-.193.058-.368.17-.51.325-.134.148-.22.335-.253.53-.056.323-.084.648-.084.976v8.838c0 .327.028.652.084.976.033.195.119.382.254.53.141.155.316.267.51.325.46.14.928.253 1.399.338.465.084.932.155 1.402.211.465.056.93.098 1.395.127.465.028.93.042 1.396.042.465 0 .93-.014 1.395-.042.465-.029.933-.07 1.398-.127.47-.056.937-.127 1.402-.211.47-.085.938-.197 1.399-.338.193-.058.368-.17.51-.325.134-.148.22-.335.253-.53.056-.324.084-.649.084-.976V7.084c0-.328-.028-.653-.084-.976zM9.023 15.27c-.028 0-.042-.014-.042-.042v-6.51c0-.028.014-.042.042-.042h.338c.028 0 .056.014.07.042l3.79 4.712h.028V8.718c0-.028.014-.042.042-.042h.338c.028 0 .042.014.042.042v6.51c0 .028-.014.042-.042.042h-.338c-.028 0-.056-.014-.07-.042l-3.79-4.712h-.028v4.712c0 .028-.014.042-.042.042h-.338zm12.141-1.693c.028 0 .042.014.042.042v1.651c0 .028-.014.042-.042.042H16.97c-.028 0-.042-.014-.042-.042V8.718c0-.028.014-.042.042-.042h4.194c.028 0 .042.014.042.042v1.651c0 .028-.014.042-.042.042h-2.782c-.028 0-.042.014-.042.042v1.046c0 .028.014.042.042.042h2.444c.028 0 .042.014.042.042v1.651c0 .028-.014.042-.042.042h-2.444c-.028 0-.042.014-.042.042v1.209c0 .028.014.042.042.042h2.782z" />
              </svg>
              RSS Feed
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-primary mb-4">Get Notified of New Episodes</h3>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-10 border-gray-200 focus-visible:ring-primary"
              />
              <Button className="h-10 bg-accent hover:bg-accent-light text-white whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

