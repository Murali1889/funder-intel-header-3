"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Upload, Building, LinkIcon, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function AddBusinessPage() {
  const [activeTab, setActiveTab] = useState("add")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Business Information
    businessName: "",
    businessType: "",
    website: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    description: "",

    // Contact Information
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactPosition: "",

    // Additional Information
    linkedIn: "",
    founded: "",
    employees: "",

    // For claim form
    companyDBA: "",
  })

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

  const businessTypes = [
    { value: "mca", label: "MCA Provider" },
    { value: "term-loan", label: "Term Loan Lender" },
    { value: "line-of-credit", label: "Line of Credit Lender" },
    { value: "equipment", label: "Equipment Lender" },
    { value: "invoice", label: "Invoice Factoring" },
    { value: "sba", label: "SBA Lender" },
    { value: "software", label: "Software Provider" },
    { value: "service", label: "Service Provider" },
    { value: "other", label: "Other" },
  ]

  const employeeRanges = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501+", label: "501+ employees" },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <div className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4">
          {!isSubmitted ? (
            <motion.div
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="bg-primary text-white p-6">
                <h1 className="text-2xl font-bold mb-2">Business Directory</h1>
                <p className="text-white/80">Add your business to our directory or claim your existing listing</p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="add" value={activeTab} onValueChange={setActiveTab} className="p-6">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="add">Add New Business</TabsTrigger>
                  <TabsTrigger value="claim">Claim Existing Listing</TabsTrigger>
                </TabsList>

                {/* Add New Business Form */}
                <TabsContent value="add">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      {/* Business Information Section */}
                      <div>
                        <h2 className="text-lg font-semibold mb-4 flex items-center">
                          <Building className="h-5 w-5 mr-2 text-primary" />
                          Business Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                              Business Name*
                            </label>
                            <Input
                              id="businessName"
                              name="businessName"
                              value={formData.businessName}
                              onChange={handleChange}
                              placeholder="Your Business Name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                              Business Type*
                            </label>
                            <Select
                              value={formData.businessType}
                              onValueChange={(value) => handleSelectChange("businessType", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select business type" />
                              </SelectTrigger>
                              <SelectContent>
                                {businessTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                              <LinkIcon className="inline-block h-4 w-4 mr-1" /> Website
                            </label>
                            <Input
                              id="website"
                              name="website"
                              value={formData.website}
                              onChange={handleChange}
                              placeholder="https://www.example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              <Phone className="inline-block h-4 w-4 mr-1" /> Phone Number*
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
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              <Mail className="inline-block h-4 w-4 mr-1" /> Business Email*
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="info@example.com"
                              required
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                              <MapPin className="inline-block h-4 w-4 mr-1" /> Address
                            </label>
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="123 Main St"
                            />
                          </div>
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                              City
                            </label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="City"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                State
                              </label>
                              <Input
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State"
                              />
                            </div>
                            <div>
                              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                                ZIP
                              </label>
                              <Input
                                id="zip"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                placeholder="ZIP"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                              Business Description*
                            </label>
                            <Textarea
                              id="description"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="Describe your business, services, and what makes you unique"
                              rows={4}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Information Section */}
                      <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                              Contact Name*
                            </label>
                            <Input
                              id="contactName"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-700 mb-1">
                              Position/Title
                            </label>
                            <Input
                              id="contactPosition"
                              name="contactPosition"
                              value={formData.contactPosition}
                              onChange={handleChange}
                              placeholder="CEO, Manager, etc."
                            />
                          </div>
                          <div>
                            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                              Contact Email*
                            </label>
                            <Input
                              id="contactEmail"
                              name="contactEmail"
                              type="email"
                              value={formData.contactEmail}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                              Contact Phone*
                            </label>
                            <Input
                              id="contactPhone"
                              name="contactPhone"
                              value={formData.contactPhone}
                              onChange={handleChange}
                              placeholder="(123) 456-7890"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Additional Information Section */}
                      <div>
                        <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">
                              LinkedIn Company Page
                            </label>
                            <Input
                              id="linkedIn"
                              name="linkedIn"
                              value={formData.linkedIn}
                              onChange={handleChange}
                              placeholder="https://www.linkedin.com/company/..."
                            />
                          </div>
                          <div>
                            <label htmlFor="founded" className="block text-sm font-medium text-gray-700 mb-1">
                              Year Founded
                            </label>
                            <Input
                              id="founded"
                              name="founded"
                              value={formData.founded}
                              onChange={handleChange}
                              placeholder="e.g. 2010"
                            />
                          </div>
                          <div>
                            <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Size
                            </label>
                            <Select
                              value={formData.employees}
                              onValueChange={(value) => handleSelectChange("employees", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                              <SelectContent>
                                {employeeRanges.map((range) => (
                                  <SelectItem key={range.value} value={range.value}>
                                    {range.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="md:col-span-2">
                            <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
                              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">Upload your company logo (optional)</p>
                              <p className="text-xs text-gray-500 mb-3">Accepted formats: JPG, PNG, SVG (max 2MB)</p>
                              <Button type="button" variant="outline" size="sm">
                                Choose File
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-700 text-sm">
                        <p className="font-medium mb-1">Important Information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>All submissions are reviewed by our team before being published</li>
                          <li>For direct funders, additional verification documents will be requested</li>
                          <li>There may be a listing fee for certain business categories</li>
                        </ul>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit">Submit Listing</Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>

                {/* Claim Existing Listing Form */}
                <TabsContent value="claim">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-700 mb-6">
                        <p className="font-medium">Claim your existing business listing</p>
                        <p className="text-sm mt-1">
                          If your business is already listed in our directory, you can claim it to gain control of the
                          listing and update information.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label htmlFor="companyDBA" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name/DBA*
                          </label>
                          <Input
                            id="companyDBA"
                            name="companyDBA"
                            value={formData.companyDBA}
                            onChange={handleChange}
                            placeholder="Exact company name as listed"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name*
                          </label>
                          <Input
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-700 mb-1">
                            Position/Title*
                          </label>
                          <Input
                            id="contactPosition"
                            name="contactPosition"
                            value={formData.contactPosition}
                            onChange={handleChange}
                            placeholder="CEO, Manager, etc."
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                            Business Email*
                          </label>
                          <Input
                            id="contactEmail"
                            name="contactEmail"
                            type="email"
                            value={formData.contactEmail}
                            onChange={handleChange}
                            placeholder="john@yourcompany.com"
                            required
                          />
                          <p className="text-xs text-gray-500 mt-1">Must be an email with your company domain</p>
                        </div>
                        <div>
                          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number*
                          </label>
                          <Input
                            id="contactPhone"
                            name="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            required
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <div className="border border-dashed border-gray-300 rounded-lg p-4">
                          <h3 className="font-medium text-gray-800 mb-2">Verification Documents Required</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            To verify your ownership, please be prepared to provide:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            <li>Business license or registration</li>
                            <li>Proof of employment (business card, company directory listing)</li>
                            <li>LinkedIn profile showing your connection to the company</li>
                          </ul>
                          <p className="text-xs text-gray-500 mt-3">
                            You'll be able to upload these documents after submitting this form
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit">Submit Claim Request</Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
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
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {activeTab === "add" ? "Listing Submitted Successfully!" : "Claim Request Submitted!"}
              </h1>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {activeTab === "add"
                  ? "Thank you for submitting your business. Our team will review your information and publish your listing soon."
                  : "Thank you for submitting your claim request. Our team will verify your information and contact you within 1-2 business days."}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                A confirmation email has been sent to {formData.contactEmail}
              </p>
              <Button onClick={() => (window.location.href = "/")}>Return to Homepage</Button>
            </motion.div>
          )}
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

