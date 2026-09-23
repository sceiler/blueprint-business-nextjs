import AgendaSection from '@/components/AgendaSection'
import DemoNotice from '@/components/DemoNotice'
import EventDetails from '@/components/EventDetails'
import EventHero from '@/components/EventHero'
import HostsSection from '@/components/HostsSection'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import WhatToExpectSection from '@/components/WhatToExpectSection'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <EventHero />
        <DemoNotice />
        <EventDetails />
        <AgendaSection />
        <HostsSection />
        <WhatToExpectSection />
      </main>
      <SiteFooter />
    </>
  )
}
