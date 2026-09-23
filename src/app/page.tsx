import AgendaSection from '@/components/AgendaSection'
import EventHero from '@/components/EventHero'
import HostsSection from '@/components/HostsSection'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import TripComparisonSection from '@/components/TripComparisonSection'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <EventHero />
        <AgendaSection />
        <TripComparisonSection />
        <HostsSection />
      </main>
      <SiteFooter />
    </>
  )
}
