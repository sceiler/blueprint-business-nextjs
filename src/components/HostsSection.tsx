'use client'

import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { teamMembers } from '@/data/storyblok-snapshot'

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export default function HostsSection() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 5, maxWidth: 720 }}>
          <Typography variant="h3">Your hosts for the evening</Typography>
          <Typography variant="body1" color="text.secondary">
            Fictional demo biographies. No portraits are available for this demo, so each host is
            represented with an initials avatar.
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item key={member.name} xs={12} md={6}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: member.backgroundColor === 'green' ? 'success.light' : 'info.light',
                        color: member.backgroundColor === 'green' ? 'success.dark' : 'info.dark',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                      }}
                    >
                      {initials(member.name)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{member.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.title}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {member.biography}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
