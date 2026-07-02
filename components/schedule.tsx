const WEEKS = [
  {
    week: 'Week 1',
    focus: 'Claude & Prompt Architecture',
    output: 'Custom System Blueprints & Artifacts',
  },
  {
    week: 'Week 2',
    focus: 'n8n Core Infrastructure & Data Loops',
    output: 'Fully Automated Multi-App Integration',
  },
  {
    week: 'Week 3',
    focus: 'AI Agent Development',
    output: 'Autonomous Customer Support / Lead Agent',
  },
  {
    week: 'Week 4',
    focus: 'Error Handling & Scaling',
    output: 'Live Production Launch & Skool Certification',
  },
]

export function Schedule() {
  return (
    <section
      id="schedule"
      className="border-y border-border/60 bg-card/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Weekly Breakdown
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Mon / Wed / Fri &middot; 7:30 – 9:30 AM
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Build the most critical leverage points for your business before the
            regular workday even begins.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border/60">
          {/* header row - desktop */}
          <div className="hidden bg-secondary/60 px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground sm:grid sm:grid-cols-[120px_1fr_1fr]">
            <span>Week</span>
            <span>Focus</span>
            <span>Key Output</span>
          </div>

          {WEEKS.map((w, i) => (
            <div
              key={w.week}
              className={`grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[120px_1fr_1fr] sm:items-center sm:gap-4 ${
                i !== WEEKS.length - 1 ? 'border-b border-border/60' : ''
              } bg-card`}
            >
              <span className="font-serif text-lg text-gold">{w.week}</span>
              <span className="text-foreground">{w.focus}</span>
              <span className="text-sm text-muted-foreground">{w.output}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
