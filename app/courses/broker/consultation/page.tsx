import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"

export default function ConsultationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}

      <div className="flex-1 container py-12">
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link href="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Schedule a Consultation</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Speak with one of our course advisors to determine which program is right for you and get answers to any
            questions you may have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="questions" className="text-sm font-medium">
                    Questions or Comments
                  </label>
                  <textarea
                    id="questions"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="What would you like to discuss during the consultation?"
                  ></textarea>
                </div>

                <Button className="w-full">Schedule Consultation</Button>
              </div>
            </div>

            <div>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Consultation Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">With</p>
                      <p className="text-sm text-muted-foreground">Course Advisor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 9AM-5PM ET</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Format</p>
                      <p className="text-sm text-muted-foreground">Video call (Zoom)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-2">What to expect:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Personalized course recommendations</li>
                    <li>• Answers to your specific questions</li>
                    <li>• Information about payment plans</li>
                    <li>• Discussion of your career goals</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

