'use client'

import { AppBar, Box, Chip, Container, Toolbar, Typography } from '@mui/material'
import { brand } from '@/content/event-content'

export default function SiteHeader() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="span" color="text.primary" fontWeight={700}>
              {brand.name}
            </Typography>
          </Box>
          <Chip label="Fictional demo" color="warning" variant="outlined" size="small" />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
