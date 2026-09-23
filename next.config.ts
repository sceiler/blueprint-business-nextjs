import type { NextConfig } from 'next'

// This demo renders from a saved content snapshot (see src/data/storyblok-snapshot.ts)
// instead of calling the Storyblok Delivery API at build/runtime, so no API token
// or remote fetch is required to build or run this app.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.storyblok.com',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
