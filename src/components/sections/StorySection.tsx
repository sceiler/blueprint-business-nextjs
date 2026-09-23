'use client'

import * as React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { companyStory } from '@/content/event-content'

export default function StorySection() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
          {companyStory.eyebrow}
        </Typography>
        <Typography variant="h3" component="h2" sx={{ fontWeight: 800, textWrap: 'balance' }}>
          {companyStory.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
          {companyStory.body}
        </Typography>
      </Stack>
    </Container>
  )
}
