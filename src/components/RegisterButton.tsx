'use client'

import * as React from 'react'
import {
  Alert,
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { eventMeta } from '@/content/event-content'

export type RegisterButtonProps = Pick<
  ButtonProps,
  'variant' | 'color' | 'size' | 'fullWidth'
> & {
  label?: string
}

/**
 * A "Register now" call to action.
 *
 * No registration destination or form backend was supplied for this demo, so this opens a local
 * dialog that collects a name and email and then shows an honest confirmation: nothing is sent
 * anywhere or stored. This intentionally does not link to /about or /services — those pages exist
 * in the source content but are not registration endpoints.
 */
export default function RegisterButton({
  label = 'Register now',
  variant = 'contained',
  color = 'primary',
  size = 'large',
  fullWidth,
}: RegisterButtonProps) {
  const [open, setOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleClose = () => {
    setOpen(false)
    setSubmitted(false)
    setName('')
    setEmail('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        onClick={() => setOpen(true)}
      >
        {label}
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, pr: 6 }}>
          {submitted ? 'You\u2019re on the demo list' : eventMeta.name}
          <IconButton
            aria-label="Close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        {submitted ? (
          <DialogContent>
            <Alert severity="success" sx={{ mb: 2 }}>
              Demo confirmation only — no data was sent or stored.
            </Alert>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Thanks{name ? `, ${name}` : ''}. This is a local demo confirmation for a marketer
              preview page. Nothing was submitted to a server, mailing list, or event platform.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In a real event flow, a registration destination and confirmation email would be
              connected here.
            </Typography>
          </DialogContent>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This is a demo registration form. No data leaves your browser and no email is
                sent — submitting only shows a confirmation message below.
              </Typography>
              <Stack spacing={2}>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  fullWidth
                  required
                />
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Confirm demo registration
              </Button>
            </DialogActions>
          </form>
        )}
      </Dialog>
    </>
  )
}
