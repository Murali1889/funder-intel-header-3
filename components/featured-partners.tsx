"use client"

import Image from "next/image"
import Link from "next/link"
import { StaggerContainer, StaggerItem } from "@/components/animations"

export default function FeaturedPartners() {
  return (
    <StaggerContainer>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Partner 1 - Granite */}
        <StaggerItem>
          <Link href="/partners/granite" className="group">
            <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] relative mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop"
                  alt="Granite Merchant Funding"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="text-center text-sm">
                <p className="font-medium">Your Trusted Partner</p>
                <p className="text-xs text-muted-foreground">for 750K-2MM Deals</p>
              </div>
            </div>
          </Link>
        </StaggerItem>

        {/* Partner 2 - Liquid Bee */}
        <StaggerItem>
          <Link href="/partners/liquidbee" className="group">
            <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] relative mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop"
                  alt="Liquid Bee"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="text-center text-sm">
                <p className="font-medium">An Ocean of Funding</p>
                <p className="text-xs text-muted-foreground">Find your next deal in hours</p>
              </div>
            </div>
          </Link>
        </StaggerItem>

        {/* Partner 3 - Spartan Capital */}
        <StaggerItem>
          <Link href="/partners/spartan" className="group">
            <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] relative mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                  alt="Spartan Capital"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="text-center text-sm">
                <p className="font-medium">Simple • Funding • Fast</p>
                <p className="text-xs text-muted-foreground">No STIPS under $20K</p>
              </div>
            </div>
          </Link>
        </StaggerItem>

        {/* Partner 4 - CapitalWize */}
        <StaggerItem>
          <Link href="/partners/capitalwize" className="group">
            <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] relative mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076&auto=format&fit=crop"
                  alt="CapitalWize"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="text-center text-sm">
                <p className="font-medium">Fund Wisely</p>
                <p className="text-xs text-muted-foreground">1st-6th Position Funding</p>
              </div>
            </div>
          </Link>
        </StaggerItem>

        {/* Partner 5 - TAB Bank */}
        <StaggerItem>
          <Link href="/partners/tabbank" className="group">
            <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] relative mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop"
                  alt="TAB Bank"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="text-center text-sm">
                <p className="font-medium">Shift Gears</p>
                <p className="text-xs text-muted-foreground">Asset-Based Lending</p>
              </div>
            </div>
          </Link>
        </StaggerItem>
      </div>
    </StaggerContainer>
  )
}

