"use client"

import Image from "next/image"
import Link from "next/link"
import { StaggerContainer, StaggerItem } from "@/components/animations"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DirectFunders() {
  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Direct Funder 1 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop"
                alt="Hunter Caroline"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Hunter Caroline</h3>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Partner
                </Badge>
              </div>
              <ul className="text-sm space-y-1 mb-4 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">1st-5th position</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Buyouts, Stacks, Reverses</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Terms up to 12 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Funding up to $1M</span>
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                <Link href="/partners/hunter-caroline">Learn More</Link>
              </Button>
            </div>
          </Card>
        </StaggerItem>

        {/* Direct Funder 2 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
                alt="Optimum Bank"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Optimum Bank</h3>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Partner
                </Badge>
              </div>
              <ul className="text-sm space-y-1 mb-4 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Treasury Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Wire Transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">ACH Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Business Banking</span>
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                <Link href="/partners/optimum-bank">Learn More</Link>
              </Button>
            </div>
          </Card>
        </StaggerItem>

        {/* Direct Funder 3 */}
        <StaggerItem>
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070&auto=format&fit=crop"
                alt="Stafford Business Funding"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Stafford Business Funding</h3>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Partner
                </Badge>
              </div>
              <ul className="text-sm space-y-1 mb-4 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">2nd-8th Positions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Aggressive Approvals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Approvals to 15k</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600"></span>
                  <span className="font-medium">Same Day Commissions</span>
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" asChild>
                <Link href="/partners/stafford">Learn More</Link>
              </Button>
            </div>
          </Card>
        </StaggerItem>
      </div>
    </StaggerContainer>
  )
}

