import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Users, BarChart2, BookOpen } from "lucide-react"
import {FeedbackProvider} from '@/context/FeedbackContext'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import FeaturedPartners from "@/components/featured-partners"
import MarketplacePreview from "@/components/marketplace-preview"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PremiumPlans from "@/components/premium-plans"
import FeaturedDeals from "@/components/featured-deals"
import DirectFunders from "@/components/direct-funders"
import TrendingInsights from "@/components/trending-insights"
import HeroCarousel from "@/components/hero-carousel"
import { FadeIn, StaggerContainer, StaggerItem, FloatingAnimation } from "@/components/animations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
            alt="Business background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-block px-2 py-1 mb-4 text-xs font-medium rounded-full bg-blue-800 text-white">
                  The Business Lending Intelligence Platform
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                  Connecting Funders, Brokers & ISOs
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-base md:text-lg text-white mb-6 max-w-[600px]">
                  The premier platform for business lending professionals to find partners, access resources, and grow
                  their business.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button size="lg" variant="primary" asChild className="px-6 py-3 h-auto">
                    <Link href="/signup" className="flex items-center">
                      Start Your Journey as a Broker Today!
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="px-6 py-3 h-auto border-white text-black hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/marketplace">Find Reliable Funders and Partners</Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-blue-800">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold">5,000+</p>
                    <p className="text-sm text-blue-100">Active Lending Professionals</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold">$2.5B+</p>
                    <p className="text-sm text-blue-100">Business Financing Facilitated</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold">350+</p>
                    <p className="text-sm text-blue-100">Trusted Funding Partners</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold">98%</p>
                    <p className="text-sm text-blue-100">ISO & Broker Satisfaction</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="hidden lg:block">
              <FloatingAnimation distance={10} duration={4}>
                <HeroCarousel />
              </FloatingAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Funders Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Direct Funders</h2>
              <Link
                href="/direct-funders"
                className="text-sm font-medium text-blue-600 flex items-center hover:text-blue-800"
              >
                View All Funders
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </FadeIn>

          <DirectFunders />
        </div>
      </section>

      {/* Featured Partners Carousel */}
      {/* <section className="w-full py-8 bg-slate-50 border-y">
        <div className="container">
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Featured Partners</h2>
              <Link
                href="/partners"
                className="text-sm font-medium text-blue-600 flex items-center hover:text-blue-800"
              >
                View all partners
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </FadeIn>
          <FeaturedPartners />
        </div>
      </section> */}

      {/* Marketplace Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
            alt="Business marketplace"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100/80">Marketplace</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Access a Directory of Trusted Funders
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the most reliable funders who provide competitive terms and excellent customer service.
                </p>
              </div>
            </div>
          </FadeIn>

          <MarketplacePreview />

          <FadeIn direction="up">
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="primary" asChild>
                <Link href="/marketplace">
                  Explore Full Marketplace
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop"
            alt="Business deals"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100/80">Exclusive Offers</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Special Deals
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Save money with these exclusive offers from our trusted partners
                </p>
              </div>
            </div>
          </FadeIn>

          <FeaturedDeals />

          <FadeIn direction="up">
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/deals">
                  View All Deals
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Premium Plans Section - Monetization */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            alt="Premium plans"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100/80">Premium Plans</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Join a Network of Industry Experts
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build your professional network with ISOs, funders, and brokers from around the world.
                </p>
              </div>
            </div>
          </FadeIn>

          <PremiumPlans />
        </div>
      </section>

      {/* Trending Insights - Data Monetization */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Market insights"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100/80">Market Intelligence</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Stay Informed with Industry News
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Keep up-to-date with the latest trends in business lending and merchant financing through articles,
                  webinars, and live events.
                </p>
              </div>
            </div>
          </FadeIn>

          <TrendingInsights />

          <FadeIn direction="up">
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="accent" asChild>
                <Link href="/market-intelligence">
                  Access Full Intelligence Platform
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            alt="Business testimonials"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-blue-800 text-white hover:bg-blue-800/90">Testimonials</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Members Say</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from brokers, lenders, and businesses who have found success on our platform
                </p>
              </div>
            </div>
          </FadeIn>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Resources Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="Knowledge resources"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100/80">Resources</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Get the Education You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about business loans, merchant cash advances, and compliance through expert-led training
                  modules.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggerItem>
                <Card className="overflow-hidden bg-white border border-gray-200">
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                      alt="Learning Center"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <Badge className="bg-blue-500 hover:bg-blue-500/90 mb-2">Learning Center</Badge>
                        <h3 className="text-lg font-bold text-white">Educational Resources</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
                      Access courses, guides, and tutorials on business lending best practices
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/learning-center">
                        Explore Resources
                        <BookOpen className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="overflow-hidden bg-white border border-gray-200">
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                      alt="Community Forum"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <Badge className="bg-blue-500 hover:bg-blue-500/90 mb-2">Community</Badge>
                        <h3 className="text-lg font-bold text-white">Industry Forum</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
                      Connect with peers, share insights, and discuss industry trends
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/forum">
                        Join Discussions
                        <Users className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="overflow-hidden bg-white border border-gray-200">
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                      alt="Software Solutions"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <Badge className="bg-blue-500 hover:bg-blue-500/90 mb-2">Tools</Badge>
                        <h3 className="text-lg font-bold text-white">Software Solutions</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
                      Discover tools for document automation, CRM, and business operations
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/software">
                        View Solutions
                        <BarChart2 className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            alt="Business partnership"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-900"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Boost Your Business with Personalized Consulting
                </h2>
                <p className="mt-4 text-xl text-white">
                  Work with experienced consultants to improve your underwriting processes, ISO partnerships, and
                  marketing strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" variant="primary" asChild>
                    <Link href="/signup">
                      Book Your Free Consultation with Our Experts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-white text-black hover:bg-white/10 hover:text-white">
                    <Link href="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative aspect-video overflow-hidden rounded-xl border shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Platform Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

