import { redirect } from "next/navigation";
import { requireRole } from "@/lib/tenant";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    await requireRole(["SUPER_ADMIN"]);
  } catch {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
