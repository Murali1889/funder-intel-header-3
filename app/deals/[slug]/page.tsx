import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, Clock, Tag, Percent, Download, Share2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import SiteHeader from "@/components/site-header"

// This is a sample deal for demonstration purposes
// In a real application, this would be fetched from a database
const deal = {
  id: "granite",
  title: "Granite Merchant Funding",
  subtitle: "Exclusive FunderIntel Offer",
  description: "Special pricing for 750K-2MM deals with 20% discount on origination fees.",
  image: "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=2070&auto=format&fit=crop",
  longDescription: `
    Granite Merchant Funding is offering an exclusive discount to FunderIntel members. This special promotion includes:
    
    • 20% discount on origination fees for deals between $750K and $2MM
    • Expedited application processing
    • Reduced documentation requirements
    • Priority underwriting
    
    This offer represents significant savings for brokers and their clients, making it easier to secure larger funding amounts with better terms.
  `,
  detailPoints: [
    "20% discount on origination fees",
    "Special pricing for 750K-2MM deals",
    "Expedited application process",
    "Priority underwriting",
  ],
  badge: "20% OFF",
  badgeColor: "bg-green-600",
  expiryDate: "June 30, 2025",
  partnerLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
  partnerName: "Granite Merchant Funding",
  partnerWebsite: "https://granitemerchantfunding.com",
  contactEmail: "deals@granitemerchantfunding.com",
  contactPhone: "(800) 555-1234",
  terms: `
    Offer valid for new applications submitted through FunderIntel between March 1, 2025, and June 30, 2025. 
    The 20% discount applies to standard origination fees for approved deals between $750,000 and $2,000,000. 
    Applicants must meet Granite Merchant Funding's standard underwriting criteria. 
    This offer cannot be combined with other promotions or discounts.
    Granite Merchant Funding reserves the right to modify or terminate this offer at any time.
  `,
}

// Sample related deals
const relatedDeals = [
  {
    id: "liquidbee",
    title: "Liquid Bee Funding",
    subtitle: "Fast Track Program",
    badge: "FAST TRACK",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "spartan",
    title: "Spartan Capital",
    subtitle: "No STIPs Program",
    badge: "HOT DEAL",
    badgeColor: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "capitalwize",
    title: "CapitalWize",
    subtitle: "Broker Commission Boost",
    badge: "PREMIUM",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076&auto=format&fit=crop",
  },
]

export default function DealPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the deal based on the slug
  // For this example, we'll just use the sample deal

  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <div className="container py-8">
        <FadeIn>
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/deals">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Deals
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
                <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" priority />
              </div>

              <div className="mb-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-3xl font-bold">{deal.title}</h1>
                    <p className="text-lg text-muted-foreground">{deal.subtitle}</p>
                  </div>
                  <Badge className={`${deal.badgeColor} text-white px-3 py-1`}>{deal.badge}</Badge>
                </div>

                <div className="flex flex-wrap gap-4 my-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Expiry Date</p>
                      <p className="text-sm text-muted-foreground">{deal.expiryDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Limited Time</p>
                      <p className="text-sm text-muted-foreground">Exclusive Offer</p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p>{deal.description}</p>
                  <pre className="bg-slate-50 p-4 rounded-lg border whitespace-pre-wrap text-sm">
                    {deal.longDescription}
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Deal Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deal.detailPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 bg-slate-50 p-4 rounded-lg border">
                      {index % 2 === 0 ? (
                        <Percent className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <Tag className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
                <div className="bg-slate-50 p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm">{deal.terms}</pre>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border p-6 mb-6 sticky top-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src={deal.partnerLogo || "/placeholder.svg"}
                      alt={deal.partnerName}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{deal.partnerName}</h3>
                    <p className="text-sm text-muted-foreground">Official Partner</p>
                  </div>
                </div>

                <Button className="w-full mb-4" size="lg">
                  Get This Deal
                </Button>

                <Button variant="outline" className="w-full mb-6" asChild>
                  <Link href={deal.partnerWebsite} target="_blank" rel="noopener noreferrer">
                    Visit Partner Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Email:</p>
                    <a href={`mailto:${deal.contactEmail}`} className="text-primary hover:underline">
                      {deal.contactEmail}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone:</p>
                    <a href={`tel:${deal.contactPhone}`} className="text-primary hover:underline">
                      {deal.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">More Deals You Might Like</h2>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDeals.map((relatedDeal, index) => (
                <StaggerItem key={index}>
                  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                    <div className="aspect-video relative">
                      <Image
                        src={relatedDeal.image || "/placeholder.svg"}
                        alt={relatedDeal.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={`${relatedDeal.badgeColor} text-white`}>{relatedDeal.badge}</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{relatedDeal.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{relatedDeal.subtitle}</p>
                      <Button className="w-full" asChild>
                        <Link href={`/deals/${relatedDeal.id}`}>View Deal</Link>
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>
      </div>
    </div>
  )
}

