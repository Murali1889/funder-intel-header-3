"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import { motion } from "framer-motion"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-700",
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-md" : "bg-primary/80 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <div className="bg-accent rounded-md w-10 h-10 flex items-center justify-center mr-3">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-bold text-xl text-white">FunderIntel</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <motion.nav
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <NavItem label="Marketplace" href="/marketplace" />
              <NavItem
                label="Lenders"
                href="/lenders"
                hasDropdown
                items={[
                  { name: "MCA Providers", href: "/lenders/mca" },
                  { name: "Term Loan Lenders", href: "/lenders/term-loans" },
                  { name: "Equipment Financing", href: "/lenders/equipment" },
                  { name: "Line of Credit", href: "/lenders/loc" },
                  { name: "SBA Lenders", href: "/lenders/sba" },
                ]}
              />
              <NavItem
                label="Brokers"
                href="/brokers"
                hasDropdown
                items={[
                  { name: "Find Brokers", href: "/brokers/directory" },
                  { name: "Broker Resources", href: "/brokers/resources" },
                  { name: "Certification", href: "/brokers/certification" },
                ]}
              />
              <NavItem
                label="Resources"
                href="/resources"
                hasDropdown
                items={[
                  { name: "Blog", href: "/blog" },
                  { name: "Market Intelligence", href: "/resources/intelligence" },
                  { name: "Industry Reports", href: "/resources/reports" },
                  { name: "Webinars", href: "/resources/webinars" },
                ]}
              />
              <NavItem label="Community" href="/community" />
              <NavItem label="Premium" href="/premium" className="text-accent" />
            </motion.nav>
          </div>

          {/* Right side - Login and Search */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="hidden lg:flex items-center text-white text-sm mr-6 space-x-6">
              <Link href="/login" className="hover:text-accent transition-colors duration-500">
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-accent/10 border border-accent/30 hover:bg-accent hover:text-secondary px-4 py-2 rounded-md transition-all duration-500"
              >
                Sign Up
              </Link>
            </div>

            <div className="relative hidden sm:block">
              <Input
                type="search"
                placeholder="Search"
                className="w-[180px] h-10 bg-white/5 border-0 text-white placeholder:text-gray-500 focus-visible:ring-accent/30 rounded-md text-sm"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-10 w-10 bg-accent hover:bg-accent-light rounded-l-none p-0 transition-colors duration-500"
              >
                <Search className="h-4 w-4 text-secondary" />
                <span className="sr-only">Search</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white ml-2 lg:hidden p-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <MobileNav setIsOpen={setIsMobileMenuOpen} />}
    </header>
  )
}

interface NavItemProps {
  label: string
  href: string
  items?: { name: string; href: string }[]
  className?: string
  hasDropdown?: boolean
}

function NavItem({ label, href, items, className, hasDropdown }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link
        href={href}
        className={cn(
          "flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-500 whitespace-nowrap hover:text-accent",
          isOpen && "text-accent",
          className,
        )}
      >
        {label}
        {hasDropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-3 w-3 ml-1 transition-transform duration-500", isOpen && "rotate-180")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      {items && isOpen && (
        <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-primary z-50 animate-in fade-in zoom-in-95 duration-300 border border-white/5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-white hover:bg-primary-light hover:text-accent transition-colors duration-500"
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

