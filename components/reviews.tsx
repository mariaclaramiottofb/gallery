"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "Perfect spot to work and enjoy a coffee. The atmosphere is so calming, and the lattes are consistently amazing.",
    rating: 5,
  },
  {
    name: "James L.",
    text: "Super cute place with amazing drinks. I'm obsessed with their oat milk lattes—best in the city!",
    rating: 5,
  },
  {
    name: "Emma K.",
    text: "One of the best cozy coffee shops in Toronto. The interior is gorgeous and Instagram-worthy.",
    rating: 5,
  },
  {
    name: "Michael T.",
    text: "Great vibes, affordable prices, and the avocado toast is to die for. My new favorite spot.",
    rating: 5,
  },
]

export function Reviews() {
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
      id="reviews"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Rating Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
            What People Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
            Loved by Coffee Enthusiasts
          </h2>
          
          {/* Rating Display */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 5 ? "fill-amber-400 text-amber-400" : "fill-border text-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-light">4.6</span>
              <span className="text-muted-foreground font-[var(--font-inter)]">out of 5</span>
            </div>
            <p className="text-muted-foreground font-[var(--font-inter)]">
              Based on <span className="text-foreground font-medium">252 reviews</span>
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg font-[var(--font-inter)]">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-medium">{testimonial.name}</span>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
