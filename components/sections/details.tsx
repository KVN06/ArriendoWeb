import { 
  Bed, 
  Bath, 
  Car,
  TreePine,
  Wifi, 
  Tv, 
  Utensils,
  Droplets,
  Flame,
  WashingMachine,
  Warehouse,
  Sofa
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const details = [
  { icon: Bed, label: "Habitaciones", value: "3" },
  { icon: Bath, label: "Baños", value: "2" },
  { icon: TreePine, label: "Patios", value: "2" },
  { icon: Car, label: "Parqueadero", value: "Sí", note: "Contactar al dueño para acordar" },
]

const spaces = [
  { icon: Sofa, label: "Sala con garaje", description: "Espacio amplio para tu sala y guardar tu carro o moto" },
  { icon: Utensils, label: "Cocina-comedor", description: "Cocina abierta integrada con zona de comedor" },
  { icon: Bed, label: "3 Habitaciones", description: "Todas con buena ventilación y luz natural" },
  { icon: Bath, label: "2 Baños completos", description: "Uno principal y otro auxiliar" },
  { icon: TreePine, label: "Patio grande", description: "Perfecto para lavar, secar ropa o tener plantas" },
  { icon: TreePine, label: "Patio pequeño", description: "Ideal para una zona de lavado adicional" },
  { icon: Warehouse, label: "Cuarto de chécheres", description: "Espacio extra para guardar tus cosas" },
  { icon: WashingMachine, label: "Zona de lavado", description: "Conexiones para lavadora listas" },
]

const amenities = [
  { icon: Wifi, label: "Cableado para internet/WiFi" },
  { icon: Droplets, label: "Servicio de agua" },
  { icon: Flame, label: "Gas natural" },
  { icon: Tv, label: "Conexión TV/Cable" },
  { icon: Utensils, label: "Cocina con mesón y punto de gas" },
  { icon: Car, label: "Parqueadero techado" },
]

export function DetailsSection() {
  return (
    <section id="details" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            El Apartamento
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que tiene el apto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Distribución clara, entrada independiente y espacios funcionales para vivir cómodo.
          </p>
        </div>

        {/* Details Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {details.map((detail) => {
            const Icon = detail.icon
            return (
              <div key={detail.label} className="h-full">
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-card border-border/50 hover:border-primary/30">
                  <CardContent className="h-full p-6 md:p-8 text-center flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{detail.value}</div>
                    <div className="text-muted-foreground text-sm">{detail.label}</div>
                    <div className="text-xs text-muted-foreground/80 mt-1 min-h-4">
                      {detail.note ?? "\u00A0"}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Spaces */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Los espacios del apartamento
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {spaces.map((space) => {
              const Icon = space.icon
              return (
                <div
                  key={space.label}
                  className="p-5 rounded-xl bg-secondary/50 hover:bg-secondary hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{space.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-13">{space.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Qué más incluye
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {amenities.map((amenity) => {
              const Icon = amenity.icon
              return (
                <div
                  key={amenity.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{amenity.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
