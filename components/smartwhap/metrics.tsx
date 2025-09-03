"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  MailCheck,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

/**
 * Premium, animated metrics section
 * - Crisp icons with subtle badges
 * - Eased count-up animation
 * - Gradient accents per-card
 * - A11y-first labels
 */

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  helper?: string; // optional small sublabel
};

const stats: Stat[] = [
  {
    label: "Avg. first reply",
    helper: "time to first human response",
    value: 6,
    suffix: "s",
    icon: Clock,
  },
  {
    label: "Delivery rate",
    helper: "messages successfully delivered",
    value: 99,
    suffix: "%",
    icon: MailCheck,
  },
  {
    label: "Click-through",
    helper: "unique link CTR across campaigns",
    value: 68,
    suffix: "%",
    icon: MousePointerClick,
  },
  {
    label: "Campaign ROI uplift",
    helper: "vs. pre-automation baseline",
    value: 10,
    suffix: "x",
    icon: TrendingUp,
  },
];

function CountUp({
  value,
  duration = 1200,
  suffix = "",
  decimals = suffix === "/5" ? 1 : 0,
  className = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const startTs = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = (ts: number) => {
      if (startTs.current === null) startTs.current = ts;
      const p = Math.min(1, (ts - startTs.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      startTs.current = null;
    };
  }, [value, duration]);

  const text = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span className={className}>
      {text}
      <span className="text-emerald-600 dark:text-emerald-400">{suffix}</span>
    </span>
  );
}

// Per-card gradient accents
const accents = [
  {
    ring: "via-emerald-500/60 to-teal-400/60",
    iconBg: "from-emerald-500/15 via-emerald-400/10 to-transparent",
  },
  {
    ring: "via-sky-500/60 to-cyan-400/60",
    iconBg: "from-sky-500/15 via-sky-400/10 to-transparent",
  },
  {
    ring: "via-violet-500/60 to-fuchsia-400/60",
    iconBg: "from-violet-500/15 via-fuchsia-400/10 to-transparent",
  },
  {
    ring: "via-amber-500/60 to-orange-400/60",
    iconBg: "from-amber-500/15 via-orange-400/10 to-transparent",
  },
];

export default function Metrics() {
  return (
    <section
      id="metrics"
      aria-labelledby="metrics-title"
      className="scroll-mt-20 py-14 md:py-20 border-t bg-gradient-to-b from-transparent via-muted/20 to-transparent"
    >
      <div className="container mx-auto px-4">
        <h2 id="metrics-title" className="sr-only">
          SmartWhap performance metrics
        </h2>

        {/* Header block */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground">
            Why WhatsApp API?
          </h3>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            WhatsApp is where your customers already are. With over{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              2 billion users
            </span>
            , messages are delivered directly to the app they use most, leading
            to open rates above <span className="font-semibold">90%</span>—far
            higher than email.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const a = accents[i % accents.length];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative group rounded-2xl bg-card/70 backdrop-blur border overflow-hidden"
                aria-label={s.label}
              >
                {/* soft top gradient accent */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-400/70 ${a.ring}`}
                />

                <div className="p-5 md:p-6 text-center">
                  {/* Icon badge */}
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-white/50 to-white/10 dark:from-white/10 dark:to-white/5 ring-1 ring-black/5">
                    <div className={`h-9 w-9 -m-1 rounded-full bg-gradient-to-br ${a.iconBg}`} />
                    <Icon className="absolute h-4 w-4 text-foreground/80" aria-hidden />
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>

                  {/* Label */}
                  <p className="mt-1 text-sm font-medium text-foreground/80">
                    {s.label}
                  </p>

                  {/* Helper/subtext */}
                  {s.helper && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {s.helper}
                    </p>
                  )}
                </div>

                {/* Hover glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute -inset-24 mx-auto my-auto h-[200%] w-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
