import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Autumn Trail Evening — 8 October 2026 | Trail & Tide',
  description:
    'Join Trail & Tide for a free online evening on 8 October 2026: the full agenda, host introductions, and a side-by-side look at the Madeira and Algarve journeys. A fictional demo event — no real registration is collected.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#05807f',
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
