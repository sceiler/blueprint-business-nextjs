'use client'

import * as React from 'react'
import { Avatar, Box, Chip, Container, Stack, Typography } from '@mui/material'
import { brightPalette, team, teamIntro } from '@/content/event-content'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export default function TeamSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={5}>
        <Stack spacing={1} textAlign="center" alignItems="center">
          <Typography variant="h4" component="h2" sx={{ fontWeight: 800 }}>
            {teamIntro.heading}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            {teamIntro.body}
          </Typography>
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          {team.map((member) => (
            <Box
              key={member.name}
              sx={{
                flex: 1,
                textAlign: 'center',
                borderRadius: 3,
                border: 1,
                borderColor: 'divider',
                p: 4,
              }}
            >
              <Avatar
                sx={{
                  width: 88,
                  height: 88,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: brightPalette[member.color],
                  color: 'text.primary',
                  fontWeight: 700,
                  fontSize: 28,
                }}
              >
                {initials(member.name)}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                {member.title}
              </Typography>
              <Chip label={member.focus} size="small" variant="outlined" />
            </Box>
          ))}
        </Stack>
        <Typography variant="caption" color="text.secondary" textAlign="center">
          Shown as the BrightStart team for this demo — not confirmed speakers for this session.
        </Typography>
      </Stack>
    </Container>
  )
}
