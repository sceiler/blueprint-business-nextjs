'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useNotifications } from '@storyblok/mui'

type JoinEveningCtaProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export default function JoinEveningCta({ size = 'large', fullWidth }: JoinEveningCtaProps) {
  const notify = useNotifications()
  const [open, setOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClose = () => {
    setOpen(false)
    setConfirmed(false)
    setName('')
    setEmail('')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setConfirmed(true)
    notify.success({
      title: "You're on the demo list",
      message: 'No real registration was submitted — this event is fictional.',
    })
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size={size}
        fullWidth={fullWidth}
        onClick={() => setOpen(true)}
      >
        Join the evening
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        {confirmed ? (
          <>
            <DialogTitle>You&rsquo;re on the demo list</DialogTitle>
            <DialogContent>
              <Stack spacing={2}>
                <Alert severity="success">
                  Thanks{name ? `, ${name}` : ''} — this is a local demo confirmation only.
                </Alert>
                <Typography variant="body2" color="text.secondary">
                  Autumn Trail Evening has no live meeting link. No real registration, email, or
                  payment was collected or sent anywhere.
                </Typography>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogTitle>Join the evening</DialogTitle>
            <DialogContent>
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Alert severity="info">
                  Demo only: this fictional event has no live meeting link and collects no real
                  registration.
                </Alert>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoFocus
                  fullWidth
                />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  fullWidth
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                Confirm demo RSVP
              </Button>
            </DialogActions>
          </form>
        )}
      </Dialog>
    </>
  )
}
