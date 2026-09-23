'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/** Refresh an open page after a CMS publish without regenerating the frontend. */
export function ContentRefresh() {
  const router = useRouter()
  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === 'visible') router.refresh()
    }
    const interval = window.setInterval(refresh, 30000)
    document.addEventListener('visibilitychange', refresh)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', refresh)
    }
  }, [router])
  return null
}
