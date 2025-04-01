import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function StorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">FunderIntel Store</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Discover curated products and services to help your business thrive in the financial industry.
          </p>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                      <path d="M8 7V3m8 4V3"></path>
                    </svg>
                  </div>
                  <CardTitle>Business Tools</CardTitle>
                  <CardDescription>
                    Software and tools to streamline your business operations and boost productivity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CRM and marketing platforms</li>
                    <li>• Video and communication tools</li>
                    <li>• Document management solutions</li>
                    <li>• Productivity software</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="primary" className="w-full">
                    <Link href="/store/business-tools">
                      Explore Tools
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <CardTitle>Gift Cards</CardTitle>
                  <CardDescription>
                    Perfect for clients, partners, or team members in the financial industry.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Digital gift cards from $25-$500</li>
                    <li>• Personalized messages</li>
                    <li>• Scheduled delivery options</li>
                    <li>• Bulk ordering available</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/store/gift-cards">
                      Shop Gift Cards
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                      <path d="M16 19h6"></path>
                      <path d="M19 16v6"></path>
                      <path d="M2 10h20"></path>
                    </svg>
                  </div>
                  <CardTitle>Website Development</CardTitle>
                  <CardDescription>
                    Professional website solutions tailored for financial service providers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom website design</li>
                    <li>• Website redesign services</li>
                    <li>• SEO optimization</li>
                    <li>• Mobile-responsive designs</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="accent" className="w-full">
                    <Link href="/store/website-development">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" x2="12" y1="22" y2="12"></line>
                    </svg>
                  </div>
                  <CardTitle>Office Products</CardTitle>
                  <CardDescription>Curated selection of high-quality office equipment and supplies.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Standing desks and ergonomic chairs</li>
                    <li>• Tech accessories and adapters</li>
                    <li>• Office organization solutions</li>
                    <li>• Professional desk setups</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/store/office-products">
                      Shop Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 bg-blue-50 p-8 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Custom Solutions</h2>
                <p className="mb-6">
                  Need something specific for your financial business? Contact our team for custom solutions tailored to
                  your needs.
                </p>
                <Button asChild variant="primary">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Custom+Solutions"
                  alt="Custom Solutions"
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

