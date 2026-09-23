import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'About Trail & Tide',
  description:
    'The Trail & Tide story and our guide team — a fictional demo outdoor-travel company built between mountains and sea.',
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
