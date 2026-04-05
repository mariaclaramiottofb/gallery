"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Utensils, ShoppingBag, XCircle } from "lucide-react"

const services = [
  { icon: Utensils, label: "Dine-in", available: true },
  { icon: ShoppingBag, label: "Takeout", available: true },
  { icon: XCircle, label: "No Delivery", available: false },
]

export function Visit() {
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
      id="visit"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-secondary/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Card */}
          <div
            className={`relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0711898877!2d-79.36451642346075!3d43.64485897110284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb34debeebbb%3A0x89024cd2f4c7c0db!2s157%20Queens%20Quay%20E%2C%20Toronto%2C%20ON%20M5A%201B4!5e0!3m2!1sen!2sca!4v1709837200000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1]"
            />
            <div className="absolute inset-0 pointer-events-none border-8 border-card rounded-3xl" />
          </div>

          {/* Info Card */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-[var(--font-inter)]">
              Find Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Come Visit Us
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium mb-1">Address</h3>
                <p className="text-muted-foreground font-[var(--font-inter)]">
                  157 Queens Quay E<br />
                  Toronto, ON M5A 1B4
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium mb-1">Hours</h3>
                <p className="text-muted-foreground font-[var(--font-inter)]">
                  Mon - Fri: 7:00 AM - 6:00 PM<br />
                  Sat - Sun: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-card rounded-2xl p-6 mb-8">
              <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
              <div className="flex flex-wrap gap-4">
                {services.map((service) => (
                  <div
                    key={service.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                      service.available
                        ? "bg-accent/30 text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm font-[var(--font-inter)]">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 font-[var(--font-inter)]"
              asChild
            >
              <a
                href="https://www.google.com/maps/dir//157+Queens+Quay+E,+Toronto,+ON+M5A+1B4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
