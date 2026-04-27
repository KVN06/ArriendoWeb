export type VisitHourItem = {
  day: string
  hours: string
}

export type VisitHoursData = {
  title: string
  subtitle: string
  note: string
  items: VisitHourItem[]
}

export const defaultVisitHours: VisitHoursData = {
  title: 'Horario de visitas',
  subtitle: 'Agenda tu visita sin registrarte',
  note: 'Los horarios pueden cambiar. Confirma por WhatsApp antes de venir.',
  items: [
    { day: 'Lunes', hours: '8:00 a. m. - 6:00 p. m.' },
    { day: 'Martes', hours: '8:00 a. m. - 6:00 p. m.' },
    { day: 'Miércoles', hours: '8:00 a. m. - 6:00 p. m.' },
    { day: 'Jueves', hours: '8:00 a. m. - 6:00 p. m.' },
    { day: 'Viernes', hours: '8:00 a. m. - 6:00 p. m.' },
    { day: 'Sábado', hours: '9:00 a. m. - 2:00 p. m.' },
    { day: 'Domingo', hours: 'No disponible' },
  ],
}
