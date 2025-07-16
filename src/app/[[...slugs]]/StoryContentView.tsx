import { FunctionComponent } from 'react'
import { Content, parseContent, resolveStories } from '@/content'
import { Story } from '@/delivery-api'
import ContentView from '@/components/ContentView'
import { formatResult } from 'pure-parse'
import { StoryblokStory, storyblokInit } from '@storyblok/react/rsc'

export const BlokView: FunctionComponent<{ blok: Content }> = (props) => (
  <ContentView content={props.blok} />
)

storyblokInit({
  components: {
    page: BlokView,
  },
})

/**
 * Render the content in a story.
 * @param props
 * @constructor
 */
export const StoryContentView: FunctionComponent<{
  rels: Story[]
  story: Story
}> = (props) => {
  const { story, rels } = props
  const contentRes = parseContent(resolveStories(story, rels).content)

  if (contentRes.error) {
    console.error(
      `Failed to parse content: ${formatResult(contentRes)}`,
      JSON.stringify(story.content),
    )
    throw new Error(`Failed to parse content`)
  }

  return (
    <StoryblokStory
      story={{
        ...story,
        content: contentRes.value,
      }}
    />
  )
}
