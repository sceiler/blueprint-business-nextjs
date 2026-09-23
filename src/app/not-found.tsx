'use client'

import { Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 16, textAlign: 'center' }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Page not found</Typography>
        <Typography variant="body1" color="text.secondary">
          The page you are looking for does not exist.
        </Typography>
        <Button component={Link} href="/" variant="contained">
          Back to About
        </Button>
      </Stack>
    </Container>
  )
}
