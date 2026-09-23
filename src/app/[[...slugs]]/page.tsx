import { notFound } from 'next/navigation'
import { StoryblokStory } from '@storyblok/react/rsc'
import { getPublishedStory } from '@/lib/storyblok-delivery'
import { ContentDeliveryError } from '@/lib/delivery-client'

export const dynamic = 'force-dynamic'

export default async function DynamicPage({ params }: { params: Promise<{ slugs?: string[] }> }) {
  if (!process.env.STORYBLOK_DELIVERY_API_TOKEN) {
    return <main className="p-8"><h1>Storyblok business blueprint</h1><p>Configure the space ID and public content-delivery token to load your published content.</p></main>
  }
  const { slugs = [] } = await params
  const { story } = await getPublishedStory(slugs.join('/') || 'home').catch((error: unknown) => {
    if (error instanceof ContentDeliveryError && error.status === 404) notFound()
    throw error
  })
  return <StoryblokStory story={story} />
}
