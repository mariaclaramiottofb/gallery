"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const menuCategories = [
  {
    name: "Espresso",
    items: [
      { name: "Single Shot", price: "$2.50" },
      { name: "Double Shot", price: "$3.50" },
      { name: "Americano", price: "$3.75" },
    ],
  },
  {
    name: "Lattes",
    items: [
      { name: "Classic Latte", price: "$4.50" },
      { name: "Vanilla Latte", price: "$5.00" },
      { name: "Oat Milk Latte", price: "$5.25" },
    ],
  },
  {
    name: "Cappuccino",
    items: [
      { name: "Classic Cappuccino", price: "$4.25" },
      { name: "Dry Cappuccino", price: "$4.25" },
      { name: "Iced Cappuccino", price: "$4.75" },
    ],
  },
  {
    name: "Pastries",
    items: [
      { name: "Croissant", price: "$3.50" },
      { name: "Almond Danish", price: "$4.00" },
      { name: "Chocolate Muffin", price: "$3.75" },
    ],
  },
  {
    name: "Light Bites",
    items: [
      { name: "Avocado Toast", price: "$8.50" },
      { name: "Granola Bowl", price: "$7.00" },
      { name: "Breakfast Sandwich", price: "$9.00" },
    ],
  },
]

export function Menu() {
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
      id="menu"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
            What We Serve
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-[var(--font-inter)]">
            From perfectly pulled espresso to freshly baked pastries, every item is crafted with care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-serif text-2xl font-medium mb-6 pb-4 border-b border-border">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center group">
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors font-[var(--font-inter)]">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground font-serif">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 py-6 text-base border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 font-[var(--font-inter)]"
          >
            See Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
