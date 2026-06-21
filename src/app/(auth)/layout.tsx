import { redirect } from "next/navigation";
import { getSession } from "@/lib/tenant";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
