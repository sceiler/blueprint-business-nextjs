'use client'

import { Box } from '@mui/material'
import type { EventViewModel } from '@/content'
import { EventHeroSection } from './EventHeroSection'
import { AgendaSection } from './AgendaSection'

export type EventLandingPageProps = {
  event: EventViewModel
}

/** Two sections: an event hero (title, intro, date, CTA) and a short agenda. */
export function EventLandingPage({ event }: EventLandingPageProps) {
  return (
    <Box component="main">
      <EventHeroSection event={event} />
      <AgendaSection event={event} />
    </Box>
  )
}
