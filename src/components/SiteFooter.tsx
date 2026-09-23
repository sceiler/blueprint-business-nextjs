'use client'

import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { brand, event } from '@/content/event-content'

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.50', py: { xs: 4, md: 5 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography variant="subtitle1" fontWeight={700}>
            {brand.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 720 }}>
            {brand.whoWeAre}
          </Typography>
          <Divider />
          <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 720 }}>
            {event.demoNotice}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
