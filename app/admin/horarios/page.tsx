import type { Metadata } from 'next'
import { VisitHoursEditor } from '@/components/admin/visit-hours-editor'

export const metadata: Metadata = {
  title: 'Editar horarios de visita',
  robots: {
    index: false,
    follow: false,
  },
}

export default function VisitHoursAdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <VisitHoursEditor />
    </main>
  )
}
