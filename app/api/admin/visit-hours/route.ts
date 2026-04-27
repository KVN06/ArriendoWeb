import { NextResponse } from 'next/server'
import { getVisitHours, saveVisitHours } from '@/lib/visit-hours'
import { defaultVisitHours, type VisitHoursData } from '@/lib/visit-hours-data'

export const dynamic = 'force-dynamic'

function isValidVisitHoursData(data: unknown): data is VisitHoursData {
  if (!data || typeof data !== 'object') {
    return false
  }

  const candidate = data as VisitHoursData
  return (
    typeof candidate.title === 'string' &&
    typeof candidate.subtitle === 'string' &&
    typeof candidate.note === 'string' &&
    Array.isArray(candidate.items) &&
    candidate.items.length === defaultVisitHours.items.length &&
    candidate.items.every((item) => typeof item?.day === 'string' && typeof item?.hours === 'string')
  )
}

export async function GET() {
  const visitHours = await getVisitHours()
  return NextResponse.json(visitHours)
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ message: 'Solicitud inválida' }, { status: 400 })
    }

    const password = typeof body.password === 'string' ? body.password : ''
    const adminPassword = process.env.ADMIN_EDIT_PASSWORD || 'K2906'

    if (!password || password !== adminPassword) {
      return NextResponse.json({ message: 'Contraseña incorrecta' }, { status: 401 })
    }

    if (body.action === 'unlock') {
      return NextResponse.json({ message: 'Edición desbloqueada' })
    }

    if (!isValidVisitHoursData(body.data)) {
      return NextResponse.json({ message: 'Datos inválidos' }, { status: 400 })
    }

    await saveVisitHours(body.data)

    return NextResponse.json({ message: 'Horarios actualizados' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ message: `Error interno: ${message}` }, { status: 500 })
  }
}
