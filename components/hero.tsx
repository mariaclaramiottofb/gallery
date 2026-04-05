"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = hero.offsetHeight
      const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.8))
      const scale = 1 + scrollY * 0.0003
      
      hero.style.setProperty("--scroll-opacity", opacity.toString())
      hero.style.setProperty("--scroll-scale", scale.toString())
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: "scale(var(--scroll-scale, 1))" }}
      >
        <Image
          src="/images/hero-coffee.jpg"
          alt="Beautiful latte art at Lazy Barista"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/70" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity: "var(--scroll-opacity, 1)" }}
      >
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-foreground/70 mb-6 font-[var(--font-inter)] animate-fade-in">
          Toronto&apos;s Cozy Coffee Spot
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 animate-fade-in-up">
          Lazy Barista
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-[var(--font-inter)] font-light animate-fade-in-up-delayed">
          A cozy Toronto coffee spot for coffee, calm, and good taste
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed-2">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 font-[var(--font-inter)]"
            asChild
          >
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-base border-foreground/30 bg-background/30 backdrop-blur-sm hover:bg-background/60 transition-all duration-300 hover:scale-105 font-[var(--font-inter)]"
            asChild
          >
            <a href="#visit">Visit Us</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
