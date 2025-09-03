"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function OfferBanner() {
  const [open] = useState(true)
  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        role="region"
        aria-label="Promotional offer"
        className="relative w-full overflow-hidden"
      >
        {/* Background layers (always under content) */}
        <div className="absolute inset-0 z-0 animated-gradient pointer-events-none" />
        <div className="absolute inset-[-12%] z-0 glow pointer-events-none" />
        <div className="absolute inset-0 z-0 shine pointer-events-none" />
        <div className="absolute inset-0 z-0 sparkles pointer-events-none" />

        {/* Clickable content (always above) */}
        <a
          href="#pricing"
          className="relative z-10 block text-black font-bold"
          aria-label="View pricing plans — Limited-time: 14-day free trial + 20% off on yearly plans"
        >
          <div className="mx-auto max-w-6xl px-4 py-2.5">
            <div className="flex items-center gap-3">
              {/* LEFT: Badge (yellow highlight) */}
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-yellow-400 px-2 py-0.5 text-xs md:text-sm font-bold ring-1 ring-yellow-500 leading-none">
                <span className="twinkle">🔥</span> LIMITED PERIOD OFFER
              </span>

              {/* RIGHT: Marquee wrapper (takes remaining width) */}
              <div className="marquee-wrapper flex-1">
                <span className="marquee-track font-bold text-sm md:text-base leading-none">
                 ★ 14-day FREE trial + SAVE 20% on yearly plans — Scale Your Business with SmartWhap ★
                </span>
                <span
                  aria-hidden="true"
                  className="marquee-track font-bold text-sm md:text-base leading-none"
                >
                 ★ 14-day FREE trial + SAVE 20% on yearly plans — Scale Your Business with SmartWhap ★
                </span>
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </AnimatePresence>
  )
}
