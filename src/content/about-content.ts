/**
 * Static content snapshot for the Trail & Tide "About" page.
 *
 * This is a captured, point-in-time export of selected Storyblok CMS stories — not a live API
 * fetch. No Storyblok delivery token is required to build or run this page. If the CMS content
 * changes, re-run the capture and update this file; there is no runtime dependency on Storyblok.
 *
 * Source stories (Storyblok space 295429864939350, captured 2026-09-23):
 * - "The Trail & Tide story"      id 223279549054992  slug pages/about
 * - "Mara Jensen"                 id 223279578595365  slug team/mara-jensen
 * - "Inês Costa"                  id 223279579901990  slug team/ines-costa
 * - "Finn Campbell"               id 223279581241383  slug team/finn-campbell
 * - "Trail & Tide brand and voice" id 223279544795149 slug brand/trail-and-tide
 * Brand illustration asset id 223279502840423, mirrored locally at /images/trail-tide-brand.svg.
 */

export type GuideAccent = 'success' | 'info' | 'warning'

export type GuideProfile = {
  name: string
  title: string
  biography: string
  accent: GuideAccent
}

export const brandAsset = {
  src: '/images/trail-tide-brand.svg',
  alt: 'Original illustrated mountain and sea landscape for Trail & Tide',
}

export const companyStory = {
  eyebrow: 'The Trail & Tide story',
  heading: 'Built around the days you remember',
  tagline: 'Built around the days you remember, with fewer logistics to manage.',
  sections: [
    {
      heading: 'Why we started',
      body: 'Our fictional founders wanted outdoor trips that left room for conversation, weather changes, and a long lunch. The result is a small collection of hiking and paddling journeys with transparent expectations.',
    },
    {
      heading: 'How we plan',
      body: 'We work with a small guide team, explain each itinerary\u2019s walking time and terrain, and keep free time in the programme. Plans can change with conditions.',
    },
    {
      heading: 'Meet the team',
      body: 'Mara Jensen leads mountain itineraries, In\u00eas Costa hosts coastal journeys, and Finn Campbell runs paddling introductions. Their profiles are fictional demo biographies.',
    },
  ],
  demoNotice:
    'Fictional demo content. Prices, events, people, claims, and availability are illustrative; no real registration or booking is collected.',
}

export const guideProfiles: GuideProfile[] = [
  {
    name: 'Mara Jensen',
    title: 'Mountain Journey Host',
    biography:
      'A fictional guide profile focused on patient pacing, route storytelling, and helping walkers prepare. Hosts Madeira and Dolomites journeys; no professional certification is asserted.',
    accent: 'success',
  },
  {
    name: 'In\u00eas Costa',
    title: 'Coastal Journey Host',
    biography:
      'A fictional host who brings coastal walks, market visits, and shared meals together. Leads the Algarve collection and co-hosts the Autumn Trail Evening.',
    accent: 'info',
  },
  {
    name: 'Finn Campbell',
    title: 'Paddling Journey Host',
    biography:
      'A fictional host for beginner paddling conversations and the Scotland collection. This profile is sample marketing content, not evidence of qualifications.',
    accent: 'warning',
  },
]
