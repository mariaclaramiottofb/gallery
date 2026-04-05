"use client"

import { useEffect, useRef, useState } from "react"
import { Coffee, Heart, Wallet, Utensils } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Beautiful Coffee",
    description: "Expertly crafted drinks with stunning latte art that tastes as good as it looks.",
  },
  {
    icon: Heart,
    title: "Cozy Atmosphere",
    description: "Warm, inviting space designed for relaxation, conversation, and creative work.",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    description: "Premium quality coffee and treats at prices that make every visit a pleasure.",
  },
  {
    icon: Utensils,
    title: "Dine-in & Takeout",
    description: "Stay and enjoy the ambiance or grab your favorites to go—we've got you covered.",
  },
]

export function Features() {
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
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-secondary/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
            Why People Love Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            The Lazy Barista Experience
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-[var(--font-inter)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
