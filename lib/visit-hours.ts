import { defaultVisitHours, type VisitHoursData } from './visit-hours-data'

let visitHoursStore: VisitHoursData = JSON.parse(JSON.stringify(defaultVisitHours))

function normalizeText(value: unknown, fallback: string) {
  if (typeof value !== 'string') {
    return fallback
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : fallback
}

function normalizeVisitHours(raw: unknown): VisitHoursData {
  if (!raw || typeof raw !== 'object') {
    return defaultVisitHours
  }

  const candidate = raw as Partial<VisitHoursData> & { items?: unknown }
  const items = Array.isArray(candidate.items) ? candidate.items : []

  return {
    title: normalizeText(candidate.title, defaultVisitHours.title),
    subtitle: normalizeText(candidate.subtitle, defaultVisitHours.subtitle),
    note: normalizeText(candidate.note, defaultVisitHours.note),
    items: defaultVisitHours.items.map((fallbackItem, index) => {
      const item = items[index] as Partial<VisitHoursData['items'][number]> | undefined

      return {
        day: normalizeText(item?.day, fallbackItem.day),
        hours: normalizeText(item?.hours, fallbackItem.hours),
      }
    }),
  }
}

export async function getVisitHours(): Promise<VisitHoursData> {
  return JSON.parse(JSON.stringify(visitHoursStore))
}

export async function saveVisitHours(data: VisitHoursData) {
  visitHoursStore = normalizeVisitHours(data)
}
