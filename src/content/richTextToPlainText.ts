import type { ListItemNode, RichTextContent } from '../delivery-api'

type PlainTextNode = RichTextContent | ListItemNode

/** Flatten a Storyblok richtext node tree into plain text. */
export function richTextToPlainText(node: PlainTextNode): string {
  if (node.type === 'text') return node.text
  if ('content' in node && Array.isArray(node.content)) {
    return (node.content as PlainTextNode[]).map(richTextToPlainText).join('')
  }
  return ''
}

/** Return the plain text of the first heading node in a richtext doc, if any. */
export function richTextHeadingText(doc: RichTextContent): string | undefined {
  if (doc.type !== 'doc') return undefined
  const heading = doc.content.find((node) => node.type === 'heading')
  return heading ? richTextToPlainText(heading).trim() : undefined
}

/** Return the plain text of the first paragraph node in a richtext doc, if any. */
export function richTextParagraphText(doc: RichTextContent): string | undefined {
  if (doc.type !== 'doc') return undefined
  const paragraph = doc.content.find((node) => node.type === 'paragraph')
  return paragraph ? richTextToPlainText(paragraph).trim() : undefined
}
