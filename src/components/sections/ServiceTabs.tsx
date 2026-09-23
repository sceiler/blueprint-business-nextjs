'use client'

import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { brightPalette, serviceTracks } from '@/content/event-content'

/**
 * Proposed session tracks for the demo agenda, adapted from the Services page's Brand / Website /
 * Growth tabs. These are demo session topics, not a confirmed agenda.
 */
export default function ServiceTabs() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeTrack = serviceTracks[activeIndex] ?? serviceTracks[0]

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={4}>
        <Stack spacing={1} textAlign="center" alignItems="center">
          <Chip label="Proposed session topics — draft agenda" size="small" variant="outlined" sx={{ mb: 1 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 800 }}>
            Three tracks for the day
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
            Explore the themes the session is built around — Brand, Website, and Growth.
          </Typography>
        </Stack>

        <Tabs
          value={activeIndex}
          onChange={(_event, value) => setActiveIndex(value)}
          centered
          variant="standard"
        >
          {serviceTracks.map((track) => (
            <Tab key={track.key} label={track.title} />
          ))}
        </Tabs>

        {activeTrack ? (
          <Box>
            <Box
              sx={{
                bgcolor: brightPalette[activeTrack.color],
                borderRadius: 2,
                p: { xs: 3, md: 5 },
                mb: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                {activeTrack.heading}
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 640, mx: 'auto' }}>
                {activeTrack.body}
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              {activeTrack.topics.map((topic) => (
                <Card key={topic.title} variant="outlined" sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                      {topic.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {topic.body}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Stack>
    </Container>
  )
}
