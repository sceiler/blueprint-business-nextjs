'use client'

import Image from 'next/image'
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import type { EventViewModel } from '@/content'
import { JoinEveningButton } from './JoinEveningButton'

export type EventHeroSectionProps = {
  event: EventViewModel
}

export function EventHeroSection({ event }: EventHeroSectionProps) {
  const statusLabel = [event.price, 'online demo event'].filter(Boolean).join(' · ')
  const venueLabel = [event.venue, event.capacity ? `${event.capacity} demo places` : undefined]
    .filter(Boolean)
    .join(' · ')

  return (
    <Box component="section" sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3} alignItems="flex-start">
              {statusLabel ? (
                <Chip label={statusLabel} color="primary" variant="outlined" />
              ) : null}
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.25rem', md: '2.75rem' }, fontWeight: 700 }}
              >
                {event.title}
              </Typography>
              {event.intro ? (
                <Typography variant="body1" color="text.secondary">
                  {event.intro}
                </Typography>
              ) : null}
              <Stack spacing={0.5}>
                <Typography variant="body1" fontWeight={600}>
                  {event.dateLabel} · {event.timeRangeLabel} ({event.timezoneLabel})
                </Typography>
                {venueLabel ? (
                  <Typography variant="body2" color="text.secondary">
                    {venueLabel}
                  </Typography>
                ) : null}
                {event.hosts.length > 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    Hosted by{' '}
                    {event.hosts.map((host) => `${host.name} (${host.title})`).join(' & ')}
                  </Typography>
                ) : null}
              </Stack>
              <JoinEveningButton label={event.ctaLabel} eventTitle={event.title} />
              {event.demoNotice ? (
                <Typography variant="caption" color="text.secondary">
                  {event.demoNotice}
                </Typography>
              ) : null}
            </Stack>
          </Grid>
          {event.image ? (
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                }}
              >
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  unoptimized={event.image.src.toLowerCase().endsWith('.svg')}
                />
              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </Box>
  )
}
