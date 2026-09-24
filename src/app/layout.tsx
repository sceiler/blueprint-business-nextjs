import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import './globals.css'
import StoryblokProvider from '@/app/StoryblokProvider'
import { ContentRefresh } from '@/components/ContentRefresh'
import { Providers } from './providers'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Autumn Trail Evening',
  description:
    'Autumn Trail Evening is a free online demo event comparing mountain and coastal outdoor journeys, with a short agenda and a local demo RSVP.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#05807f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoryblokProvider>
      <html lang="en" className={roboto.className}>
        <body className="antialiased">
          <AppRouterCacheProvider>
            <Providers>
              <ContentRefresh />
              {children}
            </Providers>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoryblokProvider>
  )
}
