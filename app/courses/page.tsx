import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 relative">
                <span className="relative">
                  Built
                  <span className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-white"></span>
                  <span className="absolute -top-2 -right-2 w-2 h-2 border-t border-r border-white"></span>
                  <span className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l border-white"></span>
                  <span className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-white"></span>
                </span>
                <br />
                <span className="relative ml-24">
                  For
                  <span className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-white"></span>
                  <span className="absolute -top-2 -right-2 w-2 h-2 border-t border-r border-white"></span>
                  <span className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l border-white"></span>
                  <span className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-white"></span>
                </span>
                <br />
                <span className="relative ml-12">
                  You
                  <span className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-white"></span>
                  <span className="absolute -top-2 -right-2 w-2 h-2 border-t border-r border-white"></span>
                  <span className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l border-white"></span>
                  <span className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-white"></span>
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Master the art of business lending with our comprehensive broker training program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" className="px-8 py-6 text-lg h-auto" asChild>
                <Link href="#enroll">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg h-auto border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="#curriculum">
                  <Play className="mr-2 h-5 w-5" />
                  Preview Course
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="w-full py-16 md:py-24 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Professional Certification</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Business Lending Broker Certification</h2>
              <p className="text-gray-300 mb-6">
                Designed for aspiring and established brokers, this comprehensive program provides you with the
                knowledge, skills, and tools needed to excel in the competitive business lending industry.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-white">12 Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-white">40+ Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-white">Industry Recognized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-white">Lifetime Access</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white">4.9/5 from 350+ students</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-white border-white/20">
                  MCA Financing
                </Badge>
                <Badge variant="outline" className="text-white border-white/20">
                  Term Loans
                </Badge>
                <Badge variant="outline" className="text-white border-white/20">
                  Equipment Financing
                </Badge>
                <Badge variant="outline" className="text-white border-white/20">
                  SBA Loans
                </Badge>
                <Badge variant="outline" className="text-white border-white/20">
                  Business Credit
                </Badge>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Course+Preview"
                alt="Course Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="curriculum" className="w-full py-16 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Curriculum</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You'll Learn</h2>
            <p className="text-gray-300">
              Our comprehensive curriculum covers everything you need to know to become a successful business lending
              broker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                module: "Module 1",
                title: "Introduction to Business Lending",
                description:
                  "Understand the fundamentals of business lending, market overview, and broker opportunities.",
              },
              {
                module: "Module 2",
                title: "Loan Products & Structures",
                description: "Learn about different loan products, their structures, terms, and ideal use cases.",
              },
              {
                module: "Module 3",
                title: "Underwriting Fundamentals",
                description: "Master the basics of underwriting, risk assessment, and approval criteria.",
              },
              {
                module: "Module 4",
                title: "Client Acquisition Strategies",
                description: "Develop effective strategies for finding and qualifying potential clients.",
              },
              {
                module: "Module 5",
                title: "Deal Structuring & Packaging",
                description: "Learn how to structure deals and prepare loan packages for maximum approval rates.",
              },
              {
                module: "Module 6",
                title: "Lender Relationships",
                description: "Build and maintain relationships with lenders to increase your deal flow.",
              },
              {
                module: "Module 7",
                title: "Compliance & Regulations",
                description: "Navigate the regulatory landscape and ensure compliance with industry standards.",
              },
              {
                module: "Module 8",
                title: "Advanced Sales Techniques",
                description: "Master advanced sales techniques specific to business lending brokerage.",
              },
              {
                module: "Module 9",
                title: "Business Operations",
                description: "Set up and manage your brokerage operations efficiently and profitably.",
              },
              {
                module: "Module 10",
                title: "Marketing Your Services",
                description: "Develop a marketing strategy to promote your brokerage services effectively.",
              },
              {
                module: "Module 11",
                title: "Technology & Tools",
                description: "Leverage technology and tools to streamline your brokerage operations.",
              },
              {
                module: "Module 12",
                title: "Scaling Your Brokerage",
                description: "Strategies for growing your brokerage and building a sustainable business.",
              },
            ].map((module, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors"
              >
                <Badge variant="outline" className="mb-2 text-blue-400 border-blue-400/30">
                  {module.module}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                <p className="text-gray-400">{module.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="#full-curriculum">
                View Full Curriculum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="w-full py-16 md:py-24 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Expert Instructors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Learn From Industry Leaders</h2>
            <p className="text-gray-300">Our instructors bring decades of real-world experience in business lending</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                role: "Lead Instructor, Former VP at Capital Funding",
                bio: "20+ years of experience in business lending with over $500M in funded deals",
                image: "/placeholder.svg?height=300&width=300&text=Michael+J",
              },
              {
                name: "Sarah Williams",
                role: "Underwriting Specialist, Ex-Bank of America",
                bio: "Expert in credit analysis and loan structuring with 15 years in commercial lending",
                image: "/placeholder.svg?height=300&width=300&text=Sarah+W",
              },
              {
                name: "David Chen",
                role: "Business Development Expert",
                bio: "Built and scaled three successful brokerage firms with combined annual volume of $200M",
                image: "/placeholder.svg?height=300&width=300&text=David+C",
              },
            ].map((instructor, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
                  <p className="text-blue-400 mb-3">{instructor.role}</p>
                  <p className="text-gray-400">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-gray-300">Hear from brokers who have transformed their careers with our training</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "This course gave me the confidence and knowledge to start my own brokerage. Within 3 months of completing the program, I closed my first $250K deal.",
                name: "Robert T.",
                role: "Independent Broker, Chicago",
                image: "/placeholder.svg?height=60&width=60&text=RT",
              },
              {
                quote:
                  "The underwriting module alone was worth the price of the entire course. I'm now able to structure deals that get approved at much higher rates.",
                name: "Jennifer L.",
                role: "Senior Loan Officer, New York",
                image: "/placeholder.svg?height=60&width=60&text=JL",
              },
              {
                quote:
                  "As someone transitioning from real estate to business lending, this course provided the perfect foundation. The instructors are incredibly knowledgeable.",
                name: "Marcus W.",
                role: "Business Loan Broker, Miami",
                image: "/placeholder.svg?height=60&width=60&text=MW",
              },
              {
                quote:
                  "I've taken several broker courses, and this is by far the most comprehensive. The section on building lender relationships was particularly valuable.",
                name: "Sophia K.",
                role: "Brokerage Owner, Los Angeles",
                image: "/placeholder.svg?height=60&width=60&text=SK",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="enroll" className="w-full py-16 md:py-24 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Enrollment Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invest In Your Future</h2>
            <p className="text-gray-300">Choose the plan that works best for your career goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Self-Paced",
                price: "$997",
                description: "Complete access to all course materials at your own pace",
                features: [
                  "Full course access",
                  "Lifetime updates",
                  "Course completion certificate",
                  "Resource library",
                  "Community forum access",
                ],
                cta: "Enroll Now",
                popular: false,
              },
              {
                title: "Premium",
                price: "$1,997",
                description: "Enhanced learning experience with additional support",
                features: [
                  "Everything in Self-Paced",
                  "Weekly group coaching calls",
                  "Deal review sessions",
                  "Lender directory access",
                  "Templates and scripts library",
                  "Priority support",
                ],
                cta: "Enroll Now",
                popular: true,
              },
              {
                title: "VIP Mentorship",
                price: "$4,997",
                description: "Personalized guidance to fast-track your success",
                features: [
                  "Everything in Premium",
                  "1-on-1 mentorship (6 sessions)",
                  "Business launch strategy",
                  "Direct lender introductions",
                  "Marketing plan development",
                  "Lifetime VIP community access",
                ],
                cta: "Apply Now",
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 border rounded-lg overflow-hidden relative ${
                  plan.popular ? "border-blue-600 scale-105 z-10" : "border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400"> / one-time</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="primary" asChild>
                    <Link href="/courses/broker/enroll">{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Need help choosing the right plan?</p>
            <Button variant="outline" asChild>
              <Link href="/courses/broker/consultation">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Everything you need to know about our broker training program</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Is this course suitable for beginners?",
                answer:
                  "Yes, the course is designed for both beginners and experienced professionals. We start with the fundamentals and progressively move to advanced topics.",
              },
              {
                question: "How long do I have access to the course materials?",
                answer:
                  "You receive lifetime access to all course materials, including future updates and enhancements to the curriculum.",
              },
              {
                question: "Are there any prerequisites for taking this course?",
                answer:
                  "No specific prerequisites are required. A basic understanding of finance concepts is helpful but not necessary.",
              },
              {
                question: "Is there a payment plan available?",
                answer:
                  "Yes, we offer flexible payment plans for all our course options. Contact our team for details.",
              },
              {
                question: "Will I receive a certificate upon completion?",
                answer:
                  "Yes, you'll receive an industry-recognized certificate upon successful completion of the course.",
              },
              {
                question: "How is the course delivered?",
                answer:
                  "The course is delivered through our online learning platform, featuring video lessons, downloadable resources, quizzes, and interactive assignments.",
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "We offer a 14-day money-back guarantee if you're not completely satisfied with the course.",
              },
              {
                question: "How much time should I dedicate to the course each week?",
                answer:
                  "We recommend dedicating 5-10 hours per week to get the most out of the course, but you can proceed at your own pace.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24 bg-blue-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career in Business Lending?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful brokers who have elevated their skills and income with our training
            </p>
            <Button size="lg" variant="primary" className="px-8 py-6 text-lg h-auto" asChild>
              <Link href="/courses/broker/enroll">
                Enroll in the Course
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-6 text-blue-200">Limited spots available for the next cohort starting soon</p>
          </div>
        </div>
      </section>
    </div>
  )
}

