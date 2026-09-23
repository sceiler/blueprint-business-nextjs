'use client'

import Image from 'next/image'
import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import { event, formatEventDate, formatEventTime, heroImage } from '@/content/event-content'
import JoinEveningButton from './JoinEveningButton'

export default function EventHero() {
  return (
    <Box sx={{ bgcolor: 'sbPrimary.50', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Chip
              label={`${formatEventDate(event.startDate)} · ${formatEventTime(event.startDate)}–${formatEventTime(event.endDate)} (${event.timezone})`}
              color="primary"
              variant="filled"
              sx={{ alignSelf: 'flex-start', fontWeight: 500 }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
              {event.title}
            </Typography>
            <Typography variant="h6" component="p" color="text.secondary" fontWeight={400}>
              {event.summary}
            </Typography>
            <Box sx={{ pt: 1 }}>
              <JoinEveningButton />
            </Box>
          </Stack>
          <Box
            sx={{
              flex: 1,
              width: '100%',
              position: 'relative',
              aspectRatio: '16 / 9',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
