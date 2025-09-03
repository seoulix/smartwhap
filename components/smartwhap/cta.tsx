"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-600/5 to-transparent dark:from-emerald-400/5 dark:via-emerald-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-emerald-200/60 bg-white/80 shadow-xl backdrop-blur-lg dark:bg-zinc-900/70 dark:border-zinc-800/60 p-10 md:p-14"
        >
          <div className="grid gap-8 md:grid-cols-3 items-center">
            {/* Left Content */}
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold leading-7 tracking-tight text-zinc-900 dark:text-white">
                Deliver exceptional customer experiences with{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                  speed and simplicity
                </span>
              </h3>
              <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-300">
                Automate workflows, reduce manual effort, and roll out
                innovations effortlessly — all from a single WhatsApp-powered
                hub.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://smartwhap.com/register?plan_id=1"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-nowrap text-base font-medium text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border text-nowrap border-zinc-300 px-6 py-3 text-base font-medium text-zinc-800 hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800 transition"
              >
                <MessageCircle className="w-5 h-5" /> Talk to Sales
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { CTA };
export default CTA;
