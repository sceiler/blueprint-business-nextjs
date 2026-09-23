'use client'

import Image from 'next/image'
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { eventStory, formatEventWindow, readHeroText } from '@/data/storyblok-snapshot'
import JoinEveningCta from './JoinEveningCta'

export default function EventHero() {
  const { heading, paragraph } = readHeroText(eventStory.body[0]!.description)
  const eventWindow = formatEventWindow(
    eventStory.startDate,
    eventStory.endDate,
    eventStory.timezone,
  )

  return (
    <Box sx={{ bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3} alignItems="flex-start">
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label={eventStory.price} color="success" size="small" />
                <Chip label={eventStory.venue} variant="outlined" size="small" />
              </Stack>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }}>
                {heading}
              </Typography>
              <Typography variant="h6" component="p" color="text.secondary" fontWeight={400}>
                {paragraph}
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body1" fontWeight={500}>
                  {eventWindow}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {eventStory.capacity} demo places · hosted by Mara Jensen &amp; Inês Costa
                </Typography>
              </Stack>
              <JoinEveningCta />
              <Typography variant="caption" color="text.secondary">
                {eventStory.demoNotice}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <Image
                src={eventStory.image.filename}
                alt={eventStory.image.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
