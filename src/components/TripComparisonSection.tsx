'use client'

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { algarveStory, madeiraStory } from '@/data/storyblok-snapshot'
import TripCard from './TripCard'

export default function TripComparisonSection() {
  return (
    <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 5, maxWidth: 720 }}>
          <Typography variant="h3">Two journeys, two paces</Typography>
          <Typography variant="body1" color="text.secondary">
            The evening compares a moderate mountain journey with an easy coastal escape. Difficulty
            describes the itinerary&rsquo;s pace, not a guarantee of accessibility for every walker.
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TripCard trip={madeiraStory} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TripCard trip={algarveStory} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
