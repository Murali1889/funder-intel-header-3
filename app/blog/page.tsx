import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Calendar, User, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const blogPosts = [
  {
    id: "business-lending-trends-2025",
    title: "Business Lending Trends to Watch in 2025",
    excerpt:
      "The business lending landscape is evolving rapidly. From AI-powered underwriting to embedded finance solutions, discover the key trends that will shape the industry in 2025 and beyond.",
    date: "March 15, 2025",
    author: "John Smith",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "mca-vs-term-loans",
    title: "MCA vs Term Loans: Which is Right for Your Client?",
    excerpt:
      "A comprehensive comparison of merchant cash advances and term loans to help brokers make the right recommendation for their clients' specific needs and circumstances.",
    date: "March 10, 2025",
    author: "Sarah Johnson",
    category: "Funding",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: "broker-success-strategies",
    title: "5 Proven Strategies for Broker Success in 2025",
    excerpt:
      "Top business loan brokers share their secrets for building a thriving practice in today's competitive market, from lead generation to closing deals.",
    date: "March 5, 2025",
    author: "Michael Chen",
    category: "Brokers",
    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "sba-loan-changes",
    title: "New SBA Loan Changes: What You Need to Know",
    excerpt:
      "A breakdown of the latest changes to SBA loan programs and how they impact lenders and borrowers in the current economic climate.",
    date: "February 28, 2025",
    author: "David Williams",
    category: "Government",
    image: "https://images.unsplash.com/photo-1436303945392-0d1e373a40d9?q=80&w=2048&auto=format&fit=crop",
  },
  {
    id: "underwriting-technology",
    title: "How AI is Revolutionizing Underwriting",
    excerpt:
      "Explore how artificial intelligence and machine learning are transforming the underwriting process for lenders and creating new opportunities and challenges.",
    date: "February 20, 2025",
    author: "Emily Rodriguez",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "alternative-funding-options",
    title: "Beyond Traditional Loans: Alternative Funding Options",
    excerpt:
      "From revenue-based financing to crowdfunding, discover alternative funding solutions that can help businesses grow when traditional loans aren't available.",
    date: "February 15, 2025",
    author: "Robert Taylor",
    category: "Funding",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop"
            alt="Business blog"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold mb-2">Business Lending Blog</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Industry insights, tips, and news for business lending professionals
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-300" />
              <Input
                type="search"
                placeholder="Search articles..."
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
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="alt-finance">Alt Finance</TabsTrigger>
            <TabsTrigger value="commercial-finance">Commercial Finance</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-3/4">
                {/* Featured Article */}
                {featuredPost && (
                  <FadeIn>
                    <Card className="bg-white border border-gray-200 overflow-hidden mb-12 hover:shadow-lg transition-all">
                      <div className="md:flex">
                        <div className="md:w-1/2 relative h-60 md:h-auto">
                          <Image
                            src={featuredPost.image || "/placeholder.svg"}
                            alt={featuredPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-1/2">
                          <Badge className="mb-2">Featured</Badge>
                          <h2 className="text-2xl font-bold mb-2 text-gray-900">
                            <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary">
                              {featuredPost.title}
                            </Link>
                          </h2>
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{featuredPost.date}</span>
                            <User className="h-4 w-4 mr-1" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                          <Button variant="primary" asChild>
                            <Link href={`/blog/${featuredPost.id}`}>
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                )}

                {/* Regular Articles */}
                <FadeIn>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Latest Articles</h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularPosts.map((post, index) => (
                    <StaggerItem key={index}>
                      <Card className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                        <div className="relative h-48">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <Badge className="mb-2">{post.category}</Badge>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            <Link href={`/blog/${post.id}`} className="hover:text-primary">
                              {post.title}
                            </Link>
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{post.date}</span>
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/blog/${post.id}`} className="text-blue-600">
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <FadeIn direction="up" delay={0.3}>
                  <div className="flex justify-center mt-12 text-black">
                    <Button variant="outline" asChild>
                      <Link href="/blog/archive">
                        View All Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>

              <div className="w-full md:w-1/4">
                <FadeIn direction="right">
                  <div className="bg-slate-50 p-6 rounded-lg border mb-6">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/blog/category/funding" className="text-primary hover:underline">
                          Funding Solutions (24)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/brokers" className="text-primary hover:underline">
                          Broker Strategies (18)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/technology" className="text-primary hover:underline">
                          Technology (15)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/industry" className="text-primary hover:underline">
                          Industry News (12)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/government" className="text-primary hover:underline">
                          Government Programs (9)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/marketing" className="text-primary hover:underline">
                          Marketing (7)
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg border mb-6">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Popular Posts</h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <li key={index}>
                          <Link href={`/blog/${post.id}`} className="flex items-start gap-3 group">
                            <div className="relative w-16 h-16 flex-shrink-0">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div>
                              <p className="font-medium group-hover:text-primary line-clamp-2 text-gray-900">
                                {post.title}
                              </p>
                              <p className="text-xs text-muted-foreground">{post.date}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-900 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-blue-100 mb-4">
                      Get the latest industry news and insights delivered to your inbox.
                    </p>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                    <Button className="w-full" variant="primary">
                      Subscribe
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alt-finance">
            <div className="p-8 text-center text-muted-foreground">
              Select the "Alt Finance" tab to see articles about alternative financing options
            </div>
          </TabsContent>

          <TabsContent value="commercial-finance">
            <div className="p-8 text-center text-muted-foreground">
              Select the "Commercial Finance" tab to see articles about commercial financing
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="p-8 text-center text-muted-foreground">Select the "Videos" tab to see video content</div>
          </TabsContent>

          <TabsContent value="business">
            <div className="p-8 text-center text-muted-foreground">
              Select the "Business" tab to see articles about business topics
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

