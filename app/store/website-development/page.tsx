import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/animations"

export default function WebsiteDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8 md:py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Website Development for Financial Professionals</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Professional website solutions tailored specifically for business loan brokers, funders, and fintech
            companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 text-white p-8 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Upgrade Your Site</h2>
              <p className="mb-6">
                Upgrading your website is for staying competitive in today's landscape. A modern website not only looks
                better, it also improves user experience, increases search engine visibility and boosts conversions.
                Don't let an outdated website hold your business back.
              </p>
              <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="#services">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Website+Development"
                alt="Website Development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">What We Do</h2>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-blue-800 pb-4">
                <div>
                  <h3 className="font-bold">Optimized for Conversion</h3>
                  <p className="text-blue-100 text-sm">
                    Our websites are built to convert visitors into clients with intuitive design and strategic
                    placement of call-to-action buttons.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300" />
              </div>

              <div className="flex justify-between items-center border-b border-blue-800 pb-4">
                <div>
                  <h3 className="font-bold">SEO-Driven</h3>
                  <p className="text-blue-100 text-sm">
                    We ensure your site ranks high on search engines by integrating key financial services keywords.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300" />
              </div>

              <div className="flex justify-between items-center border-b border-blue-800 pb-4">
                <div>
                  <h3 className="font-bold">Mobile-Responsive</h3>
                  <p className="text-blue-100 text-sm">
                    Access your website flawlessly from any device, enhancing accessibility and client reach.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300" />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Secure and Reliable</h3>
                  <p className="text-blue-100 text-sm">
                    With top-tier security protocols, your client's data and your business operations are always
                    protected.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300" />
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <CardTitle>Tailored Web Development for Commercial Finance</CardTitle>
                <CardDescription>Custom websites designed specifically for the financial industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our expert team combines technical prowess and has seen thousands of commercial finance websites
                  ensuring your website looks professional and performs excellently.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific design elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Loan calculators and application forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Client testimonial showcases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Secure document upload portals</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <CardTitle>Redesign Your Existing Site</CardTitle>
                <CardDescription>
                  Transform your current website into a modern, high-converting platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Great news! Our team specializes in redesigning websites for business loan brokers, funders, and other
                  fintech companies. We can work with your existing website as long as it's on the Wix platform or
                  WordPress.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Modern, professional design update</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Improved user experience and navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>SEO optimization for better visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile responsiveness enhancement</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

            <div className="grid grid-cols-1 gap-8">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Discovery & Planning</h3>
                </div>
                <div className="ml-14">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        We begin by understanding your business, target audience, and goals through a detailed
                        consultation.
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Initial consultation and needs assessment</li>
                        <li>• Competitor analysis and market research</li>
                        <li>• Site architecture and content planning</li>
                        <li>• Timeline and milestone establishment</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">Timeframe: 1-2 weeks</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Design & Development</h3>
                </div>
                <div className="ml-14">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        Our designers and developers create a custom website that reflects your brand and meets your
                        business needs.
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Custom design mockups and wireframes</li>
                        <li>• Responsive development for all devices</li>
                        <li>• Integration of financial tools and calculators</li>
                        <li>• Content creation and optimization</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">Timeframe: 3-6 weeks</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Testing & Launch</h3>
                </div>
                <div className="ml-14">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-4">We thoroughly test your website and prepare for a smooth launch.</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Cross-browser and device testing</li>
                        <li>• Performance and security testing</li>
                        <li>• SEO implementation and verification</li>
                        <li>• Domain setup and website deployment</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">Timeframe: 1-2 weeks</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Training & Support</h3>
                </div>
                <div className="ml-14">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        We provide training on how to manage your website and offer ongoing support.
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• CMS training and documentation</li>
                        <li>• Analytics setup and reporting</li>
                        <li>• Post-launch optimization</li>
                        <li>• Ongoing maintenance and support options</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">Timeframe: Ongoing</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Standard</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$2,499</span>
                  <span className="text-muted-foreground"> one-time</span>
                </div>
                <CardDescription>Perfect for new brokers and small firms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>5-page professional website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Contact form and basic lead capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>30 days of support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-blue-600 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$4,999</span>
                  <span className="text-muted-foreground"> one-time</span>
                </div>
                <CardDescription>Ideal for established brokers and small lenders</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>10-page custom website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced lead capture forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Loan calculator integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive SEO package</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>90 days of support and maintenance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$9,999+</span>
                  <span className="text-muted-foreground"> one-time</span>
                </div>
                <CardDescription>For established lenders and fintech companies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Unlimited pages custom website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium design with custom animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom application portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced calculators and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>CRM integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>1 year of support and maintenance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Contact for Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="bg-blue-50 p-8 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
                <p className="mb-6">
                  Let's discuss how we can create a website that helps your financial business stand out from the
                  competition and convert more visitors into clients.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Website+Portfolio"
                  alt="Website Portfolio"
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

