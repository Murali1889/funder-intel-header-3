import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, BarChart2, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MarketIntelligence() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Insight 1 */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-2">Market Report</Badge>
              <CardTitle>MCA Industry Trends</CardTitle>
              <CardDescription>Q2 2025 Analysis</CardDescription>
            </div>
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400&text=MCA+Industry+Trends+Chart+Q2+2025"
              alt="MCA Industry Trends"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Comprehensive analysis of MCA industry trends, including funding volumes, approval rates, and factor rates
            across the market.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/insights/mca-trends">
              View Full Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Insight 2 */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-2">Data Analysis</Badge>
              <CardTitle>Broker Performance</CardTitle>
              <CardDescription>Industry Benchmarks</CardDescription>
            </div>
            <BarChart2 className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400&text=Broker+Performance+Metrics+Dashboard"
              alt="Broker Performance Dashboard"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Exclusive data on broker performance metrics, including average deal size, closing rates, and commission
            structures across different segments.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/insights/broker-performance">
              Access Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Insight 3 */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-2">Industry Forecast</Badge>
              <CardTitle>Funding Outlook</CardTitle>
              <CardDescription>2025-2026 Projections</CardDescription>
            </div>
            <PieChart className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400&text=2025-2026+Funding+Outlook+Forecast"
              alt="Funding Outlook Forecast"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Expert projections on business lending trends, interest rates, and market opportunities for the coming year
            based on proprietary data.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/insights/funding-outlook">
              View Forecast
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

