'use client'

import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import type { EventViewModel } from '@/content'

export type AgendaSectionProps = {
  event: EventViewModel
}

export function AgendaSection({ event }: AgendaSectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700 }}>
            Agenda
          </Typography>
          {event.whatToExpect ? (
            <Typography variant="body1" color="text.secondary">
              {event.whatToExpect}
            </Typography>
          ) : null}
        </Stack>
        <Stack divider={<Divider />}>
          {event.agenda.map((item, index) => (
            <Stack
              key={`${item.time}-${index}`}
              direction="row"
              spacing={2}
              alignItems="baseline"
              sx={{ py: 1.5 }}
            >
              <Typography
                variant="body1"
                color="primary.main"
                fontWeight={700}
                sx={{ minWidth: 64, flexShrink: 0 }}
              >
                {item.time}
              </Typography>
              <Typography variant="body1">{item.label}</Typography>
            </Stack>
          ))}
        </Stack>
        {event.agendaFootnote ? (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
            {event.agendaFootnote}
          </Typography>
        ) : null}
      </Container>
    </Box>
  )
}
