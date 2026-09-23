'use client'

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { eventStory, parseAgenda, readHeroText } from '@/data/storyblok-snapshot'
import JoinEveningCta from './JoinEveningCta'

export default function AgendaSection() {
  const eventDetails = readHeroText(eventStory.body[1]!.description)
  const agenda = readHeroText(eventStory.body[2]!.description)
  const whatToExpect = readHeroText(eventStory.body[3]!.description)
  const agendaItems = parseAgenda(agenda.paragraph)

  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {eventDetails.heading}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {eventDetails.paragraph}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {agenda.heading}
                </Typography>
                <List disablePadding>
                  {agendaItems.map((item, index) => (
                    <Box key={item.time}>
                      <ListItem disableGutters>
                        <ListItemText
                          primary={item.label}
                          secondary={item.time}
                          primaryTypographyProps={{ fontWeight: 500 }}
                          secondaryTypographyProps={{ color: 'primary.main' }}
                        />
                      </ListItem>
                      {index < agendaItems.length - 1 ? <Divider component="li" /> : null}
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card
          variant="outlined"
          sx={{ mt: 4, bgcolor: 'grey.50' }}
        >
          <CardContent>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h4" gutterBottom>
                  {whatToExpect.heading}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
                  {whatToExpect.paragraph}
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0 }}>
                <JoinEveningCta size="medium" />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
