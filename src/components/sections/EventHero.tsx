'use client'

import * as React from 'react'
import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import RegisterButton from '@/components/RegisterButton'
import { brightPalette, eventMeta } from '@/content/event-content'

export default function EventHero() {
  return (
    <Box sx={{ bgcolor: brightPalette.blue }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 14 } }}>
        <Stack spacing={3} alignItems="center" textAlign="center" sx={{ maxWidth: 760, mx: 'auto' }}>
          <Chip
            icon={<EventAvailableIcon fontSize="small" />}
            label={eventMeta.eyebrow}
            color="secondary"
            variant="outlined"
            sx={{ bgcolor: 'rgba(255,255,255,0.6)' }}
          />
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, textWrap: 'balance' }}>
            {eventMeta.name}
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary" sx={{ fontWeight: 500 }}>
            {eventMeta.dateLabel}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 620 }}>
            {eventMeta.intro}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ color: 'text.secondary' }}
          >
            <Chip label={eventMeta.timeLabel} size="small" />
            <Chip label={eventMeta.format} size="small" />
            <Chip label={eventMeta.audience} size="small" />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
            <RegisterButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
