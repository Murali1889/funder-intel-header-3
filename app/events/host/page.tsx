import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function HostEventPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/events">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2">Host Your Own Event</h1>
          <p className="text-muted-foreground text-lg">
            Partner with FunderIntel to reach our network of business lending professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Host+Your+Own+Event"
                alt="Host Your Own Event"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Why Host with FunderIntel?</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-1 mt-1">
                  <Check className="h-4 w-4 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Reach Our Network</p>
                  <p className="text-muted-foreground">
                    Get your event in front of thousands of business lending professionals, including funders, brokers,
                    and service providers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-1 mt-1">
                  <Check className="h-4 w-4 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Full-Service Event Management</p>
                  <p className="text-muted-foreground">
                    Our team can handle everything from venue selection and registration to marketing and day-of
                    logistics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-1 mt-1">
                  <Check className="h-4 w-4 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Targeted Marketing</p>
                  <p className="text-muted-foreground">
                    Promote your event through our website, email newsletters, and social media channels to reach your
                    target audience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-1 mt-1">
                  <Check className="h-4 w-4 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Industry Expertise</p>
                  <p className="text-muted-foreground">
                    Benefit from our deep understanding of the business lending industry and what makes a successful
                    event.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Event Types We Support</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Networking Mixers</li>
              <li>Educational Workshops</li>
              <li>Industry Conferences</li>
              <li>Product Launches</li>
              <li>Webinars and Virtual Events</li>
              <li>Private Dinners and Receptions</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold mb-2">Our Track Record</h3>
              <p className="text-muted-foreground mb-4">
                FunderIntel has organized over 50 successful industry events with more than 5,000 total attendees. Our
                events consistently receive high satisfaction ratings and deliver measurable ROI for our partners.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-900">50+</p>
                  <p className="text-sm text-muted-foreground">Events Organized</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-900">5,000+</p>
                  <p className="text-sm text-muted-foreground">Total Attendees</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-900">4.8/5</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Contact Us About Hosting</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-type">Event Type</Label>
                  <select
                    id="event-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select Event Type</option>
                    <option value="networking">Networking Mixer</option>
                    <option value="workshop">Educational Workshop</option>
                    <option value="conference">Industry Conference</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="webinar">Webinar/Virtual Event</option>
                    <option value="dinner">Private Dinner/Reception</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Tentative Date</Label>
                  <Input id="date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input id="location" placeholder="City, State or Virtual" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendees">Expected Number of Attendees</Label>
                  <Input id="attendees" placeholder="Approximate number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Event Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Please provide any additional details about your event concept, goals, and requirements."
                    rows={5}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Our team will respond to your inquiry within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us today to discuss your event concept and how we can help make it a success.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
              Contact Our Events Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

