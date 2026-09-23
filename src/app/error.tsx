'use client'

import { Button, Container, Stack, Typography } from '@mui/material'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Container maxWidth="sm" sx={{ py: 16, textAlign: 'center' }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Something went wrong</Typography>
        <Typography variant="body1" color="text.secondary">
          Please try again.
        </Typography>
        <Button variant="contained" onClick={() => reset()}>
          Try again
        </Button>
      </Stack>
    </Container>
  )
}
