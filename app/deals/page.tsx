import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedDeals from "@/components/featured-deals"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function DealsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
            alt="Exclusive deals"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 text-blue-200 hover:text-white hover:bg-blue-900/50"
              asChild
            >
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-2">Exclusive Deals</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Special offers from our partners available only through FunderIntel
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8">
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
            </FadeIn>
            <FeaturedDeals />
          </section>

          <section className="mt-12">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6">All Partner Deals</h2>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                      <div className="aspect-video relative">
                        <Image
                          src={`https://images.unsplash.com/photo-${1560520653 + i * 200}-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop`}
                          alt={`Partner Deal ${i + 4}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">Partner Company {i + 4}</h3>
                        <p className="text-sm text-muted-foreground mb-4">Special offer for FunderIntel members</p>
                        <Button className="w-full" variant="primary" asChild>
                          <Link href={`/deals/partner-${i + 4}`}>View Deal</Link>
                        </Button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </section>

          <FadeIn direction="up" delay={0.2}>
            <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2070&auto=format&fit=crop"
                  alt="Partner program"
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-900"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
                  <p className="mb-6">
                    Interested in offering exclusive deals to our network of business lending professionals? Join our
                    partner program and reach thousands of potential clients.
                  </p>
                  <Button size="lg" variant="primary" asChild>
                    <Link href="/partners/apply">
                      Apply to Partner Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                    alt="Partner Program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

