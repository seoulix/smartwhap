import type { Metadata } from "next"
import { ContactForm } from "@/components/smartwhap/contact-form"

export const metadata: Metadata = {
  title: "Contact | SmartWhap",
  description: "Talk to our team—book a demo, start a 14-day trial, or get help integrating SmartWhap with your stack.",
}

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 md:px-6">
      <header className="py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-emerald-600 font-medium">Get in Touch</p>
        <h1 className="mt-3 text-pretty text-3xl md:text-5xl font-semibold">Let’s grow with WhatsApp</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          We’ll respond quickly with next steps for your business, including onboarding, templates, and best practices.
        </p>
      </header>

      <section className="pb-16">
        <ContactForm />
        <div className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Or email us at{" "}
          <a className="underline text-emerald-700" href="mailto:support@smartwhap.com">
            support@smartwhap.com
          </a>
        </div>
      </section>
    </main>
  )
}
