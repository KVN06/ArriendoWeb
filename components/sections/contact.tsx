import { Phone, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Te interesa? Hablemos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Si quieres conocer el apartamento o tienes alguna pregunta, llámanos o escríbenos por WhatsApp. Con gusto te atendemos.
          </p>
          <p className="text-muted-foreground/90 max-w-2xl mx-auto text-sm mt-3">
            Requisitos de arriendo: contactar directamente a la dueña.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Respuesta rápida:</span> normalmente respondemos en menos de 1 hora dentro del horario de atención.
            </p>
          </div>

          <Card className="border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Llamadas (preferido)</div>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </CardContent>
          </Card>

          <a
            href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hola! Vi el apartamento en la página web y me interesa conocerlo.`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <span className="font-semibold text-foreground">{siteConfig.phoneDisplay}</span>
                </div>
              </CardContent>
            </Card>
          </a>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Horario de atención:</span> lunes a sábado, de 8am a 6pm.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hola! Vi el apartamento en la página web y quiero agendar una visita.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Agendar visita
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Volver a ver fotos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
