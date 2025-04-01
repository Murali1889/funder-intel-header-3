"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar, Clock, Video, DollarSign, Check, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Consultation service types
const consultationServices = [
  {
    id: "intro-call",
    name: "Introductory Consultation",
    description: "Discover how FunderIntel can help your funding business grow",
    duration: "30 min",
    price: "Free",
    type: "Online Video",
    forType: "all",
    popular: false,
  },
  {
    id: "broker-coaching",
    name: "Broker Business Strategy",
    description: "Personalized guidance for loan brokers to increase deal flow and commissions",
    duration: "60 min",
    price: "$149",
    type: "Online Video",
    forType: "broker",
    popular: true,
  },
  {
    id: "funder-consulting",
    name: "Funder Growth Strategy",
    description: "Optimize your funding operations and scale your MCA or alternative lending business",
    duration: "60 min",
    price: "$199",
    type: "Online Video",
    forType: "funder",
    popular: true,
  },
  {
    id: "broker-intensive",
    name: "Broker Business Intensive",
    description: "Comprehensive strategy session for brokers looking to scale their operations",
    duration: "3 hrs",
    price: "$399",
    type: "Online Video",
    forType: "broker",
    popular: false,
  },
  {
    id: "funder-intensive",
    name: "Funder Operations Intensive",
    description: "Deep dive into your funding business with actionable strategies for growth",
    duration: "3 hrs",
    price: "$499",
    type: "Online Video",
    forType: "funder",
    popular: false,
  },
  {
    id: "website-development",
    name: "Website Strategy Session",
    description: "Plan your funding business website to attract more clients and partners",
    duration: "60 min",
    price: "$149",
    type: "Online Video",
    forType: "all",
    popular: false,
  },
]

// Mock available dates for the calendar
const generateAvailableDates = () => {
  const today = new Date()
  const availableDates = []

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      availableDates.push({
        date: date,
        hasSlots: Math.random() > 0.3, // 70% chance of having available slots
      })
    }
  }

  return availableDates
}

// Mock time slots
const generateTimeSlots = (date) => {
  const slots = []
  const startHour = 9
  const endHour = 17

  for (let hour = startHour; hour < endHour; hour++) {
    // Add slots at the hour and half-hour
    if (Math.random() > 0.5) {
      slots.push(`${hour}:00`)
    }
    if (Math.random() > 0.5) {
      slots.push(`${hour}:30`)
    }
  }

  return slots.sort()
}

export default function BookConsultationPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [selectedService, setSelectedService] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [availableDates] = useState(generateAvailableDates())
  const [availableTimeSlots, setAvailableTimeSlots] = useState([])

  const filteredServices =
    selectedTab === "all"
      ? consultationServices
      : consultationServices.filter((service) => service.forType === selectedTab || service.forType === "all")

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setCurrentStep(2)
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setAvailableTimeSlots(generateTimeSlots(date))
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    setCurrentStep(3)
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      if (currentStep === 2) {
        setSelectedDate(null)
        setSelectedTime(null)
      }
      if (currentStep === 3) {
        setSelectedTime(null)
      }
    }
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const currentMonth = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href="/consulting">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Consulting Services
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Schedule a Consultation</h1>
        <p className="text-muted-foreground">Book a session with our funding industry experts to grow your business</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Step indicator */}
        <div className="flex items-center justify-between max-w-md mx-auto mb-4">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              1
            </div>
            <span className="text-sm mt-1">Select Service</span>
          </div>
          <div className="h-1 flex-1 mx-2 bg-gray-200">
            <div
              className={`h-full ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}
              style={{ width: currentStep >= 2 ? "100%" : "0%" }}
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              2
            </div>
            <span className="text-sm mt-1">Select Date & Time</span>
          </div>
          <div className="h-1 flex-1 mx-2 bg-gray-200">
            <div
              className={`h-full ${currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"}`}
              style={{ width: currentStep >= 3 ? "100%" : "0%" }}
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              3
            </div>
            <span className="text-sm mt-1">Confirm</span>
          </div>
        </div>

        {/* Step 1: Select Service */}
        {currentStep === 1 && (
          <div className="animate-fadeIn">
            <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
              <div className="flex justify-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="broker">For Brokers</TabsTrigger>
                  <TabsTrigger value="funder">For Funders</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={selectedTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <Card
                      key={service.id}
                      className={`overflow-hidden transition-all hover:shadow-md cursor-pointer ${service.popular ? "border-blue-300" : ""}`}
                      onClick={() => handleServiceSelect(service)}
                    >
                      {service.popular && (
                        <div className="bg-blue-600 text-white text-xs font-medium py-1 px-3 text-center">
                          POPULAR CHOICE
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Video className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{service.type}</span>
                          </div>
                          <div className="flex items-center font-medium text-lg mt-4">
                            <DollarSign className="h-5 w-5 mr-1 text-blue-600" />
                            <span>{service.price}</span>
                          </div>
                          <Button className="w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200">
                            Select & Continue
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {currentStep === 2 && selectedService && (
          <div className="animate-fadeIn">
            <Button variant="outline" size="sm" onClick={handleBack} className="mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Services
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Select a Date
                    </CardTitle>
                    <CardDescription>Choose an available date for your {selectedService.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <Button variant="ghost" size="icon">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <h3 className="text-lg font-medium">{currentMonth}</h3>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                          <div key={day} className="text-sm font-medium text-muted-foreground py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {/* Fill in empty cells for days before the 1st of the month */}
                        {Array.from({ length: availableDates[0]?.date.getDay() || 0 }).map((_, i) => (
                          <div key={`empty-${i}`} className="h-12 rounded-md"></div>
                        ))}

                        {availableDates.map((dateObj, i) => (
                          <Button
                            key={i}
                            variant={selectedDate === dateObj.date ? "default" : "outline"}
                            className={`h-12 ${!dateObj.hasSlots ? "opacity-50 cursor-not-allowed" : ""} ${selectedDate === dateObj.date ? "bg-white text-gray-900 border-gray-900" : "bg-white text-gray-700 border-gray-200"}`}
                            disabled={!dateObj.hasSlots}
                            onClick={() => dateObj.hasSlots && handleDateSelect(dateObj.date)}
                          >
                            {dateObj.date.getDate()}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {selectedDate && (
                      <div className="mt-6 border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Available Times for {formatDate(selectedDate)}</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {availableTimeSlots.length > 0 ? (
                            availableTimeSlots.map((time, i) => (
                              <Button
                                key={i}
                                variant={selectedTime === time ? "default" : "outline"}
                                className={`text-sm ${selectedTime === time ? "bg-white text-gray-900 border-gray-900" : "bg-white text-gray-700 border-gray-200"}`}
                                onClick={() => handleTimeSelect(time)}
                              >
                                {time}
                              </Button>
                            ))
                          ) : (
                            <p className="col-span-full text-center text-muted-foreground py-4">
                              No available times for this date. Please select another date.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Your Selection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">{selectedService.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedService.description}</p>
                      </div>

                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{selectedService.duration}</span>
                      </div>

                      <div className="flex items-center text-sm">
                        <Video className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{selectedService.type}</span>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between font-medium">
                          <span>Price:</span>
                          <span>{selectedService.price}</span>
                        </div>
                      </div>

                      {selectedDate && (
                        <div className="pt-4 border-t">
                          <div className="font-medium mb-1">Selected Date & Time:</div>
                          <div>{formatDate(selectedDate)}</div>
                          {selectedTime && <div className="font-medium">{selectedTime} EDT</div>}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && selectedService && selectedDate && selectedTime && (
          <div className="animate-fadeIn">
            <Button variant="outline" size="sm" onClick={handleBack} className="mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Calendar
            </Button>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader className="text-center border-b">
                  <CardTitle className="text-2xl">Confirm Your Booking</CardTitle>
                  <CardDescription>Please review your consultation details</CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium text-lg mb-4">Consultation Details</h3>

                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Service</div>
                          <div className="font-medium">{selectedService.name}</div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground">Date & Time</div>
                          <div className="font-medium">
                            {formatDate(selectedDate)} at {selectedTime} EDT
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground">Duration</div>
                          <div className="font-medium">{selectedService.duration}</div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground">Format</div>
                          <div className="font-medium">{selectedService.type}</div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground">Price</div>
                          <div className="font-medium">{selectedService.price}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-4">What to Expect</h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>You'll receive a confirmation email with meeting details</span>
                        </div>

                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>The consultation will be conducted via Zoom video conference</span>
                        </div>

                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Please prepare any specific questions or topics you'd like to discuss</span>
                        </div>

                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Our expert will provide actionable advice tailored to your business</span>
                        </div>

                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Cancellations must be made at least 24 hours in advance for a full refund</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <Button
                          className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                          size="lg"
                        >
                          Confirm & Book Appointment
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                          By confirming, you agree to our booking terms and conditions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

