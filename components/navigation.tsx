"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#visit" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
          Lazy Barista
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300 font-[var(--font-inter)]"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="outline"
            className="ml-4 rounded-full px-6 border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 font-[var(--font-inter)]"
          >
            Visit Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="outline"
            className="mt-2 rounded-full border-foreground/20 hover:bg-foreground hover:text-background"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Visit Us
          </Button>
        </nav>
      </div>
    </header>
  )
}
