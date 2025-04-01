import Image from "next/image"
import Link from "next/link"
import { Search, Filter, MessageSquare, Users, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const forumCategories = [
  { name: "Funding Solutions", count: 124, icon: "💰" },
  { name: "Broker Strategies", count: 87, icon: "🤝" },
  { name: "Underwriting", count: 56, icon: "📋" },
  { name: "Industry News", count: 42, icon: "📰" },
  { name: "Technology", count: 38, icon: "💻" },
  { name: "Compliance", count: 31, icon: "⚖️" },
  { name: "Marketing", count: 29, icon: "📢" },
  { name: "General Discussion", count: 103, icon: "💬" },
]

const forumTopics = [
  {
    id: "best-practices-mca",
    title: "Best Practices for MCA Brokers in 2025",
    author: "Michael Chen",
    authorRole: "Senior Broker",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=MC",
    category: "Broker Strategies",
    replies: 24,
    views: 342,
    lastActivity: "2 hours ago",
    pinned: true,
  },
  {
    id: "underwriting-challenges",
    title: "Navigating Underwriting Challenges in Today's Economy",
    author: "Sarah Johnson",
    authorRole: "Underwriting Specialist",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
    category: "Underwriting",
    replies: 18,
    views: 276,
    lastActivity: "5 hours ago",
    pinned: true,
  },
  {
    id: "new-compliance-regulations",
    title: "New Compliance Regulations for Business Lenders - What You Need to Know",
    author: "David Williams",
    authorRole: "Compliance Officer",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=DW",
    category: "Compliance",
    replies: 32,
    views: 415,
    lastActivity: "1 day ago",
  },
  {
    id: "finding-quality-leads",
    title: "Strategies for Finding Quality Leads in a Competitive Market",
    author: "Jennifer Lopez",
    authorRole: "Marketing Director",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=JL",
    category: "Marketing",
    replies: 27,
    views: 389,
    lastActivity: "1 day ago",
  },
  {
    id: "alternative-funding-options",
    title: "Alternative Funding Options Beyond Traditional MCAs",
    author: "Robert Taylor",
    authorRole: "Funding Specialist",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=RT",
    category: "Funding Solutions",
    replies: 15,
    views: 231,
    lastActivity: "2 days ago",
  },
  {
    id: "crm-recommendations",
    title: "CRM Recommendations for Small Broker Shops",
    author: "Emily Rodriguez",
    authorRole: "Operations Manager",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
    category: "Technology",
    replies: 21,
    views: 278,
    lastActivity: "3 days ago",
  },
]

export default function ForumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
            alt="Community forum"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Forum</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Connect with industry professionals, share insights, and discuss the latest trends in business lending
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-300" />
              <Input
                type="search"
                placeholder="Search discussions..."
                className="w-full pl-8 bg-blue-900/50 border-blue-700 text-white placeholder:text-blue-300"
              />
            </div>
            <Button variant="outline" className="bg-blue-900/50 border-blue-700 text-white hover:bg-blue-800">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700" variant="primary">
              <MessageSquare className="mr-2 h-4 w-4" />
              New Discussion
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <Tabs defaultValue="latest" className="mb-8">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                <TabsTrigger value="my-discussions">My Discussions</TabsTrigger>
              </TabsList>
              <TabsContent value="latest">
                <StaggerContainer className="space-y-4 mt-6">
                  {forumTopics.map((topic, index) => (
                    <StaggerItem key={index}>
                      <Card className="p-4 hover:shadow-md transition-shadow bg-white">
                        <div className="flex items-start gap-4">
                          <div className="hidden md:block">
                            <Image
                              src={topic.authorAvatar || "/placeholder.svg"}
                              alt={topic.author}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {topic.pinned && (
                                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-800 border-blue-200">
                                  Pinned
                                </Badge>
                              )}
                              <Badge className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {topic.category}
                              </Badge>
                            </div>
                            <Link href={`/forum/${topic.id}`} className="block group">
                              <h3 className="text-lg text-black font-semibold group-hover:text-blue-700 transition-colors">
                                {topic.title}
                              </h3>
                            </Link>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Users className="h-3.5 w-3.5 mr-1 text-blue-700" />
                                {topic.author}
                              </span>
                              <span className="flex items-center">
                                <MessageSquare className="h-3.5 w-3.5 mr-1 text-blue-700" />
                                {topic.replies} replies
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1 text-blue-700" />
                                {topic.lastActivity}
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:flex flex-col items-center justify-center text-center min-w-[80px]">
                            <p className="text-2xl font-bold text-blue-700">{topic.views}</p>
                            <p className="text-xs text-muted-foreground">views</p>
                          </div>
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="flex justify-center mt-8 text-black">
                  <Button variant="outline">
                    Load More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="popular">
                <div className="p-8 text-center text-muted-foreground">
                  Select the "Popular" tab to see the most active discussions
                </div>
              </TabsContent>
              <TabsContent value="unanswered">
                <div className="p-8 text-center text-muted-foreground">
                  Select the "Unanswered" tab to see discussions without replies
                </div>
              </TabsContent>
              <TabsContent value="my-discussions">
                <div className="p-8 text-center text-muted-foreground">Sign in to view your discussions</div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="w-full md:w-1/4">
            <FadeIn direction="right">
              <div className="bg-slate-50 p-6 rounded-lg border mb-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {forumCategories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/forum/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="flex items-center text-primary group-hover:underline">
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </span>
                        <Badge variant="outline" className="bg-slate-100">
                          {category.count}
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border mb-6">
                <h3 className="font-bold text-lg mb-4">Community Stats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-700">5,243</p>
                    <p className="text-sm text-muted-foreground">Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-700">12,876</p>
                    <p className="text-sm text-muted-foreground">Discussions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-700">87,392</p>
                    <p className="text-sm text-muted-foreground">Replies</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Join the Conversation</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Sign up to participate in discussions and connect with other business lending professionals.
                </p>
                <Button className="w-full" variant="primary" asChild>
                  <Link href="/signup">
                    Create an Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}

