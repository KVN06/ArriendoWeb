'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { CalendarDays, CheckCircle2, Loader2, LockKeyhole, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { defaultVisitHours, type VisitHoursData } from '@/lib/visit-hours-data'

const dayLabels = defaultVisitHours.items.map((item) => item.day)

export function VisitHoursEditor() {
  const [password, setPassword] = useState('')
  const [visitHours, setVisitHours] = useState<VisitHoursData>(defaultVisitHours)
  const [status, setStatus] = useState<'idle' | 'loading' | 'saving' | 'saved' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    async function loadVisitHours() {
      setStatus('loading')

      try {
        const response = await fetch('/api/admin/visit-hours', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('No se pudieron cargar los horarios')
        }

        const data = (await response.json()) as VisitHoursData
        setVisitHours(data)
        setStatus('idle')
      } catch {
        setStatus('error')
        setMessage('No se pudieron cargar los horarios actuales. Puedes escribirlos manualmente.')
      }
    }

    loadVisitHours()
  }, [])

  function updateItem(index: number, field: 'day' | 'hours', value: string) {
    setVisitHours((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('saving')
    setMessage('')

    try {
      const response = await fetch('/api/admin/visit-hours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, data: visitHours }),
      })

      const payload = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(payload.message || 'No se pudo guardar')
      }

      setStatus('saved')
      setMessage(payload.message || 'Horarios guardados')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Ocurrió un error al guardar')
    }
  }

  async function handleUnlock() {
    setStatus('saving')
    setMessage('')

    try {
      const response = await fetch('/api/admin/visit-hours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'unlock', password }),
      })

      const payload = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(payload.message || 'No se pudo desbloquear')
      }

      setIsUnlocked(true)
      setStatus('idle')
      setMessage(payload.message || 'Edición desbloqueada')
    } catch (error) {
      setIsUnlocked(false)
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Clave incorrecta')
    }
  }

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
      <Card className="border-border/60 shadow-lg">
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                <LockKeyhole className="h-3.5 w-3.5" />
                Panel privado
              </span>
              <h1 className="font-serif text-3xl font-bold text-foreground">Editar horarios de visita</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Cambia el texto, guarda con contraseña y el sitio público se actualiza sin volver a publicar el proyecto.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                Horario visible en la web
              </div>
              <p className="mt-1">Se muestra en la sección de contacto.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="password">
                Clave de edición
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Escribe la clave para editar"
              />
            </div>

            <Button type="button" className="rounded-full px-6" onClick={handleUnlock} disabled={status === 'saving'}>
              {status === 'saving' ? <Loader2 className="h-4 w-4 animate-spin" /> : <LockKeyhole className="h-4 w-4" />}
              Desbloquear edición
            </Button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-1">
                <label className="text-sm font-medium text-foreground" htmlFor="title">
                  Título
                </label>
                <Input
                  id="title"
                  value={visitHours.title}
                  disabled={!isUnlocked}
                  onChange={(event) => setVisitHours((current) => ({ ...current, title: event.target.value }))}
                  placeholder="Horario de visitas"
                />
              </div>
              <div className="space-y-2 md:col-span-1">
                <label className="text-sm font-medium text-foreground" htmlFor="subtitle">
                  Subtítulo
                </label>
                <Input
                  id="subtitle"
                  value={visitHours.subtitle}
                  disabled={!isUnlocked}
                  onChange={(event) => setVisitHours((current) => ({ ...current, subtitle: event.target.value }))}
                  placeholder="Agenda tu visita sin registrarte"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="note">
                Nota
              </label>
              <Textarea
                id="note"
                value={visitHours.note}
                disabled={!isUnlocked}
                onChange={(event) => setVisitHours((current) => ({ ...current, note: event.target.value }))}
                placeholder="Confirma por WhatsApp antes de venir."
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visitHours.items.map((item, index) => (
                <div key={dayLabels[index]} className="space-y-2 rounded-2xl border border-border/60 bg-background/70 p-4">
                  <label className="text-sm font-medium text-foreground" htmlFor={`day-${index}`}>
                    Día {index + 1}
                  </label>
                  <Input
                    id={`day-${index}`}
                    value={item.day}
                    disabled={!isUnlocked}
                    onChange={(event) => updateItem(index, 'day', event.target.value)}
                    placeholder={dayLabels[index]}
                  />
                  <label className="text-sm font-medium text-foreground" htmlFor={`hours-${index}`}>
                    Horario
                  </label>
                  <Input
                    id={`hours-${index}`}
                    value={item.hours}
                    disabled={!isUnlocked}
                    onChange={(event) => updateItem(index, 'hours', event.target.value)}
                    placeholder="8:00 a. m. - 6:00 p. m."
                  />
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div className="text-sm text-muted-foreground">
                {isUnlocked ? 'Edición desbloqueada. Ya puedes cambiar y guardar los horarios.' : 'Primero desbloquea con la clave.'}
              </div>
              <Button type="submit" className="rounded-full px-6" disabled={!isUnlocked || status === 'saving'}>
                {status === 'saving' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Guardar cambios
              </Button>
            </div>

            {message ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${status === 'error' ? 'border-destructive/20 bg-destructive/5 text-destructive' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{message}</span>
                </div>
              </div>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
