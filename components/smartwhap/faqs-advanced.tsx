"use client"

import { useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  ShieldCheck,
  Workflow as WorkflowIcon,
  Database,
  Bot,
  CreditCard,
  LinkIcon,
} from "lucide-react"

const categories = [
  { id: "general", label: "General", icon: HelpCircle },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "automation", label: "Automation", icon: WorkflowIcon },
  { id: "ai", label: "AI", icon: Bot },
  { id: "integrations", label: "Integrations", icon: LinkIcon },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "data", label: "Data", icon: Database },
] as const

const faqData: Record<string, { q: string; a: string }[]> = {
  general: [
    {
      q: "What is SmartWhap?",
      a: "SmartWhap is a WhatsApp automation platform powered by the official WhatsApp Business API. Launch campaigns, build chatbots, automate workflows, and connect your tools—without complexity.",
    },
    {
      q: "Who uses SmartWhap?",
      a: "E-commerce, SaaS, services, and enterprise teams use SmartWhap for sales, support, and engagement. It scales from solo teams to multi-brand environments.",
    },
    {
      q: "Can I bring my existing WhatsApp number?",
      a: "Yes. You can connect an existing number or set up a dedicated business number. If Meta verification is needed, we’ll guide you through it.",
    },
    {
      q: "How is SmartWhap different from the regular WhatsApp app?",
      a: "Unlike the consumer app, SmartWhap is built for businesses—automation, bulk campaigns, CRM features, analytics, and team collaboration.",
    },
    {
      q: "How many team members can I add?",
      a: "Add unlimited team members based on your plan with role‑based permissions and assignment.",
    },
  ],
  security: [
    {
      q: "Is SmartWhap secure?",
      a: "Yes. We use enterprise-grade security practices and the official WhatsApp Business API. Data is encrypted in transit and protected with role-based access.",
    },
    {
      q: "Do you support multi-member roles?",
      a: "Yes. Invite unlimited team members (plan-based) with roles and permissions. Collaborate across brands and departments with auditability.",
    },
    {
      q: "Do you offer SLAs and SSO?",
      a: "Yes. Available on Growth and higher tiers alongside audit logs and priority support.",
    },
  ],
  automation: [
    {
      q: "What can I automate?",
      a: "Automate lead capture, follow-ups, cart recovery, order updates, ticket routing, and post-purchase journeys using no-code workflows and triggers.",
    },
    {
      q: "Do you support webhooks?",
      a: "Yes. Real-time webhooks and REST APIs let you connect CRMs, ERPs, and third-party tools to orchestrate end-to-end workflows.",
    },
  ],
  ai: [
    {
      q: "How does AI power SmartWhap?",
      a: "Use our no-code AI agent builder and OpenAI integration for personal assistants, reply drafts, tone/grammar/translate actions, and intelligent routing.",
    },
    {
      q: "Can I build custom AI agents without code?",
      a: "Yes. Use the no‑code Personal Chat AI agent builder to design assistants for sales, support, and onboarding powered by OpenAI.",
    },
  ],
  integrations: [
    {
      q: "Do you integrate with e-commerce?",
      a: "Yes. Shopify, WooCommerce, and custom stores via webhooks. Send order updates, reminders, and promotions automatically.",
    },
    {
      q: "Do you integrate with CRMs?",
      a: "Yes. Connect HubSpot, Zoho, Salesforce (and more) via APIs and workflow steps. Keep records in sync and trigger WhatsApp actions.",
    },
  ],
  billing: [
    {
      q: "Is there a free trial?",
      a: "Yes. Start with a 14-day trial. Upgrade, downgrade, or cancel anytime from your billing dashboard.",
    },
    {
      q: "How does yearly billing work?",
      a: "Yearly plans offer savings over monthly. Billing auto-renews with a grace period; failed payments trigger notifications with retry options.",
    },
    {
      q: "How do upgrades and downgrades work?",
      a: "Upgrade or downgrade anytime from Subscriptions. Upgrades are prorated; downgrades apply immediately with credit towards future billing.",
    },
    {
      q: "How does the billing cycle and renewals work?",
      a: "Your cycle starts at activation and auto‑renews. Auto‑billing occurs 1 day after the period ends; failed payments trigger notifications and a grace period.",
    },
  ],
  data: [
    // {
    //   q: "Do you offer analytics?",
    //   a: "Yes. Real-time dashboards for delivery, clicks, engagement, and revenue attribution. Export and APIs available for deeper analysis.",
    // },
    // {
    //   q: "Does SmartWhap provide reporting and analytics?",
    //   a: "Yes. Real‑time dashboards to track campaign performance, delivery rates, clicks, and engagement.",
    // },
    {
      q: "Does SmartWhap provide reporting and analytics?",
      a: "Yes. SmartWhap offers real-time dashboards to track delivery, clicks, engagement, campaign performance, and revenue attribution. You can also export data or access it via APIs for deeper analysis.",
    },
  ],
}

export function FAQsAdvanced() {
  const counts = useMemo(
    () => Object.fromEntries(Object.entries(faqData).map(([k, v]) => [k, v.length])),
    []
  )

  // FAQPage JSON-LD for SEO
  const jsonLd = useMemo(() => {
    const all = Object.values(faqData).flat()
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: all.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      })),
    }
  }, [])

  return (
    <div className="pb-0">
    <section
      aria-labelledby="faqs-heading"
      className="relative overflow-hidden"
    >
      {/* Decorative background (premium feel) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(45rem_20rem_at_50%_-10%,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      <div className="text-center">
        <div className="pt-5">
        <h2
          id="faqs-heading"
          className="text-balance text-3xl md:text-5xl font-semibold tracking-tight"
        >
          Got questions? We’ve got answers.
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Explore common topics—security, AI, automation, integrations, billing, and more.
        </p>
        </div>
      </div>

      <Tabs defaultValue="general" className="mt-8">
        {/* Premium tab list */}
        <div className="sticky top-2 z-10">
          <div className="mx-auto max-w-5xl rounded-xl border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 shadow-sm min-h-fit">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto py-2 w-full">
              {categories.map(({ id, label, icon: Icon }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="group relative flex items-center justify-center gap-1 sm:gap-2 rounded-lg border px-2 sm:px-3 py-2 text-xs sm:text-sm transition-all whitespace-nowrap
                    data-[state=active]:border-emerald-300 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700
                    hover:border-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 group-data-[state=active]:text-emerald-700" aria-hidden />
                  <span className="font-medium">{label}</span>
                  <span
                    className="ml-0.5 sm:ml-1 rounded-md bg-zinc-100 px-1 sm:px-1.5 py-0.5 text-[10px] leading-none text-zinc-600
                    group-data-[state=active]:bg-emerald-100 group-data-[state=active]:text-emerald-700"
                    aria-label={`${counts[id]} questions`}
                  >
                    {counts[id]}
                  </span>

                  {/* subtle bottom indicator */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-[7px] h-[2px] w-0 rounded-full bg-emerald-400 transition-all duration-300 group-data-[state=active]:w-2/3"
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {/* Tab content with smooth crossfade */}
        <AnimatePresence mode="wait">
          {categories.map(({ id }) => (
            <TabsContent key={id} value={id} className="mt-6">
              <motion.div
                key={`panel-${id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-2 gap-4 md:gap-6"
              >
                {faqData[id].map((item, idx) => (
                  <motion.article
                    key={item.q}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="group relative rounded-xl border bg-gradient-to-b from-background to-background/70 p-4 md:p-6
                      shadow-sm ring-1 ring-transparent hover:shadow-md transition-all
                      hover:ring-emerald-200/70"
                  >
                    {/* gradient hairline */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent"
                    />

                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value="q"
                        className="rounded-md data-[state=open]:bg-emerald-50/60 data-[state=open]:border-emerald-100"
                      >
                        <AccordionTrigger
                          className="text-left text-base md:text-lg leading-tight pr-8"
                        >
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.article>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>

      {/* JSON-LD for FAQ rich results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
    </div>
    
  )
}
