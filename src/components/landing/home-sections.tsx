import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { images } from "@/lib/images";
import {
  ArrowRight,
  Building2,
  Calendar,
  ClipboardList,
  Mail,
  QrCode,
  Users,
} from "lucide-react";

const stats = [
  { label: "Check-ins tracked", value: "840K+", accent: "gold" as const },
  { label: "Branches managed", value: "320+", accent: "teal" as const },
  { label: "Avg. Sunday setup", value: "8 min", accent: "neutral" as const },
  { label: "Modules available", value: "12", accent: "gold" as const },
];

export function HomeStatsStrip() {
  return (
    <section className="px-6 pb-4">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[8px] bg-white px-5 py-4 hairline border-neutral-200/80"
          >
            <p className="text-2xl font-semibold tabular-nums text-neutral-900">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const weekFlow = [
  {
    day: "Sunday",
    title: "QR check-in links to First Service automatically",
    body: "Ushers share the campaign link or display the QR. Visitors enter name and phone — no app, no account. Attendance lands under the correct service without anyone picking from a dropdown.",
  },
  {
    day: "Monday",
    title: "Branch managers pull reports before leadership meeting",
    body: "Each location sees its own dashboard — total attendance, first timers, gender split. Export a branded PDF with your church logo or download CSV for deeper analysis.",
  },
  {
    day: "Midweek",
    title: "Smart detection picks Midweek Service on Wednesday",
    body: "Same QR infrastructure, different service context. ChurchOS reads day and time against your recurring service schedule and routes submissions correctly.",
  },
  {
    day: "Conference week",
    title: "Programs generate their own attendance forms",
    body: "Create a Program for your convention or youth camp. A dedicated check-in form goes live for the event dates — separate from your regular Sunday flow.",
  },
];

export function HomeWeeklyWorkflow() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Your week on ChurchOS"
          heading="From Sunday morning to Monday reports — without the spreadsheet merge"
          supporting="Most churches don't need another generic database. They need attendance on Sunday, branch visibility on Monday, and a midweek flow that doesn't require reconfiguration every time."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {weekFlow.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-[8px] bg-white p-6 hairline border-neutral-200/80 ${i === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8" : ""}`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
                  {item.day}
                </p>
                <h3 className="mt-2 text-base font-semibold text-neutral-900 lg:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.body}
                </p>
              </div>
              {i === 0 && (
                <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-[8px] hairline border-neutral-200/80 lg:mt-0">
                  <Image
                    src={images.congregation}
                    alt="Congregation during worship"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    icon: QrCode,
    title: "Visitor check-in in under 15 seconds",
    description:
      "Public attendance forms work on any phone browser. First timers, Sunday service, conference — each campaign gets its own link and QR code.",
  },
  {
    icon: Building2,
    title: "One church, many branches — each with a manager login",
    description:
      "HQ sees everything. Branch managers see only their location — services, workers, attendance, and local reports.",
  },
  {
    icon: Users,
    title: "Pastors onboard via invitation link",
    description:
      "No manual account creation. Send a link, they choose their branch, and their role is set automatically.",
  },
];

export function HomeFeatureHighlights() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
              Why churches switch
            </p>
            <h2 className="mt-3 font-display text-[28px] font-semibold leading-tight tracking-tight text-neutral-900">
              Replace the WhatsApp chain and the Monday spreadsheet
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              Admin teams tell us the same story: attendance lives in registers,
              branch totals live in group chats, and leadership waits until Tuesday
              for numbers that should have been ready Monday morning.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/features">
                See all features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-[8px] bg-white p-5 hairline border-neutral-200/80"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-gold-50">
                    <Icon className="h-4 w-4 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeStoryTeaser() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[12px] bg-white hairline border-neutral-200/80 lg:grid-cols-12">
          <div className="relative aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={images.congregationAlt}
              alt="Church congregation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
              From Grace Assembly
            </p>
            <blockquote className="mt-4 text-lg leading-relaxed text-neutral-700">
              &ldquo;Last quarter we tracked{" "}
              <span className="font-medium text-neutral-900">14,200 check-ins</span>{" "}
              across 12 branches. QR alone cut Sunday registration from 45 minutes
              to under 10.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-neutral-900">
              Pastor David Okonkwo
            </p>
            <p className="text-xs text-neutral-500">
              Senior Pastor · Lagos & Abuja
            </p>
            <Link
              href="/stories"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700"
            >
              Read more stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const modules = [
  { name: "Attendance", icon: ClipboardList, desc: "QR campaigns & visitor forms" },
  { name: "Branches", icon: Building2, desc: "Multi-location with managers" },
  { name: "Services", icon: Calendar, desc: "Recurring schedule & smart detection" },
  { name: "Pastors", icon: Users, desc: "Invitation-based onboarding" },
  { name: "Campaigns", icon: Mail, desc: "Targeted SMS & email broadcasts" },
  { name: "Reports", icon: ClipboardList, desc: "Branded PDF & CSV export" },
];

export function HomeModulesPreview() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Modules"
          heading="Turn on only what your ministry needs"
          supporting="12 modules, annual billing. Start with attendance and branch management, add finance or SMS marketing when you're ready — no forced bundles."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.name}
                className="rounded-[8px] bg-white p-5 hairline border-neutral-200/80"
              >
                <Icon className="h-4 w-4 text-gold-500" />
                <h3 className="mt-3 text-sm font-semibold text-neutral-900">
                  {mod.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">{mod.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href="/pricing">Build your plan</Link>
          </Button>
          <p className="text-sm text-neutral-400">
            Preview the module picker with live pricing totals
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do we need a credit card to start?",
    a: "No. Register with your organizational email, verify your account, pick modules, and explore the dashboard. You can skip payment initially and complete subscription when ready.",
  },
  {
    q: "Can visitors check in without downloading an app?",
    a: "Yes. Every attendance campaign generates a public link and QR code. Visitors open it in any mobile browser, enter their name and phone, and they're checked in.",
  },
  {
    q: "How does multi-branch access work?",
    a: "Church admins see all branches. Branch managers get a login scoped to their assigned location — they manage local services, attendance, and reports without seeing other branches.",
  },
  {
    q: "Is billing monthly or annual?",
    a: "Annual only. Select modules at onboarding, see your total upfront, and pay via Paystack. Invoices and payment history are stored in your dashboard.",
  },
];

export function HomeFAQ() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="FAQ"
          heading="Common questions before you register"
          supporting="Still unsure? Email hello@churchos.app or book a demo walkthrough with our team."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
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

export function HomeCTA() {
  return (
    <section className="px-6 pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[12px] bg-white p-8 hairline border-neutral-200/80 lg:flex lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Ready to run your next Sunday from one dashboard?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Register in minutes with your church&apos;s organizational email.
              Pick your modules, invite your team, and go live before this
              weekend.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <Button size="lg" asChild>
              <Link href="/register">Start Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
