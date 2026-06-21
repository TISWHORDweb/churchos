export const defaultModules = [
  {
    id: "1",
    name: "Church Management",
    slug: "church-management",
    description: "Core church administration and settings",
    icon: "church",
    annualPrice: 50000,
    isActive: true,
    sortOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Branch Management",
    slug: "branch-management",
    description: "Multi-branch management with manager assignments",
    icon: "building",
    annualPrice: 60000,
    isActive: true,
    sortOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Attendance Management",
    slug: "attendance-management",
    description: "QR attendance, visitor forms, and smart service detection",
    icon: "clipboard",
    annualPrice: 80000,
    isActive: true,
    sortOrder: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Pastor Management",
    slug: "pastor-management",
    description: "Invitation-based pastor onboarding",
    icon: "users",
    annualPrice: 40000,
    isActive: true,
    sortOrder: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Worker Management",
    slug: "worker-management",
    description: "Ushers, choir, protocol, and technical teams",
    icon: "users",
    annualPrice: 35000,
    isActive: true,
    sortOrder: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Program Management",
    slug: "program-management",
    description: "Conferences, conventions, and special events",
    icon: "calendar",
    annualPrice: 45000,
    isActive: true,
    sortOrder: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Email Marketing",
    slug: "email-marketing",
    description: "Targeted email campaigns with filtering",
    icon: "mail",
    annualPrice: 40000,
    isActive: true,
    sortOrder: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "SMS Marketing",
    slug: "sms-marketing",
    description: "Bulk SMS to members and visitors",
    icon: "message",
    annualPrice: 50000,
    isActive: true,
    sortOrder: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export type ModuleItem = (typeof defaultModules)[number];

export async function getModulesForPage() {
  try {
    const { getActiveModules } = await import("@/actions/auth");
    const modules = await getActiveModules();
    return modules.length > 0 ? modules : defaultModules;
  } catch {
    return defaultModules;
  }
}
