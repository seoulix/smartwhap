import Script from "next/script";
import type { Metadata } from "next";
import { Hero } from "@/components/smartwhap/hero";
import { BrandsTicker } from "@/components/smartwhap/brands-ticker";
import { Features } from "@/components/smartwhap/features";
import { Pricing } from "@/components/smartwhap/pricing";
import { FAQsAdvanced } from "@/components/smartwhap/faqs-advanced";
import { ContactForm } from "@/components/smartwhap/contact-form";
import { Integrations } from "@/components/smartwhap/integrations";
import OfferBanner from "@/components/smartwhap/offer-banner";
import Testimonials from "@/components/smartwhap/testimonials";
import CTA from "@/components/smartwhap/cta";
import FeatureHighlights from "@/components/smartwhap/feature-highlights";
import Metrics from "@/components/smartwhap/metrics";
import { Comparison } from "@/components/smartwhap/comparison";
import Link from "next/link";


export const metadata: Metadata = {
  title: "SmartWhap — Official WhatsApp Business API Platform",
  description:
    "Supercharge growth with SmartWhap: Official WhatsApp Business API, AI (OpenAI) chat, no‑code workflows, e‑commerce integrations, webhooks & REST APIs, and real‑time analytics.",
  keywords: [
    "WhatsApp API",
    "Official WhatsApp Business API",
    "SmartWhap",
    "OpenAI",
    "AI workflows",
    "No-code automation",
    "Webhooks",
    "REST API",
    "Shopify",
    "WooCommerce",
  ],
  openGraph: {
    title: "SmartWhap — WhatsApp Automation & API",
    description:
      "Build real connections with Official WhatsApp Business API, AI chat, no‑code workflows, e‑commerce, and webhooks.",
    url: "https://smartwhap.com/", // canonical OG URL updated to live domain
    siteName: "SmartWhap",
    images: [
      {
        url: "/smartwhap-opengraph.png",
        width: 1200,
        height: 630,
        alt: "SmartWhap - Official WhatsApp Business API Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartWhap — WhatsApp Automation & API",
    description:
      "Official WhatsApp Business API with AI chat, no‑code workflows, e‑commerce, and webhooks.",
    images: ["/smartwhap-twitter-card.png"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SmartWhap",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description:
      "Official WhatsApp Business API platform with AI (OpenAI) chat, no‑code workflows, e‑commerce integrations, webhooks, and analytics.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "0",
      highPrice: "1499",
      offerCount: "3",
    },
    url: "https://smartwhap.com/", // canonical JSON-LD URL updated to live domain
    sameAs: ["https://smartwhap.com"],
  };

  return (
    <>
      <Script
        id="ld-json-product"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(productLd)}
      </Script>

      <section aria-label="Offer" className="scroll-mt-20">
        <OfferBanner />
      </section>

      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="brands" className="scroll-mt-20">
        <BrandsTicker />
      </section>

      <section id="metrics" className="scroll-mt-20">
        <Metrics />
      </section>

      {/* <section id="highlights" className="scroll-mt-10">
        <FeatureHighlights />
      </section> */}

      <section id="features" className="scroll-mt-20">
        <Features />
      </section>

      <section id="integrations" className="scroll-mt-20">
        <Integrations />
      </section>

      <section id="comparison" className="scroll-mt-20">
        <Comparison />
      </section>

      <section id="pricing" className="scroll-mt-20">
        <Pricing />
      </section>

      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      <section id="cta" className="scroll-mt-20">
        <CTA />
      </section>

      <section id="faqs" className="scroll-mt-20 px-20 md:px-20">
        <FAQsAdvanced />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>

      {/* WhatsApp button - bottom right, visible on all devices */}
      <a
        href="https://wa.me/917678353155?text=I%20want%20to%20know%20more%20about%20smartWhap"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-white shadow-lg hover:bg-emerald-700 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
      </a>


      {/* Floating Call button - mobile only */}
      <a
        href="tel:+917678353155"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-white shadow-lg hover:bg-emerald-700 transition-colors md:hidden"
        aria-label="Call us"
      >
        <img src="/phone.png" alt="Call" className="h-6 w-6" />
      </a>
      
    </>
  );
}
