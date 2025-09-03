"use client";

import { motion } from "framer-motion";

const integrations = [
  // "OpenAI ChatGPT",
  // "Shopify",
  // "WooCommerce",
  // "Zapier",
  // "REST APIs",
  // "Webhooks",
  // "CRMs & ERPs",
  // "Email & Ticketing",
  {
    name: "OpenAI ChatGPT",
    iconSrc: "/integrations/openai.svg",
    category: "AI",
    gradient: "from-emerald-500/20 to-blue-500/20"
  },
  {
    name: "Shopify",
    iconSrc: "/integrations/shopify.svg",
    category: "E-commerce",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "WooCommerce",
    iconSrc: "/integrations/woo.svg",
    category: "E-commerce", 
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    name: "Zapier",
    iconSrc: "/integrations/zapier.svg",
    category: "Automation",
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    name: "REST APIs",
    iconSrc: "/integrations/rest-api.png",
    category: "Developer",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Webhooks",
    iconSrc: "/integrations/webhook.png",
    category: "Developer",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    name: "CRMs & ERPs",
    iconSrc: "/integrations/erp.png",
    category: "Business",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    name: "Email & Ticketing",
    iconSrc: "/integrations/email.png",
    category: "Communication",
    gradient: "from-red-500/20 to-pink-500/20"
  },
];

export function Integrations() {
  return (
    // <section
    //   id="integrations"
    //   className="scroll-mt-20 border-y border-zinc-100 bg-zinc-50/60"
    // >
    //   <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h2 className="text-balance text-3xl font-semibold md:text-5xl">
    //         Seamless Integrations & AI
    //       </h2>
    //       <p className="mt-3 text-pretty text-zinc-600 md:text-lg">
    //         Connect your toolkit in minutes. Power chats with OpenAI, sync data
    //         with webhooks, or build on our REST APIs.
    //       </p>
    //     </div>

    //     <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
    //       {integrations.map((name, i) => (
    //         <motion.div
    //           key={name}
    //           initial={{ opacity: 0, y: 8 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true, amount: 0.3 }}
    //           transition={{ delay: i * 0.05, duration: 0.35 }}
    //           className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-center text-xs text-zinc-700"
    //           aria-label={name}
    //         >
    //           {name}
    //         </motion.div>
    //       ))}
    //     </div>
        

    //     {/* <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
    //        <figure className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
    //         <img
    //           src={
    //             "/placeholder.svg?height=540&width=960&query=No-code%20AI%20Agent%20Builder%20(OpenAI)"
    //           }
    //           alt="No-code Personal Chat AI agent builder powered by OpenAI"
    //           className="w-full rounded"
    //           loading="lazy"
    //           decoding="async"
    //         />
    //         <figcaption className="mt-2 text-center text-sm text-zinc-600">
    //           No‑code AI Agent Builder (OpenAI)
    //         </figcaption>
    //       </figure> 
    //       <figure className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
    //         <img
    //           src={
    //             "/placeholder.svg?height=540&width=960&query=No-code%20Workflows%20for%20WhatsApp%20Automation"
    //           }
    //           alt="Drag-and-drop no-code workflows for WhatsApp automation"
    //           className="w-full rounded"
    //           loading="lazy"
    //           decoding="async"
    //         />
    //         <figcaption className="mt-2 text-center text-sm text-zinc-600">
    //           Custom No‑Code Workflows
    //         </figcaption>
    //       </figure>
    //       <figure className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
    //         <img
    //           src={
    //             "/placeholder.svg?height=540&width=960&query=E-commerce%20Integrations%20(Shopify%2C%20WooCommerce)"
    //           }
    //           alt="E-commerce integrations with Shopify and WooCommerce"
    //           className="w-full rounded"
    //           loading="lazy"
    //           decoding="async"
    //         />
    //         <figcaption className="mt-2 text-center text-sm text-zinc-600">
    //           E‑commerce Integrations
    //         </figcaption>
    //       </figure>
    //     </div> */}
    //   </div>
    // </section>

    <section
      id="integrations"
      className="scroll-mt-20 border-y border-zinc-100 bg-gradient-to-b from-zinc-50/80 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Connect Everything
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Seamless Integrations & AI
          </h2>
          <p className="mt-4 text-pretty text-lg text-zinc-600 md:text-xl">
            Connect your entire toolkit in minutes. Power conversations with OpenAI, 
            sync data with webhooks, or build custom solutions with our REST APIs.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                delay: i * 0.08, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`group relative overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br ${integration.gradient} p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10`}
            >
              {/* Background Pattern */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rotate-12 rounded-lg bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Content */}
              <div className="mb-3 flex justify-center">
                <img
                  src={integration.iconSrc}
                  alt={integration.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-center font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                {integration.name}
              </h3>
              <p className="mt-1 text-center text-xs font-medium text-zinc-500 uppercase tracking-wide">
                {integration.category}
              </p>
              {/* Hover Effect Shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
