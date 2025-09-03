// app/refund-policy/page.tsx
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-700 bg-emerald-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Refund Policy
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
            This Refund Policy outlines the terms and conditions for refunds of payments made to{" "}
            <strong className="text-emerald-600">SmartWhap</strong> for our subscription services.
          </p>

          {/* Important Notice */}
          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h2 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">
              ⚠️ Important Notice
            </h2>
            <p className="text-red-700 dark:text-red-300 font-medium">
              All subscription payments are <strong>NON-REFUNDABLE</strong> once the service is activated 
              and you have started using SmartWhap services.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                1. General Refund Policy
              </h2>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                <li>
                  <strong>No Refunds:</strong> Payments for subscription plans are non-refundable once 
                  the service is activated and you begin using SmartWhap features.
                </li>
                <li>
                  <strong>Service Activation:</strong> Services are considered activated when you gain 
                  access to your SmartWhap dashboard and can use our WhatsApp API, automation tools, 
                  or other platform features.
                </li>
                <li>
                  <strong>Subscription Nature:</strong> Our services are provided on a subscription basis, 
                  and payments cover the full subscription period regardless of usage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                2. Limited Exceptions
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Refunds may be considered only in the following exceptional circumstances:
              </p>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                <li>
                  <strong>Double Charges:</strong> If you were accidentally charged twice for the same 
                  subscription period due to a technical error on our payment system.
                </li>
                <li>
                  <strong>Technical Errors:</strong> If a payment was processed due to a system error 
                  without your authorization or intent to purchase.
                </li>
                <li>
                  <strong>Service Unavailability:</strong> If SmartWhap services are completely unavailable 
                  for more than 72 consecutive hours due to issues caused solely by SmartWhap (excluding 
                  third-party service outages, maintenance, or external factors).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                3. Refund Request Process
              </h2>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                <li>
                  <strong>Time Limit:</strong> Refund requests (if eligible) must be submitted within{" "}
                  <span className="font-semibold text-emerald-600">7 days</span> of the original transaction date.
                </li>
                <li>
                  <strong>How to Request:</strong> Send an email to{" "}
                  <a 
                    href="mailto:support@smartwhap.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    support@smartwhap.com
                  </a> with:
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Your account email address</li>
                    <li>• Transaction ID or payment reference</li>
                    <li>• Date of payment</li>
                    <li>• Detailed reason for refund request</li>
                    <li>• Supporting documentation (if applicable)</li>
                  </ul>
                </li>
                <li>
                  <strong>Review Process:</strong> We will review your request within 3-5 business days 
                  and notify you of our decision via email.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                4. What's NOT Eligible for Refunds
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Change of mind after purchasing a subscription</li>
                <li>Dissatisfaction with features or service quality</li>
                <li>Inability to integrate with your existing systems</li>
                <li>Changes in your business requirements</li>
                <li>Downtime caused by WhatsApp/Meta, internet providers, or other third parties</li>
                <li>Scheduled maintenance or updates</li>
                <li>Account suspension due to policy violations</li>
                <li>Requests made after the 7-day window</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                5. Subscription Cancellation
              </h2>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                <li>
                  <strong>Cancel Anytime:</strong> You can cancel your subscription at any time through 
                  your account settings or by contacting support.
                </li>
                <li>
                  <strong>Access Until Period End:</strong> When you cancel, you'll retain access to 
                  SmartWhap services until the end of your current billing period.
                </li>
                <li>
                  <strong>No Partial Refunds:</strong> Cancellation does not entitle you to a refund 
                  for the remaining period of your subscription.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                6. Processing Time
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                If a refund is approved under the limited exceptions mentioned above:
              </p>
              <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Credit card refunds: 5-10 business days</li>
                <li>Bank transfer refunds: 7-14 business days</li>
                <li>Digital wallet refunds: 3-7 business days</li>
              </ul>
              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                Processing times may vary depending on your bank or payment provider.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-emerald-50 dark:bg-zinc-800 rounded-lg border border-emerald-200 dark:border-zinc-700">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Questions about Refunds?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you have any questions about our Refund Policy or need to submit a refund request, 
              please contact our support team at{" "}
              <a 
                href="mailto:support@smartwhap.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                support@smartwhap.com
              </a> or call us at{" "}
              <a 
                href="tel:+917678353155"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                +91 767 835 3155
              </a>.
            </p>
          </div>

          <div className="mt-6 p-4 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <strong>Note:</strong> This Refund Policy is part of our Terms & Conditions and should be 
              read in conjunction with our Privacy Policy. By using SmartWhap services, you acknowledge 
              that you have read, understood, and agreed to this Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}