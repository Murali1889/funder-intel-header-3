import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Filter, Search, Building2, Users, Briefcase, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function DirectoryPage() {
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Business Lending Directory</h1>
              <p className="text-muted-foreground text-lg">
                Find and connect with funders, brokers, and service providers
              </p>
            </div>
            <Button className="w-full md:w-auto" variant="primary" asChild>
              <Link href="/directory/add-business">Add Your Business</Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="funders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="funders">
              <Building2 className="h-4 w-4 mr-2" />
              Funders
            </TabsTrigger>
            <TabsTrigger value="brokers">
              <Users className="h-4 w-4 mr-2" />
              Brokers
            </TabsTrigger>
            <TabsTrigger value="services">
              <Briefcase className="h-4 w-4 mr-2" />
              Service Providers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="funders" className="mt-0">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search funders by name, product, etc." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Funder 1 - Featured */}
              <Card className="overflow-hidden border-primary">
                <div className="bg-primary/10 px-4 py-1 text-xs font-medium text-primary">Featured</div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=GF"
                          alt="Granite Funding"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Granite Funding</h3>
                        <p className="text-sm text-muted-foreground">Direct Funder</p>
                      </div>
                    </div>
                    <Badge>Verified</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Products:</span>
                      <span>MCA, Term Loans, LOC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Range:</span>
                      <span>$25K - $2MM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Industries:</span>
                      <span>All Industries</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(42 reviews)</span>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/directory/funders/granite-funding">View</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Funder 2 - Featured */}
              <Card className="overflow-hidden border-primary">
                <div className="bg-primary/10 px-4 py-1 text-xs font-medium text-primary">Featured</div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=LB"
                          alt="Liquid Bee"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Liquid Bee</h3>
                        <p className="text-sm text-muted-foreground">Direct Funder</p>
                      </div>
                    </div>
                    <Badge>Verified</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Products:</span>
                      <span>MCA, Equipment Financing</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Range:</span>
                      <span>$10K - $500K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Industries:</span>
                      <span>Most Industries</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(38 reviews)</span>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/directory/funders/liquid-bee">View</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Funder 3 - Regular */}
              <Card className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=SC"
                          alt="Spartan Capital"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Spartan Capital</h3>
                        <p className="text-sm text-muted-foreground">Direct Funder</p>
                      </div>
                    </div>
                    <Badge>Verified</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Products:</span>
                      <span>MCA, Working Capital</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Range:</span>
                      <span>$5K - $250K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Industries:</span>
                      <span>Most Industries</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(29 reviews)</span>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/directory/funders/spartan-capital">View</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* More funders would be listed here */}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/directory/funders">View All Funders</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="brokers" className="mt-0">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search brokers by name, specialty, etc." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Broker listings would go here */}
              {/* Similar structure to funders but with broker-specific fields */}
              <Card className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=CF"
                          alt="Capital Finders"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Capital Finders</h3>
                        <p className="text-sm text-muted-foreground">Business Loan Broker</p>
                      </div>
                    </div>
                    <Badge>Verified</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Specialties:</span>
                      <span>MCA, SBA, Equipment</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <span>New York, NY</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Years Active:</span>
                      <span>5+ years</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(18 reviews)</span>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/directory/brokers/capital-finders">View</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/directory/brokers">View All Brokers</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-0">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search service providers by name, category, etc."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Provider listings would go here */}
              {/* Similar structure to funders but with service-specific fields */}
              <Card className="overflow-hidden border-primary">
                <div className="bg-primary/10 px-4 py-1 text-xs font-medium text-primary">Featured</div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=LS"
                          alt="LendingSoft"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">LendingSoft</h3>
                        <p className="text-sm text-muted-foreground">CRM & Loan Management</p>
                      </div>
                    </div>
                    <Badge>Verified</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span>Software</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">For:</span>
                      <span>Brokers & Funders</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pricing:</span>
                      <span>Starting at $99/mo</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(24 reviews)</span>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/directory/services/lendingsoft">View</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/directory/services">View All Service Providers</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-slate-50 p-8 rounded-lg border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">List Your Business</h2>
              <p className="mb-6">
                Join thousands of companies in the FunderIntel directory and get discovered by potential partners.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <Check className="h-4 w-4 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">Create a detailed profile</p>
                    <p className="text-sm text-muted-foreground">
                      Showcase your services, products, and unique value proposition to the industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <Check className="h-4 w-4 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">Collect verified reviews</p>
                    <p className="text-sm text-muted-foreground">
                      Build trust with potential partners through authentic reviews and ratings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <Check className="h-4 w-4 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">Get premium placement</p>
                    <p className="text-sm text-muted-foreground">
                      Upgrade to a premium listing for featured placement and enhanced visibility.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" variant="primary" asChild>
                <Link href="/directory/add-business">Add Your Business</Link>
              </Button>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Business+Profile+Example+with+Reviews"
                alt="Business Profile Example"
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

