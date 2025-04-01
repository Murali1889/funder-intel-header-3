import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FadeIn } from "@/components/animations"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Email Us</CardTitle>
              <CardDescription>Send us an email and we'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <a href="mailto:support@funderintel.com" className="text-blue-700 hover:underline">
                support@funderintel.com
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Phone className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Call Us</CardTitle>
              <CardDescription>Speak directly with our support team</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <a href="tel:+1-954-861-0821" className="text-blue-700 hover:underline">
                (954) 861-0821
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Visit Us</CardTitle>
              <CardDescription>Our office location and hours</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="mb-1">123 Financial District</p>
              <p className="mb-1">New York, NY 10004</p>
              <p className="text-sm text-muted-foreground">Monday-Friday: 9AM-5PM EST</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>

              <Button className="w-full" variant="primary">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Map"
              alt="Office Location Map"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="bg-blue-50 p-8 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
                <p className="mb-6">
                  Need more personalized assistance? Schedule a one-on-one consultation with one of our financial
                  experts.
                </p>
                <Button variant="primary" asChild>
                  <Link href="/contact/book-call">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Consultation"
                  alt="Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

