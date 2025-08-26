"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 animate-slide-in-left">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">SecureGuard Insurance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-muted-foreground hover:text-foreground transition-colors ${
                pathname === item.href ? "text-foreground font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/quote">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-in-left">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-muted-foreground hover:text-foreground transition-colors ${
                  pathname === item.href ? "text-foreground font-medium" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
