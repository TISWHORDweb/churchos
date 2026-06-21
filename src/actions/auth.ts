"use server";

import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { registerSchema } from "@/lib/validations/auth";
import { slugify } from "@/lib/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type ActionResult<T = void> =
  | { success: true; data?: T }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function registerChurch(
  formData: FormData
): Promise<ActionResult<{ message: string }>> {
  const raw = {
    churchName: formData.get("churchName") as string,
    adminName: formData.get("adminName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    });
    return {
      success: false,
      error: "Please fix the errors below",
      fieldErrors,
    };
  }

  const { churchName, adminName, email, password } = parsed.data;

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return { success: false, error: "An account with this email already exists" };
  }

  const existingChurch = await db.church.findUnique({ where: { orgEmail: email } });
  if (existingChurch) {
    return { success: false, error: "A church with this email is already registered" };
  }

  let slug = slugify(churchName);
  const slugExists = await db.church.findUnique({ where: { slug } });
  if (slugExists) {
    slug = `${slug}-${Date.now().toString(36)}`;
  }

  const tenant = await db.tenant.create({
    data: {
      status: "PENDING",
      church: {
        create: {
          name: churchName,
          slug,
          orgEmail: email,
        },
      },
    },
    include: { church: true },
  });

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: adminName,
      },
      headers: await headers(),
    });

    await db.user.update({
      where: { email },
      data: {
        role: "CHURCH_ADMIN",
        tenantId: tenant.id,
      },
    });
  } catch {
    await db.tenant.delete({ where: { id: tenant.id } });
    return { success: false, error: "Registration failed. Please try again." };
  }

  return {
    success: true,
    data: {
      message: "Registration successful! Please check your email to verify your account.",
    },
  };
}

export async function getActiveModules() {
  return db.module.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function getPlatformStats() {
  const [totalChurches, activeChurches, totalRevenue] = await Promise.all([
    db.church.count(),
    db.tenant.count({ where: { status: "ACTIVE" } }),
    db.payment.aggregate({
      where: { status: "SUCCESS" },
      _sum: { amount: true },
    }),
  ]);

  return {
    totalChurches,
    activeChurches,
    totalRevenue: totalRevenue._sum.amount ?? 0,
  };
}

export async function getDashboardMetrics(tenantId: string) {
  const [totalAttendance, firstTimers, branches, recentSubmissions] =
    await Promise.all([
      db.attendanceSubmission.count({ where: { tenantId } }),
      db.attendanceSubmission.count({
        where: { tenantId, isFirstTimer: true },
      }),
      db.branch.count({ where: { tenantId } }),
      db.attendanceSubmission.findMany({
        where: { tenantId },
        orderBy: { submittedAt: "desc" },
        take: 5,
        include: { attendance: { select: { title: true } } },
      }),
    ]);

  return { totalAttendance, firstTimers, branches, recentSubmissions };
}
