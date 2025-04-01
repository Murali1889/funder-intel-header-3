"use client"

import Link from "next/link"
import { DollarSign, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 py-16">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-accent rounded-md w-10 h-10 flex items-center justify-center mr-3">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-bold text-xl text-white">FunderIntel</span>
            </div>
            <p className="text-sm text-gray-400 mb-8">
              The premier marketplace and intelligence platform for the business lending industry.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors duration-500">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors duration-500">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors duration-500">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Phone className="h-4 w-4 mr-2" />
              <span>954-861-0821</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-accent transition-colors duration-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                >
                  Community Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                >
                  Broker Course
                </Link>
              </li>
              <li>
                <Link
                  href="/premium"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                >
                  Premium Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                >
                  Book A Call
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                >
                  Advertise With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Funders Directory */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Funders Directory</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/lenders/mca"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    MCA Providers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lenders/term-loans"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    Term Loan Lenders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lenders/loc"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    Line of Credit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lenders/startup"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    Startup Financing
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/lenders/equipment"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    Equipment Lenders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lenders/invoice"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    Invoice Factoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lenders/cannabis"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    Cannabis Funding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lenders/sba"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-500"
                  >
                    SBA Lenders
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest industry insights and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-0 text-white placeholder:text-gray-500 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-accent hover:bg-accent-light text-secondary px-4 py-2 rounded-r-md text-sm font-medium transition-colors duration-500">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2021-2025 by Funder Intel LLC. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors duration-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors duration-500">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 hover:text-white transition-colors duration-500">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

