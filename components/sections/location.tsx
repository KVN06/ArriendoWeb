"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Bus, ShoppingBag, GraduationCap, Hospital } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const nearbyPlaces = [
  { icon: Bus, name: "Buses al centro", distance: "En la esquina" },
  { icon: ShoppingBag, name: "Tiendas y panaderías", distance: "2 min caminando" },
  { icon: GraduationCap, name: "Colegios", distance: "5 min" },
  { icon: Hospital, name: "Centro de salud", distance: "10 min" },
]

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Ubicación
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Dónde queda el apartamento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos en José María Obando, un sector residencial y concurrido de Popayán. Tienes muy buena conexión a transporte y comercio, con movimiento normal de ciudad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden rounded-3xl aspect-[16/11] sm:aspect-[4/3] min-h-[280px] sm:min-h-[360px] lg:aspect-auto lg:h-full lg:min-h-[520px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0098!2d-76.6131!3d2.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3003e65cb26d8d%3A0x8e15c2ed33789bd1!2sCl.%206%20%2322-18%2C%20Popay%C3%A1n%2C%20Cauca!5e0!3m2!1ses!2sco!4v1645564757026!5m2!1ses!2sco"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del apartamento - Calle 6 #22-18, José María Obando, Popayán"
            />
            {/* Map Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Address Card */}
            <Card className="mb-8 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección exacta</h3>
                    <p className="text-muted-foreground">
                      Calle 6 #22-18<br />
                      Barrio José María Obando<br />
                      Popayán, Cauca, Colombia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Description */}
            <div className="mb-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Sobre el barrio</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                José María Obando combina vida residencial con movimiento comercial. Algunos días de la semana y fines de semana puede haber más flujo de personas y vehículos, por lo que el ruido puede subir en ciertas franjas. A cambio, tienes buses cerca, tiendas a pocos minutos y acceso rápido al centro. Es una zona práctica para quien prioriza ubicación, conectividad y servicios alrededor.
              </p>
            </div>

            {/* Nearby Places */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Qué hay cerca
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => {
                  const Icon = place.icon
                  return (
                    <motion.div
                      key={place.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">{place.name}</div>
                        <div className="text-xs text-muted-foreground">{place.distance}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
