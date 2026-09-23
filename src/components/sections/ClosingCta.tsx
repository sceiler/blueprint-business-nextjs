'use client'

import * as React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import RegisterButton from '@/components/RegisterButton'
import { brightPalette, closingCta, eventMeta } from '@/content/event-content'

export default function ClosingCta() {
  return (
    <Box sx={{ bgcolor: brightPalette.yellow }}>
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 800, textWrap: 'balance' }}>
            {closingCta.heading}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 560 }}>
            {closingCta.body}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventMeta.dateLabel} &middot; {eventMeta.format}
          </Typography>
          <Box sx={{ pt: 1 }}>
            <RegisterButton />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
