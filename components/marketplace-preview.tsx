"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MarketplacePreview() {
  return (
    <Tabs defaultValue="lenders" className="w-full">
      <TabsList className="w-full max-w-md mx-auto mb-8 bg-gray-100 p-1 rounded-full">
        <TabsTrigger
          value="lenders"
          className="rounded-full flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          Lenders
        </TabsTrigger>
        <TabsTrigger
          value="brokers"
          className="rounded-full flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          Brokers
        </TabsTrigger>
        <TabsTrigger
          value="services"
          className="rounded-full flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          Services
        </TabsTrigger>
      </TabsList>

      {/* Lenders Tab */}
      <TabsContent value="lenders" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MCA Card */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop"
                alt="Merchant Cash Advance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">120+ Lenders</Badge>
                <h3 className="text-xl font-bold text-white">Merchant Cash Advance</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Connect with top MCA lenders offering flexible funding options</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/providers/mca-companies" className="flex items-center justify-center">
                  View Lenders
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Term Loans Card */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop"
                alt="Term Loans"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">85+ Lenders</Badge>
                <h3 className="text-xl font-bold text-white">Term Loans</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Find lenders offering competitive rates on business term loans</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/providers/term-loan-lenders" className="flex items-center justify-center">
                  View Lenders
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Equipment Financing Card */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-39b9d08ed889?q=80&w=2070&auto=format&fit=crop"
                alt="Equipment Financing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">60+ Lenders</Badge>
                <h3 className="text-xl font-bold text-white">Equipment Financing</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Specialized lenders for all types of equipment financing needs</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/providers/equipment-lenders" className="flex items-center justify-center">
                  View Lenders
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </TabsContent>

      {/* Brokers Tab */}
      <TabsContent value="brokers" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Business Loan Brokers */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
                alt="Business Loan Brokers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">200+ Brokers</Badge>
                <h3 className="text-xl font-bold text-white">Business Loan Brokers</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Connect with experienced brokers specializing in business loans</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/brokers/business-loans" className="flex items-center justify-center">
                  View Brokers
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* MCA Brokers */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                alt="MCA Brokers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">150+ Brokers</Badge>
                <h3 className="text-xl font-bold text-white">MCA Brokers</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Find brokers specializing in merchant cash advances</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/brokers/mca" className="flex items-center justify-center">
                  View Brokers
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Equipment Financing Brokers */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                alt="Equipment Financing Brokers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">75+ Brokers</Badge>
                <h3 className="text-xl font-bold text-white">Equipment Financing Brokers</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Connect with brokers specializing in equipment financing</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/brokers/equipment" className="flex items-center justify-center">
                  View Brokers
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </TabsContent>

      {/* Services Tab */}
      <TabsContent value="services" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CRM Solutions */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="CRM Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">25+ Providers</Badge>
                <h3 className="text-xl font-bold text-white">CRM Solutions</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Customer relationship management tools for lending professionals</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/services/crm" className="flex items-center justify-center">
                  View Providers
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Marketing Services */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop"
                alt="Marketing Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">40+ Providers</Badge>
                <h3 className="text-xl font-bold text-white">Marketing Services</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Specialized marketing services for lending businesses</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/services/marketing" className="flex items-center justify-center">
                  View Providers
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Legal Services */}
          <Card className="overflow-hidden bg-white border border-gray-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                alt="Legal Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/80 flex flex-col justify-end p-4">
                <Badge className="bg-blue-600 text-white mb-2 self-start">30+ Providers</Badge>
                <h3 className="text-xl font-bold text-white">Legal Services</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-4">Legal expertise for lending compliance and documentation</p>
              <Button
                variant="outline"
                className="w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <Link href="/services/legal" className="flex items-center justify-center">
                  View Providers
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

