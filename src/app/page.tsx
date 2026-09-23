import AppHeaderBar from '@/components/AppHeaderBar'
import Footer from '@/components/Footer'
import ClosingCta from '@/components/sections/ClosingCta'
import EventHero from '@/components/sections/EventHero'
import ServiceTabs from '@/components/sections/ServiceTabs'
import StorySection from '@/components/sections/StorySection'
import TeamSection from '@/components/sections/TeamSection'
import ValueCards from '@/components/sections/ValueCards'

export default function EventLandingPage() {
  return (
    <>
      <AppHeaderBar />
      <main>
        <EventHero />
        <StorySection />
        <ValueCards />
        <ServiceTabs />
        <TeamSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}
