'use client'

import dynamic from 'next/dynamic'

const AdminAccessFab = dynamic(
  () => import('@/components/admin-access-fab').then((mod) => mod.AdminAccessFab),
  { ssr: false },
)

export function AdminAccessFabLoader() {
  return <AdminAccessFab />
}
