import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { Visit } from "@/components/visit"
import { InstagramSection } from "@/components/instagram"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <Reviews />
      <Visit />
      <InstagramSection />
      <Footer />
    </main>
  )
}
