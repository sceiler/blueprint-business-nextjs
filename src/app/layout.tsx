import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrightStart Product & Growth Day — 7 October 2026 (Demo)',
  description:
    'A marketer demo event landing page for BrightStart, a fictional independent brand and digital studio. Register for the proposed 7 October 2026 session on brand, website, and growth.',
}

export const viewport: Viewport = {
  themeColor: '#05807f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
