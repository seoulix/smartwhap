"use client";

import { motion } from "framer-motion";

export function Comparison() {
  return (
    <section
      id="comparison"
      aria-label="SmartWhap vs alternatives"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        {/* Centered Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why teams choose <span className="text-emerald-600">SmartWhap</span>
        </h2>
        <p className="mt-2 text-zinc-600 max-w-2xl mx-auto">
          More automation, deeper AI, and faster time-to-value than Wati,
          AiSensy, and DoubleTick.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl shadow-lg border border-zinc-200">
          <table className="min-w-[720px] w-full border-collapse">
            {/* Premium Header */}
            <thead className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 text-white shadow-md">
              <tr className="text-left">
                <th className="p-4 text-sm font-semibold uppercase tracking-widest text-center">
                  🌟 Feature
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-widest text-center">
                  SmartWhap
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-widest text-center">
                  Wati
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-widest text-center">
                  AiSensy
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-widest text-center">
                  DoubleTick
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-zinc-200 bg-white">
              {[
                [
                  "Official WhatsApp Business API",
                  "✅ Yes",
                  "✅ Yes",
                  "✅ Yes",
                  "✅ Yes",
                ],
                [
                  "No-code AI Agent Builder",
                  "✅ Yes",
                  "⚠️ Limited",
                  "⚠️ Limited",
                  "❌ No",
                ],
                [
                  "OpenAI Integration",
                  "🚀 Native",
                  "➕ Add-on",
                  "➕ Add-on",
                  "❌ No",
                ],
                [
                  "E-commerce Automations",
                  "✅ Native",
                  "⚠️ Partial",
                  "⚠️ Partial",
                  "⚠️ Partial",
                ],
                [
                  "Webhooks & REST APIs",
                  "∞ Unlimited",
                  "⚠️ Limited",
                  "⚠️ Limited",
                  "⚠️ Limited",
                ],
                [
                  "Real-time Dashboards",
                  "📊 Advanced",
                  "📉 Basic",
                  "📉 Basic",
                  "📉 Basic",
                ],
                [
                  "Enterprise Security (RBAC, Audit Logs)",
                  "🔒 Yes",
                  "❓ Unknown",
                  "❓ Unknown",
                  "❓ Unknown",
                ],
              ].map(([f, a, b, c, d], idx) => (
                <motion.tr
                  key={f as string}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="hover:bg-emerald-50 transition-colors"
                >
                  <td className="p-4 text-sm font-medium text-gray-900">{f}</td>
                  <td className="p-4 text-sm font-semibold text-emerald-700">
                    {a}
                  </td>
                  <td className="p-4 text-sm">{b}</td>
                  <td className="p-4 text-sm">{c}</td>
                  <td className="p-4 text-sm">{d}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
