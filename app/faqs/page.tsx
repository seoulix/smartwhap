import type { Metadata } from "next"
import { FAQsAdvanced } from "@/components/smartwhap/faqs-advanced"
import { FAQsCTA } from "@/components/smartwhap/CTA-card"

export const metadata: Metadata = {
  title: "FAQs | SmartWhap",
  description:
    "Find answers about SmartWhap’s WhatsApp Business API, onboarding, pricing, integrations, analytics, and support.",
}

export default function FAQsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <header className="py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-600 font-medium">We’ve Got Answers</p>
        <h1 className="mt-3 text-pretty text-3xl md:text-5xl font-semibold">Everything You Need to Know</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Powered by the official WhatsApp Business API with enterprise-grade security, AI, and no-code automation.
        </p>
      </header>

      <section className="py-6 md:py-10">
        <FAQsAdvanced />
      </section>

      <div className="pb-10">
      <section>
        <FAQsCTA />
      </section>
      </div>
    </main>
  )
}
