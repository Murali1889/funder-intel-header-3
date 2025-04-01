import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Shield, Award, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProPlansPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-blue-50 to-white border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-950 md:text-5xl mb-4">
              Elevate Your Funding Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium plans designed specifically for MCA funders and financial service providers
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="funders" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="funders">For Funders</TabsTrigger>
                <TabsTrigger value="providers">For Providers</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="funders" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4 text-center">
                  <Badge className="mb-2 mx-auto bg-blue-600">Premium</Badge>
                  <CardTitle className="text-2xl">MCA Funders Pro</CardTitle>
                  <CardDescription>Enhanced visibility to connect with qualified brokers and ISOs</CardDescription>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-950">$57</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Top placement on MCA Funders list</p>
                        <p className="text-sm text-gray-500">The 2nd most visited page on our site</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Verified badge & underwriting guidelines</p>
                        <p className="text-sm text-gray-500">Build trust with potential broker partners</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">"Connect with Funder" button</p>
                        <p className="text-sm text-gray-500">Direct referrals from interested ISOs</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <Award className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Featured in weekly newsletter</p>
                        <p className="text-sm text-gray-500">Exposure to our network of active brokers</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="font-medium text-gray-900">Additional benefits include:</h3>
                    <ul className="space-y-2">
                      {[
                        "Priority placement in Compare Funders tool",
                        "Customized notes on your profile",
                        "Access to broker networking events",
                        "Detailed analytics on profile views",
                        "Inclusion in broker training materials",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 pt-6">
                  <Button size="lg" className="w-full" variant="primary">
                    Start 7-Day Free Trial
                  </Button>
                  <p className="text-sm text-center text-gray-500">
                    No credit card required for trial. Cancel anytime.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="providers" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4 text-center">
                  <Badge className="mb-2 mx-auto bg-blue-600">Premium</Badge>
                  <CardTitle className="text-2xl">Service Providers Pro</CardTitle>
                  <CardDescription>Enhanced visibility for software, services, and industry vendors</CardDescription>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-950">$57</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Top placement in Provider directories</p>
                        <p className="text-sm text-gray-500">Stand out in software & service listings</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Verified badge & detailed service info</p>
                        <p className="text-sm text-gray-500">Build credibility with potential clients</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Direct lead forwarding</p>
                        <p className="text-sm text-gray-500">Inquiries sent directly to your inbox</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded-full p-1 bg-blue-50">
                        <Award className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Featured in industry newsletters</p>
                        <p className="text-sm text-gray-500">Regular exposure to funders and brokers</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="font-medium text-gray-900">Additional benefits include:</h3>
                    <ul className="space-y-2">
                      {[
                        "Sponsored content opportunities",
                        "Inclusion in broker training resources",
                        "Access to networking events",
                        "Detailed analytics dashboard",
                        "Recommended vendor status",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 pt-6">
                  <Button size="lg" className="w-full" variant="primary">
                    Start 7-Day Free Trial
                  </Button>
                  <p className="text-sm text-center text-gray-500">
                    No credit card required for trial. Cancel anytime.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* MCA Funders List Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">Snapshot from MCA Funders List</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive directory includes over 200 MCA direct funders with detailed underwriting information
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-02%20at%2012.41.30%E2%80%AFAM-hHyvHDXLLOMkRzjJst110W9YnHgtPk.png"
                alt="MCA Funders List Preview"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/providers/mca-companies" className="flex items-center gap-2">
                  View Complete Funders Directory <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Why Upgrade Your Listing?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium members gain significant advantages in visibility, credibility, and lead generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold text-blue-950 mb-6">For MCA Funders</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Enhanced Broker Connections</h4>
                  <p className="text-gray-600">
                    Our MCA Funders List is the second most visited page on our site. Premium members receive top
                    placement, verified badges, and direct connection features to attract quality ISOs and brokers.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Underwriting Transparency</h4>
                  <p className="text-gray-600">
                    Display your underwriting guidelines and preferences to attract better-qualified deals from brokers
                    who understand your funding criteria.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Compare Funders Tool Integration</h4>
                  <p className="text-gray-600">
                    Premium members are featured in our Compare Funders tool, where brokers evaluate potential funding
                    partners for their merchant deals.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" variant="primary" asChild>
                  <Link href="#funders">Upgrade Funder Listing</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold text-blue-950 mb-6">For Service Providers</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Industry Visibility</h4>
                  <p className="text-gray-600">
                    Gain prominent placement in our service provider directories, where funders and brokers search for
                    software, services, and industry solutions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Direct Lead Generation</h4>
                  <p className="text-gray-600">
                    Receive direct inquiries from interested funders, brokers, and ISOs looking for your specific
                    services or solutions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Content Marketing Opportunities</h4>
                  <p className="text-gray-600">
                    Premium providers can publish sponsored content in our newsletters and educational resources,
                    establishing thought leadership in the industry.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" variant="primary" asChild>
                  <Link href="#providers">Upgrade Provider Listing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How does the 7-day free trial work?",
                  a: "Start your trial with no credit card required. Experience all premium features for 7 days, then decide if you want to continue. You can cancel anytime during the trial period with no obligation.",
                },
                {
                  q: "What happens to my listing if I'm not yet on the site?",
                  a: "If you're not yet listed, you'll need to submit your business information first. Visit our 'Add Your Business' page to submit the required details, then you can upgrade to a premium listing.",
                },
                {
                  q: "Can I change between Funder and Provider plans?",
                  a: "Yes, you can switch between plans if your business offers both funding and services. Contact our support team to adjust your plan type based on your primary business focus.",
                },
                {
                  q: "How do I measure ROI from my premium listing?",
                  a: "Premium members receive access to detailed analytics showing profile views, connection requests, and referral sources. This helps you track the performance of your listing and measure return on investment.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-blue-950">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Not listed on our site yet?</p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/add-business">Add Your Business</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

