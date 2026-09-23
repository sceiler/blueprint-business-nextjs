'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import { IconBox, ClockIcon } from '@storyblok/mui'
import { event } from '@/content/event-content'

export default function AgendaSection() {
  return (
    <Box sx={{ bgcolor: 'grey.50', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, mb: 1 }}>
          Agenda
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 720 }}>
          A short, focused hour. {event.noBookingNote}
        </Typography>
        <Stack spacing={2.5} sx={{ maxWidth: 640 }}>
          {event.agenda.map((slot) => (
            <Stack key={slot.time} direction="row" spacing={2} alignItems="center">
              <IconBox color="primary" variant="light" size="medium">
                <ClockIcon />
              </IconBox>
              <Box>
                <Typography variant="subtitle2" color="primary.dark" fontWeight={700}>
                  {slot.time}
                </Typography>
                <Typography variant="body1">{slot.item}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
