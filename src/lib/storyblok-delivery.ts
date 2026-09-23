import 'server-only'
import type { ISbStoryData } from '@storyblok/react/rsc'
import { deliveryRequest } from './delivery-client'

function config() {
  return {
    token: process.env.STORYBLOK_DELIVERY_API_TOKEN || '',
    region: process.env.STORYBLOK_REGION || 'eu',
    spaceId: process.env.STORYBLOK_SPACE_ID || '',
  }
}

export async function getPublishedStory(slug: string) {
  const path = slug.split('/').map(encodeURIComponent).join('/')
  return deliveryRequest<{ story: ISbStoryData }>(`stories/${path}`, {
    resolve_relations: 'teamMembers.teamMembers',
  }, config())
}

/** Store UUIDs in code; read copy, links, images and profiles from CMS fields. */
export async function getPublishedStories(uuids: string[]) {
  if (!uuids.length || uuids.length > 100 || uuids.some(id => !/^[\da-f-]{36}$/i.test(id)))
    throw new Error('Provide the selected Storyblok story UUIDs.')
  const { stories } = await deliveryRequest<{ stories: ISbStoryData[] }>('stories', {
    by_uuids_ordered: uuids.join(','), per_page: '100',
  }, config())
  return stories
}
