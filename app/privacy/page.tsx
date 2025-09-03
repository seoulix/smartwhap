// app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-700 bg-emerald-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Privacy Policy
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Your privacy is important to us. This Privacy Policy explains how{" "}
            <strong className="text-emerald-600">SmartWhap</strong> collects, uses, and protects your personal data.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                1. Information We Collect
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone number, payment details.
                </li>
                <li>
                  <strong>Business Information:</strong> Company details, WhatsApp numbers, API usage data.
                </li>
                <li>
                  <strong>Technical Data:</strong> Device information, IP address, browser type, cookies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>To provide and maintain our services.</li>
                <li>To process payments and manage subscriptions.</li>
                <li>To send updates, alerts, and promotional messages (where consent is given).</li>
                <li>To improve platform performance and customer experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                3. Data Security
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>All data is encrypted in transit and at rest.</li>
                <li>We implement enterprise-grade security measures to protect customer data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                4. Data Sharing
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>We do not sell or trade your personal information.</li>
                <li>
                  Data may be shared with trusted service providers (payment gateways, hosting providers, etc.) 
                  strictly to deliver our services.
                </li>
                <li>We may disclose data if required by law or to comply with legal processes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                5. Cookies
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  SmartWhap uses cookies to enhance user experience, analyze traffic, and personalize services.
                </li>
                <li>
                  You can disable cookies through your browser settings, but some features may not function properly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                6. Data Retention
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>We retain data for as long as necessary to provide our services or comply with legal obligations.</li>
                <li>You may request deletion of your account and associated data at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                7. Your Rights
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>You have the right to access, update, or delete your data.</li>
                <li>You may opt out of marketing communications anytime.</li>
                <li>
                  Requests can be made by contacting us at{" "}
                  <a 
                    href="mailto:support@smartwhap.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    support@smartwhap.com
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                8. Third-Party Integrations
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>SmartWhap integrates with third-party apps (e.g., CRMs, e-commerce platforms).</li>
                <li>We are not responsible for the privacy practices of those services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                9. Updates to this Policy
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                We may update this Privacy Policy from time to time. Updates will be posted on this page 
                with a revised "Last Updated" date.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-emerald-50 dark:bg-zinc-800 rounded-lg border border-emerald-200 dark:border-zinc-700">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Questions about this Privacy Policy?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a 
                href="mailto:support@smartwhap.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                support@smartwhap.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}