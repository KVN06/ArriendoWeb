"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TestimonialsSection() {
  return null
}

/*

const testimonials = [
  {
    id: 1,
    name: "Camila Ospina",
    location: "Estudiante de la Unicauca",
    rating: 5,
    text: "Llegué a Popayán sin conocer a nadie y este apartamento fue una bendición. Los dueños son súper amables, el barrio es tranquilo y tengo espacio de sobra para mis cosas. Lo mejor es que puedo ir caminando a la universidad.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    date: "Vive aquí desde 2024",
  },
  {
    id: 2,
    name: "Andrés Muñoz",
    location: "Trabaja en el centro",
    rating: 5,
    text: "Me mudé por trabajo y necesitaba algo independiente pero económico. Este apto tiene todo: espacio para mi moto, patios para mi perro, y es muy tranquilo. Los vecinos son buena gente y el precio es justo para lo que ofrece.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "Vive aquí desde 2023",
  },
  {
    id: 3,
    name: "Laura y Miguel",
    location: "Pareja joven",
    rating: 5,
    text: "Buscábamos nuestro primer apartamento juntos y este fue perfecto. Las 3 habitaciones nos dan espacio para una oficina en casa, el arriendo es muy razonable y el barrio es seguro. Totalmente recomendado para parejas.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "Viven aquí desde 2024",
  },
  {
    id: 4,
    name: "Don Carlos Herrera",
    location: "Pensionado",
    rating: 5,
    text: "Después de años pagando arriendo caro en el centro, encontré este lugar. Tiene todo lo que necesito, los patios me encantan para mis plantas, y lo mejor es la tranquilidad. Aquí sí se puede descansar en paz.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "Vive aquí desde 2022",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(goToNext, 6000)
    return () => clearInterval(timer)
  }, [goToNext, isPaused])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background overflow-hidden">
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
            Experiencias
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen quienes han vivido aquí
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            No te lo decimos solo nosotros. Estas son las experiencias reales de personas que han hecho de este apartamento su hogar.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-8 -left-4 md:-left-12"
            >
              <Quote className="w-24 h-24 md:w-32 md:h-32 text-primary" />
            </motion.div>

            {/* Carousel */}
            <div className="relative min-h-[350px] md:min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="text-center px-4 md:px-12">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground mb-8 leading-relaxed font-light italic text-pretty">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
*/
