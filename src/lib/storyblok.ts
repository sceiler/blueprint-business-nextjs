import Page from '../storyblok/Page'
import TeamMembers from '../storyblok/TeamMembers'
import Testimonials from '../storyblok/Testimonials'
import Testimonial from '../storyblok/Testimonial'
import Cards from '../storyblok/Cards'
import Hero from '../storyblok/Hero'
import Tabs from '../storyblok/Tabs'
import Card from '../storyblok/Card'
import Button from '../storyblok/Button'
import { storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  components: {
    page: Page,
    teamMembers: TeamMembers,
    testimonials: Testimonials,
    testimonial: Testimonial,
    cards: Cards,
    card: Card,
    hero: Hero,
    tabs: Tabs,
    button: Button,
  },
})
