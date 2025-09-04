"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import TabbedFeaturesSection from "./switch-features";

type CurrencyCode = "INR" | "USD";

type Plan = {
  name: "Starter" | "Growth" | "Pro" | "Enterprise";
  tagline: string;
  monthlyINR: number; // your INR monthly price
  monthlyUSD: number; // your USD monthly price
  features: string[];
  highlighted?: boolean;
  ctaMonthly: string;
  ctaYearly: string;
};

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" {...props}>
    <path
      fill="currentColor"
      d="M9.55 17a1 1 0 0 1-.7-.29l-4.56-4.56a1 1 0 1 1 1.41-1.41l3.86 3.85 8.34-8.34a1 1 0 1 1 1.41 1.41l-9.04 9.04a1 1 0 0 1-.72.3Z"
    />
  </svg>
);

const Sparkle = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2.5 13.6 8l4.9 1.6-4.9 1.6L12 16.7l-1.6-5.5L5 9.6 10.4 8 12 2.5Z"
    />
  </svg>
);

// ---- helpers ----
const isIndiaByEnv = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();
    return tz.includes("Kolkata") || lang.endsWith("-in");
  } catch {
    return false;
  }
};

const getCurrencyFromQuery = (): CurrencyCode | null => {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const q = (params.get("currency") || "").toLowerCase();
  if (q === "inr") return "INR";
  if (q === "usd") return "USD";
  return null;
};

const currencyMeta: Record<
  CurrencyCode,
  { symbol: string; locale: string }
> = {
  INR: { symbol: "₹", locale: "en-IN" },
  USD: { symbol: "$", locale: "en-US" },
};

const formatMoney = (value: number, currency: CurrencyCode) => {
  const { symbol, locale } = currencyMeta[currency];
  return `${symbol}${new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(value)}`;
};

// ---- Plans (set both INR & USD monthly; yearly is computed dynamically) ----
const plans: Plan[] = [
  {
    name: "Starter",
    tagline:
      "Perfect for individuals and small businesses getting started with AI-powered WhatsApp automation.",
    monthlyINR: 1499,
    monthlyUSD: 29, // <-- set your USD monthly here
    features: [
      "Contacts: 5,000",
      "Campaigns: 100",
      "Template Bots: 10",
      "Message Bots: 10",
      "AI Prompts: 100",
      "Canned Replies: 10",
      "Staff: 2",
      "Conversations: Unlimited",
      "Bot Flow: 1",
      "REST API & Webhooks",
      "Embedded Signup: 1",
    ],
    ctaMonthly: "https://app.smartwhap.com/register?plan_id=2",
    ctaYearly: "https://app.smartwhap.com/register?plan_id=8",
  },
  {
    name: "Growth",
    tagline:
      "Designed for growing businesses that need campaigns, automation, and AI integrations.",
    monthlyINR: 1999,
    monthlyUSD: 49, // <-- set your USD monthly here
    features: [
      "Contacts: 10,000+",
      "Embedded Signup: 1",
      "Template Bots: 25",
      "Message Bots: 25",
      "Campaigns: 100",
      "AI Prompts: 10",
      "Ecommerce Webhooks: 1",
      "Canned Replies: 20",
      "Staff: 5",
      "Conversations: Unlimited",
      "Whatsapp Webhook: Unlimited",
      "Advanced Workflows",
      "Role-based permissions",
      "Multi-number management",
      "Dashboards & exports",
      "Priority email support",
    ],
    ctaMonthly: "https://app.smartwhap.com/register?plan_id=3",
    ctaYearly: "https://app.smartwhap.com/register?plan_id=9",
  },
  {
    name: "Pro",
    tagline:
      "Tailored for advanced users, with powerful AI to automate workflows and integrate smoothly with your tools.",
    monthlyINR: 2999,
    monthlyUSD: 79, // <-- set your USD monthly here
    features: [
      "Contacts: 100,000",
      "Embedded Signup: 1",
      "Template Bots: 50",
      "Message Bots: 50",
      "Campaigns: 1,000",
      "AI Prompts: 20",
      "AI Personal Assistants: 1",
      "Ecommerce Webhooks: 1",
      "Canned Replies: 100",
      "Staff: 5",
      "Conversations: Unlimited",
      "Bot Flow: 5",
      "Rest API: Unlimited",
      "Whatsapp Webhook: Unlimited",
      "SSO & Audit Logs",
      "Queue & rate controls",
      "Dedicated onboarding",
      "Priority chat support",
    ],
    highlighted: true,
    ctaMonthly: "https://app.smartwhap.com/register?plan_id=4",
    ctaYearly: "https://app.smartwhap.com/register?plan_id=10",
  },
  {
    name: "Enterprise",
    tagline:
      "Recommended for large companies with unlimited needs & dedicated support.",
    monthlyINR: 3999,
    monthlyUSD: 119, // <-- set your USD monthly here
    features: [
      "Contacts: Unlimited",
      "Embedded Signup: 1",
      "Template Bots: Unlimited",
      "Message Bots: Unlimited",
      "Campaigns: Unlimited",
      "AI Prompts: 100",
      "AI Personal Assistants: 5",
      "Ecommerce Webhooks: 5",
      "Canned Replies: Unlimited",
      "Staff: 10",
      "Conversations: Unlimited",
      "Bot Flow: 100",
      "Rest API: Unlimited",
      "Whatsapp Webhook: Unlimited",
      "Custom MAUs & limits",
      "VPC / On-prem options",
      "SAML SSO, SCIM",
      "Uptime & data SLAs",
      "Dedicated CSM",
      "Custom workflows",
    ],
    ctaMonthly: "https://app.smartwhap.com/register?plan_id=5",
    ctaYearly: "https://app.smartwhap.com/register?plan_id=11",
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  const [currency, setCurrency] = useState<CurrencyCode>("INR"); // default before detection

  // Detect currency once on mount (query param > locale)
  useEffect(() => {
    const fromQuery = getCurrencyFromQuery();
    if (fromQuery) {
      setCurrency(fromQuery);
      return;
    }
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Cover all likely Indian timezones
    const indianTimezones = ["Asia/Kolkata", "Asia/Calcutta", "IST", "GMT+5:30"];
    const userIsInIndia = indianTimezones.includes(tz);
    setCurrency(userIsInIndia ? "INR" : "USD");
  }, []);

  const saveText = useMemo(() => (yearly ? "Save 20%" : ""), [yearly]);

  // optional manual toggle UI (keep if you want to let users switch)
  const CurrencyToggle = () => (
    <div className="mt-6 flex items-center justify-center gap-2">
      <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white p-1 text-xs shadow-sm">
        <button
          type="button"
          onClick={() => setCurrency("INR")}
          className={[
            "px-3 py-1 rounded-full transition",
            currency === "INR"
              ? "bg-emerald-600 text-white"
              : "text-zinc-700 hover:bg-zinc-100",
          ].join(" ")}
          aria-pressed={currency === "INR"}
        >
          INR
        </button>
        <button
          type="button"
          onClick={() => setCurrency("USD")}
          className={[
            "px-3 py-1 rounded-full transition",
            currency === "USD"
              ? "bg-emerald-600 text-white"
              : "text-zinc-700 hover:bg-zinc-100",
          ].join(" ")}
          aria-pressed={currency === "USD"}
        >
          USD
        </button>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="relative scroll-mt-20 pt-20 md:pt-28 pb-16 md:pb-24">
      {/* ==== WhatsApp Business API section (before pricing) ==== */}
      <div className="mx-auto max-w-6xl px-4">
        <section id="features" className="scroll-mt-20 mb-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Sparkle />
              Official WhatsApp Business API
            </div>

            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              Compliant, scalable WhatsApp automations—built for growth
            </h2>

            <p className="mt-3 text-zinc-600 md:text-lg">
              Send campaigns, automate conversations, and integrate with your stack—no vendor
              lock-in, full template control, and real-time webhooks.
            </p>

            <div className="mx-auto mt-6 grid w-full gap-2 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Green-tick onboarding & verified sender",
                "Cloud API with high deliverability",
                "Template creation, status & quality scores",
                "Inbound webhooks: messages, statuses, reads",
                "Rate limits & queue controls for scale",
                "Media, location, interactive lists/buttons",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700"
                >
                  <span className="text-emerald-600">
                    <CheckIcon />
                  </span>
                  <span className="text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <TabbedFeaturesSection />
        </section>
      </div>

      {/* ==== Pricing table ==== */}
      <div className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
            <Sparkle />
            Transparent pricing. Premium experience.
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold md:text-5xl">
            Choose the plan that{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              fits your growth
            </span>
          </h2>
          <p className="mt-3 text-pretty text-zinc-600 md:text-lg">
            Four powerful tiers. One clean, predictable bill.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Label
            htmlFor="billing"
            className={`text-sm ${!yearly ? "font-semibold text-zinc-900" : "text-zinc-600"}`}
          >
            Monthly
          </Label>
          
          <div className="relative">
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-nowrap">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={yearly ? "save20" : "save20-ask"}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`block rounded-full ${
                    yearly ? "bg-emerald-100" : "bg-[#FFD700]"
                  } px-2 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200`}
                  aria-live="polite"
                >
                  {yearly ? "YAYY SAVED 20%!" : "WANNA SAVE 20%?"}
                </motion.span>
              </AnimatePresence>
            </div>

            <Switch
              id="billing"
              checked={yearly}
              onCheckedChange={setYearly}
              aria-label="Toggle yearly billing"
              className="hover:cursor-pointer"
            />
          </div>
          
          <Label
            htmlFor="billing"
            className={`text-sm ${yearly ? "font-semibold text-zinc-900" : "text-zinc-600"}`}
          >
            Yearly
          </Label>
        </div>

        {/* Optional currency toggle UI */}
        {/* <CurrencyToggle /> */}

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-4">
          {plans.map((p) => {
            const isCustom = p.name === "Enterprise";
            const isPopular = Boolean(p.highlighted);
            const hrefBase = yearly ? p.ctaYearly : p.ctaMonthly;

            // attach currency param to your CTA link so backend knows what currency was shown
            const href =
              hrefBase + (hrefBase.includes("?") ? "&" : "?") + `currency=${currency.toLowerCase()}`;

            // pick monthly by currency
            const monthly =
              currency === "INR" ? p.monthlyINR : p.monthlyUSD;

            // dynamic yearly: 20% off
            const displayPrice = yearly
              ? Math.round(monthly * 12 * 0.8)
              : monthly;

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* outline accent */}
                <div
                  aria-hidden
                  className={[
                    "absolute -inset-[1px] rounded-2xl transition-opacity",
                    isPopular
                      ? "bg-gradient-to-b from-emerald-300/60 to-emerald-600/30 opacity-100"
                      : "opacity-0 group-hover:opacity-100 bg-gradient-to-b from-zinc-200/50 to-zinc-300/30",
                  ].join(" ")}
                />

                <Card
                  className={[
                    "relative h-full overflow-hidden rounded-2xl border backdrop-blur supports-[backdrop-filter]:bg-white/60",
                    isPopular
                      ? "border-emerald-200 shadow-lg shadow-emerald-100/50"
                      : "border-zinc-200 shadow-sm",
                  ].join(" ")}
                >
                  {/* Ribbon on yearly */}
                  <AnimatePresence initial={false}>
                    {yearly && !isCustom && (
                      <motion.div
                        key={`ribbon-${p.name}`}
                        initial={{ opacity: 0, rotate: -6, y: -8 }}
                        animate={{ opacity: 1, rotate: 0, y: 0 }}
                        exit={{ opacity: 0, rotate: 6, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="pointer-events-none absolute right-0 top-0"
                        aria-hidden
                      >
                        <div className="origin-top-right -translate-y-2 translate-x-6 rotate-45">
                          <span className="inline-block bg-emerald-600 px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                            Save 20%
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <CardHeader className="relative">
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">{p.name}</span>
                      {isPopular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                          <Sparkle /> Popular
                        </span>
                      )}
                    </CardTitle>
                    <p className="text-sm text-zinc-600 ">{p.tagline}</p>
                  </CardHeader>

                  <CardContent>
                    {/* price block */}
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-semibold tracking-tight" aria-live="polite">
                        {formatMoney(displayPrice, currency)}
                        <span className="text-sm text-zinc-500">{yearly ? "/ yr" : "/ mo"}</span>
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">
                      {yearly ? "Billed annually." : "Billed monthly."}{" "}
                      {yearly && <span className="text-emerald-700 font-medium">Save 20%</span>}
                    </p>

                    {/* features */}
                    <ul className="mt-5 space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                          <span className="mt-0.5 text-emerald-600">
                            <CheckIcon />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <br />
                  <CardFooter className="mt-2">
                    <Button
                      className={[
                        "w-[90%] transition-transform will-change-transform absolute bottom-5 mx-auto mb-2 -ml-3",
                        isPopular ? "bg-emerald-600 hover:bg-emerald-700" : "",
                      ].join(" ")}
                      asChild
                    >
                      <a
                        href={href}
                        aria-label={`Get started with ${p.name} (${yearly ? "yearly" : "monthly"})`}
                        data-plan={p.name.toLowerCase()}
                        data-billing={yearly ? "yearly" : "monthly"}
                        data-currency={currency}
                      >
                        Get Started
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
