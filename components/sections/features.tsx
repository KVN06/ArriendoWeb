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
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/fast/salagaraje2.jpg"
                alt="Interior del apartamento"
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Por qué te va a gustar
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Un lugar para sentirte en casa
            </h2>
            <p className="text-muted-foreground mb-10 text-pretty">
              Cómodo, bien ubicado y con acceso rápido a transporte, comercio y servicios.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
