import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="container mx-auto grid grid-cols-2 gap-3">
        <a href={`tel:${siteConfig.phoneE164}`}>
          <Button variant="outline" className="w-full rounded-full">
            <Phone className="mr-2 h-4 w-4" />
            Llamar
          </Button>
        </a>

        <a
          href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hola%2C%20vi%20el%20apartamento%20y%20quiero%20agendar%20una%20visita.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full rounded-full bg-green-600 text-white hover:bg-green-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  )
}
