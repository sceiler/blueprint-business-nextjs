'use client'

import { Box, Container, Grid, Typography } from '@mui/material'
import { AnalyticalBox, BlockTagIcon, CalendarIcon, ClockIcon, PartnerTeamIcon, WorldIcon } from '@storyblok/mui'
import { event, formatEventDate, formatEventTime } from '@/content/event-content'

const details = [
  {
    icon: <CalendarIcon />,
    label: 'Date',
    value: formatEventDate(event.startDate),
    color: 'primary' as const,
  },
  {
    icon: <ClockIcon />,
    label: 'Time',
    value: `${formatEventTime(event.startDate)}–${formatEventTime(event.endDate)} ${event.timezone}`,
    color: 'info' as const,
  },
  {
    icon: <WorldIcon />,
    label: 'Venue',
    value: event.venue,
    color: 'success' as const,
  },
  {
    icon: <BlockTagIcon />,
    label: 'Price',
    value: event.price,
    color: 'warning' as const,
  },
  {
    icon: <PartnerTeamIcon />,
    label: 'Demo places',
    value: `${event.capacity} illustrative places`,
    color: 'secondary' as const,
  },
]

export default function EventDetails() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, mb: 1 }}>
        Event details
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 720 }}>
        {event.eventDetailsNote}
      </Typography>
      <Grid container spacing={3}>
        {details.map((detail) => (
          <Grid item key={detail.label} xs={12} sm={6} md={4}>
            <AnalyticalBox icon={detail.icon} color={detail.color} size="large">
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {detail.label}
                </Typography>
                <Typography variant="h6" component="p">
                  {detail.value}
                </Typography>
              </Box>
            </AnalyticalBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
