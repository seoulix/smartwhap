import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  const faqs = [
    {
      q: "What is SmartWhap?",
      a: "SmartWhap is a WhatsApp API and automation platform to send bulk messages, build chatbots, and automate sales, support, and marketing workflows.",
    },
    // {
    //   q: "How is SmartWhap different from the regular WhatsApp app?",
    //   a: "Unlike the consumer app, SmartWhap is built for businesses—automation, bulk campaigns, CRM features, analytics, and team collaboration.",
    // },
    {
      q: "Is SmartWhap powered by the official WhatsApp Business API?",
      a: "Yes. SmartWhap uses the official WhatsApp Business API for compliance, scalability, and secure communication.",
    },
    {
      q: "Who can use SmartWhap?",
      a: "E‑commerce, service providers, startups, and enterprises—any team that wants to connect with customers and grow sales on WhatsApp.",
    },
    {
      q: "Can I use my existing WhatsApp number?",
      a: "Yes, you can connect your existing number. We recommend a dedicated business number for smoother operations.",
    },
    // {
    //   q: "How many team members can I add?",
    //   a: "Add unlimited team members based on your plan with role‑based permissions and assignment.",
    // },
    {
      q: "Does SmartWhap support bulk messaging?",
      a: "Yes. Send bulk campaigns, upload contacts via CSV, and personalize messages with dynamic fields.",
    },
    {
      q: "Does SmartWhap integrate with e‑commerce platforms?",
      a: "Yes. SmartWhap works with Shopify, WooCommerce, and more for order updates, cart reminders, and promotions.",
    },
    // {
    //   q: "Does SmartWhap provide reporting and analytics?",
    //   a: "Yes. Real‑time dashboards to track campaign performance, delivery rates, clicks, and engagement.",
    // },
    {
      q: "Can I integrate SmartWhap with my CRM or ERP?",
      a: "Yes. Use our APIs and webhooks for seamless integrations with third‑party tools.",
    },
    {
      q: "Can I manage multiple WhatsApp numbers?",
      a: "Yes. Multi‑number management lets you run multiple brands or departments from one dashboard.",
    },
    {
      q: "Is there a trial available?",
      a: "Yes. Start with a 14‑day trial to explore all features before upgrading.",
    },
    // {
    //   q: "How do upgrades and downgrades work?",
    //   a: "Upgrade or downgrade anytime from Subscriptions. Upgrades are prorated; downgrades apply immediately with credit towards future billing.",
    // },
    // {
    //   q: "How does the billing cycle and renewals work?",
    //   a: "Your cycle starts at activation and auto‑renews. Auto‑billing occurs 1 day after the period ends; failed payments trigger notifications and a grace period.",
    // },
    // {
    //   q: "Do you offer SLAs and SSO?",
    //   a: "Yes. Available on Growth and higher tiers alongside audit logs and priority support.",
    // },
    {
      q: "How do I get support?",
      a: "Live chat, email, and ticketing are available. Priority support offered on higher tiers.",
    },
    // {
    //   q: "Can I build custom AI agents without code?",
    //   a: "Yes. Use the no‑code Personal Chat AI agent builder to design assistants for sales, support, and onboarding powered by OpenAI.",
    // },
    {
      q: "How secure is SmartWhap?",
      a: "We use enterprise‑grade security with encryption in transit and at rest, role‑based access controls, and audit logs on higher tiers.",
    },
    {
      q: "How quickly can I go live?",
      a: "If your Meta Business Manager is verified, you can get started in minutes. Our team will assist with verification when needed.",
    },
  ];

  return (
    <section id="faqs" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">
          FAQs
        </h2>
        <p className="mt-3 text-center text-zinc-600 md:text-lg">
          Answers to commonly asked questions about SmartWhap.
        </p>

        <div className="mt-8">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left hover:cursor-pointer">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
