import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="bg-background border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-2xl">
          Acme
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/docs">Docs</Link>
          </nav>
          {/* Replace the login/signup buttons in the desktop view */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" variant="accent" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through the site.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Link href="/pricing">Pricing</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/docs">Docs</Link>
              </div>
              {/* Replace the login/signup buttons in the mobile view */}
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button variant="accent" asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

