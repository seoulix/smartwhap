"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We automated follow-ups, ran targeted campaigns, and respond instantly to queries. Our response rate improved by 60%.",
    name: "Priyanka",
    role: "Co-founder",
    avatar: "/customer-avatar-1.png",
  },
  {
    quote:
      "SmartWhap’s AI prompts and templates cut our handling time drastically while keeping conversations on-brand.",
    name: "Karthik",
    role: "Co-founder",
    avatar: "/customer-avatar-2.png",
  },
  {
    quote:
      "The no-code agent builder and e-commerce integrations let us ship in days—not months.",
    name: "Aisha",
    role: "E-commerce Lead",
    avatar: "/customer-avatar-3.png",
  },
];

/** Rotating color themes for each slide */
const themes = [
  {
    ring: "from-emerald-400 via-teal-400 to-cyan-400",
    card: "bg-white dark:bg-zinc-900",
    dotActive: "bg-emerald-600",
    bg: "from-emerald-100/70 via-cyan-100/60 to-indigo-100/40 dark:from-emerald-900/30 dark:via-cyan-900/20 dark:to-indigo-900/10",
  },
  {
    ring: "from-fuchsia-400 via-violet-400 to-sky-400",
    card: "bg-white dark:bg-zinc-900",
    dotActive: "bg-fuchsia-600",
    bg: "from-fuchsia-100/70 via-violet-100/60 to-sky-100/40 dark:from-fuchsia-900/30 dark:via-violet-900/20 dark:to-sky-900/10",
  },
  {
    ring: "from-amber-400 via-orange-400 to-rose-400",
    card: "bg-white dark:bg-zinc-900",
    dotActive: "bg-amber-600",
    bg: "from-amber-100/70 via-orange-100/60 to-rose-100/40 dark:from-amber-900/30 dark:via-orange-900/20 dark:to-rose-900/10",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[idx];
  const theme = themes[idx % themes.length];

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(id);
  }, [paused]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % testimonials.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 3D tilt
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [8, -8]);
  const rotateY = useTransform(mx, [-50, 50], [-8, 8]);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(Math.max(-50, Math.min(50, x / 4)));
    my.set(Math.max(-50, Math.min(50, y / 4)));
  };

  // swipe
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) setIdx((i) => (i + 1) % testimonials.length);
    if (info.offset.x > 60)
      setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 py-16 md:py-24 overflow-hidden"
      role="region"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.bg} blur-2xl`}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What our clients say
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Trusted by growing teams worldwide to convert conversations into
            revenue.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative mx-auto max-w-3xl">
            {/* Glow ring */}
            <div
              className={`absolute -inset-[1px] rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] ${theme.ring} opacity-70 blur-[6px]`}
              aria-hidden
            />

            {/* LOOP RENDER: only active item mounts, but structure is map-based for smooth AnimatePresence */}
            <AnimatePresence mode="wait">
              {testimonials.map((t, i) =>
                i === idx ? (
                  <motion.figure
                    key={i}
                    ref={ref}
                    style={{ rotateX, rotateY }}
                    onMouseMove={onMouseMove}
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    className={`relative rounded-2xl border border-zinc-200/70 dark:border-zinc-800/60 ${theme.card} p-6 md:p-8 shadow-xl`}
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={t.avatar || "/placeholder.svg"}
                        alt={`${t.name} avatar`}
                        width={52}
                        height={52}
                        className="rounded-full border border-zinc-200 dark:border-zinc-800"
                      />
                      <figcaption className="text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                          {t.name}
                        </span>{" "}
                        · {t.role}
                      </figcaption>
                    </div>

                    <blockquote className="mt-4 text-zinc-900 dark:text-zinc-100 leading-relaxed text-lg md:text-xl">
                      “{t.quote}”
                    </blockquote>

                    {/* SSR-safe sparkles */}
                    <Sparkles seed={i + 1} />
                  </motion.figure>
                ) : null
              )}
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between">
              <Button
                onClick={() =>
                  setIdx(
                    (i) => (i - 1 + testimonials.length) % testimonials.length
                  )
                }
                aria="Prev"
              >
                Prev
              </Button>

              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={[
                      "relative h-3 w-3 rounded-full transition-all ring-1 ring-inset ring-zinc-400/40 dark:ring-zinc-700/60",
                      i === idx
                        ? `${theme.dotActive} scale-110`
                        : "bg-zinc-300 dark:bg-zinc-700",
                    ].join(" ")}
                  />
                ))}
              </div>

              <Button
                onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
                aria="Next"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ UTILITIES ------------------ */

function Button({
  children,
  onClick,
  aria,
}: {
  children: React.ReactNode;
  onClick: () => void;
  aria: string;
}) {
  return (
    <button
      type="button"
      aria-label={aria}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white/70 dark:bg-zinc-900/60 backdrop-blur hover:bg-white dark:hover:bg-zinc-800 transition-colors"
    >
      {children}
    </button>
  );
}

/** SSR-safe Sparkles */
function Sparkles({ count = 18, seed = 1 }: { count?: number; seed?: number }) {
  const positions = useMemo(() => {
    let s = seed >>> 0;
    const next = () => {
      s = (1664525 * s + 1013904223) >>> 0;
      return s / 4294967296;
    };
    return Array.from({ length: count }, () => ({
      top: `${next() * 100}%`,
      left: `${next() * 100}%`,
      dur: 2 + Math.floor(next() * 5),
      delay: next() * 0.8,
    }));
  }, [count, seed]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {positions.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/70 dark:bg-zinc-200/70"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -8, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
