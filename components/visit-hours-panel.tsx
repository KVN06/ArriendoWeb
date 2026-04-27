'use client'

import { useEffect, useState } from 'react'
import { CalendarDays, Clock3, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { defaultVisitHours, type VisitHoursData } from '@/lib/visit-hours-data'

export function VisitHoursPanel() {
  const [visitHours, setVisitHours] = useState<VisitHoursData>(defaultVisitHours)

  useEffect(() => {
    let isMounted = true

    async function loadVisitHours() {
      try {
        const response = await fetch('/api/admin/visit-hours', { cache: 'no-store' })
        if (!response.ok) {
          return
        }

        const data = (await response.json()) as VisitHoursData
        if (isMounted) {
          setVisitHours(data)
        }
      } catch {
        // Conserva el contenido por defecto si falla la petición.
      }
    }

    loadVisitHours()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Card className="border-border/50 bg-card/90 shadow-sm">
      <CardContent className="p-5 md:p-6 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Agenda rápida
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground">{visitHours.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{visitHours.subtitle}</p>
          </div>
          <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <CalendarDays className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {visitHours.items.map((item) => (
            <div key={item.day} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
              <span className="font-medium text-foreground">{item.day}</span>
              <span className="text-sm text-muted-foreground">{item.hours}</span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p>{visitHours.note}</p>
        </div>
      </CardContent>
    </Card>
  )
}
