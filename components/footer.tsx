import { Phone, MapPin, Heart } from "lucide-react"
import { siteConfig } from "@/lib/site"

const footerLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Fotos", href: "#gallery" },
  { name: "El Apto", href: "#details" },
  { name: "Precio", href: "#pricing" },
  { name: "Contacto", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#2a221d] text-white py-16 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="font-serif text-2xl font-bold mb-4 block">
              {siteConfig.brandName}
            </a>
            <p className="text-white/70 text-sm max-w-xs text-pretty mb-4 dark:text-zinc-300/80">
              Primer piso independiente con 3 habitaciones, 2 baños y 2 patios.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm dark:text-zinc-300/80 dark:hover:text-zinc-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 md:justify-end">
                <Phone className="w-4 h-4 text-white/50 dark:text-zinc-400" />
                <a href={`tel:${siteConfig.phoneE164}`} className="text-white/70 hover:text-white transition-colors text-sm dark:text-zinc-300/80 dark:hover:text-zinc-100">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 md:justify-end md:text-right">
                <MapPin className="w-4 h-4 text-white/50 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm dark:text-zinc-300/80">
                  {siteConfig.addressLine}<br />
                  {siteConfig.neighborhood}, {siteConfig.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm dark:text-zinc-400">
            © {new Date().getFullYear()} Apartamento en alquiler. Popayán, Cauca.
          </p>
          <p className="text-white/50 text-sm dark:text-zinc-400 text-center sm:text-right leading-relaxed">
            <span className="inline-flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-400 fill-red-400" /> en la Ciudad Blanca
            </span>
            <br />
            <span>por Kevin Benavides</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
