import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Curriculum } from '@/components/curriculum'
import { Schedule } from '@/components/schedule'
import { Community } from '@/components/community'
import { JoinCta, SiteFooter } from '@/components/join-cta'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <div id="overview" />
        <Curriculum />
        <Schedule />
        <Community />
        <JoinCta />
      </main>
      <SiteFooter />
    </div>
  )
}
