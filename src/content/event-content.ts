import snapshot from './storyblok-snapshot.json'

/**
 * Content provenance
 * -------------------
 * This page renders a saved snapshot of Storyblok CMS content (see
 * `./storyblok-snapshot.json`), captured from space "{@link snapshot.space.name}"
 * (space id {@link snapshot.space.id}) at {@link snapshot.capturedAt}. No Storyblok
 * Delivery API token or live fetch is used at build or runtime.
 *
 * Source stories:
 * - Autumn Trail Evening — story 223279564464155, slug `events/autumn-trail-evening`
 * - Mara Jensen — story 223279578595365, slug `team/mara-jensen`
 * - Inês Costa — story 223279579901990, slug `team/ines-costa`
 * - Trail & Tide brand and voice — story 223279544795149, slug `brand/trail-and-tide`
 */

type EventContent = {
  title: string
  summary: string
  venue: string
  price: string
  capacity: string
  timezone: string
  start_date: string
  end_date: string
  demo_notice: string
  agenda: { time: string; item: string }[]
  eventDetailsNote: string
  whatToExpect: string
  ctaLabel: string
  noBookingNote: string
}

type TeamMemberContent = {
  name: string
  title: string
  biography: string
}

type BrandContent = {
  summary: string
  whoWeAre: string
}

const findStory = (id: string) => {
  const story = snapshot.stories.find((candidate) => candidate.id === id)
  if (!story) {
    throw new Error(`Storyblok snapshot is missing expected story ${id}`)
  }
  return story
}

const eventStory = findStory('223279564464155')
const maraStory = findStory('223279578595365')
const inesStory = findStory('223279579901990')
const brandStory = findStory('223279544795149')

const eventContent = eventStory.content as EventContent
const maraContent = maraStory.content as unknown as TeamMemberContent
const inesContent = inesStory.content as unknown as TeamMemberContent
const brandContent = brandStory.content as unknown as BrandContent

export const brand = {
  name: 'Trail & Tide',
  tagline: brandContent.summary,
  whoWeAre: brandContent.whoWeAre,
}

export const heroImage = {
  src: snapshot.asset.url,
  alt: snapshot.asset.alt,
}

export const event = {
  title: eventContent.title,
  summary: eventContent.summary,
  venue: eventContent.venue,
  price: eventContent.price,
  capacity: eventContent.capacity,
  timezone: eventContent.timezone,
  startDate: eventContent.start_date,
  endDate: eventContent.end_date,
  eventDetailsNote: eventContent.eventDetailsNote,
  whatToExpect: eventContent.whatToExpect,
  ctaLabel: eventContent.ctaLabel,
  noBookingNote: eventContent.noBookingNote,
  demoNotice: eventContent.demo_notice,
  agenda: eventContent.agenda,
}

export const hosts = [
  {
    name: maraContent.name,
    role: maraContent.title,
    biography: maraContent.biography,
    accent: 'success' as const,
  },
  {
    name: inesContent.name,
    role: inesContent.title,
    biography: inesContent.biography,
    accent: 'info' as const,
  },
]

/** Formats "2026-10-08 18:30" as "8 October 2026". */
export const formatEventDate = (dateTime: string): string => {
  const datePart = dateTime.split(' ')[0] ?? dateTime
  const date = new Date(`${datePart}T00:00:00`)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Formats "2026-10-08 18:30" as "18:30". */
export const formatEventTime = (dateTime: string): string => dateTime.split(' ')[1] ?? ''
