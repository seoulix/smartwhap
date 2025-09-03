// app/terms/page.tsx
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-700 bg-emerald-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Last Updated: 30/08/2025 08:40
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Welcome to <strong className="text-emerald-600">SmartWhap</strong>. By accessing or using our website, 
            platform, or services, you agree to comply with and be bound by these Terms & Conditions. 
            Please read them carefully before using SmartWhap.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                1. Use of Services
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  SmartWhap provides WhatsApp API, marketing automation, chatbot, and CRM services for business use.
                </li>
                <li>
                  You agree to use SmartWhap only for lawful purposes and in compliance with WhatsApp's Business 
                  Policy and applicable laws.
                </li>
                <li>
                  Misuse of the platform, including sending spam, prohibited content, or violating WhatsApp/Meta 
                  policies, may result in account suspension or termination.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                2. Account Registration
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>You must provide accurate and complete information during registration.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>Any activity under your account is your responsibility.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                3. Subscription & Payments
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  SmartWhap services are offered on subscription plans. Fees, billing cycles, and payment terms 
                  are provided during checkout.
                </li>
                <li>All prices are exclusive of applicable taxes unless otherwise stated.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                4. Refund Policy
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  Payments for subscription plans are{" "}
                  <strong className="text-red-600">non-refundable</strong> once the service is activated.
                </li>
                <li>
                  Exceptions may apply only in cases of double charges, technical errors, or service 
                  unavailability caused solely by SmartWhap.
                </li>
                <li>
                  Refund requests (if eligible) must be submitted within{" "}
                  <strong>7 days</strong> of the original transaction date.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                5. Intellectual Property
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>All content, software, and materials provided by SmartWhap remain our intellectual property.</li>
                <li>
                  You may not copy, resell, or distribute SmartWhap's software or services without prior written consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                6. Service Availability
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>While we strive for 99.9% uptime, SmartWhap does not guarantee uninterrupted service.</li>
                <li>Scheduled maintenance or third-party outages may affect availability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                7. Limitation of Liability
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>SmartWhap shall not be liable for indirect, incidental, or consequential damages.</li>
                <li>
                  Our total liability shall not exceed the subscription amount paid by you in the last 3 months.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                8. Termination
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  SmartWhap reserves the right to suspend or terminate accounts found in violation of these Terms.
                </li>
                <li>
                  You may cancel your subscription anytime, but no refunds will be provided except as outlined 
                  in our Refund Policy.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                9. Governing Law
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                These Terms are governed by the laws of India.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-emerald-50 dark:bg-zinc-800 rounded-lg border border-emerald-200 dark:border-zinc-700">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Questions about these Terms?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you have any questions about these Terms & Conditions, please contact us at{" "}
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