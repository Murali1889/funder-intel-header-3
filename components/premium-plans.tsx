"use client"

import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Plan data in an array for easy management
const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "Essential features for individuals",
    price: "$0",
    popular: false,
    features: [
      "Basic marketplace access",
      "Community forum access",
      "Limited resource library",
      "Basic profile listing",
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    buttonVariant: "outline" as const,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Advanced features for professionals",
    price: "$49",
    popular: true,
    features: [
      "Full marketplace access",
      "Priority profile listing",
      "Deal matching technology",
      "Full resource library",
      "Basic market intelligence",
      "10 leads per month",
    ],
    buttonText: "Upgrade to Pro",
    buttonLink: "/signup/pro",
    buttonVariant: "default" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Premium features for businesses",
    price: "$199",
    popular: false,
    features: [
      "Everything in Pro",
      "Featured profile listing",
      "Advanced market intelligence",
      "Unlimited leads",
      "API access",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    buttonLink: "/signup/enterprise",
    buttonVariant: "outline" as const,
  },
]

export default function PremiumPlans() {
  return (
    <div className="w-full bg-blue-950 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Select Your Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className="bg-white text-black border-0 rounded-lg overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
            >
              <CardHeader className="pb-4 relative">
                {plan.popular && <Badge className="absolute top-4 right-4 bg-blue-600 text-white">Popular</Badge>}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full bg-white text-gray-900 border-gray-200 hover:bg-gray-50`}
                  asChild
                >
                  <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

