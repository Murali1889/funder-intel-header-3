import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, ArrowRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ConsultingPage() {
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
          <h1 className="text-4xl font-bold mb-2">Consulting Services</h1>
          <p className="text-muted-foreground text-lg">
            Expert guidance to help your business thrive in the alternative lending industry
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <section>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">For Brokers</Badge>
                <h2 className="text-3xl font-bold mb-4">Broker Business Launch Program</h2>
                <p className="text-lg mb-6">
                  Launch your brokerage with confidence. Our comprehensive program guides you through every step of
                  establishing and growing a successful business loan brokerage.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Business Setup Guidance</p>
                      <p className="text-sm text-muted-foreground">
                        Legal structure, licensing, compliance, and operational setup
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Funder Network Development</p>
                      <p className="text-sm text-muted-foreground">
                        Build relationships with top funders across multiple product categories
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Marketing & Lead Generation</p>
                      <p className="text-sm text-muted-foreground">
                        Develop effective strategies to attract and convert clients
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Deal Structuring & Underwriting</p>
                      <p className="text-sm text-muted-foreground">
                        Learn how to package deals for maximum approval rates
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact/book-call">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Broker+Business+Launch+Program"
                  alt="Broker Consulting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Funder+Operations+Optimization"
                    alt="Funder Operations Consulting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Badge className="mb-4">For Funders</Badge>
                <h2 className="text-3xl font-bold mb-4">Funder Growth Strategy</h2>
                <p className="text-lg mb-6">
                  Optimize your funding operations, improve underwriting processes, and scale your business with our
                  expert guidance.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Underwriting Process Optimization</p>
                      <p className="text-sm text-muted-foreground">
                        Refine criteria and workflows to improve efficiency and reduce defaults
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Broker Network Expansion</p>
                      <p className="text-sm text-muted-foreground">
                        Strategies to attract and retain quality ISO relationships
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Capital Raising Guidance</p>
                      <p className="text-sm text-muted-foreground">
                        Connect with potential investors and optimize your capital structure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Technology Implementation</p>
                      <p className="text-sm text-muted-foreground">
                        Select and implement the right software solutions for your operations
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact/book-call">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">For All Members</Badge>
                <h2 className="text-3xl font-bold mb-4">Website & Digital Marketing</h2>
                <p className="text-lg mb-6">
                  Establish a powerful online presence with our specialized web development and digital marketing
                  services for the lending industry.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Custom Website Development</p>
                      <p className="text-sm text-muted-foreground">
                        Professional, conversion-focused websites for brokers and funders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">SEO Optimization</p>
                      <p className="text-sm text-muted-foreground">
                        Rank higher for industry-specific keywords and attract qualified traffic
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Lead Generation Systems</p>
                      <p className="text-sm text-muted-foreground">
                        Implement effective lead capture and nurturing processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-1">
                      <Check className="h-4 w-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">Content Marketing</p>
                      <p className="text-sm text-muted-foreground">
                        Industry-specific content strategy and creation services
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact/book-call">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Business+Lending+Website+Development"
                  alt="Website Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Consulting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg border text-center">
                <div className="bg-blue-100 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Discovery Call</h3>
                <p className="text-sm text-muted-foreground">
                  We start with a free consultation to understand your business needs and goals.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border text-center">
                <div className="bg-blue-100 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Custom Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  We develop a tailored plan based on your specific situation and objectives.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border text-center">
                <div className="bg-blue-100 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Our team works with you to execute the strategy with regular check-ins.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border text-center">
                <div className="bg-blue-100 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  We provide continued guidance to ensure long-term success and growth.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Schedule a consultation with our industry experts to discuss your specific needs and goals.
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link href="/contact/book-call">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Consultation
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

