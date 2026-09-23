'use client'

import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { brandDemoNotice } from '@/data/storyblok-snapshot'

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.50', py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Divider />
          <Typography variant="body2" fontWeight={700}>
            Trail &amp; Tide — Outdoor Adventures
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 720 }}>
            {brandDemoNotice}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
