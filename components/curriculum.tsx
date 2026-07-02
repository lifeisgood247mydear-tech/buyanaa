import { Brain, Settings, Bot, Rocket } from 'lucide-react'

const PHASES = [
  {
    icon: Brain,
    phase: 'Phase 1',
    title: 'Advanced Prompting & Context Engineering with Claude',
    points: [
      'Master Claude 3.5 Sonnet for production-grade output',
      'Build custom Projects, Artifacts & System Prompts',
      'Structure JSON outputs to feed external APIs',
    ],
  },
  {
    icon: Settings,
    phase: 'Phase 2',
    title: 'Core Automation Foundations with n8n',
    points: [
      'Set up n8n (Cloud vs. Self-hosted) & node architecture',
      'Webhooks, JSON manipulation, HTTP & conditional routing',
      'Connect Gmail, Google Sheets, Slack, CRM & Notion',
    ],
  },
  {
    icon: Bot,
    phase: 'Phase 3',
    title: 'Building Autonomous AI Agents',
    points: [
      'Integrate Claude directly into n8n workflows',
      'Multi-agent systems that research & execute autonomously',
      'A live Lead Generation & Content Marketing Agent',
    ],
  },
  {
    icon: Rocket,
    phase: 'Phase 4',
    title: 'Production Deployment & Scale',
    points: [
      'Error handling, optimization & automated Cron schedules',
      'Package automation services for high-ticket clients',
      'Capstone project presentation & Certification',
    ],
  },
]

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            What You Will Master
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Four phases, from prompt architecture to production
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PHASES.map((p) => (
            <article
              key={p.phase}
              className="group relative rounded-2xl border border-border/60 bg-card p-7 transition-colors hover:border-gold/50"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    {p.phase}
                  </p>
                  <h3 className="mt-1 font-serif text-xl leading-snug text-foreground">
                    {p.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
