import { Calendar, ArrowRight, Check, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { FadeIn } from "@/components/animations"

export default function GiftCardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">eGift Card</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            You can't go wrong with a gift card. Choose an amount and write a personalized message to make this gift
            your own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Select Amount</CardTitle>
                <CardDescription>Choose the gift card amount you'd like to send</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {[25, 50, 100, 150, 200, 500].map((amount, index) => (
                    <div
                      key={index}
                      className={`border rounded-md p-4 text-center cursor-pointer hover:border-primary transition-colors ${
                        amount === 500 ? "border-primary bg-primary/5" : ""
                      }`}
                    >
                      <p className="font-bold">${amount}</p>
                      {amount === 100 && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full mt-1 inline-block">
                          Popular
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Label htmlFor="quantity">Quantity</Label>
                  <div className="flex items-center mt-2">
                    <Button variant="outline" size="icon" className="rounded-r-none" aria-label="Decrease quantity">
                      <span className="h-4 w-4">−</span>
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <Button variant="outline" size="icon" className="rounded-l-none" aria-label="Increase quantity">
                      <span className="h-4 w-4">+</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Who's the gift card for?</CardTitle>
                <CardDescription>Choose recipient and delivery details</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="someone-else" className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <RadioGroupItem value="someone-else" id="someone-else" className="peer sr-only" />
                    <Label
                      htmlFor="someone-else"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="mb-2">For someone else</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="myself" id="myself" className="peer sr-only" />
                    <Label
                      htmlFor="myself"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="mb-2">For myself</span>
                    </Label>
                  </div>
                </RadioGroup>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="recipient-email">Recipient email *</Label>
                    <Input id="recipient-email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="recipient-name">Recipient name</Label>
                    <Input id="recipient-name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="delivery-date">Delivery date</Label>
                    <div className="relative mt-1">
                      <Input id="delivery-date" defaultValue="Now" className="mt-1" />
                      <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" className="mt-1 resize-none" rows={4} />
                    <p className="text-xs text-muted-foreground mt-1">0/200 characters</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full">
              Continue to Payment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader className="bg-blue-50">
                <CardTitle>Gift Card Preview</CardTitle>
                <CardDescription>Here's what your gift will look like</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="border rounded-lg overflow-hidden mb-4">
                  <div className="bg-blue-900 text-white p-4 text-center">
                    <h3 className="font-bold text-xl">FunderIntel</h3>
                    <p className="text-blue-200">eGift Card</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-3xl font-bold mb-4">$500</p>
                    <p className="text-sm text-muted-foreground mb-4">For: [Recipient Name]</p>
                    <p className="text-sm italic border-t border-b py-3 px-4 mx-auto max-w-[80%]">
                      [Your personal message will appear here]
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Gift Card Details:</h4>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <p className="text-sm">Digital delivery to recipient's email</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <p className="text-sm">Valid for all FunderIntel services and products</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <p className="text-sm">No expiration date</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Gift cards are non-refundable and cannot be exchanged for cash
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-blue-50 text-sm font-medium">
                      1
                    </span>
                    <p className="text-sm">Choose your gift card amount and quantity</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-blue-50 text-sm font-medium">
                      2
                    </span>
                    <p className="text-sm">Add recipient details and personalized message</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-blue-50 text-sm font-medium">
                      3
                    </span>
                    <p className="text-sm">Complete your purchase securely</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-blue-50 text-sm font-medium">
                      4
                    </span>
                    <p className="text-sm">Gift card is delivered instantly or on your selected date</p>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Perfect For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-1" />
                    <p className="text-sm">Client appreciation gifts</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-1" />
                    <p className="text-sm">Employee rewards and incentives</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-1" />
                    <p className="text-sm">Referral thank-you gifts</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-1" />
                    <p className="text-sm">Holiday and special occasion gifts</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-1" />
                    <p className="text-sm">Business partner appreciation</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm">How will the gift card be delivered?</h4>
                  <p className="text-sm text-muted-foreground">
                    Gift cards are delivered via email to the recipient's email address.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Can I schedule delivery for a future date?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can select a specific date for the gift card to be delivered.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Do gift cards expire?</h4>
                  <p className="text-sm text-muted-foreground">
                    No, our gift cards never expire and can be used at any time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

