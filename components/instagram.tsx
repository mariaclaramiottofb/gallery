"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstagramSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-background to-secondary/30"
    >
      <div 
        className={`container mx-auto max-w-3xl text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
          <Instagram className="w-10 h-10 text-white" />
        </div>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
          Follow Along
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
          @lazybarista.to
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed font-[var(--font-inter)]">
          Join our community of coffee lovers. Share your Lazy Barista moments and tag us for a chance to be featured.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full px-10 py-6 text-base border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 font-[var(--font-inter)]"
          asChild
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </a>
        </Button>
      </div>
    </section>
  )
}
