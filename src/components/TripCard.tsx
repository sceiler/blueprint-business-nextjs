'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import type { TravelExperience } from '@/data/storyblok-snapshot'

type TripCardProps = {
  trip: TravelExperience
}

export default function TripCard({ trip }: TripCardProps) {
  const [expanded, setExpanded] = useState(false)
  const difficultyColor = trip.difficulty === 'Easy' ? 'success' : 'warning'

  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
        <Image src={trip.image.filename} alt={trip.image.alt} fill style={{ objectFit: 'cover' }} />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip label={trip.difficulty} color={difficultyColor} size="small" />
          <Chip label={trip.duration} variant="outlined" size="small" />
          <Chip label={`Group ${trip.groupSize}`} variant="outlined" size="small" />
        </Stack>

        <Box>
          <Typography variant="h5" gutterBottom>
            {trip.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {trip.summary}
          </Typography>
        </Box>

        <Typography variant="h6" color="primary.main">
          {trip.price}
        </Typography>

        <Alert severity={trip.difficulty === 'Easy' ? 'info' : 'warning'} sx={{ fontSize: '0.8125rem' }}>
          {trip.experience}
        </Alert>

        <Stack spacing={0.5}>
          <Typography variant="caption" color="text.secondary">
            Destination: {trip.destination}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Sample departure dates: {trip.departureDates}
          </Typography>
        </Stack>

        <Box sx={{ mt: 'auto' }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? 'Hide details' : 'Explore this journey'}
          </Button>
        </Box>

        <Collapse in={expanded} unmountOnExit>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Divider />
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                A sample itinerary
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trip.itinerary}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Included and excluded
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trip.includedExcluded}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Good to know
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trip.hostNote}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.disabled">
              {trip.demoNotice}
            </Typography>
          </Stack>
        </Collapse>
      </CardContent>
    </Card>
  )
}
