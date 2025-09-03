// components/faqs/FAQsCTA.tsx
"use client"

import { motion } from "framer-motion"

export function FAQsCTA() {
  return (
    <>
    {/* CTA card */}
    <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="mt-10 flex flex-col items-center gap-3 rounded-2xl border p-6 md:p-8 text-center bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-emerald-600 font-medium">
          Need more?
        </p>
        <p className="text-pretty text-xl md:text-2xl font-semibold">Can’t find what you’re looking for?</p>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
          Reach out to our support team—live chat, email, or a dedicated ticket. We’ll get back in minutes.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition-shadow shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
          >
            Contact us
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
          >
            See pricing
          </a>
        </div>
      </motion.div>
    </>
  )
}
