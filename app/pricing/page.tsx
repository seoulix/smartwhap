import type { Metadata } from "next"
import { Pricing } from "@/components/smartwhap/pricing"
import { CTA } from "@/components/smartwhap/cta"

export const metadata: Metadata = {
  title: "Pricing | SmartWhap",
  description:
    "Affordable plans with enterprise-grade features. Monthly and yearly billing. Start a 14-day free trial today.",
}

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <header className="py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-600 font-medium">Transparent & Flexible</p>
        <h1 className="mt-3 text-pretty text-3xl md:text-5xl font-semibold">
          All the features you want, at a price you’ll love
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Choose a plan that fits your growth. Switch between monthly and yearly billing anytime.
        </p>
      </header>

      <section className="py-6 md:py-8">
        <Pricing />
      </section>

      <section className="py-12 md:py-16">
        <CTA />
      </section>
    </main>
  )
}
