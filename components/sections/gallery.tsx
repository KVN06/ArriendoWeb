import Image from "next/image"

const images = [
  { src: "/images/fast/apartamento.jpg", alt: "Vista general del apartamento", title: "Vista General" },
  { src: "/images/fast/salagaraje1.jpg", alt: "Sala y acceso al garaje", title: "Sala + Garaje" },
  { src: "/images/fast/salagaraje2.jpg", alt: "Sala iluminada", title: "Sala Principal" },
  { src: "/images/fast/salagaraje3.jpg", alt: "Otra perspectiva de la sala", title: "Sala (otra vista)" },
  { src: "/images/fast/salagaraje4.jpg", alt: "Espacio de sala con acceso", title: "Zona Social" },
  { src: "/images/fast/comedorcocina1.jpg", alt: "Comedor y cocina", title: "Comedor y Cocina" },
  { src: "/images/fast/comedorcocina2.jpg", alt: "Cocina desde otro ángulo", title: "Cocina (otra vista)" },
  { src: "/images/fast/primerapieza.jpg", alt: "Primera habitación", title: "Primera Habitación" },
  { src: "/images/fast/segundapieza.jpg", alt: "Segunda habitación", title: "Segunda Habitación" },
  { src: "/images/fast/tercerapieza.jpg", alt: "Tercera habitación", title: "Tercera Habitación" },
  { src: "/images/fast/piezas.jpg", alt: "Distribución de habitaciones", title: "Zona de Habitaciones" },
  { src: "/images/fast/piezachecheres1.jpg", alt: "Cuarto auxiliar", title: "Cuarto Auxiliar" },
  { src: "/images/fast/piezachecheres2.jpg", alt: "Cuarto auxiliar adicional", title: "Cuarto Auxiliar (otra vista)" },
  { src: "/images/fast/primerbano1.jpg", alt: "Primer baño", title: "Primer Baño" },
  { src: "/images/fast/primerbano2.jpg", alt: "Primer baño desde otro ángulo", title: "Primer Baño (detalle)" },
  { src: "/images/fast/segundobano1.jpg", alt: "Segundo baño", title: "Segundo Baño" },
  { src: "/images/fast/patiogrande1.jpg", alt: "Patio grande", title: "Patio Grande" },
  { src: "/images/fast/patiogrande2.jpg", alt: "Patio grande con otra vista", title: "Patio Grande (otra vista)" },
  { src: "/images/fast/patiopequeno1.jpg", alt: "Patio pequeño", title: "Patio Pequeño" },
  { src: "/images/fast/patiopequeno2.jpg", alt: "Patio pequeño desde otro ángulo", title: "Patio Pequeño (otra vista)" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Galería
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Explora Cada Rincón
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estas son fotos reales y recientes del apartamento, para que veas con claridad cada espacio antes de agendar la visita.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {images.map((image) => (
            <div key={image.src} className="relative group overflow-hidden rounded-xl">
              <div className="relative w-full aspect-square md:aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={68}
                  loading="lazy"
                  decoding="async"
                  className="object-cover md:transition-transform md:duration-300 md:group-hover:scale-105"
                  sizes={
                    "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 md:transition-transform md:duration-300">
                  <span className="text-white font-medium text-sm">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
