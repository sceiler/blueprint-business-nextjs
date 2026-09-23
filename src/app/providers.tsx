'use client'

import type { ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, NotificationProvider } from '@storyblok/mui'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <NotificationProvider>{children}</NotificationProvider>
    </ThemeProvider>
  )
}
