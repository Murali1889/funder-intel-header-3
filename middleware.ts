import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define public routes that don't require authentication
const publicRoutes = [
  "/",
  "/blog",
  "/login",
  "/signup",
  "/forgot-password",
  "/forum/recent-news",
  "/forum/podcast",
  "/providers/mca-funders",
]

// Define public path prefixes that don't require authentication
const publicPathPrefixes = ["/blog/", "/forum/recent-news/", "/forum/podcast/", "/providers/mca-funders/"]

export function middleware(request: NextRequest) {
  // Simply allow all requests to pass through without any redirects
  return NextResponse.next()
}

export const config = {
  // Match all request paths except for static files, api routes, and _next
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$).*)"],
}

