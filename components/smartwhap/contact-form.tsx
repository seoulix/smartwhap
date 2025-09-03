"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Please add a little more detail"),
  website: z.string().max(0).optional(), // honeypot
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});
type FormValues = z.infer<typeof Schema>;

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const defaultUTMs = useMemo(() => {
    if (typeof window === "undefined")
      return { utm_source: "", utm_medium: "", utm_campaign: "" };
    const qs = new URLSearchParams(window.location.search);
    return {
      utm_source: qs.get("utm_source") ?? "",
      utm_medium: qs.get("utm_medium") ?? "",
      utm_campaign: qs.get("utm_campaign") ?? "",
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      ...defaultUTMs,
    },
  });

  // For screen readers: announce success when it happens
  useEffect(() => {
    if (submitted) {
      const el = document.getElementById("contact-success-live");
      el?.focus();
    }
  }, [submitted]);

  async function onSubmit(values: FormValues) {
    if (values.website) return; // bot trap
    try {
      setLoading(true);
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j?.error || "Couldn’t send message.");
      toast({
        title: "Message sent",
        description:
          "We’ve emailed your details to our team. Check your inbox for a confirmation.",
      });
      reset({
        name: "",
        email: "",
        company: "",
        message: "",
        ...defaultUTMs,
        website: "",
      });
      setSubmitted(true);
    } catch (e: any) {
      toast({
        title: "Failed to send",
        description: e?.message ?? "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Ready to build on WhatsApp?
          </h2>
          <p className="mt-3 text-pretty text-zinc-600 md:text-lg">
            Tell us about your use case and we’ll reach out.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm backdrop-blur
                     dark:bg-zinc-900/60 dark:border-zinc-800"
        >
          <div className="pointer-events-none -mx-6 -mt-6 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

          {/* Success state */}
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="mt-6 text-center"
            >
              <div
                id="contact-success-live"
                tabIndex={-1}
                aria-live="polite"
                className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30"
              >
                {/* Check icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Thanks! Your message is on its way.
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                We’ve received your details and emailed you a confirmation. Our
                team will get back to you shortly.
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={() => setSubmitted(false)}
                  className="h-11 rounded-xl bg-emerald-600 text-base hover:bg-emerald-700"
                >
                  Send another message
                </Button>
              </div>
            </motion.div>
          ) : (
            // Form state
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-4 grid gap-4"
              noValidate
            >
              {/* honeypot + UTM */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                {...register("website")}
              />
              <input type="hidden" {...register("utm_source")} />
              <input type="hidden" {...register("utm_medium")} />
              <input type="hidden" {...register("utm_campaign")} />

              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  {...register("company")}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what you're building..."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-xs text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="h-11 rounded-xl bg-emerald-600 text-base hover:bg-emerald-700"
              >
                {loading ? "Sending…" : "Send message"}
              </Button>
              <p className="text-center text-xs text-zinc-500">
                By submitting, you agree to
                <a href="/terms" className="underline text-blue-500">
                  {" "}
                  our terms{" "}
                </a>
                and
                <a href="/privacy" className="underline text-blue-500">
                  {" "}
                  privacy policy.
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
