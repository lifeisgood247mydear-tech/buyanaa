import Image from 'next/image'
import { ArrowRight, Clock, CalendarDays, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATS = [
  { icon: CalendarDays, label: '4-Week Cohort', detail: '3 days / week' },
  { icon: Clock, label: '7:30 – 9:30 AM', detail: 'Accelerated session' },
  { icon: Users, label: 'Live on Skool', detail: 'Community + Classroom' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* subtle radial glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.76 0.11 84 / 0.6), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/aiglobal-logo.png"
            alt="AiGlobal logo"
            width={96}
            height={96}
            priority
            className="mb-8 h-20 w-20 object-contain sm:h-24 sm:w-24"
          />

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Intensive Build Camp
          </span>

          <h1 className="max-w-4xl text-balance font-serif text-4xl font-semibold leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
            Build Autonomous Workflows &amp; AI Agents with{' '}
            <span className="text-gold">Claude</span> and{' '}
            <span className="text-gold">n8n</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            The definitive hands-on training for professionals automating their
            business. In 4 intensive weeks, go from AI amateur to Advanced
            Workflow Engineer — live, inside our premium Skool community.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold font-medium text-primary-foreground hover:bg-gold-soft"
            >
              <a href="#join">
                Secure Your Spot
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold/40 bg-transparent text-foreground hover:bg-gold/10 hover:text-gold"
            >
              <a href="#curriculum">View Curriculum</a>
            </Button>
          </div>

          <dl className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/40 sm:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 bg-card px-6 py-6"
              >
                <s.icon className="h-5 w-5 text-gold" />
                <dt className="font-serif text-lg text-foreground">
                  {s.label}
                </dt>
                <dd className="text-sm text-muted-foreground">{s.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
