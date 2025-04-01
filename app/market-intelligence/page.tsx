import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MarketIntelligence from "@/components/market-intelligence"

export default function MarketIntelligencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2">Market Intelligence</h1>
          <p className="text-muted-foreground text-lg">Exclusive data and insights on the business lending market</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Trending Insights</h2>
            <MarketIntelligence />
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Industry Benchmarks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">MCA Pricing Trends</h3>
                  <Badge>Premium</Badge>
                </div>
                <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=MCA+Pricing+Trends+by+Credit+Quality"
                    alt="MCA Pricing Chart"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Track factor rate trends across the industry, segmented by credit quality, industry, and deal size.
                  Updated monthly with data from hundreds of funders.
                </p>
                <Button className="w-full" variant="primary" asChild>
                  <Link href="/pro">
                    Upgrade to Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Broker Commission Report</h3>
                  <Badge>Premium</Badge>
                </div>
                <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Broker+Commission+Structure+Analysis"
                    alt="Commission Structure Data"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed analysis of broker commission structures across different funding products, deal sizes, and
                  funder types. Benchmark your earnings against industry standards.
                </p>
                <Button className="w-full" variant="primary" asChild>
                  <Link href="/pro">
                    Upgrade to Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Market Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Monthly+Funding+Volume+by+Product+Type"
                    alt="Funding Volume Trends"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Funding Volume Trends</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Monthly tracking of industry-wide funding volumes across all major product categories.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/market-intelligence/funding-volume">
                      View Data
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Default+Rate+Analysis+by+Industry"
                    alt="Default Rate Analysis"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Default Rate Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive data on default rates by industry, geography, and funding product type.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/market-intelligence/default-rates">
                      View Data
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Industry+Sentiment+Index+Q1+2025"
                    alt="Industry Sentiment Index"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Industry Sentiment Index</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Quarterly survey of funders and brokers on market outlook, challenges, and opportunities.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/market-intelligence/sentiment-index">
                      View Data
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Premium Market Intelligence</h2>
                <p className="mb-6">
                  Upgrade to access our full suite of market intelligence tools, reports, and data analytics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-white p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Comprehensive Data Access</p>
                      <p className="text-sm text-blue-100">Full access to all reports, benchmarks, and industry data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-white p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Custom Data Filtering</p>
                      <p className="text-sm text-blue-100">Filter data by industry, geography, deal size, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-white p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Quarterly Analyst Briefings</p>
                      <p className="text-sm text-blue-100">
                        Exclusive webinars with industry experts analyzing market trends
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-6 bg-white text-blue-900 hover:bg-blue-50" variant="primary" asChild>
                  <Link href="/pro">
                    Upgrade to Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Premium+Analytics+Dashboard+with+Filters"
                  alt="Premium Analytics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

