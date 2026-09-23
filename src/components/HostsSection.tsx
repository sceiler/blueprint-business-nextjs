'use client'

import { Avatar, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { hosts } from '@/content/event-content'

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export default function HostsSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, mb: 1 }}>
        Your hosts
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 720 }}>
        Fictional demo host profiles for this event.
      </Typography>
      <Grid container spacing={3}>
        {hosts.map((host) => (
          <Grid item key={host.name} xs={12} md={6}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Avatar
                  sx={{
                    bgcolor: `${host.accent}.main`,
                    width: 56,
                    height: 56,
                    mb: 2,
                    fontWeight: 700,
                  }}
                >
                  {initials(host.name)}
                </Avatar>
                <Typography variant="h6" component="p">
                  {host.name}
                </Typography>
                <Typography variant="body2" color={`${host.accent}.dark`} fontWeight={500} sx={{ mb: 1.5 }}>
                  {host.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {host.biography}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
