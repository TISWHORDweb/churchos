import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { images } from "@/lib/images";
import {
  Building2,
  Calendar,
  ClipboardList,
  Mail,
  MessageSquare,
  Shield,
  Users,
  Wallet,
  Megaphone,
  Music,
  BarChart3,
} from "lucide-react";

const allModules = [
  {
    name: "Church Management",
    description: "Core settings, branding, logo, colors, welcome messages",
    icon: Building2,
  },
  {
    name: "Branch Management",
    description: "Locations, addresses, manager assignment, scoped access",
    icon: Building2,
  },
  {
    name: "Member Management",
    description: "Member records across branches with contact information",
    icon: Users,
  },
  {
    name: "Attendance Management",
    description: "QR campaigns, visitor forms, smart service detection",
    icon: ClipboardList,
  },
  {
    name: "Pastor Management",
    description: "Invitation links, branch assignment, role provisioning",
    icon: Users,
  },
  {
    name: "Worker Management",
    description: "Ushers, choir, protocol, technical, children's church",
    icon: Users,
  },
  {
    name: "Program Management",
    description: "Conferences, conventions, retreats, bible school",
    icon: Calendar,
  },
  {
    name: "Finance Management",
    description: "Offerings, expenses, and financial reporting",
    icon: Wallet,
  },
  {
    name: "Media Management",
    description: "Sermons, media assets, and content library",
    icon: Music,
  },
  {
    name: "Announcement Management",
    description: "Church-wide bulletins and internal announcements",
    icon: Megaphone,
  },
  {
    name: "Email Marketing",
    description: "Filtered email campaigns by branch, service, or category",
    icon: Mail,
  },
  {
    name: "SMS Marketing",
    description: "Bulk SMS to members, first timers, and program attendees",
    icon: MessageSquare,
  },
];

export function FeaturesModuleDirectory() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="All modules"
          heading="Twelve tools — activate only what you need"
          supporting="Every module is independent. Most churches start with Church Management, Branch Management, and Attendance — then add Finance or SMS when operations mature."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.name}
                className="surface p-5 hairline border-neutral-200/80"
              >
                <Icon className="h-4 w-4 text-gold-500" />
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {mod.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const workflows = [
  {
    title: "Set up recurring services once",
    body: "Define First Service, Second Service, Midweek, Bible Study — each with day, time, and recurrence. ChurchOS uses this schedule to auto-link attendance without manual selection.",
    image: images.insideChurch,
    imageAlt: "Church interior during service",
  },
  {
    title: "Branch managers operate independently",
    body: "Assign a manager when creating a branch. They configure local services, review attendance, and export branch reports — without access to other locations or church-wide billing.",
    image: images.church,
    imageAlt: "Church building",
  },
];

export function FeaturesWorkflowDeepDives() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeader
          kicker="Workflows"
          heading="How teams actually use ChurchOS day to day"
          supporting="These aren't feature bullet points — they're the sequences admin teams run every week after switching from registers and spreadsheets."
        />

        {workflows.map((item, i) => (
          <div
            key={item.title}
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? "" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-[12px] hairline border-neutral-200/80 ${i % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const roles = [
  {
    role: "Church Admin",
    access: "Full church access — branches, services, attendance, pastors, workers, reports, settings, and subscriptions.",
  },
  {
    role: "Branch Manager",
    access: "Scoped to assigned branch — local services, attendance campaigns, branch dashboard, and branch-level reports.",
  },
  {
    role: "Pastor",
    access: "Read-only branch information and attendance reports for their assigned location.",
  },
  {
    role: "Visitor",
    access: "No login. Scan QR or open public link to submit attendance via name and phone.",
  },
];

export function FeaturesRolesSection() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Access control"
          heading="The right people see the right data"
          supporting="Role-based permissions are built in — not bolted on. HQ, branch managers, pastors, and public visitors each get exactly the access their job requires."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {roles.map((item) => (
            <div
              key={item.role}
              className="surface p-6 hairline border-neutral-200/80"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <h3 className="text-sm font-semibold text-foreground">
                  {item.role}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.access}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const integrations = [
  { name: "Paystack", desc: "Annual subscriptions, invoices, payment history" },
  { name: "Cloudinary", desc: "Church logos, banners, service & program images" },
  { name: "ZeptoMail", desc: "Transactional email and verification messages" },
  { name: "SMS Provider", desc: "Bulk SMS campaigns to filtered audiences" },
];

export function FeaturesIntegrations() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Integrations"
          heading="Connected to the services your church already uses"
          supporting="Payments, media storage, email delivery, and SMS — wired in from day one so you're not copying data between tools."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="surface p-5 hairline border-neutral-200/80"
            >
              <p className="text-sm font-semibold text-foreground">{item.name}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[8px] bg-teal-50 p-6 hairline border-teal-400/10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Reports export with your branding
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Logo, primary color, and church name appear on PDFs and email
              templates automatically from your settings.
            </p>
          </div>
          <BarChart3 className="mt-4 h-8 w-8 text-teal-400 lg:mt-0" />
        </div>
      </div>
    </section>
  );
}

export function FeaturesCTA() {
  return (
    <section className="px-6 pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl surface-lg p-8 hairline border-neutral-200/80 lg:p-12">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-lg">
            <h2 className="text-xl font-semibold text-foreground">
              See how modules fit your church
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use the pricing picker to select modules and see your annual total
              — same experience as onboarding.
            </p>
          </div>
          <div className="mt-6 flex gap-3 lg:mt-0">
            <Button asChild>
              <Link href="/pricing">Build your plan</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/register">Start Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
