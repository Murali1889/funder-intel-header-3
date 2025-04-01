import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Calendar, Clock, MapPin, Users, Share2, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample events data based on the sitemap
const events = [
  {
    id: "funder-intel-industry-mixer-dec-1",
    title: "Funder Intel Industry Mixer April",
    date: "April 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "The Grand Hotel",
    address: "123 Broadway, New York, NY 10001",
    image: "/placeholder.svg?height=600&width=1200&text=Funder+Intel+Industry+Mixer+April",
    status: "upcoming",
    description:
      "Join us for an evening of networking with top professionals in the business lending industry. Connect with funders, brokers, and service providers while enjoying complimentary drinks and appetizers.",
    longDescription:
      "The Funder Intel Industry Mixer is back in New York City! This exclusive event brings together the best and brightest in the business lending industry for an evening of high-quality networking and relationship building.\n\nWhether you're a funder looking to connect with brokers, a broker seeking new funding partners, or a service provider wanting to showcase your solutions, this event offers the perfect environment to make valuable connections.\n\nYour ticket includes:\n- Access to our exclusive venue\n- Complimentary drinks and appetizers\n- Networking with 150+ industry professionals\n- Opportunity to meet potential partners and clients",
    ticketPrice: "$75",
    capacity: "150 attendees",
    sponsors: [
      { name: "Granite Merchant Funding", logo: "/placeholder.svg?height=60&width=180&text=Granite" },
      { name: "Liquid Bee", logo: "/placeholder.svg?height=60&width=180&text=Liquid+Bee" },
      { name: "Spartan Capital", logo: "/placeholder.svg?height=60&width=180&text=Spartan" },
    ],
    organizer: "FunderIntel Events Team",
    contact: "events@funderintel.com",
  },
  {
    id: "funder-intel-industry-mixer-march-1",
    title: "Funder Intel Industry Mixer June",
    date: "June 20, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "The Lakeview",
    address: "456 Michigan Ave, Chicago, IL 60611",
    image: "/placeholder.svg?height=600&width=1200&text=Funder+Intel+Industry+Mixer+June",
    status: "upcoming",
    description:
      "Network with the best in the business lending industry at our Chicago mixer. This event brings together funders, brokers, and service providers for an evening of valuable connections.",
    longDescription:
      "Join us in Chicago for our summer industry mixer! This event is designed to bring together professionals from all corners of the business lending industry for an evening of networking and relationship building.\n\nThe Funder Intel Industry Mixer provides the perfect setting to meet potential partners, reconnect with colleagues, and stay updated on industry trends.\n\nYour ticket includes:\n- Access to our exclusive venue\n- Complimentary drinks and appetizers\n- Networking with 125+ industry professionals\n- Opportunity to meet potential partners and clients",
    ticketPrice: "$65",
    capacity: "125 attendees",
    sponsors: [
      { name: "TAB Bank", logo: "/placeholder.svg?height=60&width=180&text=TAB+Bank" },
      { name: "CapitalWize", logo: "/placeholder.svg?height=60&width=180&text=CapitalWize" },
    ],
    organizer: "FunderIntel Events Team",
    contact: "events@funderintel.com",
  },
  {
    id: "business-lending-industry-mixer-1-1",
    title: "Funder Intel Industry Mixer (Sept.)",
    date: "September 10, 2024",
    time: "6:30 PM - 9:30 PM",
    location: "Oceanside Resort",
    address: "789 Ocean Drive, Miami, FL 33139",
    image: "/placeholder.svg?height=600&width=1200&text=Funder+Intel+Industry+Mixer+Sept",
    status: "upcoming",
    description:
      "Join us in Miami for our fall industry mixer. Connect with leading professionals in business lending while enjoying drinks and appetizers in a relaxed setting.",
    longDescription:
      "Our Miami mixer is the perfect opportunity to expand your network in the business lending industry while enjoying the beautiful Miami skyline.\n\nThis event attracts funders, brokers, and service providers from across the country, creating an ideal environment for making valuable connections and exploring new business opportunities.\n\nYour ticket includes:\n- Access to our exclusive beachfront venue\n- Complimentary drinks and appetizers\n- Networking with 175+ industry professionals\n- Opportunity to meet potential partners and clients",
    ticketPrice: "$85",
    capacity: "175 attendees",
    sponsors: [
      { name: "Hunter Caroline", logo: "/placeholder.svg?height=60&width=180&text=Hunter+Caroline" },
      { name: "Optimum Bank", logo: "/placeholder.svg?height=60&width=180&text=Optimum+Bank" },
      { name: "Stafford Business Funding", logo: "/placeholder.svg?height=60&width=180&text=Stafford" },
    ],
    organizer: "FunderIntel Events Team",
    contact: "events@funderintel.com",
  },
  {
    id: "funder-intel-reception-after-rbfc-golf-tournament",
    title: "Funder Intel Reception after RBFC Golf Tournament",
    date: "December 15, 2024",
    time: "4:00 PM - 7:00 PM",
    location: "Desert Springs Golf Club",
    address: "101 Golf Club Drive, Las Vegas, NV 89109",
    image: "/placeholder.svg?height=600&width=1200&text=Funder+Intel+Reception+RBFC+Golf",
    status: "upcoming",
    description:
      "Join us for a special reception following the RBFC Golf Tournament. Network with tournament participants and industry professionals in a relaxed atmosphere.",
    longDescription:
      "After a day on the greens at the RBFC Golf Tournament, join us for an exclusive reception at the Desert Springs Golf Club.\n\nThis event provides the perfect opportunity to continue conversations started on the course and connect with other industry professionals in a relaxed setting.\n\nYour ticket includes:\n- Access to our private reception venue\n- Complimentary drinks and appetizers\n- Networking with tournament participants and other industry professionals\n- Opportunity to discuss potential partnerships in a casual environment",
    ticketPrice: "$50 (Free for tournament participants)",
    capacity: "100 attendees",
    sponsors: [
      { name: "RBFC", logo: "/placeholder.svg?height=60&width=180&text=RBFC" },
      { name: "Granite Merchant Funding", logo: "/placeholder.svg?height=60&width=180&text=Granite" },
    ],
    organizer: "FunderIntel Events Team",
    contact: "events@funderintel.com",
  },
  {
    id: "funder-intel-industry-mixer-1",
    title: "Funder Intel Industry Mixer Dec",
    date: "December 10, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "The Hollywood",
    address: "555 Sunset Blvd, Los Angeles, CA 90028",
    image: "/placeholder.svg?height=600&width=1200&text=Funder+Intel+Industry+Mixer+Dec",
    status: "upcoming",
    description:
      "Our year-end industry mixer in Los Angeles brings together the best in business lending. Join us for networking, drinks, and appetizers as we celebrate the year's successes.",
    longDescription:
      "Join us in Los Angeles for our year-end celebration and networking event! This is your chance to connect with industry professionals, celebrate the year's achievements, and build relationships that will carry into the new year.\n\nThe Funder Intel Industry Mixer December edition is always our most popular event of the year, bringing together funders, brokers, and service providers from across the country.\n\nYour ticket includes:\n- Access to our exclusive venue\n- Complimentary drinks and appetizers\n- Networking with 200+ industry professionals\n- Year-end celebration and industry recognition",
    ticketPrice: "$85",
    capacity: "200 attendees",
    sponsors: [
      { name: "Liquid Bee", logo: "/placeholder.svg?height=60&width=180&text=Liquid+Bee" },
      { name: "Spartan Capital", logo: "/placeholder.svg?height=60&width=180&text=Spartan" },
      { name: "CapitalWize", logo: "/placeholder.svg?height=60&width=180&text=CapitalWize" },
    ],
    organizer: "FunderIntel Events Team",
    contact: "events@funderintel.com",
  },
  {
    id: "business-lending-industry-holiday-mixer",
    title: "Business Lending Industry Holiday Mixer",
    date: "December 5, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "The Plaza",
    address: "768 Fifth Avenue, New York, NY 10019",
    image: "/placeholder.svg?height=600&width=1200&text=Business+Lending+Holiday+Mixer",
    status: "past",
    description:
      "Our annual holiday celebration brought together over 200 professionals from the business lending industry for a festive evening of networking and celebration.",
    longDescription:
      "Our 2023 Holiday Mixer was a tremendous success, with over 200 industry professionals gathering to celebrate the year's achievements and build connections for the future.\n\nThe evening featured festive cocktails, gourmet appetizers, and valuable networking opportunities in a beautifully decorated venue.\n\nThank you to all who attended and to our sponsors for making this event possible. We look forward to seeing you at our next industry mixer!",
    attendees: "200+",
    sponsors: [
      { name: "Granite Merchant Funding", logo: "/placeholder.svg?height=60&width=180&text=Granite" },
      { name: "TAB Bank", logo: "/placeholder.svg?height=60&width=180&text=TAB+Bank" },
      { name: "Hunter Caroline", logo: "/placeholder.svg?height=60&width=180&text=Hunter+Caroline" },
    ],
    organizer: "FunderIntel Events Team",
    photoGallery: [
      "/placeholder.svg?height=200&width=300&text=Holiday+Mixer+1",
      "/placeholder.svg?height=200&width=300&text=Holiday+Mixer+2",
      "/placeholder.svg?height=200&width=300&text=Holiday+Mixer+3",
      "/placeholder.svg?height=200&width=300&text=Holiday+Mixer+4",
    ],
  },
  {
    id: "business-lending-industry-mixer-Feb",
    title: "Business Lending Industry Mixer",
    date: "February 20, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "The Commonwealth",
    address: "123 State Street, Boston, MA 02109",
    image: "/placeholder.svg?height=600&width=1200&text=Business+Lending+Industry+Mixer+Feb",
    status: "past",
    description:
      "Our Boston mixer connected funders, brokers, and service providers for an evening of valuable networking and industry discussions.",
    longDescription:
      "Our February 2024 Industry Mixer in Boston was a great success, bringing together professionals from across the business lending ecosystem for an evening of networking and relationship building.\n\nAttendees enjoyed premium drinks, delicious appetizers, and the opportunity to connect with potential partners in a relaxed and professional setting.\n\nThank you to all who attended and to our sponsors for supporting this event. We look forward to seeing you at our next industry gathering!",
    attendees: "125+",
    sponsors: [
      { name: "Optimum Bank", logo: "/placeholder.svg?height=60&width=180&text=Optimum+Bank" },
      { name: "Stafford Business Funding", logo: "/placeholder.svg?height=60&width=180&text=Stafford" },
    ],
    organizer: "FunderIntel Events Team",
    photoGallery: [
      "/placeholder.svg?height=200&width=300&text=Boston+Mixer+1",
      "/placeholder.svg?height=200&width=300&text=Boston+Mixer+2",
      "/placeholder.svg?height=200&width=300&text=Boston+Mixer+3",
    ],
  },
  {
    id: "business-lending-industry-mixer-1",
    title: "Funder Intel Industry Mixer",
    date: "May 10, 2024",
    time: "6:30 PM - 9:30 PM",
    location: "The Bay Club",
    address: "555 Market Street, San Francisco, CA 94105",
    image: "/placeholder.svg?height=600&width=1200&text=Funder+Intel+Industry+Mixer",
    status: "past",
    description:
      "Our spring mixer in San Francisco brought together industry professionals for an evening of networking and relationship building.",
    longDescription:
      "The May 2024 Funder Intel Industry Mixer in San Francisco was a tremendous success, with over 150 professionals from the business lending industry gathering for an evening of networking and collaboration.\n\nThe event provided a valuable opportunity for funders, brokers, and service providers to connect, share insights, and explore potential partnerships in a relaxed and professional environment.\n\nThank you to all attendees and sponsors for making this event a success. We look forward to seeing you at our next industry mixer!",
    attendees: "150+",
    sponsors: [
      { name: "Liquid Bee", logo: "/placeholder.svg?height=60&width=180&text=Liquid+Bee" },
      { name: "CapitalWize", logo: "/placeholder.svg?height=60&width=180&text=CapitalWize" },
      { name: "Spartan Capital", logo: "/placeholder.svg?height=60&width=180&text=Spartan" },
    ],
    organizer: "FunderIntel Events Team",
    photoGallery: [
      "/placeholder.svg?height=200&width=300&text=SF+Mixer+1",
      "/placeholder.svg?height=200&width=300&text=SF+Mixer+2",
      "/placeholder.svg?height=200&width=300&text=SF+Mixer+3",
      "/placeholder.svg?height=200&width=300&text=SF+Mixer+4",
    ],
  },
  {
    id: "sample-event",
    title: "Sample Event",
    date: "December 20, 2024",
    time: "5:00 PM - 8:00 PM",
    location: "Virtual Event",
    address: "Online",
    image: "/placeholder.svg?height=600&width=1200&text=Sample+Event",
    status: "upcoming",
    description:
      "Join us for this virtual networking event connecting business lending professionals from across the country.",
    longDescription:
      "This virtual networking event brings together business lending professionals from across the country without the need to travel.\n\nUsing our interactive virtual platform, you'll be able to join themed discussion rooms, participate in speed networking sessions, and connect one-on-one with potential partners.\n\nYour registration includes:\n- Access to our premium virtual event platform\n- Participation in moderated discussion groups\n- Speed networking sessions\n- One-on-one meeting opportunities\n- Post-event access to recordings and resources",
    ticketPrice: "$25",
    capacity: "Unlimited",
    sponsors: [{ name: "LendingSoft", logo: "/placeholder.svg?height=60&width=180&text=LendingSoft" }],
    organizer: "FunderIntel Events Team",
    contact: "events@funderintel.com",
  },
]

export default function EventDetailsPage({ params }: { params: { eventId: string } }) {
  const event = events.find((e) => e.id === params.eventId)

  if (!event) {
    notFound()
  }

  const isPastEvent = event.status === "past"

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

          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
            {isPastEvent && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Badge className="text-lg py-2 px-4 bg-gray-200 text-gray-800">Past Event</Badge>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                {!isPastEvent && (
                  <Badge className="text-sm py-1 px-3 bg-green-100 text-green-800">Upcoming Event</Badge>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Capacity</p>
                    <p className="text-muted-foreground">{isPastEvent ? event.attendees : event.capacity}</p>
                  </div>
                </div>
              </div>

              {event.address && (
                <div className="mb-6">
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{event.address}</p>
                </div>
              )}

              <Separator className="my-6" />

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">About This Event</h2>
                <div className="whitespace-pre-line text-muted-foreground">{event.longDescription}</div>
              </div>

              {event.sponsors && event.sponsors.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Sponsors</h2>
                  <div className="flex flex-wrap gap-4">
                    {event.sponsors.map((sponsor, index) => (
                      <div key={index} className="bg-slate-50 p-4 rounded-lg border flex items-center justify-center">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={180}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isPastEvent && event.photoGallery && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {event.photoGallery.map((photo, index) => (
                      <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`Event photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/3">
              <Card className="p-6 mb-6">
                {!isPastEvent ? (
                  <>
                    <h3 className="text-xl font-bold mb-4">Registration</h3>
                    <p className="text-muted-foreground mb-2">Ticket Price</p>
                    <p className="text-2xl font-bold mb-6">{event.ticketPrice}</p>
                    <Button className="w-full mb-4" size="lg">
                      Register Now
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Limited spots available. Register early to secure your place.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-4">Event Recap</h3>
                    <p className="text-muted-foreground mb-6">
                      This event has already taken place. Check out our upcoming events to see what's next.
                    </p>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="/events">View Upcoming Events</Link>
                    </Button>
                  </>
                )}
              </Card>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Organizer</h3>
                <p className="text-muted-foreground mb-2">{event.organizer}</p>
                {event.contact && <p className="text-sm text-primary">{event.contact}</p>}
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Share This Event</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">More Events You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events
              .filter((e) => e.id !== event.id && e.status === event.status)
              .slice(0, 3)
              .map((relatedEvent) => (
                <Card key={relatedEvent.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={relatedEvent.image || "/placeholder.svg"}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover"
                    />
                    {isPastEvent && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Badge className="bg-gray-200 text-gray-800">Past Event</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      <Link href={`/events/${relatedEvent.id}`} className="hover:text-primary">
                        {relatedEvent.title}
                      </Link>
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{relatedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{relatedEvent.location}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link href={`/events/${relatedEvent.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}

