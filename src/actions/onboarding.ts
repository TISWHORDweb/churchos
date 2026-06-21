"use server";

import { db } from "@/lib/db";
import { getTenantContext } from "@/lib/tenant";
import { revalidatePath } from "next/cache";

export async function selectModules(moduleIds: string[], skipPayment = false) {
  const { tenant } = await getTenantContext();

  const modules = await db.module.findMany({
    where: { id: { in: moduleIds }, isActive: true },
  });

  if (modules.length === 0) {
    return { success: false, error: "Please select at least one module" };
  }

  const totalAmount = modules.reduce((sum, m) => sum + m.annualPrice, 0);

  const subscription = await db.subscription.create({
    data: {
      tenantId: tenant.id,
      status: skipPayment ? "SKIPPED" : "TRIAL",
      totalAmount,
      modules: {
        create: modules.map((m) => ({
          moduleId: m.id,
          priceAtPurchase: m.annualPrice,
        })),
      },
    },
  });

  await db.church.update({
    where: { tenantId: tenant.id },
    data: { onboardingComplete: skipPayment },
  });

  if (skipPayment) {
    revalidatePath("/dashboard");
    return { success: true, redirect: "/dashboard" };
  }

  return {
    success: true,
    redirect: `/onboarding/payment?subscriptionId=${subscription.id}`,
    totalAmount,
  };
}
