"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface MobileNavProps {
  setIsOpen: (isOpen: boolean) => void
}

export function MobileNav({ setIsOpen }: MobileNavProps) {
  return (
    <motion.div
      className="fixed inset-0 top-20 z-50 bg-primary lg:hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full overflow-y-auto pb-20 px-4">
        <div className="flex flex-col py-6">
          {/* Search in mobile menu */}
          <div className="relative mb-6">
            <Input
              type="search"
              placeholder="Search"
              className="pr-10 h-12 bg-primary-light border-0 text-white placeholder:text-gray-500 focus-visible:ring-accent/30 rounded-md text-sm"
            />
            <Button
              size="icon"
              className="absolute right-0 top-0 h-12 w-12 bg-accent hover:bg-accent-light rounded-l-none p-0 transition-colors duration-300"
            >
              <Search className="h-4 w-4 text-secondary" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          <div className="flex items-center justify-center mb-8 text-white text-sm space-x-4">
            <Link
              href="/login"
              className="w-full px-4 py-3 border border-white/10 rounded-md hover:border-accent hover:text-accent transition-all duration-300 text-center"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="w-full px-4 py-3 bg-accent hover:bg-accent-light rounded-md text-secondary transition-colors duration-300 text-center font-medium"
            >
              Sign Up
            </Link>
          </div>

          <div className="space-y-1">
            <MobileNavItem label="Marketplace" href="/marketplace" />
            <MobileNavItem
              label="Lenders"
              href="/lenders"
              items={[
                { name: "MCA Providers", href: "/lenders/mca" },
                { name: "Term Loan Lenders", href: "/lenders/term-loans" },
                { name: "Equipment Financing", href: "/lenders/equipment" },
                { name: "Line of Credit", href: "/lenders/loc" },
                { name: "SBA Lenders", href: "/lenders/sba" },
              ]}
            />
            <MobileNavItem
              label="Brokers"
              href="/brokers"
              items={[
                { name: "Find Brokers", href: "/brokers/directory" },
                { name: "Broker Resources", href: "/brokers/resources" },
                { name: "Certification", href: "/brokers/certification" },
              ]}
            />
            <MobileNavItem
              label="Resources"
              href="/resources"
              items={[
                { name: "Blog", href: "/blog" },
                { name: "Market Intelligence", href: "/resources/intelligence" },
                { name: "Industry Reports", href: "/resources/reports" },
                { name: "Webinars", href: "/resources/webinars" },
              ]}
            />
            <MobileNavItem label="Community" href="/community" />
            <MobileNavItem label="Premium" href="/premium" className="text-accent" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface MobileNavItemProps {
  label: string
  href: string
  items?: { name: string; href: string }[]
  className?: string
}

function MobileNavItem({ label, href, items, className }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/5 py-3">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className={cn(
            "py-2 text-base font-medium text-white hover:text-accent transition-colors duration-300 flex-1",
            className,
          )}
        >
          {label}
        </Link>
        {items && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-accent transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <ChevronRight className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-90")} />
          </button>
        )}
      </div>
      {items && isOpen && (
        <motion.div
          className="mt-2 ml-4 space-y-1"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-2 text-sm text-gray-400 hover:text-white hover:text-accent transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )
}

