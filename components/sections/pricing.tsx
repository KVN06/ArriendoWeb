"use client"

import { motion } from "framer-motion"
import { Check, Home, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const incluido = [
  "Apartamento completamente independiente",
  "Se entrega vacío (sin muebles ni electrodomésticos)",
  "3 habitaciones amplias",
  "2 baños completos",
  "Sala/garaje para tu vehículo",
  "Cocina-comedor integrado",
  "2 patios (grande y pequeño)",
  "Cuarto para guardar cosas",
  "Cableado listo para internet/WiFi",
]

const importante = [
  "Canon: $1.200.000 negociables",
  "Depósito: Un mes de arriendo",
  "Contrato mínimo: 6 meses",
  "Servicios públicos independientes (agua, energía y gas natural)",
  "Servicios no incluidos en el valor mensual",
  "Mascotas: sujeto a aprobación de la dueña",
]

const requisitos = [
  "Los requisitos se informan directamente con la dueña",
  "Para conocer condiciones y documentos, comunícate por llamada o WhatsApp",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
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
            Arriendo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cuánto cuesta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un precio justo por un apartamento completo y bien ubicado. Sin sorpresas ni cobros escondidos.
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <Card className="relative border-primary shadow-xl shadow-primary/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full">
                <Home className="w-3 h-3" />
                Disponible ahora
              </span>
            </div>
            <CardHeader className="text-center pt-10 pb-4">
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">Canon mensual</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-foreground">$1.200.000</span>
                <span className="text-muted-foreground">COP al mes (servicios aparte)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Se entrega vacío. Servicios no incluidos en el valor mensual.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Sin administración</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Disponible ahora</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Qué incluye el arriendo:</h4>
                <ul className="space-y-2.5">
                  {incluido.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-4 rounded-xl bg-secondary/50">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  Bueno saber:
                </h4>
                <ul className="space-y-2">
                  {importante.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-4 rounded-xl border border-border/50 bg-card">
                <h4 className="font-semibold text-foreground mb-3">Requisitos</h4>
                <ul className="space-y-2">
                  {requisitos.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <Button 
                  className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Quiero más información
                </Button>
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          ¿Tienes dudas sobre algo? Escríbenos sin compromiso, con gusto te explicamos todo.
        </motion.p>
      </div>
    </section>
  )
}
