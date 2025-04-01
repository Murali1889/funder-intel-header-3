"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/animations"

export default function TrendingInsights() {
  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article 1 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop"
                alt="MCA Industry Trends"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Industry Trends</Badge>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Mar 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>5 min read</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">MCA Industry Outlook: What to Expect in 2025</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore the latest trends in merchant cash advances and how they're shaping the business lending
                landscape.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-gray-600">By Michael Thompson</span>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-900 p-0 h-auto hover:bg-gray-50" asChild>
                  <Link href="/blog/mca-industry-outlook-2025" className="flex items-center">
                    Read More
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </StaggerItem>

        {/* Article 2 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop"
                alt="Underwriting Best Practices"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Best Practices</Badge>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Mar 10, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>8 min read</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Underwriting Best Practices for Modern Lenders</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn how top lenders are improving their underwriting processes to reduce risk and increase approvals.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-gray-600">By Sarah Johnson</span>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-900 p-0 h-auto hover:bg-gray-50" asChild>
                  <Link href="/blog/underwriting-best-practices" className="flex items-center">
                    Read More
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </StaggerItem>

        {/* Article 3 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Fintech Innovations"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Technology</Badge>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Mar 5, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>6 min read</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">5 Fintech Innovations Changing Business Lending</h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover the latest technology innovations that are transforming how businesses access capital.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-gray-600">By David Wilson</span>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-900 p-0 h-auto hover:bg-gray-50" asChild>
                  <Link href="/blog/fintech-innovations" className="flex items-center">
                    Read More
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </StaggerItem>
      </div>
    </StaggerContainer>
  )
}

