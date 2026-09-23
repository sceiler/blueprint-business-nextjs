import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
// @storyblok/mui pins @mui/material to v5, whose material-nextjs package has not
// published a v16-appRouter export yet; v15-appRouter is the same cache provider
// implementation and works correctly under Next.js 16's App Router.
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Autumn Trail Evening — Demo Signup | Trail & Tide',
  description:
    'Fictional demo signup page for the Autumn Trail Evening, an online event exploring mountain and coastal journeys.',
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
