import type { EventPageContent, HeroContent, TeamMemberContent } from './content-model'
import { richTextHeadingText, richTextParagraphText } from './richTextToPlainText'

export type AgendaItem = {
  time: string
  label: string
}

export type EventHost = {
  name: string
  title: string
}

export type EventImage = {
  src: string
  alt: string
}

/**
 * Visitor-facing view model for the event landing page, derived entirely from
 * typed CMS fields fetched at request time. No CMS copy is hardcoded here.
 */
export type EventViewModel = {
  title: string
  intro: string
  dateLabel: string
  timeRangeLabel: string
  timezoneLabel: string
  venue: string
  price: string
  capacity: string
  image?: EventImage
  hosts: EventHost[]
  ctaLabel: string
  demoNotice: string
  whatToExpect?: string
  agenda: AgendaItem[]
  agendaFootnote?: string
}

const DEFAULT_CTA_LABEL = 'Join the evening'

function findHeroByHeading(
  body: HeroContent[],
  heading: string,
): HeroContent | undefined {
  return body.find((block) => richTextHeadingText(block.description) === heading)
}

function formatDateLabel(dateTime: string): string {
  const [datePart] = dateTime.split(' ')
  const [year, month, day] = (datePart ?? '').split('-').map(Number)
  if (!year || !month || !day) return datePart ?? ''
  const date = new Date(Date.UTC(year, month - 1, day))
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

function timeOf(dateTime: string): string {
  return dateTime.split(' ')[1] ?? ''
}

/**
 * The agenda is only available in the CMS as a single prose paragraph
 * (e.g. "18:30 welcome; 18:40 ...; 19:30 close. No travel booking..."),
 * since the `eventPage` schema has no structured agenda field. This derives a
 * structured list from that fetched text rather than hardcoding a copy of it.
 */
function parseAgendaSection(text: string): {
  items: AgendaItem[]
  footnote?: string
} {
  const sentences = text
    .split('. ')
    .map((sentence) => sentence.trim())
    .filter(Boolean)
  const [schedule, ...rest] = sentences
  const items: AgendaItem[] = (schedule ?? '')
    .split(';')
    .map((part) => part.trim().replace(/\.$/, ''))
    .filter(Boolean)
    .flatMap((part) => {
      const match = part.match(/^(\d{1,2}:\d{2})\s+(.+)$/)
      return match ? [{ time: match[1] as string, label: match[2] as string }] : []
    })
  const footnote = rest.join('. ').trim()
  return {
    items,
    footnote: footnote
      ? footnote.endsWith('.')
        ? footnote
        : `${footnote}.`
      : undefined,
  }
}

/**
 * The "What to expect" hero block mixes a visitor-facing description with an
 * authoring note (`CTA: "Join the evening"`) and a fictional-event disclaimer.
 * This splits that fetched text into visitor-facing copy and a CTA label,
 * so the raw authoring note is never rendered.
 */
function parseWhatToExpect(text: string): {
  description?: string
  ctaLabel?: string
  disclaimer?: string
} {
  const sentences = text
    .split('. ')
    .map((sentence) => sentence.trim())
    .filter(Boolean)
  const [firstSentence] = sentences
  const description = firstSentence
    ? `${firstSentence.replace(/\.$/, '')}.`
    : undefined
  const ctaSentence = sentences.find((sentence) => sentence.startsWith('CTA:'))
  const ctaMatch = ctaSentence?.match(/[“"]([^”"]+)[”"]/)
  const disclaimer = sentences
    .filter((sentence) => sentence !== firstSentence && !sentence.startsWith('CTA:'))
    .join('. ')
    .trim()
  return {
    description,
    ctaLabel: ctaMatch?.[1],
    disclaimer: disclaimer
      ? disclaimer.endsWith('.')
        ? disclaimer
        : `${disclaimer}.`
      : undefined,
  }
}

export function buildEventViewModel(
  event: EventPageContent,
  hosts: TeamMemberContent[],
): EventViewModel {
  const agendaBlock = findHeroByHeading(event.body, 'Agenda')
  const agendaText = agendaBlock
    ? richTextParagraphText(agendaBlock.description)
    : undefined
  const { items: agenda, footnote: agendaFootnote } = agendaText
    ? parseAgendaSection(agendaText)
    : { items: [] as AgendaItem[], footnote: undefined }

  const whatToExpectBlock = findHeroByHeading(event.body, 'What to expect')
  const whatToExpectText = whatToExpectBlock
    ? richTextParagraphText(whatToExpectBlock.description)
    : undefined
  const {
    description: whatToExpect,
    ctaLabel,
    disclaimer,
  } = whatToExpectText
    ? parseWhatToExpect(whatToExpectText)
    : { description: undefined, ctaLabel: undefined, disclaimer: undefined }

  const demoNotice = [event.demo_notice, disclaimer].filter(Boolean).join(' ')

  return {
    title: event.title,
    intro: event.summary,
    dateLabel: formatDateLabel(event.start_date),
    timeRangeLabel: `${timeOf(event.start_date)}–${timeOf(event.end_date)}`,
    timezoneLabel: event.timezone,
    venue: event.venue,
    price: event.price,
    capacity: event.capacity,
    image: event.image
      ? { src: event.image.filename, alt: event.image.alt ?? event.title }
      : undefined,
    hosts: hosts.map((host) => ({ name: host.name, title: host.title })),
    ctaLabel: ctaLabel ?? DEFAULT_CTA_LABEL,
    demoNotice,
    whatToExpect,
    agenda,
    agendaFootnote,
  }
}
