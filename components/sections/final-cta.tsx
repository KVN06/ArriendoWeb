import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Sparkles, ShieldCheck, Clock3 } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-secondary to-background">
          <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-10 lg:p-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Disponible para arriendo inmediato
              </span>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                ¿Listo para conocer tu próximo hogar?
              </h3>

              <p className="text-muted-foreground mb-6 max-w-xl text-pretty">
                Agenda tu visita por WhatsApp o llamada y conoce disponibilidad y condiciones.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1.5 text-xs text-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Trato directo con la dueña
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1.5 text-xs text-foreground">
                  <Clock3 className="w-3.5 h-3.5 text-primary" />
                  Atención lunes a sábado
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hola! Vi el apartamento en la página web y me interesa agendar una visita.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full px-6 py-5 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    Agendar por WhatsApp
                  </Button>
                </a>

                <a href={`tel:${siteConfig.phoneE164}`}>
                  <Button variant="outline" className="rounded-full px-6 py-5 w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    Llamar ahora
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src="/images/apartamento.jpg"
                    alt="Vista principal del apartamento"
                    fill
                    quality={80}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src="/images/comedorcocina1.jpg"
                    alt="Zona de cocina y comedor"
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src="/images/patiogrande1.jpg"
                    alt="Patio grande del apartamento"
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
