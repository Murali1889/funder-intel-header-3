import Image from "next/image"
import Link from "next/link"
import { Search, Filter, BookOpen, Play, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function LearningCenterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
            alt="Learning center"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold mb-2">Learning Center</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Educational resources to help you succeed in the business lending industry
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-300" />
              <Input
                type="search"
                placeholder="Search courses, guides, and resources..."
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
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <Link href="/courses" className="text-sm font-medium text-primary flex items-center">
                View all courses
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Business Loan Broker Certification",
                    description:
                      "Comprehensive training for new and experienced brokers covering all aspects of business lending",
                    level: "Beginner to Advanced",
                    duration: "40+ hours",
                    instructor: "Michael Johnson",
                    image:
                      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Mastering MCA Underwriting",
                    description:
                      "Learn how to evaluate merchant cash advance applications and make sound funding decisions",
                    level: "Intermediate",
                    duration: "12 hours",
                    instructor: "Sarah Williams",
                    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "ISO Partnership Strategies",
                    description: "Build and manage successful ISO relationships to scale your funding business",
                    level: "Advanced",
                    duration: "8 hours",
                    instructor: "David Chen",
                    image:
                      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
                  },
                ].map((course, index) => (
                  <StaggerItem key={index}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all flex flex-col h-[520px] bg-white border border-gray-200">
                      <div className="relative aspect-video">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4">
                            <Badge className="bg-blue-500 hover:bg-blue-500/90 mb-2">Featured</Badge>
                            <h3 className="text-lg font-bold text-white">{course.title}</h3>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Button
                            size="icon"
                            className="h-12 w-12 rounded-full bg-blue-600/90 hover:bg-blue-700 text-white"
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-grow">
                        <div>
                          <p className="text-gray-600 mb-4">{course.description}</p>
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Level:</span>
                              <span className="font-medium text-gray-900">{course.level}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Duration:</span>
                              <span className="font-medium text-gray-900">{course.duration}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Instructor:</span>
                              <span className="font-medium text-gray-900">{course.instructor}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full" variant="primary" asChild>
                          <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>Enroll Now</Link>
                        </Button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="guides" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popular Guides</h2>
              <Link href="/guides" className="text-sm font-medium text-primary flex items-center">
                View all guides
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "The Complete Guide to MCA Underwriting",
                    description: "Learn how to evaluate merchant cash advance applications effectively",
                    category: "Underwriting",
                    readTime: "15 min read",
                    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Building Your Broker Business from Scratch",
                    description: "Step-by-step guide to launching and growing your loan brokerage",
                    category: "Business Development",
                    readTime: "20 min read",
                    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop",
                  },
                  {
                    title: "Compliance Guide for Business Lending",
                    description: "Navigate the regulatory landscape of business lending and stay compliant",
                    category: "Compliance",
                    readTime: "18 min read",
                    image:
                      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Marketing Strategies for Loan Brokers",
                    description: "Effective marketing tactics to attract clients and grow your business",
                    category: "Marketing",
                    readTime: "12 min read",
                    image:
                      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
                  },
                ].map((guide, index) => (
                  <StaggerItem key={index}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all flex flex-col h-[380px] bg-white border border-gray-200">
                      <div className="md:flex flex-grow">
                        <div className="md:w-1/3 relative h-40 md:h-auto">
                          <Image
                            src={guide.image || "/placeholder.svg"}
                            alt={guide.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 md:w-2/3 flex flex-col justify-between">
                          <div>
                            <Badge className="mb-2">{guide.category}</Badge>
                            <h3 className="text-lg font-bold mb-2 text-gray-900">{guide.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">{guide.readTime}</span>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, "-")}`}>
                                Read Guide
                                <BookOpen className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="webinars" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Upcoming Webinars</h2>
              <Link href="/webinars" className="text-sm font-medium text-primary flex items-center">
                View all webinars
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="p-12 text-center border rounded-lg bg-slate-50">
              <h3 className="text-xl font-medium mb-2">No upcoming webinars</h3>
              <p className="text-muted-foreground mb-4">
                Check back soon or subscribe to get notified about future events
              </p>
              <Button variant="primary" asChild>
                <Link href="/webinars/subscribe">Subscribe to Updates</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Downloadable Templates</h2>
              <Link href="/templates" className="text-sm font-medium text-primary flex items-center">
                View all templates
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Loan Broker Agreement",
                    description: "Standard agreement template for broker-client relationships",
                    format: "PDF & DOCX",
                    downloads: "2,450",
                  },
                  {
                    title: "MCA Underwriting Checklist",
                    description: "Comprehensive checklist for evaluating MCA applications",
                    format: "PDF & XLSX",
                    downloads: "1,875",
                  },
                  {
                    title: "ISO Partnership Contract",
                    description: "Legal template for establishing ISO partnerships",
                    format: "PDF & DOCX",
                    downloads: "1,320",
                  },
                  {
                    title: "Business Loan Calculator",
                    description: "Calculate payments, interest, and terms for various loan types",
                    format: "XLSX",
                    downloads: "3,210",
                  },
                  {
                    title: "Client Intake Form",
                    description: "Comprehensive form to gather client information",
                    format: "PDF & DOCX",
                    downloads: "1,980",
                  },
                  {
                    title: "Marketing Plan Template",
                    description: "Strategic marketing plan template for loan brokers",
                    format: "PDF & PPTX",
                    downloads: "1,540",
                  },
                ].map((template, index) => (
                  <StaggerItem key={index}>
                    <Card className="p-6 hover:shadow-lg transition-all flex flex-col h-[340px] bg-white border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
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
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                        </div>
                        <Badge variant="outline">{template.format}</Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{template.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">{template.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">{template.downloads} downloads</span>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/templates/${template.title.toLowerCase().replace(/\s+/g, "-")}`}>Download</Link>
                        </Button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </TabsContent>
        </Tabs>

        <FadeIn direction="up" delay={0.2}>
          <section className="mt-16 bg-blue-900 text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                alt="Learning"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get Started with Our Business Loan Broker Course</h2>
                <p className="mb-6">
                  Our comprehensive training program covers everything you need to know to become a successful business
                  loan broker.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                    <span>Learn about different loan products and funding solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                    <span>Master the underwriting process and deal structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                    <span>Develop effective marketing and client acquisition strategies</span>
                  </li>
                </ul>
                <Button size="lg" variant="primary" asChild>
                  <Link href="/courses/broker">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                  alt="Business Loan Broker Course"
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

