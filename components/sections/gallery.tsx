"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type GalleryCategory = "todas" | "sala" | "cocina" | "habitaciones" | "banos" | "patios"

const filters: { key: GalleryCategory; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "sala", label: "Sala" },
  { key: "cocina", label: "Cocina" },
  { key: "habitaciones", label: "Habitaciones" },
  { key: "banos", label: "Baños" },
  { key: "patios", label: "Patios" },
]

const images: { src: string; alt: string; title: string; category: GalleryCategory }[] = [
  { src: "/images/apartamento.jpg", alt: "Vista general del apartamento", title: "Vista General", category: "sala" },
  { src: "/images/salagaraje1.jpg", alt: "Sala y acceso al garaje", title: "Sala + Garaje", category: "sala" },
  { src: "/images/salagaraje2.jpg", alt: "Sala iluminada", title: "Sala Principal", category: "sala" },
  { src: "/images/salagaraje3.jpg", alt: "Otra perspectiva de la sala", title: "Sala (otra vista)", category: "sala" },
  { src: "/images/salagaraje4.jpg", alt: "Espacio de sala con acceso", title: "Zona Social", category: "sala" },
  { src: "/images/comedorcocina1.jpg", alt: "Comedor y cocina", title: "Comedor y Cocina", category: "cocina" },
  { src: "/images/comedorcocina2.jpg", alt: "Cocina desde otro ángulo", title: "Cocina (otra vista)", category: "cocina" },
  { src: "/images/primerapieza.jpg", alt: "Primera habitación", title: "Primera Habitación", category: "habitaciones" },
  { src: "/images/segundapieza.jpg", alt: "Segunda habitación", title: "Segunda Habitación", category: "habitaciones" },
  { src: "/images/tercerapieza.jpg", alt: "Tercera habitación", title: "Tercera Habitación", category: "habitaciones" },
  { src: "/images/piezas.jpg", alt: "Distribución de habitaciones", title: "Zona de Habitaciones", category: "habitaciones" },
  { src: "/images/piezachecheres1.jpg", alt: "Cuarto auxiliar", title: "Cuarto Auxiliar", category: "habitaciones" },
  { src: "/images/piezachecheres2.jpg", alt: "Cuarto auxiliar adicional", title: "Cuarto Auxiliar (otra vista)", category: "habitaciones" },
  { src: "/images/primerbano1.jpg", alt: "Primer baño", title: "Primer Baño", category: "banos" },
  { src: "/images/primerbano2.jpg", alt: "Primer baño desde otro ángulo", title: "Primer Baño (detalle)", category: "banos" },
  { src: "/images/segundobano1.jpg", alt: "Segundo baño", title: "Segundo Baño", category: "banos" },
  { src: "/images/patiogrande1.jpg", alt: "Patio grande", title: "Patio Grande", category: "patios" },
  { src: "/images/patiogrande2.jpg", alt: "Patio grande con otra vista", title: "Patio Grande (otra vista)", category: "patios" },
  { src: "/images/patiopequeno1.jpg", alt: "Patio pequeño", title: "Patio Pequeño", category: "patios" },
  { src: "/images/patiopequeno2.jpg", alt: "Patio pequeño desde otro ángulo", title: "Patio Pequeño (otra vista)", category: "patios" },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("todas")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const filteredImages = activeCategory === "todas" ? images : images.filter((image) => image.category === activeCategory)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  useEffect(() => {
    closeLightbox()
  }, [activeCategory])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (event.key === "Escape") {
        closeLightbox()
      }

      if (event.key === "ArrowLeft") {
        goToPrevious()
      }

      if (event.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selectedIndex, filteredImages.length])

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
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
            Galería
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Explora Cada Rincón
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estas son fotos reales y recientes del apartamento, para que veas con claridad cada espacio antes de agendar la visita.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeCategory === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(filter.key)}
              className="rounded-full px-4"
              aria-pressed={activeCategory === filter.key}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
              className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 1 || index === 6
                    ? "row-span-2"
                    : index === 4 || index === 10 || index === 16
                      ? "col-span-2"
                      : ""
              }`}
              onClick={() => openLightbox(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  openLightbox(index)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Abrir imagen ${index + 1}: ${image.title}`}
            >
              <div className="relative w-full h-full min-h-[140px] md:min-h-[180px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium text-sm">{image.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Visor de imágenes del apartamento"
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="text-white/80 text-sm">
                {selectedIndex + 1} / {filteredImages.length} — {filteredImages[selectedIndex].title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
