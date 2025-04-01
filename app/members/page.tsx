import Image from "next/image"
import Link from "next/link"
import { Search, Filter, MapPin, Building, Award, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function MembersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            alt="Members community"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold mb-2">FunderIntel Members</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Connect with business lending professionals across the industry
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-300" />
              <Input
                type="search"
                placeholder="Search members by name, company, etc."
                className="w-full pl-8 bg-blue-900/50 border-blue-700 text-white placeholder:text-blue-300"
              />
            </div>
            <Button variant="outline" className="bg-blue-900/50 border-blue-700 text-white hover:bg-blue-800">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="funders">Funders</TabsTrigger>
            <TabsTrigger value="brokers">Brokers</TabsTrigger>
            <TabsTrigger value="services">Service Providers</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Member 1 - Featured */}
                <StaggerItem>
                  <Card className="overflow-hidden border-primary hover:shadow-lg transition-all">
                    <div className="bg-primary/10 px-4 py-1 text-xs font-medium text-primary">Featured</div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                              alt="John Smith"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">John Smith</h3>
                            <p className="text-sm text-muted-foreground">Granite Funding</p>
                          </div>
                        </div>
                        <Badge>Verified</Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>Direct Funder</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>New York, NY</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Premium Member</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full" variant="primary" asChild>
                        <Link href="/members/john-smith">View Profile</Link>
                      </Button>
                    </div>
                  </Card>
                </StaggerItem>

                {/* Member 2 */}
                <StaggerItem>
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                              alt="Sarah Johnson"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">Sarah Johnson</h3>
                            <p className="text-sm text-muted-foreground">Capital Brokers LLC</p>
                          </div>
                        </div>
                        <Badge>Verified</Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>Broker</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>Chicago, IL</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Basic Member</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full" variant="primary" asChild>
                        <Link href="/members/sarah-johnson">View Profile</Link>
                      </Button>
                    </div>
                  </Card>
                </StaggerItem>

                {/* Member 3 */}
                <StaggerItem>
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                              alt="Michael Chen"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">Michael Chen</h3>
                            <p className="text-sm text-muted-foreground">LendingSoft</p>
                          </div>
                        </div>
                        <Badge>Verified</Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>Service Provider</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Premium Member</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full" variant="primary" asChild>
                        <Link href="/members/michael-chen">View Profile</Link>
                      </Button>
                    </div>
                  </Card>
                </StaggerItem>

                {/* More members would be listed here */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                              <Image
                                src={`https://images.unsplash.com/photo-${1507679799987 + i * 100}-c73779587ccf?q=80&w=2071&auto=format&fit=crop`}
                                alt={`Member ${i + 4}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold">Member Name {i + 4}</h3>
                              <p className="text-sm text-muted-foreground">Company Name</p>
                            </div>
                          </div>
                          {i % 2 === 0 && <Badge>Verified</Badge>}
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span>{i % 3 === 0 ? "Funder" : i % 3 === 1 ? "Broker" : "Service Provider"}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>Location</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span>{i % 2 === 0 ? "Premium Member" : "Basic Member"}</span>
                          </div>
                        </div>

                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/members/member-${i + 4}`}>View Profile</Link>
                        </Button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/members/directory">
                    View All Members
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="funders" className="mt-0">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Funders would be listed here */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                              <Image
                                src={`https://images.unsplash.com/photo-${1560520653 + i * 100}-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop`}
                                alt={`Funder ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold">Funder Name {i + 1}</h3>
                              <p className="text-sm text-muted-foreground">Funding Company</p>
                            </div>
                          </div>
                          {i % 2 === 0 && <Badge>Verified</Badge>}
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span>Direct Funder</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>Location</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span>{i % 2 === 0 ? "Premium Member" : "Basic Member"}</span>
                          </div>
                        </div>

                        <Button size="sm" className="w-full" variant="primary" asChild>
                          <Link href={`/members/funder-${i + 1}`}>View Profile</Link>
                        </Button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/members/funders">
                    View All Funders
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="brokers" className="mt-0">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Brokers would be listed here */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                              <Image
                                src={`https://images.unsplash.com/photo-${1573496359142 + i * 100}-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop`}
                                alt={`Broker ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold">Broker Name {i + 1}</h3>
                              <p className="text-sm text-muted-foreground">Brokerage Firm</p>
                            </div>
                          </div>
                          {i % 2 === 0 && <Badge>Verified</Badge>}
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span>Broker</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>Location</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span>{i % 2 === 0 ? "Premium Member" : "Basic Member"}</span>
                          </div>
                        </div>

                        <Button size="sm" className="w-full" variant="primary" asChild>
                          <Link href={`/members/broker-${i + 1}`}>View Profile</Link>
                        </Button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/members/brokers">
                    View All Brokers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="services" className="mt-0">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Providers would be listed here */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                              <Image
                                src={`https://images.unsplash.com/photo-${1472099645785 + i * 100}-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop`}
                                alt={`Service Provider ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold">Service Provider {i + 1}</h3>
                              <p className="text-sm text-muted-foreground">Service Company</p>
                            </div>
                          </div>
                          {i % 2 === 0 && <Badge>Verified</Badge>}
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span>Service Provider</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>Location</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span>{i % 2 === 0 ? "Premium Member" : "Basic Member"}</span>
                          </div>
                        </div>

                        <Button size="sm" className="w-full" variant="primary" asChild>
                          <Link href={`/members/service-${i + 1}`}>View Profile</Link>
                        </Button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/members/services">
                    View All Service Providers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </TabsContent>
        </Tabs>

        <FadeIn direction="up" delay={0.4}>
          <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Business Lending Community"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
                <p className="mb-6">
                  Create your free profile today and connect with thousands of business lending professionals.
                </p>
                <Button size="lg" variant="primary" asChild>
                  <Link href="/signup">
                    Create Free Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Business Lending Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

