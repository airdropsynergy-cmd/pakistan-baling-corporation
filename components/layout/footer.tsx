import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products } from "@/data/products"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 relative">
  <Image
    src="/placeholder-logo.png"
    alt="Pakistan Baling Corporation"
    fill
    className="object-contain"
  />
</div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">Pakistan</span>
                <span className="text-xs text-background/60 -mt-1 tracking-widest uppercase">
                  Baling Corporation
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Leading supplier and exporter of premium biomass products for animal feed, 
              biomass fuel, and agricultural applications. Serving global markets with 
              quality and reliability.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-3">
              {products.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-background/70">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>North Western Zone, Port Qasim Export District, Karachi, Pakistan</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-background/70">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+92 300 9000000</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-background/70">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>airdropsynergy@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
              <p className="text-xs text-background/60 mb-3">
                Subscribe for updates on products and industry news.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40 text-sm"
                />
                <Button 
                  type="submit" 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              {new Date().getFullYear()} BioMass Global. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <Link href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
