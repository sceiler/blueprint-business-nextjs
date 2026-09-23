/**
 * Static content snapshot for the BrightStart event landing page.
 *
 * Source: Storyblok CMS snapshot captured 2026-09-23T22:00:01Z (space "demo", eu-central-1,
 * https://www.storyblok.com). This page renders from this local snapshot only — there is no
 * live Storyblok fetch and no Storyblok API token is required to build or run this demo.
 *
 * CMS provenance (story id -> slug -> what it grounds on this page):
 *  - 223237613218458 -> pages/          "Home"     brand voice, positioning
 *  - 223237614766747 -> pages/about     "About"    company story, values, team reference
 *  - 223237616458396 -> pages/services  "Services" Brand / Website / Growth service tabs
 *  - 223237608151703 -> team/alex-morgan "Alex Morgan" (Strategy Director, purple)
 *  - 223237609806488 -> team/sam-rivera  "Sam Rivera"  (Design Lead, orange)
 *  - 223237611821721 -> team/jordan-lee  "Jordan Lee"  (Technology Lead, green)
 *
 * Everything under `eventMeta` and the `topics` / `focus` copy on `serviceTracks` and `team` is
 * proposed demo content for this landing page (event name, date framing, agenda, registration
 * copy, and team-participation framing) — it is not a confirmed CMS fact. Nothing here should be
 * read as a real event, a real registration destination, or a real speaker commitment.
 */

export type BrandColorKey = 'purple' | 'orange' | 'green' | 'blue' | 'yellow' | 'beige' | 'grey'

/** Bright pastel section colors, matching the source blueprint's palette (see git history). */
export const brightPalette: Record<BrandColorKey, string> = {
  purple: '#D9D4FC',
  orange: '#FFE7D3',
  yellow: '#F2F1D7',
  green: '#C3F0CC',
  blue: '#D9DFF6',
  beige: '#F4F2E9',
  grey: '#F5F5F7',
}

export const eventMeta = {
  isDemoContent: true as const,
  eyebrow: 'Demo event — proposed content, not a confirmed booking',
  name: 'BrightStart Product & Growth Day',
  dateISO: '2026-10-07',
  dateLabel: 'Tuesday, 7 October 2026',
  timeLabel: '10:00–13:00 (Europe/Berlin) — draft time, to be confirmed',
  format: 'Online session — a link is shared after registration',
  audience: 'For founders and marketing teams',
  tagline: 'A bright start for your next big idea',
  intro:
    'Save the date for a working session on brand, website, and growth — led by the BrightStart team. This page is a marketer demo: the event, agenda, and speakers below are proposed content, not confirmed facts.',
}

export const companyStory = {
  eyebrow: 'Our story',
  heading: 'Good people. Clear ideas. Better work.',
  body: 'BrightStart is a fictional independent brand and digital studio created for this demo. Our sample team brings strategy, design, and technology together — and we work alongside founders and marketing teams who value a thoughtful approach and a practical result.',
}

export const values = [
  {
    title: 'Stay curious',
    body: 'Ask the useful questions before jumping to a solution. Understanding the business and its customers is part of the work.',
  },
  {
    title: 'Make it clear',
    body: 'Use plain language, show progress early, and make decisions easy to understand.',
  },
  {
    title: 'Build for the next chapter',
    body: 'Create systems and content your team can use, improve, and grow after launch.',
  },
] as const

export type ServiceTrack = {
  key: 'brand' | 'website' | 'growth'
  title: string
  color: BrandColorKey
  heading: string
  body: string
  topics: { title: string; body: string }[]
}

export const serviceTracks: ServiceTrack[] = [
  {
    key: 'brand',
    title: 'Brand',
    color: 'purple',
    heading: 'Find a direction you can build on',
    body: 'Research, positioning, messaging, and visual identity that give your business a consistent foundation.',
    topics: [
      {
        title: 'Positioning',
        body: 'A clear audience, a focused proposition, and a story that explains your value.',
      },
      {
        title: 'Visual identity',
        body: 'A flexible approach to colour, typography, and imagery across your touchpoints.',
      },
      {
        title: 'Brand guidelines',
        body: 'Everyday guidance that helps your team create consistent work.',
      },
    ],
  },
  {
    key: 'website',
    title: 'Website',
    color: 'green',
    heading: 'Build a website your team can own',
    body: 'A fast, useful digital home with reusable content blocks and a comfortable editing experience.',
    topics: [
      {
        title: 'Content structure',
        body: 'A clear sitemap and reusable content model that make information easy to find.',
      },
      {
        title: 'Design and development',
        body: 'Responsive page patterns that bring the brand to life across devices.',
      },
      {
        title: 'Launch and handover',
        body: 'A considered launch, editor training, and documentation your team can use.',
      },
    ],
  },
  {
    key: 'growth',
    title: 'Growth',
    color: 'orange',
    heading: 'Give your next campaign a strong start',
    body: 'Plan the message, create the content, and launch pages that support your next business milestone.',
    topics: [
      {
        title: 'Campaign planning',
        body: 'A focused objective, a relevant audience, and a realistic publishing plan.',
      },
      {
        title: 'Content production',
        body: 'Landing pages, articles, and supporting assets that tell a consistent story.',
      },
      {
        title: 'Iteration',
        body: 'Review what people respond to and improve the next version.',
      },
    ],
  },
]

export type TeamMemberContent = {
  name: string
  title: string
  color: BrandColorKey
  /** Framing copy tying the role to a session track — proposed for this demo, not a confirmed CMS fact. */
  focus: string
}

export const team: TeamMemberContent[] = [
  {
    name: 'Alex Morgan',
    title: 'Strategy Director',
    color: 'purple',
    focus: 'Proposed to open the Brand track',
  },
  {
    name: 'Sam Rivera',
    title: 'Design Lead',
    color: 'orange',
    focus: 'Proposed to open the Website track',
  },
  {
    name: 'Jordan Lee',
    title: 'Technology Lead',
    color: 'green',
    focus: 'Proposed to open the Growth track',
  },
]

export const teamIntro = {
  heading: 'Meet your collaborators',
  body: 'Three perspectives, one shared goal: make the right thing, then make it work well. Shown here as the BrightStart team — not confirmed speakers for this session.',
}

export const closingCta = {
  heading: 'Let\u2019s make something people remember',
  body: 'Tell us where you want to go. We\u2019ll help you find a practical way to get there.',
}
