'use client'

import { Alert, AlertTitle, Container } from '@mui/material'
import { event } from '@/content/event-content'

export default function DemoNotice() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 } }}>
      <Alert severity="warning" variant="outlined">
        <AlertTitle>This is a fictional demo</AlertTitle>
        {event.demoNotice} There is no live meeting link for this event, and this
        page does not collect a real registration, booking, or payment.
      </Alert>
    </Container>
  )
}
