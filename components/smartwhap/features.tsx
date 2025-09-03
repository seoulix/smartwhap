"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Bot,
  MessagesSquare,
  ShoppingCart,
  Webhook,
  Code2,
  Workflow,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Megaphone,
    title: "One‑Click Campaigns",
    desc: "Launch bulk, personalized messages with pre‑approved templates and scheduling.",
  },
  {
    icon: Workflow,
    title: "No‑Code Workflows",
    desc: "Drag‑and‑drop automation: triggers, rules, and smart routing—no dev required.",
  },
  {
    icon: Bot,
    title: "AI Agent Builder",
    desc: "Create custom AI assistants powered by OpenAI for support, sales, and ops.",
  },
  {
    icon: MessagesSquare,
    title: "Smart Conversations",
    desc: "24/7 bots, keyword triggers, canned replies, and seamless agent handoff.",
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce Ready",
    desc: "Shopify & WooCommerce friendly—cart recovery, order updates, and promos.",
  },
  {
    icon: Webhook,
    title: "Real‑Time Webhooks",
    desc: "Reliable webhooks with retry policies to keep your systems in sync.",
  },
  {
    icon: Code2,
    title: "REST API",
    desc: "Developer‑first APIs for templates, campaigns, and conversations at scale.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reports",
    desc: "Dynamic insights: delivery, engagement, growth, and performance trends.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise‑Grade",
    desc: "Security, compliance, audit logs, and scalable infrastructure.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-5xl">
            Smarter features. Bigger impact.
          </h2>
          <p className="mt-3 text-pretty text-zinc-600 md:text-lg">
            Turn conversations into conversions with SmartWhap's WhatsApp API,
            AI, and no‑code automation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:grid-cols-3">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-lg border border-zinc-100 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <f.icon
                  className="h-5 w-5 text-emerald-600"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
              {/* <div className="mt-4 h-20 rounded bg-zinc-50" aria-hidden="true" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
