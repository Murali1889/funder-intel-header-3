import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

// Product data
const officeProducts = [
  {
    id: "standing-desk-1",
    name: "Claiks Electric Standing Desk",
    category: "Desks & Workstations",
    description: "Adjustable Height Stand up Desk with Splice Board, 48 x 24 Inches",
    price: 119.99,
    image: "/placeholder.svg?height=300&width=500&text=Standing+Desk",
    isPrime: true,
    isBestSeller: true,
    amazonLink: "https://www.amazon.com",
  },
  {
    id: "standing-desk-2",
    name: "Claiks Standing Desk with Keyboard Tray",
    category: "Desks & Workstations",
    description: "Electric Standing Desk with Drawer, 48 x 24 Inches",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=500&text=Standing+Desk+with+Tray",
    isPrime: true,
    amazonLink: "https://www.amazon.com",
  },
  {
    id: "usb-hub",
    name: "Hiearcool USB C Hub",
    category: "Tech Accessories",
    description: "USB-C Multi-Port Adapter for MacBook Pro/Air",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=500&text=USB+Hub",
    isPrime: true,
    isTopRated: true,
    amazonLink: "https://www.amazon.com",
  },
  {
    id: "office-chair",
    name: "Ergonomic Office Chair",
    category: "Ergonomic Solutions",
    description: "High Back Mesh Office Chair with Adjustable Lumbar Support",
    price: 159.99,
    image: "/placeholder.svg?height=300&width=500&text=Office+Chair",
    isPrime: true,
    amazonLink: "https://www.amazon.com",
  },
  {
    id: "monitor-stand",
    name: "Dual Monitor Stand",
    category: "Desks & Workstations",
    description: "Adjustable Monitor Mount for Two 13-32 inch Screens",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=500&text=Monitor+Stand",
    isPrime: true,
    amazonLink: "https://www.amazon.com",
  },
  {
    id: "desk-organizer",
    name: "Mesh Desk Organizer",
    category: "Organization",
    description: "Office Supplies Desk Organizer with 5 Compartments and 1 Drawer",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=500&text=Desk+Organizer",
    isPrime: true,
    amazonLink: "https://www.amazon.com",
  },
]

export default function OfficeProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop these products available on Amazon</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            We thought we could save you some time by curating available office products on Amazon. Once you find a
            product you like, click on it to buy it on Amazon.
          </p>
          <p className="text-sm text-muted-foreground mt-6 bg-slate-50 p-3 rounded-md border inline-block">
            Affiliate Link Alert: We may earn a commission if you purchase through our links, at no extra cost to you
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="desks">Desks & Workstations</TabsTrigger>
            <TabsTrigger value="tech">Tech Accessories</TabsTrigger>
            <TabsTrigger value="ergonomic">Ergonomic Solutions</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeProducts.map((product, index) => (
                  <StaggerItem key={index}>
                    <Card className="overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.isBestSeller && (
                          <Badge className="absolute top-2 left-2 bg-yellow-500 text-white">Best Seller</Badge>
                        )}
                        {product.isTopRated && (
                          <Badge className="absolute top-2 left-2 bg-blue-500 text-white">Top Rated</Badge>
                        )}
                      </div>
                      <CardContent className="pt-6 flex-grow">
                        <div className="mb-2">
                          <Badge variant="outline" className="bg-slate-50">
                            {product.category}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                            {product.isPrime && <span className="text-xs text-blue-600 font-medium">Prime</span>}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button asChild className="w-full">
                          <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                            Buy now on Amazon
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="desks" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeProducts
                  .filter((product) => product.category === "Desks & Workstations")
                  .map((product, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          {product.isBestSeller && (
                            <Badge className="absolute top-2 left-2 bg-yellow-500 text-white">Best Seller</Badge>
                          )}
                        </div>
                        <CardContent className="pt-6 flex-grow">
                          <div className="mb-2">
                            <Badge variant="outline" className="bg-slate-50">
                              {product.category}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                              {product.isPrime && <span className="text-xs text-blue-600 font-medium">Prime</span>}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button asChild className="w-full">
                            <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                              Buy now on Amazon
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="tech" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeProducts
                  .filter((product) => product.category === "Tech Accessories")
                  .map((product, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          {product.isTopRated && (
                            <Badge className="absolute top-2 left-2 bg-blue-500 text-white">Top Rated</Badge>
                          )}
                        </div>
                        <CardContent className="pt-6 flex-grow">
                          <div className="mb-2">
                            <Badge variant="outline" className="bg-slate-50">
                              {product.category}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                              {product.isPrime && <span className="text-xs text-blue-600 font-medium">Prime</span>}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button asChild className="w-full">
                            <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                              Buy now on Amazon
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="ergonomic" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeProducts
                  .filter((product) => product.category === "Ergonomic Solutions")
                  .map((product, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="pt-6 flex-grow">
                          <div className="mb-2">
                            <Badge variant="outline" className="bg-slate-50">
                              {product.category}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                              {product.isPrime && <span className="text-xs text-blue-600 font-medium">Prime</span>}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button asChild className="w-full">
                            <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                              Buy now on Amazon
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="organization" className="mt-6">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeProducts
                  .filter((product) => product.category === "Organization")
                  .map((product, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="pt-6 flex-grow">
                          <div className="mb-2">
                            <Badge variant="outline" className="bg-slate-50">
                              {product.category}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                              {product.isPrime && <span className="text-xs text-blue-600 font-medium">Prime</span>}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button asChild className="w-full">
                            <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                              Buy now on Amazon
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
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
                <h2 className="text-2xl font-bold mb-4">Setting Up Your Ideal Office</h2>
                <p className="mb-4">
                  Creating an efficient workspace is essential for productivity in the financial industry. The products
                  we've curated are specifically selected to help financial professionals create an optimal work
                  environment.
                </p>
                <p>
                  From ergonomic solutions that prevent strain during long hours to tech accessories that streamline
                  your workflow, these products can help you create a more productive and comfortable workspace.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-4">Have a product suggestion?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have a favorite office product that has improved your workflow, we'd love to hear about it.
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

