export const deliveryOrigins: Record<string, string> = {
  eu: 'https://api.storyblok.com',
  us: 'https://api-us.storyblok.com',
  ca: 'https://api-ca.storyblok.com',
  ap: 'https://api-ap.storyblok.com',
  cn: 'https://app.storyblokchina.cn',
}

export class ContentDeliveryError extends Error {
  status: number
  constructor(status: number) {
    super(status === 404 ? 'Published content was not found.' : 'Published content is temporarily unavailable.')
    this.status = status
  }
}

// Fetch the current space version so published edits select a fresh CDN entry.
export async function deliveryRequest<T>(
  path: string,
  params: Record<string, string>,
  config: { token: string; region: string; spaceId: string },
  transport: typeof fetch = fetch,
): Promise<T> {
  const origin = deliveryOrigins[config.region.split('-')[0] || '']
  if (!origin || !config.token || !/^\d+$/.test(config.spaceId))
    throw new Error('Configure the Storyblok delivery environment variables.')
  async function request(url: URL) {
    for (let attempt = 0; attempt < 3; attempt++) {
      let response: Response
      try {
        response = await transport(url, { cache: 'no-store', signal: AbortSignal.timeout(12000) })
      } catch {
        throw new ContentDeliveryError(502)
      }
      if (response.status === 429 && attempt < 2) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)))
        continue
      }
      if (!response.ok) throw new ContentDeliveryError(response.status)
      return response.json()
    }
    throw new ContentDeliveryError(429)
  }
  const spaceUrl = new URL('/v2/cdn/spaces/me', origin)
  spaceUrl.searchParams.set('token', config.token)
  const { space } = await request(spaceUrl)
  if (String(space.id) !== config.spaceId) throw new Error('The delivery token belongs to a different space.')
  const url = new URL(`/v2/cdn/${path}`, origin)
  url.search = new URLSearchParams({ ...params, token: config.token, version: 'published', cv: String(space.version) }).toString()
  return request(url) as Promise<T>
}
