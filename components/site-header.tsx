'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV = [
  { label: 'Overview', href: '#overview' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Community', href: '#community' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/aiglobal-logo.png"
            alt="AiGlobal"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
            Ai<span className="text-gold">Global</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gold font-medium text-primary-foreground hover:bg-gold-soft"
          >
            <a href="#join">Join the Cohort</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-gold font-medium text-primary-foreground hover:bg-gold-soft"
            >
              <a href="#join" onClick={() => setOpen(false)}>
                Join the Cohort
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
