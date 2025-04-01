import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

// Business tools data
const businessTools = [
  {
    id: "capcut",
    name: "CapCut",
    category: "Video Editing Software",
    description:
      "CapCut is an AI-powered, all-in-one creative platform that offers video editing and image design capabilities.",
    image: "/placeholder.svg?height=300&width=500&text=CapCut",
    features: [
      "AI-powered editing tools",
      "Professional templates",
      "Cloud storage and collaboration",
      "Multi-platform support",
    ],
    link: "https://www.capcut.com",
  },
  {
    id: "highlevel",
    name: "HighLevel",
    category: "Sales/Marketing Platform",
    description:
      "HighLevel is the first-ever all-in-one platform that will give you the tools, support and resources you need to succeed and crush your marketing goals.",
    image: "/placeholder.svg?height=300&width=500&text=HighLevel",
    features: [
      "CRM and lead management",
      "Email and SMS marketing",
      "Appointment scheduling",
      "Sales pipeline management",
    ],
    link: "https://www.gohighlevel.com",
  },
  {
    id: "screenpal",
    name: "ScreenPal",
    category: "Video Editing Software",
    description:
      "Share your authentic message with our intuitive screen recorder and video editor. Communicate clearly & effortlessly—and let AI do the rest.",
    image: "/placeholder.svg?height=300&width=500&text=ScreenPal",
    features: ["Screen recording", "Video editing", "AI-powered features", "Easy sharing options"],
    link: "https://screenpal.com",
  },
  {
    id: "phoneburner",
    name: "PhoneBurner",
    category: "Communication System",
    description:
      "PhoneBurner is a power dialer that helps sales teams get through calls faster and have up to 4x more live conversations. By automating workflows and call logging, reps get better results, in less time.",
    image: "/placeholder.svg?height=300&width=500&text=PhoneBurner",
    features: ["Power dialing", "Call tracking and analytics", "CRM integration", "Email and SMS follow-up"],
    link: "https://www.phoneburner.com",
  },
  {
    id: "close",
    name: "Close",
    category: "CRM",
    description:
      "Stop using slow, bulky CRMs. Choose Close for these 4 reasons: Built for the way sales teams actually sell, Designed for small businesses and startups.",
    image: "/placeholder.svg?height=300&width=500&text=Close+CRM",
    features: ["Sales automation", "Email sequences", "Built-in calling", "Pipeline management"],
    link: "https://close.com",
  },
  {
    id: "pandadoc",
    name: "PandaDoc",
    category: "E-Signature Software",
    description:
      "Stand out with the top-rated solution for creating, managing, tracking, and eSigning every important document you handle.",
    image: "/placeholder.svg?height=300&width=500&text=PandaDoc",
    features: ["Document creation and templates", "Electronic signatures", "Document tracking", "Team collaboration"],
    link: "https://www.pandadoc.com",
  },
]

export default function BusinessToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Partner Products To Help Run Your Business</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Below are products that can be used by any small to medium size business but are really helpful to those in
            business lending, fintech, and commercial finance. These providers are among the most used and popular from
            our experience.
          </p>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            If you are still using the same old software that could be holding you back from scaling or costing you more
            than its return on investment, then you may want to consider some of these products or services.
          </p>
          <p className="text-sm text-muted-foreground mt-6 bg-slate-50 p-3 rounded-md border inline-block">
            Affiliate Link Alert: We may earn a commission if you purchase through our links, at no extra cost to you
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList>
            <TabsTrigger value="all">All Tools</TabsTrigger>
            <TabsTrigger value="video">Video Editing</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessTools.map((tool, index) => (
                  <StaggerItem key={index}>
                    <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="bg-slate-900 text-white p-6 md:w-1/2 flex flex-col">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                            <p className="text-sm text-slate-300">{tool.category}</p>
                          </div>
                          <p className="text-sm text-slate-300 mb-4 flex-grow">{tool.description}</p>
                          <div className="mt-auto">
                            <Button
                              asChild
                              variant="outline"
                              className="w-full border-slate-600 text-black hover:text-white hover:bg-slate-800"
                            >
                              <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                                Learn More
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <div className="relative md:w-1/2 h-48 md:h-auto">
                          <Image src={tool.image || "/placeholder.svg"} alt={tool.name} fill className="object-cover" />
                        </div>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="video" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessTools
                  .filter((tool) => tool.category === "Video Editing Software")
                  .map((tool, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                        <div className="flex flex-col md:flex-row h-full">
                          <div className="bg-slate-900 text-white p-6 md:w-1/2 flex flex-col">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                              <p className="text-sm text-slate-300">{tool.category}</p>
                            </div>
                            <p className="text-sm text-slate-300 mb-4 flex-grow">{tool.description}</p>
                            <div className="mt-auto">
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-slate-600 text-white hover:bg-slate-800"
                              >
                                <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                                  Learn More
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="relative md:w-1/2 h-48 md:h-auto">
                            <Image
                              src={tool.image || "/placeholder.svg"}
                              alt={tool.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="marketing" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessTools
                  .filter((tool) => tool.category === "Sales/Marketing Platform")
                  .map((tool, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                        <div className="flex flex-col md:flex-row h-full">
                          <div className="bg-slate-900 text-white p-6 md:w-1/2 flex flex-col">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                              <p className="text-sm text-slate-300">{tool.category}</p>
                            </div>
                            <p className="text-sm text-slate-300 mb-4 flex-grow">{tool.description}</p>
                            <div className="mt-auto">
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-slate-600 text-white hover:bg-slate-800"
                              >
                                <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                                  Learn More
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="relative md:w-1/2 h-48 md:h-auto">
                            <Image
                              src={tool.image || "/placeholder.svg"}
                              alt={tool.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="communication" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessTools
                  .filter((tool) => tool.category === "Communication System" || tool.category === "CRM")
                  .map((tool, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                        <div className="flex flex-col md:flex-row h-full">
                          <div className="bg-slate-900 text-white p-6 md:w-1/2 flex flex-col">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                              <p className="text-sm text-slate-300">{tool.category}</p>
                            </div>
                            <p className="text-sm text-slate-300 mb-4 flex-grow">{tool.description}</p>
                            <div className="mt-auto">
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-slate-600 text-white hover:bg-slate-800"
                              >
                                <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                                  Learn More
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="relative md:w-1/2 h-48 md:h-auto">
                            <Image
                              src={tool.image || "/placeholder.svg"}
                              alt={tool.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessTools
                  .filter((tool) => tool.category === "E-Signature Software")
                  .map((tool, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                        <div className="flex flex-col md:flex-row h-full">
                          <div className="bg-slate-900 text-white p-6 md:w-1/2 flex flex-col">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                              <p className="text-sm text-slate-300">{tool.category}</p>
                            </div>
                            <p className="text-sm text-slate-300 mb-4 flex-grow">{tool.description}</p>
                            <div className="mt-auto">
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-slate-600 text-white hover:bg-slate-800"
                              >
                                <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                                  Learn More
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="relative md:w-1/2 h-48 md:h-auto">
                            <Image
                              src={tool.image || "/placeholder.svg"}
                              alt={tool.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>
        </Tabs>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 bg-blue-50 p-8 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why We Recommend These Tools</h2>
                <p className="mb-4">
                  We've carefully selected these tools based on their effectiveness for financial professionals. Each
                  product has been tested and proven to help streamline operations, improve client communication, and
                  boost overall productivity.
                </p>
                <p>
                  Our team regularly reviews and updates our recommendations to ensure you have access to the best tools
                  available for your business.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-4">Have a tool recommendation?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any recommended products that have helped your business, we'd love to hear about them.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Share Your Recommendation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

