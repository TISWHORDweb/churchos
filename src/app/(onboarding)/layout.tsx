import { redirect } from "next/navigation";
import { getSession } from "@/lib/tenant";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login?callbackUrl=/onboarding/modules");
  }

  return <>{children}</>;
}
