'use client'

import * as React from 'react'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { brightPalette, values } from '@/content/event-content'

export default function ValueCards() {
  return (
    <Box sx={{ bgcolor: brightPalette.grey }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={5}>
          <Stack spacing={1} textAlign="center" alignItems="center">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800 }}>
              The way we work
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
              Simple principles that keep projects focused and collaboration enjoyable.
            </Typography>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            {values.map((value) => (
              <Card key={value.title} variant="outlined" sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.body}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
