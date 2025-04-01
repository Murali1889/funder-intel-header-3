"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, Tag, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/animations"

export default function FeaturedDeals() {
  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Deal 1 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-video">
              <Image src="/images/highlevel-banner.png" alt="HighLevel CRM" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Software</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-600 text-white">50% OFF</Badge>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg mb-2 text-gray-900">HighLevel CRM Special Offer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get 50% off your first 3 months of HighLevel CRM, the all-in-one marketing platform for lending
                professionals.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Expires Apr 30, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  <span>Promo Code: FUNDER50</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                  <Link href="/deals/highlevel-crm">
                    View Deal
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-200 text-gray-900 hover:bg-gray-50"
                  asChild
                >
                  <Link href="https://gohighlevel.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit website</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </StaggerItem>

        {/* Deal 2 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-video">
              <Image src="/images/phoneburner-banner.png" alt="PhoneBurner" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Software</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-600 text-white">Free Trial</Badge>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg mb-2 text-gray-900">PhoneBurner Extended Trial</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get an extended 30-day free trial of PhoneBurner, the power dialer that helps you connect with more
                prospects.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Expires May 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  <span>Promo Code: FUNDER30</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                  <Link href="/deals/phoneburner">
                    View Deal
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-200 text-gray-900 hover:bg-gray-50"
                  asChild
                >
                  <Link href="https://phoneburner.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit website</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </StaggerItem>

        {/* Deal 3 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-video">
              <Image src="/images/pandadoc-banner.png" alt="PandaDoc" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Software</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-600 text-white">25% OFF</Badge>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg mb-2 text-gray-900">PandaDoc Annual Discount</h3>
              <p className="text-gray-600 text-sm mb-4">
                Save 25% on annual plans for PandaDoc, the document automation platform for faster funding approvals.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Expires Jun 1, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  <span>Promo Code: FUNDER25</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                  <Link href="/deals/pandadoc">
                    View Deal
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-200 text-gray-900 hover:bg-gray-50"
                  asChild
                >
                  <Link href="https://pandadoc.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit website</span>
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

