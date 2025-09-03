import React, { useState } from 'react';

type TabId =
  | 'SaaS & Tech'
  | 'E-Commerce & Retail'
  | 'Banking & Finance'
  | 'Healthcare'
  | 'Startup'
  | 'Gaming & Entertainment'
  | 'Restaurant & Café'
  | 'Others';

interface TabContent {
  title: string;
  subtitle: string;
  features: string[];
  tags: string[];
}

const TabbedFeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('SaaS & Tech');

  const tabs: { id: TabId; label: string; active: boolean }[] = [
    { id: 'SaaS & Tech', label: 'SaaS & Tech', active: true },
    { id: 'E-Commerce & Retail', label: 'E-Commerce & Retail', active: false },
    { id: 'Banking & Finance', label: 'Banking & Finance', active: false },
    { id: 'Healthcare', label: 'Healthcare', active: false },
    { id: 'Startup', label: 'Startup', active: false },
    { id: 'Gaming & Entertainment', label: 'Gaming & Entertainment', active: false },
    { id: 'Restaurant & Café', label: 'Restaurant & Café', active: false },
    { id: 'Others', label: 'Others', active: false },
  ];

  const content: Record<TabId, TabContent> = {
    'SaaS & Tech': {
      title: 'Ship faster support with WhatsApp. Scale without growing headcount.',
      subtitle:
        'Use the Official WhatsApp Business API to route conversations, automate updates, and deliver product support right where customers already are.',
      features: [
        'Automate onboarding, OTPs, and release notes with approved message templates.',
        'Deflect L1 tickets with AI replies, quick-replies, and knowledge-base lookups.',
        'Trigger webhooks from your app to notify on status changes, incidents, or usage caps.',
      ],
      tags: [
        'Official WhatsApp Business API',
        '24-hour session + templates',
        'AI auto-replies',
        'Webhook & REST API',
      ],
    },
    'E-Commerce & Retail': {
      title: 'Turn conversations into conversions.',
      subtitle:
        'Recover carts, track orders, and run catalog-driven conversations to boost AOV and repeat purchases on WhatsApp.',
      features: [
        'Send COD confirmations, shipping alerts, and delivery updates automatically.',
        'Recover abandoned carts and recommend products with interactive buttons.',
        'Enable order lookup, returns, and FAQs with no agent wait time.',
      ],
      tags: [
        'Shopify/Woo/Custom hooks',
        'Catalog messages',
        'Order tracking',
        'Abandoned cart',
      ],
    },
    'Banking & Finance': {
      title: 'Trusted, secure conversations for financial services.',
      subtitle:
        'Notify customers about transactions, KYC steps, and service requests with a privacy-first workflow.',
      features: [
        'Proactive alerts for transactions, statements ready, and payment reminders.',
        'Guided KYC journeys with document checklists and templated nudges.',
        'Smart triage to route high-risk or escalations to human agents immediately.',
      ],
      tags: [
        'Template approvals',
        'Event-based triggers',
        'Role-based routing',
        'Audit trails',
      ],
    },
    'Healthcare': {
      title: 'Patient-friendly messaging with privacy-first controls.',
      subtitle:
        'Reduce no-shows and improve continuity of care with appointment reminders, prep instructions, and after-visit follow-ups on WhatsApp.',
      features: [
        'Automated appointment confirmations, reminders, and waitlist fills.',
        'Self-serve FAQs for clinic hours, insurance, and preparation checklists.',
        'Escalate sensitive queries to verified agents with minimal friction.',
      ],
      tags: [
        'Reminder workflows',
        'Two-way messaging',
        'Agent handoff',
        'Consent & opt-out tools',
      ],
    },
    'Startup': {
      title: 'Start lean. Look enterprise-ready on Day 1.',
      subtitle:
        'Launch WhatsApp support and notifications in hours—integrate as you grow, not before.',
      features: [
        'Prebuilt templates for onboarding, cart recovery, and support SLAs.',
        'No-code flows to test funnels; add APIs when you’re ready.',
        'Actionable analytics to see what messages, timings, and CTAs convert.',
      ],
      tags: [
        'No-code flows',
        'Startup-friendly pricing',
        'Analytics & insights',
        'Scales with usage',
      ],
    },
    'Gaming & Entertainment': {
      title: 'Level up player engagement with WhatsApp.',
      subtitle:
        'Engage fans and players with updates, promotions, and personalized content delivered instantly.',
      features: [
        'Send event reminders, tournament alerts, and score updates.',
        'Promote new releases, offers, and membership perks.',
        'Enable quick support for account issues, top-ups, or technical glitches.',
      ],
      tags: [
        'Real-time notifications',
        'Fan engagement',
        'Membership promos',
        'Event alerts',
      ],
    },
    'Restaurant & Café': {
      title: 'Drive repeat visits and reservations via WhatsApp.',
      subtitle:
        'Simplify ordering, booking, and promotions for food lovers—all inside WhatsApp.',
      features: [
        'Enable reservation confirmations and waitlist notifications.',
        'Automate order updates for takeaway or delivery.',
        'Send daily specials, loyalty perks, and promotional offers.',
      ],
      tags: [
        'Menu integration',
        'Booking confirmations',
        'Loyalty campaigns',
        'Order updates',
      ],
    },
    'Others': {
      title: 'Any industry. Same powerful results on WhatsApp.',
      subtitle:
        'Public sector, education, real estate, logistics, automotive, NGOs—build responsive, automated messaging that fits your operations.',
      features: [
        'Broadcast compliant updates: schedules, closures, policy changes, or safety notices.',
        'Run surveys, feedback, and NPS to capture insights in minutes.',
        'Automate reminders for appointments, payments, renewals, or document expiries.',
        'Multilingual flows to serve regional audiences with opt-in/opt-out controls.',
      ],
      tags: [
        'Surveys & NPS',
        'Bulk notifications',
        'Multilingual support',
        'Opt-in/Opt-out tools',
      ],
    },
  };

  const currentContent = content[activeTab];

  // Global USPs
  const usps = [
    'Official WhatsApp Business API',
    'High deliverability & reliability',
    'Interactive buttons & lists',
    'Media messages (images, PDFs)',
    '24-hour service window + templates',
    'Team inbox & agent handoff',
  ];

  // Universal Benefits
  const benefits = [
    {
      title: 'Automate at key moments',
      desc: 'Send the right message at the right time—sign-ups, purchases, status changes, or renewals.',
    },
    {
      title: 'Reduce support load',
      desc: 'Answer repetitive questions instantly and route complex cases to the best agent.',
    },
    {
      title: 'Grow revenue',
      desc: 'Recover carts, re-engage dormant users, and promote offers with measurable ROI.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-green-50 rounded-2xl">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
            className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* USP strip */}
      {/* <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {usps.map((usp) => (
            <span
              key={usp}
              className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs text-emerald-700"
            >
              {usp}
            </span>
          ))}
        </div>
      </div> */}

      {/* Content Section */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">{currentContent.title}</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{currentContent.subtitle}</p>

          <div className="space-y-4">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {currentContent.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 hover:border-zinc-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Universal Benefits */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl bg-white border border-emerald-100 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-emerald-700">{b.title}</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedFeaturesSection;
