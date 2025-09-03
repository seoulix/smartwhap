import type { Metadata } from "next"
import { FeatureHighlights } from "@/components/smartwhap/feature-highlights"
import { Features } from "@/components/smartwhap/features"
import { CTA } from "@/components/smartwhap/cta"

export const metadata: Metadata = {
  title: "Features | SmartWhap",
  description:
    "Explore SmartWhap’s WhatsApp automation features: AI agent builder, no-code workflows, e-commerce integrations, webhooks & REST APIs, analytics, and more.",
}

export default function FeaturesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <header className="py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-600 font-medium">SmartWhap Capabilities</p>
        <h1 className="mt-3 text-pretty text-3xl md:text-5xl font-semibold">
          Everything you need to turn conversations into conversions
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Build powerful WhatsApp experiences with AI, automation, and seamless integrations—without complexity.
        </p>
      </header>

      <section className="py-6 md:py-8">
        <FeatureHighlights />
      </section>

      <section className="py-8 md:py-12">
        <Features />
      </section>

      <section className="py-12 md:py-16">
        <CTA />
      </section>
    </main>
  )
}
