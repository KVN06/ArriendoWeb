'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { KeyRound, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

type AdminAccessFabProps = {
  onInteraction?: () => void
}

export function AdminAccessFab({ onInteraction }: AdminAccessFabProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const timerRef = useRef<number | null>(null)
  const dialogTimeoutRef = useRef<number | null>(null)
  const LONG_PRESS_MS = 800
  const DIALOG_TIMEOUT_MS = 10000

  useEffect(() => {
    if (!open) {
      if (dialogTimeoutRef.current) {
        window.clearTimeout(dialogTimeoutRef.current)
        dialogTimeoutRef.current = null
      }

      return
    }

    dialogTimeoutRef.current = window.setTimeout(() => {
      setOpen(false)
      setPassword('')
      dialogTimeoutRef.current = null
    }, DIALOG_TIMEOUT_MS)

    return () => {
      if (dialogTimeoutRef.current) {
        window.clearTimeout(dialogTimeoutRef.current)
        dialogTimeoutRef.current = null
      }
    }
  }, [open])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/visit-hours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'unlock', password }),
      })

      if (!response.ok) {
        setOpen(false)
        setPassword('')
        setIsHidden(true)
        return
      }

      setOpen(false)
      setPassword('')
      router.push('/admin/horarios')
    } catch {
      setOpen(false)
      setPassword('')
      setIsHidden(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isHidden) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onPointerDown={() => {
          if (isHidden) return
          onInteraction?.()
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
            timerRef.current = null
          }, LONG_PRESS_MS)
        }}
        onPointerUp={() => {
          if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
          }
        }}
        onPointerLeave={() => {
          if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
          }
        }}
        onPointerCancel={() => {
          if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
          }
        }}
        className="fixed left-6 bottom-20 md:bottom-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border/30 bg-background/70 text-foreground/80 shadow-none backdrop-blur-sm opacity-40 transition-transform active:scale-95"
        aria-label="Acceso"
      >
        <KeyRound className="h-3.5 w-3.5" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="sr-only">Acceso</DialogTitle>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoFocus
              placeholder="Clave"
            />

            <DialogFooter>
              <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Entrar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
