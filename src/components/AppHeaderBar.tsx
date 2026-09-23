'use client'

import * as React from 'react'
import { AppBar, Box, Chip, Container, Stack, Toolbar, Typography } from '@mui/material'
import RegisterButton from './RegisterButton'

export default function AppHeaderBar() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, gap: 2, flexWrap: 'wrap' }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
              BrightStart
            </Typography>
            <Chip label="Fictional demo brand" size="small" variant="outlined" color="secondary" />
          </Stack>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="body2" color="text.secondary">
              7 October 2026 &middot; Online
            </Typography>
          </Box>
          <RegisterButton size="medium" />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
