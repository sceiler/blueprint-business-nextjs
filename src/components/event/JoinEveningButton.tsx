'use client'

import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export type JoinEveningButtonProps = {
  label: string
  eventTitle: string
}

/**
 * The CMS has no live meeting or registration URL for this fictional event.
 * Clicking the CTA shows a local, honest demo confirmation instead of
 * submitting anything or implying a real signup.
 */
export function JoinEveningButton({ label, eventTitle }: JoinEveningButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="contained" size="large" color="primary" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="join-evening-dialog-title"
      >
        <DialogTitle id="join-evening-dialog-title">Demo confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a local demo confirmation only. &ldquo;{eventTitle}&rdquo; is fictional
            content used to showcase this page — no real registration has been submitted, no
            meeting link exists, and nothing has been sent anywhere.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained" autoFocus>
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
