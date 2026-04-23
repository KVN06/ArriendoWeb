import { ChevronDown, MapPin, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/apartamento.jpg"
          alt="Apartamento en alquiler en Popayán"
          fill
          priority
          quality={80}
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center pt-8 md:pt-10 pb-24 md:pb-28">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
          <Home className="w-4 h-4 text-primary" />
          <span className="text-white/90 text-sm font-medium">Disponible para arriendo</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Tu nuevo hogar
          <br />
          <span className="text-primary-foreground/80">en Popayán</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 text-pretty">
          Primer piso independiente, 3 habitaciones, 2 baños, 2 patios y parqueadero a convenir.
        </p>

        <div className="flex items-center justify-center gap-2 text-white/70 mb-8">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Calle 6 #22-18, José María Obando, Popayán</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="transition-transform hover:scale-[1.03] active:scale-[0.98]">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-primary/25"
            >
              Me interesa, quiero verlo
            </Button>
          </a>
          <a href="#gallery" className="transition-transform hover:scale-[1.03] active:scale-[0.98]">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm"
            >
              Ver fotos
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 md:mt-14 grid grid-cols-3 gap-5 md:gap-8 max-w-lg mx-auto">
          {[
            { value: "3", label: "Habitaciones" },
            { value: "2", label: "Baños" },
            { value: "2", label: "Patios" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#gallery"
          className="animate-float flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Mira más</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
