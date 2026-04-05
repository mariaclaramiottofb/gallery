"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div 
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Image
              src="/images/gallery-2.jpg"
              alt="Lazy Barista interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Where Good Coffee Meets Good Company
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed font-[var(--font-inter)]">
              <p>
                Nestled in the heart of Toronto&apos;s waterfront, Lazy Barista is more than just a coffee shop—it&apos;s a sanctuary for those who appreciate the finer, slower moments in life.
              </p>
              <p>
                We believe great coffee shouldn&apos;t come with a great price tag. Our carefully curated menu offers everything from perfectly pulled espressos to creamy lattes, all at prices that let you come back again and again.
              </p>
              <p>
                Whether you&apos;re catching up with friends, diving into a good book, or finding a quiet corner to work, Lazy Barista welcomes you to stay as long as you&apos;d like. Pull up a chair, take a breath, and let the world slow down for a while.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-light text-foreground">4.6</p>
                <p className="text-sm text-muted-foreground mt-1 font-[var(--font-inter)]">Star Rating</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-light text-foreground">252</p>
                <p className="text-sm text-muted-foreground mt-1 font-[var(--font-inter)]">Reviews</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-light text-foreground">$1-10</p>
                <p className="text-sm text-muted-foreground mt-1 font-[var(--font-inter)]">Price Range</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
