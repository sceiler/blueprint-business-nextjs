'use client'

import { useState, type FormEvent } from 'react'
import {
  Button,
  type ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useNotifications } from '@storyblok/mui'
import { event } from '@/content/event-content'

type JoinEveningButtonProps = {
  size?: ButtonProps['size']
  fullWidth?: boolean
}

export default function JoinEveningButton({ size = 'large', fullWidth = false }: JoinEveningButtonProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const notify = useNotifications()

  const handleClose = () => setOpen(false)

  const handleSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault()
    notify.success({
      title: "You're on the demo list",
      message: `Thanks${name ? `, ${name}` : ''} — this confirms your spot in this local demo only. No real registration was created and no email was sent.`,
    })
    setOpen(false)
    setName('')
    setEmail('')
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
        {event.ctaLabel}
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>{event.ctaLabel}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              This is a fictional demo event. Submitting this form only shows a local
              confirmation on this page — no real registration, booking, or payment is
              made, and no live meeting link or email will be sent.
            </DialogContentText>
            <Stack spacing={2}>
              <TextField
                label="Name"
                value={name}
                onChange={(changeEvent) => setName(changeEvent.target.value)}
                fullWidth
                autoFocus
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(changeEvent) => setEmail(changeEvent.target.value)}
                fullWidth
                helperText="Not stored or sent anywhere — demo only."
              />
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
              {event.noBookingNote}
            </Typography>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Confirm demo signup
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}
