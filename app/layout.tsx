import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SiteHeader } from "@/components/smartwhap/site-header"
import { SiteFooter } from "@/components/smartwhap/site-footer"

export const metadata: Metadata = {
  title: {
    default: "SmartWhap — Official WhatsApp Business API Platform",
    template: "%s | SmartWhap",
  },
  description:
    "Build real connections with SmartWhap: Official WhatsApp Business API, AI (OpenAI) chat, no‑code workflows, e‑commerce integrations, webhooks & REST APIs, and real‑time analytics.",
  generator: "v0.app",
  metadataBase: new URL("https://smartwhap.com"),
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-geist-sans", // reuse existing CSS variable hook
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} ${GeistMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main-content">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>

        <SiteFooter />

        <Analytics />
      </body>
    </html>
  )
}
