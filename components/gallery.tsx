"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Latte art and croissant", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-2.jpg", alt: "Cafe interior", span: "md:col-span-1 md:row-span-2" },
  { src: "/images/gallery-3.jpg", alt: "Barista making coffee", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Coffee and pastries", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-5.jpg", alt: "Coffee counter", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-6.jpg", alt: "Avocado toast", span: "md:col-span-1 md:row-span-1" },
]

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-secondary/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
            Visual Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            From Our Feed
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-[var(--font-inter)]">
            Moments captured at Lazy Barista—where every cup tells a story
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                image.span
              } ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform"
              }}
            >
              <div className={`relative w-full ${
                image.span.includes("row-span-2") ? "aspect-[3/4] md:aspect-[2/3]" : "aspect-square"
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
