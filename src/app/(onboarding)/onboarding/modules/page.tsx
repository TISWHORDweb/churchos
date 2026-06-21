import { redirect } from "next/navigation";
import { getTenantContext } from "@/lib/tenant";
import { getActiveModules } from "@/actions/auth";
import { ModuleSelection } from "@/components/onboarding/module-selection";

export default async function OnboardingModulesPage() {
  try {
    await getTenantContext();
  } catch {
    redirect("/login");
  }

  let modules: Awaited<ReturnType<typeof getActiveModules>> = [];
  try {
    modules = await getActiveModules();
  } catch {
    // fallback handled in component
  }

  return <ModuleSelection modules={modules} />;
}
