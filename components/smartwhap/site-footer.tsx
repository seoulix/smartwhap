"use client";

import { useState } from "react";
import Link from "next/link";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  // inline SVGs (no external deps)
  const MailIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
      />
    </svg>
  );
  const PhoneIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h2a1 1 0 011 .76l1 4a1 1 0 01-.29.98l-1.6 1.6a14 14 0 006.55 6.55l1.6-1.6a1 1 0 01.98-.29l4 1a1 1 0 01.76 1v2a2 2 0 01-2 2h-.5C9.61 22 2 14.39 2 4.5V4a2 2 0 011-1z"
      />
    </svg>
  );
  const PinIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 0c-4.5 0-7 2.91-7 6.5 0 1.38 1.12 2.5 2.5 2.5h9c1.38 0 2.5-1.12 2.5-2.5 0-3.59-2.5-6.5-7-6.5z"
      />
    </svg>
  );

  return (
    <footer className="border-t border-zinc-100 bg-emerald-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top: Logo + intro + newsletter (unchanged) + 2 link columns */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Left block: logo, intro, newsletter (YOUR original) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Link href="/" aria-label="SmartWhap Home">
                <img
                  src="/images/logo_black.png"
                  alt="SmartWhap Logo"
                  className="h-22 w-auto"
                />
              </Link>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              Build real connections on WhatsApp with Official API, AI chat, and
              no-code automation.
            </p>

            {/* Newsletter — unchanged behavior/placement */}
            <form
              className="mt-4 flex gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const res = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });

                  if (!res.ok) {
                    const text = await res.text(); // get raw text for debugging
                    console.warn("Server returned non-OK status:", res.status);
                    console.warn("Server response text:", text);
                    throw new Error("Failed to submit email");
                  }

                  const data = await res.json();
                  alert("Thanks! We’ll keep you posted.");
                  setEmail(""); // reset field
                } catch (error: any) {
                  console.error(error);
                  alert("Oops! Something went wrong.");
                }
              }}
            >


              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                aria-label="Email for product updates"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Product (same pages as your original) */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/" className="hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-600">
                  Features
                </Link>
              </li>
              {/* <li>
                <Link href="/integrations" className="hover:text-emerald-600">
                  Integrations
                </Link>
              </li> */}
              <li>
                <Link href="/pricing" className="hover:text-emerald-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources (same pages as your original) */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="https://cal.com/seoulix/smartwhap-demo?duration=15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600"
                >
                  Book a live demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-600">
                  Contact sales
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle: Get in Touch band with icons (inline SVGs, no imports) */}
        <div className="mt-10 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-6">
          <h3 className="text-center font-semibold text-zinc-800 dark:text-zinc-200">
            Get in Touch
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
            {/* Email */}
            <div>
              <div className="mx-auto  flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white">
                <MailIcon />
              </div>
              <a
                href="mailto:support@smartwhap.com"
                className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-emerald-600"
              >
                support@smartwhap.com
              </a>
            </div>
            {/* Phone */}
            <div>
              <div className="mx-auto  flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white">
                <PhoneIcon />
              </div>
              <a
                href="tel:+917678353155"
                className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-emerald-600"
              >
                +91 767 835 3155
              </a>
            </div>
            {/* Address */}
            <div>
              <div className="mx-auto  flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white">
                <PinIcon />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                944, Block C, Sushant Lok 1,
                <br />
                Sector 43, Gurugram, Haryana - 122001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar: policies + powered by (unchanged routes) */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-700 pt-6 text-xs text-zinc-500 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-semibold">SmartWhap</span>. All rights reserved.
          </p>

          <div className="flex gap-4">
            {/* <Link href="/refund" className="hover:text-emerald-600">
              Refund Policy
            </Link> */}
            <Link href="/terms" className="hover:text-emerald-600">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-emerald-600">
              Privacy Policy
            </Link>
          </div>
          {/* <p>
            Powered by{" "}
            <a
              href="https://seoulix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Seoulix Technologies
            </a>
          </p> */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Powered by{" "}
            <a
              href="https://seoulix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Seoulix Technologies
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
