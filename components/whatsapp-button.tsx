import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hola! Estoy interesado en el apartamento en alquiler en Popayán.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform transition-colors hover:scale-110 hover:bg-green-600 active:scale-95 md:flex"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  )
}
