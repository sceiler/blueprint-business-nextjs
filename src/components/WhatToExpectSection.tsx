'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import { event } from '@/content/event-content'
import JoinEveningButton from './JoinEveningButton'

export default function WhatToExpectSection() {
  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="flex-start">
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: 'inherit' }}>
            What to expect
          </Typography>
          <Typography variant="body1" sx={{ color: 'inherit', opacity: 0.9 }}>
            {event.whatToExpect}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.75 }}>
            This fictional event has no live meeting link — a local demo confirmation
            on this page is all that&apos;s needed here.
          </Typography>
          <JoinEveningButton />
        </Stack>
      </Container>
    </Box>
  )
}
