import { promises as fs } from 'node:fs'
import path from 'node:path'

import { defaultVisitHours, type VisitHourItem, type VisitHoursData } from './visit-hours-data'

const dataFilePath = path.join(process.cwd(), 'data', 'visit-hours.json')

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
      const item = items[index] as Partial<VisitHourItem> | undefined

      return {
        day: normalizeText(item?.day, fallbackItem.day),
        hours: normalizeText(item?.hours, fallbackItem.hours),
      }
    }),
  }
}

async function ensureVisitHoursFile() {
  try {
    await fs.access(dataFilePath)
  } catch {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true })
    await fs.writeFile(dataFilePath, `${JSON.stringify(defaultVisitHours, null, 2)}\n`, 'utf8')
  }
}

export async function getVisitHours(): Promise<VisitHoursData> {
  try {
    await ensureVisitHoursFile()
    const fileContents = await fs.readFile(dataFilePath, 'utf8')
    return normalizeVisitHours(JSON.parse(fileContents))
  } catch {
    return defaultVisitHours
  }
}

export async function saveVisitHours(data: VisitHoursData) {
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true })
  await fs.writeFile(dataFilePath, `${JSON.stringify(normalizeVisitHours(data), null, 2)}\n`, 'utf8')
}
