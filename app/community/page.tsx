"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MessageSquare, Users, Calendar, ArrowRight, Clock, ThumbsUp, MessageCircle } from "lucide-react"
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

// Sample forum categories
const categories = [
  { name: "All Discussions", value: "all" },
  { name: "General", value: "general" },
  { name: "Lending", value: "lending" },
  { name: "Brokers", value: "brokers" },
  { name: "Technology", value: "technology" },
  { name: "Regulations", value: "regulations" },
]

// Sample forum discussions
const discussions = [
  {
    id: 1,
    title: "What's your experience with the new SBA loan changes?",
    excerpt: "I'm curious to hear how others are navigating the recent changes to SBA loan requirements...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    category: "lending",
    replies: 24,
    views: 156,
    lastActivity: "2 hours ago",
    url: "/community/discussions/1",
  },
  {
    id: 2,
    title: "Best CRM for loan brokers in 2025?",
    excerpt: "Looking for recommendations on CRM systems specifically designed for loan brokers...",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    category: "technology",
    replies: 18,
    views: 132,
    lastActivity: "5 hours ago",
    url: "/community/discussions/2",
  },
  {
    id: 3,
    title: "How are you handling the new disclosure requirements?",
    excerpt: "The updated disclosure requirements are causing some challenges in our workflow...",
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    category: "regulations",
    replies: 32,
    views: 215,
    lastActivity: "1 day ago",
    url: "/community/discussions/3",
  },
  {
    id: 4,
    title: "Tips for finding quality leads in today's market",
    excerpt: "The lead generation landscape has changed significantly. Here's what's working for me...",
    author: {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    category: "brokers",
    replies: 15,
    views: 178,
    lastActivity: "2 days ago",
    url: "/community/discussions/4",
  },
  {
    id: 5,
    title: "Introducing myself - New commercial lender in the Northeast",
    excerpt: "Hello everyone! I'm new to the community and wanted to introduce myself...",
    author: {
      name: "David Wilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    category: "general",
    replies: 8,
    views: 92,
    lastActivity: "3 days ago",
    url: "/community/discussions/5",
  },
]

// Upcoming community events
const upcomingEvents = [
  {
    id: 1,
    title: "Virtual Networking: Commercial Lenders Roundtable",
    date: "April 15, 2025",
    time: "2:00 PM - 3:30 PM EST",
    attendees: 42,
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "/community/events/1",
  },
  {
    id: 2,
    title: "Ask Me Anything: SBA Loan Expert",
    date: "April 22, 2025",
    time: "1:00 PM - 2:00 PM EST",
    attendees: 78,
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "/community/events/2",
  },
  {
    id: 3,
    title: "New Member Orientation & Welcome",
    date: "May 1, 2025",
    time: "12:00 PM - 1:00 PM EST",
    attendees: 35,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "/community/events/3",
  },
]

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter discussions based on active category and search query
  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesCategory = activeCategory === "all" || discussion.category === activeCategory
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              FunderIntel <span className="gold-gradient">Community</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Connect with industry professionals, share insights, and grow your network in the business lending
              community
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search discussions, events, and members..."
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

      {/* Community Stats */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.1}
            >
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.2}
            >
              <div className="flex justify-center mb-2">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">12,500+</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.3}
            >
              <div className="flex justify-center mb-2">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">120+</div>
              <div className="text-sm text-gray-600">Events Per Year</div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.4}
            >
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">350+</div>
              <div className="text-sm text-gray-600">Industry Experts</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h2
              className="text-2xl font-bold text-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0}
            >
              Recent Discussions
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.1}
            >
              <Link href="/community/discussions/new">
                <Button className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                  Start Discussion
                </Button>
              </Link>
            </motion.div>
          </div>

          {filteredDiscussions.length > 0 ? (
            <div className="space-y-4">
              {filteredDiscussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUpVariants}
                  custom={index * 0.1 + 0.2}
                >
                  <div className="flex items-start">
                    <div className="hidden sm:block mr-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={discussion.author.avatar || "/placeholder.svg"}
                          alt={discussion.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <Link href={discussion.url}>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors duration-500 mb-1">
                          {discussion.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3">{discussion.excerpt}</p>
                      <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-700">{discussion.author.name}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{discussion.lastActivity}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span>{discussion.views} views</span>
                        </div>
                        <div>
                          <span className="inline-block bg-gray-100 text-primary text-xs px-2 py-0.5 rounded-full">
                            {discussion.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 text-lg mb-4">No discussions found matching your criteria.</p>
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

          <div className="mt-8 text-center">
            <Link href="/community/discussions">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500"
              >
                View All Discussions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
            Upcoming Community Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg flex items-center">
                      <Calendar className="h-4 w-4 text-accent mr-2" />
                      <span className="text-xs font-medium text-gray-800">
                        {event.date} • {event.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">{event.attendees} people attending</span>
                  </p>
                  <Link href={event.url}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-500">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/community/events">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500"
              >
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Community Today</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with thousands of industry professionals, access exclusive resources, and participate in events to
              grow your business and career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-secondary transition-colors duration-500"
              >
                Join Now
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

