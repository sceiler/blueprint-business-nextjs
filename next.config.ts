import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy-Report-Only',
    value:
      "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'",
  },
]

const nextConfig: NextConfig = {
  // Allows the v0 preview proxy to reach this dev server's HMR/font endpoints.
  allowedDevOrigins: ['*.vusercontent.net', '*.dev-vm.vusercontent.net', '*.v0.build', '*.vercel.run'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
