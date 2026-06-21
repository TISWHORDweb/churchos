import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import type { UserRole } from "@prisma/client";

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function requireSession() {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function requireRole(allowedRoles: UserRole[]) {
  const session = await requireSession();
  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, tenantId: true, branchId: true },
  });

  if (!user || !allowedRoles.includes(user.role)) {
    throw new Error("Forbidden");
  }

  return { session, user };
}

export async function getTenantContext() {
  const session = await requireSession();
  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      tenant: {
        include: {
          church: true,
          subscriptions: {
            where: { status: { in: ["ACTIVE", "TRIAL", "SKIPPED"] } },
            orderBy: { createdAt: "desc" },
            take: 1,
            include: { modules: { include: { module: true } } },
          },
        },
      },
    },
  });

  if (!user?.tenantId || !user.tenant) {
    throw new Error("No tenant context");
  }

  const subscription = user.tenant.subscriptions[0] ?? null;
  const hasActiveSubscription =
    subscription?.status === "ACTIVE" || subscription?.status === "TRIAL";

  return {
    session,
    user,
    tenant: user.tenant,
    church: user.tenant.church,
    subscription,
    hasActiveSubscription,
    subscriptionSkipped: subscription?.status === "SKIPPED",
  };
}

export function tenantWhere(tenantId: string) {
  return { tenantId };
}
