"use client"

import { motion } from "framer-motion"
import { MapPin, Users, ShieldCheck, Leaf } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: MapPin,
    title: "Ubicación tranquila",
    description: "El barrio José María Obando es residencial y seguro. Tiene movimiento en algunos días y fines de semana, con acceso fácil al centro.",
  },
  {
    icon: Users,
    title: "Ambiente familiar",
    description: "Estás en una casa con gente seria y respetuosa. Se busca buena convivencia y un ambiente ordenado para vivir.",
  },
  {
    icon: ShieldCheck,
    title: "Entrada independiente",
    description: "Tienes tu propia entrada, así que no dependes de nadie para entrar o salir. Total privacidad.",
  },
  {
    icon: Leaf,
    title: "Espacios abiertos",
    description: "Los dos patios te dan espacio para respirar, tender ropa, tener plantas o simplemente disfrutar el aire libre.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/gallery-1.jpg"
                alt="Interior del apartamento"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-2xl shadow-2xl border border-border/50 max-w-[220px]"
            >
              <div className="text-3xl font-bold text-primary mb-1">$1.200.000</div>
              <div className="text-sm text-muted-foreground">COP al mes (servicios aparte)</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Por qué te va a gustar
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Un lugar para sentirte en casa
            </h2>
            <p className="text-muted-foreground mb-10 text-pretty">
              No es solo un apartamento: es un espacio cómodo, independiente y bien ubicado. Está en una zona con dinámica urbana normal, ideal para quien valora conexión y cercanía a servicios.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
