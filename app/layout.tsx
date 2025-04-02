"use client"
import type React from "react"
// import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import { FeedbackProvider } from '@/context/FeedbackContext'
import FeedbackTool from '../components/FeedbackTool';
import Chatbox from '../components/Chatbox'
const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "FunderIntel - Business Lending Intelligence Platform",
//   description:
//     "The premier marketplace and intelligence platform for the business lending industry, connecting funders, brokers, and service providers.",
//     generator: 'v0.dev'
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <FeedbackProvider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              {children}
              <SiteFooter />
              <FeedbackTool
              />
            </div>
          </FeedbackProvider>
          <Chatbox/>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'