"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation" // active-link support

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() // get current route

  const nav = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/integrations", label: "Integrations" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="SmartWhap Home">
          <img
            src="/images/logo_black.png" // <-- replace with your logo path
            alt="SmartWhap Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm transition-colors ${
                  active
                    ? "text-emerald-700 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-emerald-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <a href="https://app.smartwhap.com/register?plan_id=1">Activate 14-Day Trial</a>
          </Button>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
            <a href="https://app.smartwhap.com/login">Login</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-zinc-100 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 bg-emerald-600 hover:bg-emerald-700" onClick={() => setOpen(false)} asChild>
              <a href="/contact">Activate 14-Day Trial</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
