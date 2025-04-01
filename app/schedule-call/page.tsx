"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
}

export default function ScheduleCallPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    callType: "",
    date: "",
    time: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend here
    setIsSubmitted(true)
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  // Available dates (next 7 days excluding weekends)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split("T")[0],
          label: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        })
      }
    }

    return dates
  }

  // Available time slots
  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
  ]

  // Call types
  const callTypes = [
    { value: "intro", label: "Intro Call (15 min)" },
    { value: "consultation", label: "Consultation (30 min)" },
    { value: "demo", label: "Product Demo (30 min)" },
    { value: "support", label: "Technical Support (45 min)" },
    { value: "coaching", label: "Business Coaching (60 min)" },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <div className="flex-grow py-12 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          {!isSubmitted ? (
            <motion.div
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              custom={0}
            >
              {/* Header */}
              <div className="bg-primary text-white p-6">
                <h1 className="text-2xl font-bold mb-2">Schedule a Call</h1>
                <p className="text-white/80">Book a time to speak with our team about your business needs</p>
              </div>

              {/* Progress Steps */}
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}
                    >
                      1
                    </div>
                    <div className={`ml-2 text-sm font-medium ${step >= 1 ? "text-primary" : "text-gray-500"}`}>
                      Your Info
                    </div>
                  </div>
                  <div className={`flex-1 h-1 mx-4 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}
                    >
                      2
                    </div>
                    <div className={`ml-2 text-sm font-medium ${step >= 2 ? "text-primary" : "text-gray-500"}`}>
                      Select Time
                    </div>
                  </div>
                  <div className={`flex-1 h-1 mx-4 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}
                    >
                      3
                    </div>
                    <div className={`ml-2 text-sm font-medium ${step >= 3 ? "text-primary" : "text-gray-500"}`}>
                      Confirm
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-lg font-semibold mb-4">Your Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="callType" className="block text-sm font-medium text-gray-700 mb-1">
                          Call Type
                        </label>
                        <Select
                          value={formData.callType}
                          onValueChange={(value) => handleSelectChange("callType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select call type" />
                          </SelectTrigger>
                          <SelectContent>
                            {callTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500"
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.phone ||
                          !formData.company ||
                          !formData.callType
                        }
                      >
                        Next Step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Schedule */}
                {step === 2 && (
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-lg font-semibold mb-4">Select Date & Time</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          <Calendar className="inline-block h-4 w-4 mr-1" /> Date
                        </label>
                        <Select value={formData.date} onValueChange={(value) => handleSelectChange("date", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            {getAvailableDates().map((date) => (
                              <SelectItem key={date.value} value={date.value}>
                                {date.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          <Clock className="inline-block h-4 w-4 mr-1" /> Time (EST)
                        </label>
                        <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot.value} value={slot.value}>
                                {slot.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information (Optional)
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Let us know what you'd like to discuss"
                          rows={4}
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="border-gray-300 hover:bg-gray-50 hover:border-primary transition-colors duration-500"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500"
                        disabled={!formData.date || !formData.time}
                      >
                        Next Step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-lg font-semibold mb-4">Confirm Your Appointment</h2>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{formData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Company</p>
                          <p className="font-medium">{formData.company}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Call Type</p>
                          <p className="font-medium">
                            {callTypes.find((type) => type.value === formData.callType)?.label}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date & Time</p>
                          <p className="font-medium">
                            {getAvailableDates().find((date) => date.value === formData.date)?.label},{" "}
                            {timeSlots.find((slot) => slot.value === formData.time)?.label} EST
                          </p>
                        </div>
                      </div>
                      {formData.message && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">Additional Information</p>
                          <p className="font-medium">{formData.message}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-6 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="border-gray-300 hover:bg-gray-50 hover:border-primary transition-colors duration-500"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Appointment Scheduled!</h1>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Your call has been scheduled successfully. We've sent a confirmation email to {formData.email} with all
                the details.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 max-w-md mx-auto">
                <div className="text-left">
                  <p className="text-sm text-gray-500 mb-1">Date & Time</p>
                  <p className="font-medium mb-3">
                    {getAvailableDates().find((date) => date.value === formData.date)?.label},{" "}
                    {timeSlots.find((slot) => slot.value === formData.time)?.label} EST
                  </p>
                  <p className="text-sm text-gray-500 mb-1">Call Type</p>
                  <p className="font-medium">{callTypes.find((type) => type.value === formData.callType)?.label}</p>
                </div>
              </div>
              <Button
                onClick={() => (window.location.href = "/")}
                className="bg-primary hover:bg-primary-dark text-white transition-colors duration-500"
              >
                Return to Homepage
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

