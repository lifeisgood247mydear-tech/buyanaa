import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function JoinCta() {
  return (
    <section id="join" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.76 0.11 84 / 0.7), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Image
          src="/images/aiglobal-logo.png"
          alt="AiGlobal logo"
          width={72}
          height={72}
          className="mx-auto mb-6 h-16 w-16 object-contain"
        />
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Secure Your Spot Today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ready to build your autonomous workforce? Join our official Skool
          community and unlock the course instantly.
        </p>
        <div className="mt-9">
          <Button
            asChild
            size="lg"
            className="bg-gold px-8 font-medium text-primary-foreground hover:bg-gold-soft"
          >
            <a href="#">
              Join the AiGlobal Skool Community
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Limited seats &middot; Next cohort starts soon
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/aiglobal-logo.png"
            alt="AiGlobal"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="font-serif text-base font-semibold tracking-wide text-foreground">
            Ai<span className="text-gold">Global</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AiGlobal. Hosted on Skool.
        </p>
      </div>
    </footer>
  )
}
