/**
 * Saved Storyblok content snapshot for the "Autumn Trail Evening" demo.
 *
 * This app renders entirely from this static snapshot rather than calling the
 * Storyblok Delivery API, so no API token is needed to build or run it. The data
 * below was captured from the "Trail & Tide — Outdoor Adventures" demo space
 * (space id 295429864939350, eu-central-1) on 2026-09-23.
 *
 * Source stories (id · slug):
 * - 223279564464155 · events/autumn-trail-evening   (eventPage)
 * - 223279552008210 · trips/madeira-ridge-and-levada (travelExperience)
 * - 223279553380371 · trips/algarve-coastal-weekend  (travelExperience)
 * - 223279578595365 · team/mara-jensen               (teamMember)
 * - 223279579901990 · team/ines-costa                (teamMember)
 *
 * Also referenced while designing this page (not rendered verbatim):
 * - 223279544795149 · brand/trail-and-tide  — brand voice, palette, and demo-status wording
 * - 223279549054992 · pages/about           — existing hero/teamMembers block layout patterns
 *
 * Illustration assets (Storyblok CDN, referenced by the stories above):
 * - https://a.storyblok.com/f/295429864939350/1600x900/ce94903482/trail-tide-brand.svg
 * - https://a.storyblok.com/f/295429864939350/1600x900/e4f8e00514/madeira-ridges.svg
 * - https://a.storyblok.com/f/295429864939350/1600x900/50c7660af9/algarve-coast.svg
 */

export type RichTextDoc = {
  type: 'doc'
  content: Array<{
    type: 'heading' | 'paragraph'
    attrs?: { level: number }
    content: Array<{ type: 'text'; text: string }>
  }>
}

export type HeroBlock = {
  backgroundColor: 'beige' | 'white'
  description: RichTextDoc
}

export type Asset = {
  alt: string
  filename: string
}

const DEMO_NOTICE =
  'Fictional demo content. Prices, events, people, claims, and availability are illustrative; no real registration or booking is collected.'

function heading(text: string, level = 2): RichTextDoc['content'][number] {
  return { type: 'heading', attrs: { level }, content: [{ type: 'text', text }] }
}

function paragraph(text: string): RichTextDoc['content'][number] {
  return { type: 'paragraph', content: [{ type: 'text', text }] }
}

export const trailAndTideAsset: Asset = {
  alt: 'Original illustrated mountain and sea landscape for Trail & Tide',
  filename:
    'https://a.storyblok.com/f/295429864939350/1600x900/ce94903482/trail-tide-brand.svg',
}

export const madeiraAsset: Asset = {
  alt: 'Illustrated green mountain ridges and Atlantic horizon; fictional campaign artwork',
  filename:
    'https://a.storyblok.com/f/295429864939350/1600x900/e4f8e00514/madeira-ridges.svg',
}

export const algarveAsset: Asset = {
  alt: 'Illustrated sand cliffs and turquoise sea; fictional campaign artwork',
  filename:
    'https://a.storyblok.com/f/295429864939350/1600x900/50c7660af9/algarve-coast.svg',
}

export const eventStory = {
  title: 'Autumn Trail Evening',
  summary: 'An online evening to find the outdoor journey that fits your pace.',
  image: trailAndTideAsset,
  venue: 'Online — demo event',
  price: 'Free',
  capacity: '80',
  startDate: '2026-10-08 18:30',
  endDate: '2026-10-08 19:30',
  timezone: 'Europe/Berlin',
  demoNotice: DEMO_NOTICE,
  body: [
    {
      backgroundColor: 'beige',
      description: {
        type: 'doc',
        content: [
          heading('Autumn Trail Evening', 1),
          paragraph('An online evening to find the outdoor journey that fits your pace.'),
        ],
      },
    },
    {
      backgroundColor: 'white',
      description: {
        type: 'doc',
        content: [
          heading('Event details'),
          paragraph(
            '8 October 2026, 18:30–19:30 Europe/Berlin. Free online event, 80 demo places. Hosts Mara Jensen and Inês Costa compare mountain and coastal journeys.',
          ),
        ],
      },
    },
    {
      backgroundColor: 'white',
      description: {
        type: 'doc',
        content: [
          heading('Agenda'),
          paragraph(
            '18:30 welcome; 18:40 Madeira and Algarve stories; 19:00 choosing a difficulty level; 19:15 packing questions; 19:30 close. No travel booking or payment is taken.',
          ),
        ],
      },
    },
    {
      backgroundColor: 'white',
      description: {
        type: 'doc',
        content: [
          heading('What to expect'),
          paragraph(
            'A calm, practical introduction for first-time small-group travellers. CTA: "Join the evening". This fictional event has no live meeting link; a local demo confirmation is sufficient.',
          ),
        ],
      },
    },
  ] satisfies HeroBlock[],
}

export type TravelExperience = {
  title: string
  summary: string
  image: Asset
  price: string
  duration: string
  difficulty: 'Easy' | 'Moderate'
  groupSize: string
  destination: string
  departureDates: string
  demoNotice: string
  experience: string
  itinerary: string
  includedExcluded: string
  hostNote: string
}

export const madeiraStory: TravelExperience = {
  title: 'Madeira — Ridge & Levada',
  summary: 'Six days of forest paths, ridge views, and unhurried island evenings.',
  image: madeiraAsset,
  price: 'EUR 1,290 per person, shared twin room',
  duration: '6 days / 5 nights',
  difficulty: 'Moderate',
  groupSize: '8–10',
  destination: 'Madeira, Portugal',
  departureDates: '2026-11-07; 2026-11-21; 2027-03-06',
  demoNotice: DEMO_NOTICE,
  experience:
    'Three guided walking days with approximately 4–6 hours on foot, one flexible coastal day, and relaxed evenings in a small guesthouse. The demo itinerary includes uneven steps and exposed sections; it is not suitable for every level of mobility.',
  itinerary:
    'Day 1: arrival and welcome. Day 2: forest and levada walk. Day 3: ridge route subject to conditions. Day 4: flexible coast day. Day 5: guide’s choice walk and farewell dinner. Day 6: departure.',
  includedExcluded:
    'Included: five nights, daily breakfast, three guided walks, group transfers on activity days, and welcome/farewell dinners. Excluded: flights, airport transfers outside the group window, most lunches and dinners, insurance, and personal equipment.',
  hostNote:
    'Lead guide: Mara Jensen. Walking boots and a waterproof layer are required. Exact routes depend on access and conditions. All dates, prices, and availability are sample data.',
}

export const algarveStory: TravelExperience = {
  title: 'Algarve — Coast & Conversation',
  summary: 'A four-day coastal escape with easy walks, market food, and time by the sea.',
  image: algarveAsset,
  price: 'EUR 690 per person, shared twin room',
  duration: '4 days / 3 nights',
  difficulty: 'Easy',
  groupSize: '6–10',
  destination: 'Algarve, Portugal',
  departureDates: '2026-10-23; 2026-11-06; 2027-04-16',
  demoNotice: DEMO_NOTICE,
  experience:
    'Two coastal walks of roughly 2–3 hours, a local market visit, and one free afternoon. Paths include uneven ground and some steps. "Easy" describes the itinerary pace, not universal accessibility.',
  itinerary:
    'Day 1: meet in Lagos and welcome dinner. Day 2: coastal walk and market lunch. Day 3: morning village walk, optional beach time. Day 4: breakfast and departure.',
  includedExcluded:
    'Included: three nights, breakfast, two guided walks, one market lunch, and the welcome dinner. Excluded: flights, airport transfers, optional activities, insurance, and other meals.',
  hostNote:
    'Inês Costa brings local food stories and a relaxed walking pace. Swimming is optional and never a required activity. Availability is fictional; no booking is taken in this demo.',
}

export type TeamMember = {
  name: string
  title: string
  biography: string
  backgroundColor: 'green' | 'blue'
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Mara Jensen',
    title: 'Mountain Journey Host',
    biography:
      'A fictional guide profile focused on patient pacing, route storytelling, and helping walkers prepare. Hosts Madeira and Dolomites journeys; no professional certification is asserted.',
    backgroundColor: 'green',
  },
  {
    name: 'Inês Costa',
    title: 'Coastal Journey Host',
    biography:
      'A fictional host who brings coastal walks, market visits, and shared meals together. Leads the Algarve collection and co-hosts the Autumn Trail Evening.',
    backgroundColor: 'blue',
  },
]

export const brandDemoNotice =
  'All trips, departures, guides, prices, reviews, availability, and events are fictional demo content. No booking, payment, or travel contract is created. Destination names describe real places, but itineraries are illustrative.'

/** Extracts the heading and paragraph text from a hero-style rich text doc. */
export function readHeroText(doc: RichTextDoc): {
  heading: string
  paragraph: string
} {
  const headingNode = doc.content.find((node) => node.type === 'heading')
  const paragraphNode = doc.content.find((node) => node.type === 'paragraph')
  return {
    heading: headingNode?.content.map((n) => n.text).join('') ?? '',
    paragraph: paragraphNode?.content.map((n) => n.text).join('') ?? '',
  }
}

/** Formats "2026-10-08 18:30" / "2026-10-08 19:30" into a readable event window. */
export function formatEventWindow(
  startDate: string,
  endDate: string,
  timezone: string,
): string {
  const [datePart, startTime] = startDate.split(' ')
  const endTime = endDate.split(' ')[1]
  const date = new Date(`${datePart}T00:00:00Z`)
  const dateLabel = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
  return `${dateLabel} · ${startTime}–${endTime} (${timezone})`
}

export type AgendaItem = { time: string; label: string }

/** Parses the "18:30 welcome; 18:40 ..." agenda paragraph into structured items. */
export function parseAgenda(paragraph: string): AgendaItem[] {
  return paragraph
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => /^\d{1,2}:\d{2}/.test(part))
    .map((part): AgendaItem => {
      const match = part.match(/^(\d{1,2}:\d{2})\s+(.*)$/)
      if (!match) return { time: '', label: part }
      const time = match[1] ?? ''
      const label = match[2] ?? ''
      return { time, label: label.replace(/\.$/, '') }
    })
}
