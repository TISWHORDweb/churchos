import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { Check } from "lucide-react";

const billingSteps = [
  {
    step: "01",
    title: "Register & verify",
    body: "Sign up with your church's organizational email. Verify your account, then land on the module selection screen.",
  },
  {
    step: "02",
    title: "Pick modules",
    body: "Select from Core, Growth, and Scale modules. Your annual total updates live — no hidden tiers or seat-based surprises.",
  },
  {
    step: "03",
    title: "Pay annually via Paystack",
    body: "Complete payment through Paystack or skip to explore the dashboard first. Subscription warnings appear until payment is complete.",
  },
];

export function PricingHowItWorks() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="How billing works"
          heading="Transparent annual pricing — no per-seat math"
          supporting="You pay for modules, not user count. Add branch managers, pastors, and workers without watching your bill climb every time someone joins the team."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {billingSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[8px] bg-white p-6 hairline border-neutral-200/80"
            >
              <p className="text-xs font-medium tabular-nums text-gold-700">
                {item.step}
              </p>
              <h3 className="mt-2 text-base font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bundles = [
  {
    name: "Core",
    description: "Foundation for any church getting started on ChurchOS",
    includes: [
      "Church Management",
      "Branch Management",
      "Member Management",
    ],
    typical: "Single-branch churches or HQ setup phase",
  },
  {
    name: "Growth",
    description: "Operations modules most multi-branch churches activate next",
    includes: [
      "Attendance Management",
      "Pastor Management",
      "Worker Management",
      "Program Management",
    ],
    typical: "Churches running weekly services + events",
  },
  {
    name: "Scale",
    description: "Advanced outreach, finance, and media for mature ministries",
    includes: [
      "Finance Management",
      "Email Marketing",
      "SMS Marketing",
      "Media Management",
    ],
    typical: "Large ministries with dedicated admin teams",
  },
];

export function PricingBundles() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Bundles"
          heading="Three groupings to help you decide — not forced packages"
          supporting="Bundles are a mental model, not a pricing tier. Mix and match any modules; the picker calculates your exact annual total."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className="flex flex-col rounded-[8px] bg-white p-6 hairline border-neutral-200/80"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
                {bundle.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {bundle.description}
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {bundle.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Typical for: {bundle.typical}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const included = [
  "Unlimited users within your church tenant",
  "Branch manager and pastor role provisioning",
  "Branded PDF reports with your logo and colors",
  "Email verification and role-based access control",
  "Payment history and invoice records via Paystack",
  "Skip payment option to explore before subscribing",
];

export function PricingIncluded() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
              Always included
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              Every plan includes the platform essentials
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Regardless of which modules you pick, these capabilities ship with
              every ChurchOS tenant — no add-on fees for basic security or
              branding.
            </p>
          </div>
          <ul className="space-y-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[8px] bg-white p-4 hairline border-neutral-200/80"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-sm text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const pricingFaqs = [
  {
    q: "Can I add modules later?",
    a: "Yes. Start with Core modules and add Growth or Scale modules as your operations expand. New modules are added to your subscription with prorated billing handled through Paystack.",
  },
  {
    q: "What happens if I skip payment at onboarding?",
    a: "You still get dashboard access. A subscription warning banner appears and some features remain restricted until payment completes — but you can explore and configure your church first.",
  },
  {
    q: "Do you charge per branch or per user?",
    a: "Neither. Pricing is module-based and annual. Add as many branches, managers, pastors, and workers as your modules support without per-seat fees.",
  },
  {
    q: "Which currencies do you support?",
    a: "Billing is in NGN through Paystack. Module prices are displayed in Naira on the picker and at checkout.",
  },
];

export function PricingFAQ() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Pricing FAQ"
          heading="Questions churches ask before subscribing"
          supporting="Need a custom arrangement for a large network? Contact hello@churchos.app — we work with multi-site ministries directly."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {pricingFaqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[8px] bg-white p-6 hairline border-neutral-200/80"
            >
              <h3 className="text-sm font-semibold text-neutral-900">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingCTA() {
  return (
    <section className="px-6 pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl rounded-[12px] bg-white p-8 hairline border-neutral-200/80 lg:p-12">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              Start free — pick modules when you&apos;re ready
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Register with your organizational email and explore before you pay.
            </p>
          </div>
          <Button className="mt-6 lg:mt-0" size="lg" asChild>
            <Link href="/register">Create your church account</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
