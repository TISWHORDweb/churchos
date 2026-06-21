import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { images } from "@/lib/images";

const impactStats = [
  { value: "14,200", label: "Check-ins in one quarter", church: "Grace Assembly" },
  { value: "12", label: "Branches on one dashboard", church: "Grace Assembly" },
  { value: "45 → 10", label: "Minutes saved on Sunday registration", church: "Grace Assembly" },
  { value: "4", label: "Modules to go live in one afternoon", church: "Lighthouse Chapel" },
];

export function StoriesImpactStats() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Impact"
          heading="Numbers from churches already on the platform"
          supporting="These aren't projections — they're reported outcomes from admin teams running real Sunday operations on ChurchOS."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[8px] bg-white p-5 hairline border-neutral-200/80"
            >
              <p className="text-2xl font-semibold tabular-nums text-neutral-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
              <p className="mt-3 text-[11px] font-medium text-gold-700">
                {stat.church}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    church: "Grace Assembly",
    location: "Lagos & Abuja · 12 branches",
    headline: "Replaced three WhatsApp groups and a spreadsheet per branch",
    challenge:
      "Each branch admin posted attendance totals in separate group chats. HQ consolidated manually every Monday — often with missing or inconsistent data.",
    solution:
      "Deployed QR attendance at all 12 branches with smart service detection. Branch managers got scoped logins. HQ dashboard shows live totals and exports branded PDFs for leadership.",
    outcome:
      "14,200 check-ins tracked last quarter. Sunday registration dropped from 45 minutes to under 10 across the network.",
    image: images.congregation,
  },
  {
    church: "Lighthouse Chapel",
    location: "Accra · 4 branches",
    headline: "Live with QR attendance in one afternoon",
    challenge:
      "A growing mid-size church needed attendance tracking without hiring a dedicated systems admin or running a complex setup project.",
    solution:
      "Registered, selected four modules, skipped payment to explore, and created the first QR campaign before Wednesday midweek service.",
    outcome:
      "First-timer tracking and midweek attendance on the same platform within 48 hours of signup.",
    image: images.insideChurch,
  },
  {
    church: "Covenant Church",
    location: "Ibadan · 6 branches",
    headline: "Leadership reports that look ready — not rushed",
    challenge:
      "Operations team spent hours reformatting attendance data into presentable documents before every leadership meeting.",
    solution:
      "Configured church branding — logo, colors, welcome message — and switched to ChurchOS PDF exports for weekly and monthly reports.",
    outcome:
      "Reports go straight from dashboard to leadership. No more 'can someone clean this up?' before meetings.",
    image: images.church,
  },
];

export function StoriesCaseStudies() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader
          kicker="Case studies"
          heading="Three churches, three different starting points"
          supporting="Single-branch, multi-branch, and operations-heavy — each found a different entry point into ChurchOS."
        />

        {caseStudies.map((study, i) => (
          <article
            key={study.church}
            className="overflow-hidden rounded-[12px] bg-white hairline border-neutral-200/80"
          >
            <div
              className={`grid lg:grid-cols-12 ${i % 2 === 1 ? "" : ""}`}
            >
              <div
                className={`relative aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[280px] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={study.image}
                  alt={study.church}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div
                className={`p-8 lg:col-span-7 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
                  {study.church} · {study.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  {study.headline}
                </h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                      Challenge
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                      What they did
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const bySize = [
  {
    size: "Single branch",
    example: "One location, 200–800 weekly attendance",
    path: "Start with Church Management + Attendance. Add Pastor and Worker modules as teams grow.",
  },
  {
    size: "Multi-branch (2–5)",
    example: "Regional church with satellite locations",
    path: "Add Branch Management early. Assign managers per location before scaling QR across branches.",
  },
  {
    size: "Network (6+)",
    example: "HQ with dedicated operations team",
    path: "Full Growth bundle plus Finance and SMS. HQ dashboard for cross-branch analytics and branded reports.",
  },
];

export function StoriesByChurchSize() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Find yourself"
          heading="Where does your church fit?"
          supporting="These paths aren't prescriptions — they're how churches similar to yours typically start. You can always adjust modules after registration."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {bySize.map((item) => (
            <div
              key={item.size}
              className="rounded-[8px] bg-white p-6 hairline border-neutral-200/80"
            >
              <h3 className="text-base font-semibold text-neutral-900">
                {item.size}
              </h3>
              <p className="mt-1 text-xs text-neutral-400">{item.example}</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                {item.path}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoriesCTA() {
  return (
    <section className="px-6 pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[12px] bg-white hairline border-neutral-200/80 lg:grid-cols-2">
          <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[240px]">
            <Image
              src={images.hero}
              alt="Church service in progress"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h2 className="text-xl font-semibold text-neutral-900">
              Write your church&apos;s story on ChurchOS
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Join ministries replacing manual registers and spreadsheet merges
              with a platform built for weekly church operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/register">Start Free</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
