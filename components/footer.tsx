import { Instagram, Facebook, Twitter } from "lucide-react"

const quickLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit Us", href: "#visit" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-light mb-4">Lazy Barista</h3>
            <p className="text-background/70 leading-relaxed font-[var(--font-inter)] text-sm">
              A cozy Toronto coffee spot for coffee, calm, and good taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm font-[var(--font-inter)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Visit Us</h4>
            <address className="text-background/70 not-italic text-sm font-[var(--font-inter)] mb-6">
              157 Queens Quay E<br />
              Toronto, ON M5A 1B4
            </address>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm font-[var(--font-inter)]">
            &copy; {new Date().getFullYear()} Lazy Barista. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60 font-[var(--font-inter)]">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
