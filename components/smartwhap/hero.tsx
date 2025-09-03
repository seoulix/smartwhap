"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="SmartWhap hero">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 md:pb-20 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Powered by Official WhatsApp Business API
          </span>

          <h1 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
            Supercharge growth with{" "}
            <span className="text-emerald-600">WhatsApp automation</span>
          </h1>
          <p className="mt-4 text-pretty text-zinc-600 md:text-lg">
            Go beyond messages—build real connections. Launch personalized
            campaigns, handle support with AI workflows, and deliver instant
            updates that keep customers coming back. One platform, endless
            possibilities.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <a
                href="https://smartwhap.com/register?plan_id=1"
                aria-label="Activate 14-Day Trial"
              >
                Activate 14-Day Trial
              </a>
            </Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300" asChild>
              <a
                href="https://cal.com/seoulix/smartwhap-demo?duration=15"
                aria-label="Book a Live Demo"
              >
                <img
                  src="calendar.png"
                  alt="Calendar Icon"
                  className="h-5 w-5"
                />
                Book a Live Demo
              </a>
            </Button>
          </div>
          <p className="mt-2 text-xs text-zinc-500">*No credit card required</p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <img
              src="/images/hero-dashboard.png"
              alt="SmartWhap dashboard with campaigns, bots, and real-time insights"
              className="w-full"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
