"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
} from "lucide-react"
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

// Sample blog posts with real images
const blogPosts = [
  {
    id: 1,
    title: "Par Funding CEO Joseph LaForte Sentenced in $404M Fraud Case",
    excerpt:
      "Joseph LaForte, the CEO of Par Funding (officially Complete Business Solutions Group), was sentenced to 20 years in prison for his role in a $404 million fraud scheme that affected thousands of investors.",
    content: `
      <p>Joseph LaForte, the CEO of Par Funding (officially Complete Business Solutions Group), was sentenced to 20 years in prison for his role in a $404 million fraud scheme that affected thousands of investors.</p>
      
      <p>The sentencing comes after a lengthy trial where LaForte was found guilty on multiple counts of securities fraud, wire fraud, and conspiracy. Prosecutors successfully argued that LaForte and his associates misled investors about the company's business practices, the criminal backgrounds of its principals, and the true nature of its investments.</p>
      
      <h2>Background of the Case</h2>
      
      <p>Par Funding, founded in 2011, presented itself as a merchant cash advance company providing short-term funding to small businesses. The company raised hundreds of millions from investors by promising returns as high as 14%.</p>
      
      <p>However, according to court documents, LaForte and other executives concealed critical information from investors:</p>
      
      <ul>
        <li>LaForte's criminal history, including prior convictions for grand larceny and securities fraud</li>
        <li>The true default rates on the merchant cash advances, which were significantly higher than reported</li>
        <li>The use of threatening collection tactics against small business borrowers</li>
        <li>The diversion of investor funds for personal use, including luxury properties and vehicles</li>
      </ul>
      
      <h2>Impact on the Industry</h2>
      
      <p>The Par Funding case has sent shockwaves through the alternative lending industry, prompting calls for greater regulation and transparency. Industry experts suggest this case may lead to:</p>
      
      <ul>
        <li>Increased scrutiny from the SEC and state regulators</li>
        <li>More stringent disclosure requirements for private lending companies</li>
        <li>Greater due diligence by investors before committing capital to alternative lending platforms</li>
      </ul>
      
      <p>The sentencing of LaForte marks one of the most significant fraud cases in the merchant cash advance industry to date, highlighting the risks associated with high-yield alternative investments and the importance of proper due diligence.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Alt Finance",
    author: {
      name: "Staff Writer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Financial Reporter",
    },
    date: "March 27, 2025",
    readTime: "5 min read",
    tags: ["Fraud", "Legal", "MCA Industry", "Regulation"],
    relatedPosts: [2, 5, 7],
  },
  {
    id: 2,
    title: "Governor Youngkin Vetoes Virginia SB 1252: A Win for Fintech or a Setback?",
    excerpt:
      "Governor Youngkin's decision to veto SB 1252 protects access to safe, responsible credit for Virginia consumers and businesses. The bill would have imposed severe restrictions on certain lending practices.",
    content: `
      <p>In a move that has significant implications for the fintech industry, Virginia Governor Glenn Youngkin has vetoed Senate Bill 1252, which would have imposed new restrictions on certain lending practices in the state.</p>
      
      <p>The bill, which passed both chambers of the Virginia legislature earlier this month, aimed to cap interest rates and fees on various financial products and would have placed additional regulatory burdens on lenders operating in the state.</p>
      
      <h2>The Governor's Reasoning</h2>
      
      <p>In his veto statement, Governor Youngkin cited concerns about unintended consequences that could limit access to credit for Virginia residents and businesses, particularly those with limited options in the traditional banking system.</p>
      
      <p>"While consumer protection is a priority for my administration," the Governor stated, "this legislation would have restricted access to safe, regulated credit options for many Virginians, potentially pushing consumers toward unregulated or illegal lending sources."</p>
      
      <h2>Industry Reaction</h2>
      
      <p>The fintech and alternative lending industries have largely applauded the veto, with many industry associations releasing statements of support.</p>
      
      <p>"Governor Youngkin's decision recognizes the important role that fintech companies play in providing access to capital for underserved communities," said Sarah Johnson, Executive Director of the Online Lenders Alliance. "This veto ensures that innovation in financial services can continue to benefit Virginia consumers and small businesses."</p>
      
      <h2>Opposition Response</h2>
      
      <p>Consumer advocacy groups, however, have expressed disappointment with the veto. The Virginia Poverty Law Center called it a "missed opportunity to protect vulnerable Virginians from predatory lending practices."</p>
      
      <p>State Senator Barbara Favola, who sponsored the bill, indicated that she would consider reintroducing modified legislation in the next session. "We remain committed to finding the right balance between access to credit and consumer protection," she said.</p>
      
      <h2>What's Next</h2>
      
      <p>The Virginia General Assembly could attempt to override the Governor's veto, though analysts suggest this is unlikely given the current composition of the legislature. For now, the status quo remains in place for lenders operating in Virginia.</p>
      
      <p>This development is being closely watched by other states considering similar legislation, as it may influence the approach taken by lawmakers across the country in regulating the rapidly evolving fintech sector.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Regulation",
    author: {
      name: "Staff Writer",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Policy Analyst",
    },
    date: "March 26, 2025",
    readTime: "4 min read",
    tags: ["Regulation", "Fintech", "Legislation", "Virginia"],
    relatedPosts: [1, 3, 7],
  },
  {
    id: 3,
    title: "SBA Reinstates Guarantee Fees Effective March 27th",
    excerpt:
      "According to SBA notice 5000-865758, loans that have not received SBA authorization by March 27, 2025, will be subject to the reinstated guarantee fees. This change affects all SBA loan programs.",
    content: `
      <p>The Small Business Administration (SBA) has announced the reinstatement of guarantee fees for its loan programs, effective March 27, 2025. According to SBA notice 5000-865758, all loans that have not received SBA authorization by this date will be subject to the standard guarantee fees.</p>
      
      <p>This change marks the end of the fee waiver period that was implemented as part of economic stimulus measures during the post-pandemic recovery period.</p>
      
      <h2>What This Means for Borrowers</h2>
      
      <p>Small business owners seeking SBA loans will now face additional costs in the form of guarantee fees, which typically range from 2% to 3.75% of the guaranteed portion of the loan, depending on the loan amount and term.</p>
      
      <p>For example:</p>
      
      <ul>
        <li>A $500,000 SBA 7(a) loan with a 75% guarantee would incur a guarantee fee of approximately $7,500 to $9,375</li>
        <li>A $2 million loan with a 75% guarantee could see fees of $37,500 to $56,250</li>
      </ul>
      
      <p>These fees can be financed as part of the loan, but they still represent an increased cost of capital for small businesses.</p>
      
      <h2>Industry Impact</h2>
      
      <p>SBA lenders are preparing for a potential rush of applications before the March 27 deadline, as borrowers seek to avoid the reinstated fees.</p>
      
      <p>"We're seeing a significant uptick in application volume," said Michael Chen, SVP of SBA Lending at First National Bank. "Many borrowers who were on the fence are now accelerating their plans to take advantage of the remaining fee-free period."</p>
      
      <h2>Long-Term Outlook</h2>
      
      <p>The reinstatement of guarantee fees is viewed by many analysts as a return to normalcy for SBA lending programs. The SBA has indicated that the fee structure is necessary to maintain the self-sustainability of its loan programs.</p>
      
      <p>"While the fee waivers provided important relief during a challenging economic period, the return to standard fees ensures the long-term viability of these critical programs," said SBA Administrator Jennifer Rodriguez in a statement accompanying the notice.</p>
      
      <p>Small business advocates are encouraging entrepreneurs to work closely with their lenders to understand how these changes will affect their financing costs and to explore all available options before making borrowing decisions.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Business",
    author: {
      name: "Staff Writer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "SBA Specialist",
    },
    date: "March 24, 2025",
    readTime: "3 min read",
    tags: ["SBA", "Small Business", "Lending", "Fees"],
    relatedPosts: [2, 4, 9],
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Simulate loading the post data
    setIsLoading(true)
    const postId = Number(params.id)
    const foundPost = blogPosts.find((p) => p.id === postId)

    if (foundPost) {
      setPost(foundPost)

      // Get related posts
      if (foundPost.relatedPosts && foundPost.relatedPosts.length > 0) {
        const related = blogPosts.filter((p) => foundPost.relatedPosts.includes(p.id))
        setRelatedPosts(related)
      }

      // Scroll to top
      window.scrollTo(0, 0)
    }

    setIsLoading(false)
  }, [params.id])

  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
        <SiteFooter />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Article Header */}
      <motion.header
        className="pt-10 pb-8 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        custom={0}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors duration-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600">{post.excerpt}</p>

            <div className="flex items-center pt-2">
              <Avatar className="h-10 w-10 border border-gray-200">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.title}</p>
              </div>
              <div className="ml-auto flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Featured Image */}
      <motion.div
        className="w-full bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        custom={0.2}
      >
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-md">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex">
          {/* Social Sharing Sidebar */}
          <motion.div
            className="hidden md:block w-12 mr-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0.3}
          >
            <div className="sticky top-24 space-y-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-500">
                <ThumbsUp className="h-5 w-5 text-gray-700" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-500">
                <MessageSquare className="h-5 w-5 text-gray-700" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-500">
                <Bookmark className="h-5 w-5 text-gray-700" />
              </button>
              <div className="w-10 h-px bg-gray-200 my-2"></div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 transition-colors duration-500">
                <Facebook className="h-5 w-5 text-white" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 transition-colors duration-500">
                <Twitter className="h-5 w-5 text-white" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/90 transition-colors duration-500">
                <Linkedin className="h-5 w-5 text-white" />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-500 relative"
                onClick={copyToClipboard}
              >
                <Copy className="h-5 w-5 text-gray-700" />
                {copied && (
                  <span className="absolute -right-20 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.article
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0.4}
          >
            <div
              className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase()}`}
                    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1.5 rounded-full transition-colors duration-500"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Share Buttons */}
            <div className="md:hidden mt-8 flex justify-between border-t border-b border-gray-200 py-4">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors duration-500">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors duration-500">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span className="text-sm">Comment</span>
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors duration-500">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors duration-500">
                  <Bookmark className="h-5 w-5 mr-1" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <Avatar className="h-16 w-16 border border-gray-200">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{post.author.name}</h3>
                  <p className="text-sm text-gray-500">{post.author.title}</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Financial industry reporter specializing in alternative lending and fintech regulation.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h2
              className="text-2xl font-bold text-primary mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={0}
            >
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                  <motion.div
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    custom={index * 0.1 + 0.2}
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-xs text-primary font-medium mb-2">{relatedPost.category}</span>
                      <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors duration-500">
                        {relatedPost.title}
                      </h3>
                      <div className="mt-auto pt-2 flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedPost.author.name}</span>
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-12 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-white mb-3">Stay Updated on Industry News</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who receive our weekly newsletter with the latest trends, insights, and
              analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-accent/30"
              />
              <Button
                size="lg"
                className="h-12 bg-accent hover:bg-accent-light text-secondary whitespace-nowrap transition-colors duration-500"
              >
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

