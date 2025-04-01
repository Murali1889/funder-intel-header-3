"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, X, HelpCircle } from "lucide-react"
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

// Pricing plans
const pricingPlans = [
  {
    name: "Basic",
    description: "Essential features for individuals",
    price: 0,
    period: "month",
    features: [
      { name: "Basic marketplace access", included: true },
      { name: "Community forum access", included: true },
      { name: "Limited resource library", included: true },
      { name: "Basic profile listing", included: true },
      { name: "Market intelligence dashboard", included: false },
      { name: "Priority profile listing", included: false },
      { name: "Deal matching technology", included: false },
      { name: "10 leads per month", included: false },
      { name: "Advanced market intelligence", included: false },
      { name: "Unlimited leads", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Advanced features for professionals",
    price: 49,
    period: "month",
    features: [
      { name: "Basic marketplace access", included: true },
      { name: "Community forum access", included: true },
      { name: "Full resource library", included: true },
      { name: "Enhanced profile listing", included: true },
      { name: "Market intelligence dashboard", included: true },
      { name: "Priority profile listing", included: true },
      { name: "Deal matching technology", included: true },
      { name: "10 leads per month", included: true },
      { name: "Advanced market intelligence", included: false },
      { name: "Unlimited leads", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Premium features for businesses",
    price: 199,
    period: "month",
    features: [
      { name: "Basic marketplace access", included: true },
      { name: "Community forum access", included: true },
      { name: "Full resource library", included: true },
      { name: "Enhanced profile listing", included: true },
      { name: "Market intelligence dashboard", included: true },
      { name: "Priority profile listing", included: true },
      { name: "Deal matching technology", included: true },
      { name: "10 leads per month", included: true },
      { name: "Advanced market intelligence", included: true },
      { name: "Unlimited leads", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

// Testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "FunderIntel Premium has transformed how we connect with lenders. The deal matching technology alone has increased our funding success rate by 35%.",
    author: "Sarah Johnson",
    title: "CEO, Premier Business Funding",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    quote:
      "The market intelligence dashboard gives us insights that we couldn't find anywhere else. It's like having a research team working for you 24/7.",
    author: "Michael Chen",
    title: "Managing Director, Growth Capital Partners",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    quote:
      "As a broker, the lead generation features have been invaluable. I'm connecting with qualified businesses that are actually looking for funding.",
    author: "Emily Rodriguez",
    title: "Senior Loan Officer, Rodriguez Financial",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
]

export default function PremiumPage() {
  const [billingPeriod, setBillingPeriod] = useState("month")

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Unlock Premium <span className="gold-gradient">Features</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Choose the plan that's right for your business and take your lending operations to the next level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. All plans include access to our core features.
            </p>

            <div className="inline-flex items-center bg-gray-100 p-1 rounded-full">
              <Tabs defaultValue="month" value={billingPeriod} onValueChange={setBillingPeriod} className="w-full">
                <TabsList className="bg-transparent">
                  <TabsTrigger
                    value="month"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="year"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6"
                  >
                    Annually <span className="text-xs ml-1 text-accent">Save 20%</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white rounded-lg shadow-sm border ${
                  plan.popular ? "border-accent" : "border-gray-200"
                } overflow-hidden relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      ${billingPeriod === "year" ? Math.round(plan.price * 0.8) : plan.price}
                    </span>
                    <span className="text-gray-500">/{billingPeriod}</span>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent hover:bg-accent-light text-secondary"
                        : "bg-primary hover:bg-primary-dark text-white"
                    } transition-colors duration-500`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0.5}
          >
            <p className="text-gray-600 flex items-center justify-center">
              <HelpCircle className="h-4 w-4 mr-2 text-primary" />
              Need help choosing the right plan?{" "}
              <Link href="/contact" className="text-accent hover:underline ml-1">
                Contact our sales team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Premium Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the powerful tools and features that come with our premium plans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.1}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Intelligence Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Access real-time data and analytics on the business lending market, including funding trends, interest
                rates, and competitor analysis.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.2}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deal Matching Technology</h3>
              <p className="text-gray-600 text-sm">
                Our proprietary algorithm matches lenders with the right borrowers based on specific criteria,
                increasing funding success rates.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.3}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-gray-600 text-sm">
                Receive qualified leads directly to your inbox, with detailed information about businesses seeking
                funding.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.4}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Priority Profile Listing</h3>
              <p className="text-gray-600 text-sm">
                Your profile appears at the top of search results, increasing visibility to potential clients and
                partners.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.5}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Resources</h3>
              <p className="text-gray-600 text-sm">
                Access premium guides, templates, and industry reports not available to basic members.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.6}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">
                Enterprise members receive personalized support from a dedicated account manager to help maximize
                results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from industry professionals who have transformed their business with our premium features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index * 0.1 + 0.2}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="inline-block h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our premium plans</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.1}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade or downgrade my plan at any time?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time and the new features will be immediately available. If you
                downgrade, the changes will take effect at the start of your next billing cycle.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.2}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a contract or commitment period?</h3>
              <p className="text-gray-600">
                No, all our plans are subscription-based with no long-term contracts. You can cancel at any time, and
                your subscription will remain active until the end of your current billing period.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.3}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How do the leads work in the Pro and Enterprise plans?
              </h3>
              <p className="text-gray-600">
                Pro members receive 10 qualified leads per month, while Enterprise members receive unlimited leads.
                These are businesses actively seeking funding that match your specified criteria. Leads are delivered
                directly to your dashboard and email.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0.4}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For
                Enterprise plans, we also offer invoicing options for annual subscriptions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Upgrade Your Experience?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are growing their business with FunderIntel Premium.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-secondary transition-colors duration-500"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-500"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

