import type { Metadata } from "next"
import { Integrations } from "@/components/smartwhap/integrations"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Integrations & AI | SmartWhap",
  description:
    "Connect SmartWhap to your stack: Shopify, WooCommerce, CRMs, webhooks & REST APIs, real-time events, and OpenAI-powered assistants.",
}

const logos = [
  { src: "/shopify-logo.png", alt: "Shopify" },
  { src: "/woocommerce-logo.png", alt: "WooCommerce" },
  { src: "/zapier-logo.png", alt: "Zapier" },
  { src: "/make-logo.png", alt: "Make" },
  { src: "/hubspot-logo.png", alt: "HubSpot" },
  { src: "/zoho-logo.png", alt: "Zoho" },
  { src: "/salesforce-logo.png", alt: "Salesforce" },
  { src: "/openai-logo-inspired-abstract.png", alt: "OpenAI" },
]

export default function IntegrationsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <header className="py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-600 font-medium">Connect Your Stack</p>
        <h1 className="mt-3 text-pretty text-3xl md:text-5xl font-semibold">Integrations & AI that scale with you</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Native e‑commerce integrations, real-time webhooks, REST APIs, and OpenAI-powered automation—one platform,
          endless possibilities.
        </p>
      </header>

      <section className="py-6 md:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center rounded-lg border bg-background p-4">
              <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={120} height={40} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <Integrations />
      </section>
    </main>
  )
}
