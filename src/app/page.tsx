import { notFound } from 'next/navigation'
import { getPublishedStories } from '@/lib/storyblok-delivery'
import { ContentDeliveryError } from '@/lib/delivery-client'
import {
  buildEventViewModel,
  parseEventPageContent,
  parseTeamMemberContent,
  type TeamMemberContent,
} from '@/content'
import { EventLandingPage } from '@/components/event/EventLandingPage'

export const dynamic = 'force-dynamic'

// Selected Storyblok story UUIDs for the Autumn Trail Evening landing page.
// Presentation logic lives in code; visitor-facing copy always comes from CMS fields.
const EVENT_STORY_UUID = 'b5d73e65-c31a-487e-b309-ad2faa3762d5'
const HOST_STORY_UUIDS = [
  '34ff5e7d-8522-42e9-8e9c-0adb4b97e3a0', // Mara Jensen
  'bf56c7b4-6673-4c4c-b4b8-f40685e70a14', // Inês Costa
]

export default async function HomePage() {
  if (!process.env.STORYBLOK_DELIVERY_API_TOKEN) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Autumn Trail Evening</h1>
        <p>
          Configure the space ID and public content-delivery token to load your published
          content.
        </p>
      </main>
    )
  }

  const stories = await getPublishedStories([EVENT_STORY_UUID, ...HOST_STORY_UUIDS]).catch(
    (error: unknown) => {
      if (error instanceof ContentDeliveryError && error.status === 404) notFound()
      throw error
    },
  )

  const eventStory = stories.find((story) => story.uuid === EVENT_STORY_UUID)
  if (!eventStory) notFound()

  const eventResult = parseEventPageContent(eventStory.content)
  if (eventResult.tag === 'failure') {
    throw new Error(`Unable to parse the Autumn Trail Evening content: ${eventResult.error.message}`)
  }

  const hosts: TeamMemberContent[] = HOST_STORY_UUIDS.map((uuid) =>
    stories.find((story) => story.uuid === uuid),
  )
    .filter((story): story is NonNullable<typeof story> => Boolean(story))
    .map((story) => parseTeamMemberContent(story.content))
    .filter((result) => result.tag === 'success')
    .map((result) => result.value)

  const event = buildEventViewModel(eventResult.value, hosts)

  return <EventLandingPage event={event} />
}
