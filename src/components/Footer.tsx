'use client'

import * as React from 'react'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'secondary.dark', color: 'common.white', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h5" sx={{ fontWeight: 700, maxWidth: 560 }}>
            Let&apos;s make something people remember
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 720 }}>
            BrightStart is a fictional independent brand and digital studio created for this demo.
            This landing page is a marketer preview built with Storyblok CMS content and the
            Storyblok MUI design system — the event, agenda, and speaker list above are proposed
            demo content, not a real booking.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; 2026 BrightStart (demo). No real company, event, or registration is associated
            with this page.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
