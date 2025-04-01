"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, DollarSign, LineChart, Monitor, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Sample statistics
const statistics = [
  {
    number: "5,000+",
    label: "Active Members",
  },
  {
    number: "$2.5B+",
    label: "Funding Facilitated",
  },
  {
    number: "350+",
    label: "Funding Partners",
  },
  {
    number: "98%",
    label: "Broker Satisfaction",
  },
]

// Sample lending categories
const lendingCategories = [
  {
    title: "Merchant Cash Advance",
    description: "Connect with top MCA lenders offering flexible funding options",
    badge: "120+ Lenders",
    icon: <DollarSign className="h-6 w-6 text-accent" />,
    link: "/marketplace/mca",
  },
  {
    title: "Term Loans",
    description: "Find lenders offering competitive rates on business term loans",
    badge: "85+ Lenders",
    icon: <LineChart className="h-6 w-6 text-accent" />,
    link: "/marketplace/term-loans",
  },
  {
    title: "Equipment Financing",
    description: "Specialized lenders for all types of equipment financing needs",
    badge: "60+ Lenders",
    icon: <Monitor className="h-6 w-6 text-accent" />,
    link: "/marketplace/equipment",
  },
]

// Sample featured partners
const featuredPartners = [
  {
    name: "Merchant Connect Capital",
    logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Leading provider of merchant cash advances with flexible terms",
    link: "/partners/merchant-connect",
  },
  {
    name: "Velocity Capital",
    logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Specialized in fast-approval business term loans up to $500K",
    link: "/partners/velocity-capital",
  },
  {
    name: "Apex Funding Solutions",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Premium equipment financing with competitive rates",
    link: "/partners/apex-funding",
  },
]

// Hero slider images
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Business funding dashboard",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Financial growth chart",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Business meeting",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.25, 0.1, 0.25, 1.0], // Improved easing function
      },
    }),
  }

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10"
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                custom={0}
              >
                <span className="text-sm text-white font-medium">The Business Lending Intelligence Platform</span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                custom={1}
              >
                Connecting <span className="gold-gradient">Lenders,</span> <br />
                Brokers & Businesses
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-white/70 max-w-lg"
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                custom={2}
              >
                FunderIntel is the premier marketplace and intelligence platform for the business lending industry,
                connecting funders, brokers, and service providers.
              </motion.p>
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                custom={3}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-secondary font-medium px-8 py-6 text-base transition-all duration-500"
                >
                  Join the Network
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-6 text-base transition-all duration-500"
                >
                  Explore Marketplace
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2 relative">
              <motion.div
                className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div
                  ref={sliderRef}
                  className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {heroSlides.map((slide, index) => (
                    <div key={index} className="min-w-full h-full relative">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-500"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-500"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                        currentSlide === idx ? "bg-accent" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="stats-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-secondary"></div>

      {/* Marketplace Section */}
      <section className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-white/10">
              <span className="text-sm text-white font-medium">Marketplace</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Business Lending Marketplace</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Connect with top lenders, brokers, and service providers in the business lending industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lendingCategories.map((category, index) => (
              <motion.div
                key={index}
                className="category-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="category-badge">{category.badge}</div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-3">
                    {category.icon}
                  </div>
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <Link href={category.link} className="category-button">
                  View Lenders <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <Button className="bg-accent hover:bg-accent-light text-secondary px-8 py-6 text-base transition-all duration-500">
              Explore Full Marketplace <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-reverse bg-secondary-dark"></div>

      {/* Featured Partners */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-white/10">
              <span className="text-sm text-white font-medium">Featured Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top-Rated Funding Providers</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover industry-leading funding solutions from our verified partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="partner-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <div className="relative h-12 w-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{partner.description}</p>
                <Link
                  href={partner.link}
                  className="text-accent hover:text-accent-light flex items-center text-sm font-medium transition-colors duration-500"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-primary"></div>

      {/* Premium Plans Section */}
      <section
        className="py-20 bg-secondary-dark relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary-dark/90"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-white/10">
              <span className="text-sm text-white font-medium">Premium Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unlock Premium Features</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the plan that's right for your business and take your lending operations to the next level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <h3 className="pricing-title">Basic</h3>
              <p className="pricing-description">Essential features for individuals</p>
              <div className="pricing-price">
                $0<span className="text-lg font-normal text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic marketplace access</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community forum access</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Limited resource library</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic profile listing</span>
                </li>
              </ul>

              <Button className="w-full bg-white/10 hover:bg-white/20 text-white transition-all duration-500 py-6">
                Get Started
              </Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="pricing-card pricing-popular"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <div className="absolute -top-3 right-6 bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="pricing-title">Pro</h3>
              <p className="pricing-description">Advanced features for professionals</p>
              <div className="pricing-price">
                $49<span className="text-lg font-normal text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full marketplace access</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority profile listing</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deal matching technology</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10 leads per month</span>
                </li>
              </ul>

              <Button className="w-full bg-accent hover:bg-accent-light text-secondary font-medium transition-all duration-500 py-6">
                Upgrade to Pro
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <h3 className="pricing-title">Enterprise</h3>
              <p className="pricing-description">Premium features for businesses</p>
              <div className="pricing-price">
                $199<span className="text-lg font-normal text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced market intelligence</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited leads</span>
                </li>
                <li className="pricing-feature">
                  <svg className="pricing-check h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>

              <Button className="w-full bg-white/10 hover:bg-white/20 text-white transition-all duration-500 py-6">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-reverse bg-secondary-dark"></div>

      {/* CTA Section */}
      <section
        className="py-20 bg-primary relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/70 mb-10">
              Join thousands of professionals who are growing their business with FunderIntel.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-secondary font-medium px-8 py-6 text-base transition-all duration-500"
              >
                Create Free Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-6 text-base transition-all duration-500"
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

