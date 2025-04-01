import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, Clock, MapPin, ArrowRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample events data based on the sitemap
const events = [
  {
    id: "funder-intel-industry-mixer-dec-1",
    title: "Funder Intel Industry Mixer April",
    date: "April 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "New York City, NY",
    image: "/placeholder.svg?height=300&width=600&text=Funder+Intel+Industry+Mixer+April",
    status: "upcoming",
    description:
      "Join us for an evening of networking with top professionals in the business lending industry. Connect with funders, brokers, and service providers while enjoying complimentary drinks and appetizers.",
  },
  {
    id: "funder-intel-industry-mixer-march-1",
    title: "Funder Intel Industry Mixer June",
    date: "June 20, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Chicago, IL",
    image: "/placeholder.svg?height=300&width=600&text=Funder+Intel+Industry+Mixer+June",
    status: "upcoming",
    description:
      "Network with the best in the business lending industry at our Chicago mixer. This event brings together funders, brokers, and service providers for an evening of valuable connections.",
  },
  {
    id: "business-lending-industry-mixer-1-1",
    title: "Funder Intel Industry Mixer (Sept.)",
    date: "September 10, 2024",
    time: "6:30 PM - 9:30 PM",
    location: "Miami, FL",
    image: "/placeholder.svg?height=300&width=600&text=Funder+Intel+Industry+Mixer+Sept",
    status: "upcoming",
    description:
      "Join us in Miami for our fall industry mixer. Connect with leading professionals in business lending while enjoying drinks and appetizers in a relaxed setting.",
  },
  {
    id: "funder-intel-reception-after-rbfc-golf-tournament",
    title: "Funder Intel Reception after RBFC Golf Tournament",
    date: "December 15, 2024",
    time: "4:00 PM - 7:00 PM",
    location: "Las Vegas, NV",
    image: "/placeholder.svg?height=300&width=600&text=Funder+Intel+Reception+RBFC+Golf",
    status: "upcoming",
    description:
      "Join us for a special reception following the RBFC Golf Tournament. Network with tournament participants and industry professionals in a relaxed atmosphere.",
  },
  {
    id: "funder-intel-industry-mixer-1",
    title: "Funder Intel Industry Mixer Dec",
    date: "December 10, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=300&width=600&text=Funder+Intel+Industry+Mixer+Dec",
    status: "upcoming",
    description:
      "Our year-end industry mixer in Los Angeles brings together the best in business lending. Join us for networking, drinks, and appetizers as we celebrate the year's successes.",
  },
  {
    id: "business-lending-industry-holiday-mixer",
    title: "Business Lending Industry Holiday Mixer",
    date: "December 5, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "New York City, NY",
    image: "/placeholder.svg?height=300&width=600&text=Business+Lending+Holiday+Mixer",
    status: "past",
    description:
      "Our annual holiday celebration brought together over 200 professionals from the business lending industry for a festive evening of networking and celebration.",
  },
  {
    id: "business-lending-industry-mixer-Feb",
    title: "Business Lending Industry Mixer",
    date: "February 20, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Boston, MA",
    image: "/placeholder.svg?height=300&width=600&text=Business+Lending+Industry+Mixer+Feb",
    status: "past",
    description:
      "Our Boston mixer connected funders, brokers, and service providers for an evening of valuable networking and industry discussions.",
  },
  {
    id: "business-lending-industry-mixer-1",
    title: "Funder Intel Industry Mixer",
    date: "May 10, 2024",
    time: "6:30 PM - 9:30 PM",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=300&width=600&text=Funder+Intel+Industry+Mixer",
    status: "past",
    description:
      "Our spring mixer in San Francisco brought together industry professionals for an evening of networking and relationship building.",
  },
  {
    id: "sample-event",
    title: "Sample Event",
    date: "December 20, 2024",
    time: "5:00 PM - 8:00 PM",
    location: "Virtual Event",
    image: "/placeholder.svg?height=300&width=600&text=Sample+Event",
    status: "upcoming",
    description:
      "Join us for this virtual networking event connecting business lending professionals from across the country.",
  },
]

export default function EventsPage() {
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
          <h1 className="text-4xl font-bold mb-2">Industry Events</h1>
          <p className="text-muted-foreground text-lg">
            Connect with business lending professionals at our exclusive networking events
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events by name, location, etc." className="w-full pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.status === "upcoming")
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/events/${event.id}`} className="hover:text-primary">
                          {event.title}
                        </Link>
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Upcoming</Badge>
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={`/events/${event.id}`}>
                            Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.status === "past")
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Badge className="bg-gray-200 text-gray-800">Past Event</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/events/${event.id}`} className="hover:text-primary">
                          {event.title}
                        </Link>
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <Link href={`/events/${event.id}`}>
                          View Recap
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Host Your Own Event</h2>
              <p className="mb-6">
                Looking to host an industry event? Partner with FunderIntel to reach our network of business lending
                professionals.
              </p>
              <Button size="lg" variant="accent" asChild>
                <Link href="/events/host">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Host+Your+Own+Event"
                alt="Host Your Own Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

