'use client'

import { AppBar, Chip, Container, Stack, Toolbar, Typography } from '@mui/material'

export default function SiteHeader() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Typography variant="h6" component="span" color="text.primary" fontWeight={700}>
              Trail &amp; Tide
            </Typography>
            <Chip label="Fictional demo event" color="info" variant="outlined" size="small" />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
