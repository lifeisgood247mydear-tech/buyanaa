import { GraduationCap, Trophy, Network, Zap, FileDown, Star } from 'lucide-react'

const EXPERIENCE = [
  {
    icon: GraduationCap,
    title: 'Classroom Access',
    body: 'Step-by-step video playbooks, downloadable .json workflow templates, and prompt blueprints.',
  },
  {
    icon: Trophy,
    title: 'Gamified Learning',
    body: 'Unlock exclusive, advanced bonuses as you level up by interacting with peers.',
  },
  {
    icon: Network,
    title: 'Networking Hub',
    body: 'Connect with ambitious founders, operators, and developers scaling with AI.',
  },
]

const WHY = [
  {
    icon: Zap,
    title: 'Zero Fluff',
    body: '100% focused on tool execution — Claude + n8n, nothing else.',
  },
  {
    icon: FileDown,
    title: 'Ready-to-Use Assets',
    body: 'Walk away with ready-to-import automation blueprints.',
  },
  {
    icon: Star,
    title: 'Lifetime Network',
    body: 'Join a community of forward-thinking AI operators for good.',
  },
]

export function Community() {
  return (
    <section id="community" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Inside the Skool Experience
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            More than a course — a high-accountability build camp
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/60 bg-card p-7"
            >
              <item.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gold/25 bg-gold/[0.04] p-8 sm:p-10">
          <h3 className="text-center font-serif text-2xl text-foreground">
            Why Join AiGlobal?
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                  <item.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-medium text-foreground">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
