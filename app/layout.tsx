import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LiveChatWidget } from "@/components/live-chat-widget"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "FunderIntel | The Business Lending Intelligence Platform",
  description:
    "The premier marketplace and intelligence platform for the business lending industry, connecting funders, brokers, and service providers.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-secondary text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
          <LiveChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'