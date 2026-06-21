import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const modules = [
  {
    name: "Church Management",
    slug: "church-management",
    description: "Core church administration, settings, and branding",
    icon: "church",
    annualPrice: 50000,
    sortOrder: 1,
  },
  {
    name: "Branch Management",
    slug: "branch-management",
    description: "Multi-branch management with manager assignments",
    icon: "building",
    annualPrice: 60000,
    sortOrder: 2,
  },
  {
    name: "Member Management",
    slug: "member-management",
    description: "Track and manage church members across branches",
    icon: "users",
    annualPrice: 70000,
    sortOrder: 3,
  },
  {
    name: "Attendance Management",
    slug: "attendance-management",
    description: "QR attendance, visitor forms, and smart service detection",
    icon: "clipboard",
    annualPrice: 80000,
    sortOrder: 4,
  },
  {
    name: "Pastor Management",
    slug: "pastor-management",
    description: "Invitation-based pastor onboarding and branch assignments",
    icon: "users",
    annualPrice: 40000,
    sortOrder: 5,
  },
  {
    name: "Worker Management",
    slug: "worker-management",
    description: "Manage ushers, choir, protocol, and technical teams",
    icon: "users",
    annualPrice: 35000,
    sortOrder: 6,
  },
  {
    name: "Program Management",
    slug: "program-management",
    description: "Conferences, conventions, retreats, and special events",
    icon: "calendar",
    annualPrice: 45000,
    sortOrder: 7,
  },
  {
    name: "Finance Management",
    slug: "finance-management",
    description: "Track offerings, expenses, and financial reports",
    icon: "wallet",
    annualPrice: 90000,
    sortOrder: 8,
  },
  {
    name: "Media Management",
    slug: "media-management",
    description: "Manage sermons, media assets, and content library",
    icon: "music",
    annualPrice: 55000,
    sortOrder: 9,
  },
  {
    name: "Announcement Management",
    slug: "announcement-management",
    description: "Church-wide announcements and bulletin management",
    icon: "megaphone",
    annualPrice: 30000,
    sortOrder: 10,
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    description: "Targeted email campaigns with advanced filtering",
    icon: "mail",
    annualPrice: 40000,
    sortOrder: 11,
  },
  {
    name: "SMS Marketing",
    slug: "sms-marketing",
    description: "Bulk SMS campaigns to members and visitors",
    icon: "message",
    annualPrice: 50000,
    sortOrder: 12,
  },
];

async function main() {
  console.log("Seeding modules...");

  for (const mod of modules) {
    await db.module.upsert({
      where: { slug: mod.slug },
      update: mod,
      create: mod,
    });
  }

  console.log(`Seeded ${modules.length} modules`);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
