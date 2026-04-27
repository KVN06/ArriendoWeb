'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const AdminAccessFab = dynamic(
  () => import('@/components/admin-access-fab').then((mod) => mod.AdminAccessFab),
  { ssr: false },
)

export function AdminAccessFabLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const hideTimerRef = useRef<number | null>(null)
  const scrollHandledRef = useRef(false)

  function scheduleHide(delayMs: number) {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current)
    }

    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false)
      hideTimerRef.current = null
    }, delayMs)
  }

  useEffect(() => {
    scheduleHide(2000)

    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current)
        hideTimerRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    function onScroll() {
      if (scrollHandledRef.current) return
      scrollHandledRef.current = true
      scheduleHide(500)
      window.removeEventListener('scroll', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleInteraction() {
    if (!isVisible) {
      return
    }

    scheduleHide(7000)
  }

  if (!isVisible) {
    return null
  }

  return <AdminAccessFab onInteraction={handleInteraction} />
}
