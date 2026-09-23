'use client'

import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { guideProfiles, type GuideAccent } from '@/content/about-content'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function avatarColor(accent: GuideAccent) {
  return `${accent}.main` as const
}

export default function GuideProfilesSection() {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: { xs: 4, md: 6 }, textAlign: { xs: 'left', md: 'center' } }}>
          <Typography
            variant="overline"
            color="primary.main"
            sx={{ fontWeight: 700, letterSpacing: 1.5 }}
          >
            Our guide team
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>
            Meet the hosts
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Fictional demo profiles introducing the small team behind each journey.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          {guideProfiles.map((guide) => (
            <Card
              key={guide.name}
              variant="outlined"
              sx={{ flex: 1, height: '100%' }}
            >
              <CardContent>
                <Stack spacing={2} alignItems="flex-start">
                  <Avatar sx={{ bgcolor: avatarColor(guide.accent), width: 56, height: 56 }}>
                    {initials(guide.name)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{guide.name}</Typography>
                    <Typography variant="body2" color={avatarColor(guide.accent)} sx={{ fontWeight: 600 }}>
                      {guide.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {guide.biography}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
