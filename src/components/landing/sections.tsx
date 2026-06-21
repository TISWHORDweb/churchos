import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { AttendanceMiniVisual } from "@/components/landing/attendance-mini-visual";
import { PricingPickerPreview } from "@/components/landing/pricing-picker-preview";
import { images } from "@/lib/images";
import {
  Building2,
  QrCode,
  BarChart3,
  Users,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export function LandingHero() {
  return (
    <section className="px-6 pb-16 pt-6 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
            Church management SaaS
          </p>
          <h1 className="mt-3 font-display text-[36px] font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-[44px] lg:text-[48px]">
            Run every branch, service and Sunday from one place
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-500 sm:text-lg">
            ChurchOS connects your branches, recurring services, and QR
            check-ins into a single dashboard — so your admin team stops
            reconciling spreadsheets every Monday morning.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/register">Start Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Organizational email required · Annual billing · No credit card to
            explore
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] hairline border-neutral-200/80">
            <Image
              src={images.hero}
              alt="Congregation during a church service"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-5 -left-4 w-[200px] rotate-[-2deg] rounded-[8px] bg-white p-4 hairline border-neutral-200 sm:-left-8">
            <p className="text-[10px] font-medium uppercase tracking-wide text-teal-700">
              Live check-ins
            </p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-neutral-900">
              247
            </p>
            <p className="text-[11px] text-neutral-400">
              First Service · today
            </p>
          </div>
          {/* Floating module chip */}
          <div className="absolute -right-3 top-6 rotate-[2deg] rounded-[8px] bg-gold-50 px-3 py-2 hairline border-gold-400/20 sm:-right-6">
            <p className="text-xs font-medium text-gold-700">
              QR attendance active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeExploreLinks() {
  const links = [
    {
      href: "/features",
      label: "Platform",
      title: "Built around real church workflows",
      description: "Attendance, branches, pastors, campaigns — modular tools that map to how you actually operate.",
      image: images.church,
    },
    {
      href: "/pricing",
      label: "Pricing",
      title: "Pick modules, see your total",
      description: "Same module picker as onboarding. Core, Growth, and Scale bundles — pay annually for what you use.",
      image: images.insideChurch,
    },
    {
      href: "/stories",
      label: "Stories",
      title: "Churches already running on ChurchOS",
      description: "14,200 check-ins across 12 branches. Real numbers from admin teams who replaced the spreadsheets.",
      image: images.congregationAlt,
    },
  ];

  return (
    <section className="px-6 pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl space-y-4">
        {links.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="group grid overflow-hidden rounded-[12px] bg-white hairline border-neutral-200/80 transition-colors duration-150 hover:border-gold-400/40 lg:grid-cols-12"
          >
            <div
              className={`relative aspect-[16/9] lg:aspect-auto lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div
              className={`flex flex-col justify-center p-6 lg:col-span-7 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
                {item.label}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-neutral-900 lg:text-2xl">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 lg:text-base">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-600 transition-colors group-hover:text-gold-700">
                Explore {item.label.toLowerCase()}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function LandingFeatures() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Platform"
          heading="Built around how churches actually operate"
          supporting="Not a generic CRM with a cross slapped on. Each tool maps to a real workflow — Sunday check-in, branch reporting, pastor invitations — with modules you turn on only when you need them."
        />

        <div className="mb-10 overflow-hidden rounded-[12px] hairline border-neutral-200/80 lg:mb-14">
          <div className="relative aspect-[21/9] min-h-[200px]">
            <Image
              src={images.featuresHero}
              alt="Church building exterior"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-md lg:bottom-10 lg:left-10">
              <p className="text-sm font-medium text-white/90">
                From one branch to twelve — same platform
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-7 lg:row-span-2 rounded-[8px] bg-white p-6 hairline border-neutral-200/80">
            <p className="text-xs font-medium text-teal-700">Most-used module</p>
            <h3 className="mt-1 text-lg font-semibold text-neutral-900">
              QR attendance that links to the right service automatically
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500">
              Generate a campaign, share the link or QR, and visitors check in
              without an account. ChurchOS detects which service is live based
              on day and time.
            </p>
            <AttendanceMiniVisual />
          </div>

          <div className="lg:col-span-5 rounded-[8px] bg-white p-5 hairline border-neutral-200/80">
            <Building2 className="h-4 w-4 text-gold-500" />
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">
              Branch management
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
              Assign a manager per location with login scoped to one branch.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-[8px] bg-teal-50 p-5 hairline border-teal-400/10">
            <QrCode className="h-4 w-4 text-teal-400" />
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">
              No app download for visitors
            </h3>
            <p className="mt-4 text-2xl font-semibold tabular-nums text-teal-700">
              12s
            </p>
            <p className="text-xs text-teal-700/80">Average check-in time</p>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 rounded-[8px] bg-white p-5 hairline border-neutral-200/80">
            <BarChart3 className="h-4 w-4 text-neutral-500" />
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">
              Branded PDF reports
            </h3>
            <p className="mt-1.5 text-sm text-neutral-500">
              Your logo and colors on every export.
            </p>
          </div>

          <div className="lg:col-span-4 rounded-[8px] bg-white p-5 hairline border-neutral-200/80">
            <Users className="h-4 w-4 text-gold-500" />
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">
              Pastor invitations
            </h3>
            <p className="mt-1.5 text-sm text-neutral-500">
              Send a link — they pick their branch and get access.
            </p>
          </div>

          <div className="lg:col-span-4 rounded-[8px] bg-white p-5 hairline border-neutral-200/80">
            <h3 className="text-sm font-semibold text-neutral-900">
              SMS & email to the right people
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Filter by branch, first-timers, or program attendees.
            </p>
            <p className="mt-3 text-xs font-medium text-gold-700">
              <Megaphone className="mr-1 inline h-3 w-3" />
              Announcement module
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PricingModule {
  id: string;
  name: string;
  slug?: string;
  description: string;
  icon: string;
  annualPrice: number;
}

export function LandingPricing({ modules }: { modules: PricingModule[] }) {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Pricing"
          heading="Pick modules, see your total — same as onboarding"
          supporting="No tier guessing. Select exactly what your church needs and pay annually. Try the module picker below — it's the same one you'll use after registration."
        />
        <div className="rounded-[12px] bg-white p-6 hairline border-neutral-200/80 lg:p-8">
          <PricingPickerPreview modules={modules} />
        </div>
      </div>
    </section>
  );
}

export function LandingTestimonials() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Stories"
          heading="Churches running real operations on ChurchOS"
          supporting="Admin teams who replaced manual registers, WhatsApp chains, and Monday-morning spreadsheet merges."
        />

        <div className="mb-10 overflow-hidden rounded-[12px] hairline border-neutral-200/80">
          <div className="relative aspect-[21/9] min-h-[180px]">
            <Image
              src={images.storiesHero}
              alt="Congregation worshipping together"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[8px] bg-white p-8 hairline border-neutral-200/80 lg:p-10">
            <p className="text-lg leading-relaxed text-neutral-700">
              &ldquo;We went from three separate WhatsApp groups and a Google
              Sheet per branch to one dashboard. Last quarter we tracked{" "}
              <span className="font-medium text-neutral-900">14,200 check-ins</span>{" "}
              across{" "}
              <span className="font-medium text-neutral-900">12 branches</span>.
              The QR codes alone cut our Sunday registration time from 45
              minutes to under 10.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-sm font-medium text-gold-700">
                DO
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">
                  Pastor David Okonkwo
                </p>
                <p className="text-xs text-neutral-500">
                  Senior Pastor · Grace Assembly · Lagos & Abuja
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex-1 rounded-[8px] bg-white p-6 hairline border-neutral-200/80">
              <p className="text-sm leading-relaxed text-neutral-600">
                &ldquo;Setup took us an afternoon. We picked 4 modules, skipped
                payment to explore, and had our first QR campaign live by
                Wednesday midweek.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-neutral-900">
                Rev. Sarah Mensah
              </p>
              <p className="text-xs text-neutral-500">
                Admin · Lighthouse Chapel, Accra
              </p>
            </div>

            <div className="flex-1 rounded-[8px] bg-white p-6 hairline border-neutral-200/80">
              <p className="text-sm leading-relaxed text-neutral-600">
                &ldquo;The PDF reports carry our logo and colors. Leadership
                stopped asking &lsquo;can someone clean this up?&rsquo; before
                every meeting.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-neutral-900">
                Elder James Adeyemi
              </p>
              <p className="text-xs text-neutral-500">
                Operations · Covenant Church, Ibadan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer id="contact" className="hairline-t border-neutral-200/80 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/">
              <span className="font-serif text-xl font-semibold tracking-tight">
                <span className="text-neutral-900">Church</span>
                <span className="text-gold-500">OS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              Church management for multi-branch ministries. Attendance, branches,
              pastors, and reports — modular, annual, and built for teams who run
              services every week.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/register">Start Free</Link>
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-8">
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">Product</h4>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "Features", href: "/features" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Stories", href: "/stories" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">Contact</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="mailto:hello@churchos.app"
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    hello@churchos.app
                  </a>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    Book a demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 hairline-t border-neutral-200/80 pt-8">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} ChurchOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
