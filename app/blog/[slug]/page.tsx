import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FadeIn } from "@/components/animations"
import SiteHeader from "@/components/site-header"

const blogPosts = [
  {
    id: "business-lending-trends-2025",
    title: "Business Lending Trends to Watch in 2025",
    excerpt:
      "The business lending landscape is evolving rapidly. From AI-powered underwriting to embedded finance solutions, discover the key trends that will shape the industry in 2025 and beyond.",
    date: "March 15, 2025",
    author: "John Smith",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    authorRole: "Senior Market Analyst",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min read",
    content: `
      <p class="text-lg mb-4">The business lending landscape is constantly evolving, with new technologies, market dynamics, and regulatory changes reshaping how funding is accessed and provided. As we look ahead to 2025, several key trends are emerging that will likely define the industry in the coming years.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">1. AI-Powered Underwriting Becomes Standard</h2>
      
      <p class="mb-4">Artificial intelligence and machine learning algorithms are revolutionizing the underwriting process, enabling lenders to make faster, more accurate credit decisions. By 2025, we expect AI-powered underwriting to become the industry standard rather than a competitive advantage.</p>
      
      <p class="mb-4">These technologies analyze vast amounts of alternative data points – from cash flow patterns to social media presence – to assess creditworthiness beyond traditional metrics. The result is a more inclusive lending environment where businesses previously locked out of funding can now access capital based on their actual performance rather than their credit history alone.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Embedded Finance Solutions</h2>
      
      <p class="mb-4">Embedded finance – the integration of financial services into non-financial platforms and applications – is gaining significant traction. By 2025, we anticipate a proliferation of business lending products embedded directly into the software and platforms that businesses use daily.</p>
      
      <p class="mb-4">From accounting software that offers instant working capital solutions to e-commerce platforms with built-in inventory financing, embedded finance will make accessing capital more seamless and contextual. This trend reduces friction for borrowers and creates new distribution channels for lenders.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Rise of Revenue-Based Financing</h2>
      
      <p class="mb-4">Revenue-based financing (RBF) models are gaining popularity as alternatives to traditional debt and equity financing. In these arrangements, businesses receive capital and repay it with a percentage of future revenue until a predetermined multiple of the original amount is reached.</p>
      
      <p class="mb-4">By 2025, we expect RBF to become a mainstream funding option, particularly for digital businesses, SaaS companies, and other ventures with strong, predictable revenue streams but limited assets. This model aligns incentives between lenders and borrowers, creating more sustainable financing relationships.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Blockchain-Based Lending Platforms</h2>
      
      <p class="mb-4">Blockchain technology is steadily making inroads in business lending, offering benefits such as increased transparency, reduced fraud, automated compliance, and more efficient loan servicing through smart contracts.</p>
      
      <p class="mb-4">By 2025, we anticipate more mainstream adoption of blockchain-based lending platforms, particularly for cross-border financing where traditional systems face significant friction. These platforms could dramatically reduce costs while increasing access to capital globally.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Sustainability-Linked Lending Products</h2>
      
      <p class="mb-4">As environmental, social, and governance (ESG) factors become increasingly important to investors and consumers alike, lenders are developing products that incentivize sustainable business practices.</p>
      
      <p class="mb-4">By 2025, we expect a significant expansion of sustainability-linked loans that offer favorable terms to businesses meeting specific ESG criteria. This trend reflects growing awareness of climate risks and societal expectations for businesses to operate responsibly.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Collaborative Lending Ecosystems</h2>
      
      <p class="mb-4">The traditional divisions between banks, alternative lenders, and financial technology companies are blurring. By 2025, we anticipate more collaborative lending ecosystems where these entities work together to provide comprehensive funding solutions.</p>
      
      <p class="mb-4">For example, banks might partner with fintech platforms to offer digital-first lending experiences, while alternative lenders might specialize in segments underserved by traditional institutions. These collaborations will create more options for borrowers and a more resilient lending ecosystem overall.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">The business lending landscape of 2025 will likely be characterized by greater automation, increased accessibility, more flexible financing models, and stronger integration with broader business systems and sustainability goals.</p>
      
      <p class="mb-4">For lenders, staying competitive will require embracing these trends and adapting business models accordingly. For borrowers, these developments promise more options, faster access to capital, and financing solutions better tailored to their specific needs and circumstances.</p>
    `,
    relatedPosts: ["mca-vs-term-loans", "broker-success-strategies", "underwriting-technology"],
  },
  {
    id: "mca-vs-term-loans",
    title: "MCA vs Term Loans: Which is Right for Your Client?",
    excerpt:
      "A comprehensive comparison of merchant cash advances and term loans to help brokers make the right recommendation for their clients' specific needs and circumstances.",
    date: "March 10, 2025",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    authorRole: "Senior Loan Officer",
    category: "Funding",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop",
    readTime: "9 min read",
    content: `<p>Content placeholder for MCA vs Term Loans article.</p>`,
    relatedPosts: ["business-lending-trends-2025", "alternative-funding-options", "broker-success-strategies"],
  },
  {
    id: "broker-success-strategies",
    title: "5 Proven Strategies for Broker Success in 2025",
    excerpt:
      "Top business loan brokers share their secrets for building a thriving practice in today's competitive market, from lead generation to closing deals.",
    date: "March 5, 2025",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    authorRole: "Business Loan Broker",
    category: "Brokers",
    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read",
    content: `<p>Content placeholder for Broker Success Strategies article.</p>`,
    relatedPosts: ["mca-vs-term-loans", "underwriting-technology", "alternative-funding-options"],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  const relatedArticles = post.relatedPosts.map((id) => blogPosts.find((post) => post.id === id)).filter(Boolean)

  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <article className="flex-1">
        {/* Hero Section */}
        <div className="w-full h-[50vh] relative">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="container relative z-10 h-full flex flex-col justify-end pb-12">
            <Badge className="mb-4 inline-block self-start">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-white mb-4 max-w-4xl">{post.title}</h1>
            <div className="flex items-center text-white/80">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.date}</span>
              <User className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.author}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Content */}
            <div className="w-full lg:w-2/3">
              <FadeIn>
                <div className="flex items-center mb-8">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Link>
                  </Button>
                </div>

                <div
                  className="prose prose-lg max-w-none mb-16"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>

                <div className="border-t pt-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 relative h-12 w-12">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{post.author}</p>
                      <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <BookmarkPlus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <FadeIn direction="left">
                <div className="bg-slate-50 p-6 rounded-lg border mb-6 sticky top-8">
                  <h3 className="font-bold text-lg mb-4">More From FunderIntel</h3>

                  <div className="space-y-6">
                    {relatedArticles.map((article, index) => (
                      <div key={index} className="group">
                        <Link href={`/blog/${article?.id}`} className="flex gap-4">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={article?.image || ""}
                              alt={article?.title || ""}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-primary line-clamp-2">{article?.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{article?.date}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button className="w-full" asChild>
                      <Link href="/blog">
                        Browse All Articles
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Get the latest industry news and insights delivered to your inbox weekly.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/70"
                      required
                    />
                    <Button className="w-full bg-yellow-500 text-blue-950 hover:bg-yellow-400">Subscribe</Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-slate-50 py-16">
          <div className="container">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <FadeIn key={index} direction="up" delay={index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image src={article?.image || ""} alt={article?.title || ""} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2">{article?.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">
                        <Link href={`/blog/${article?.id}`} className="hover:text-primary">
                          {article?.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article?.date}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${article?.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

