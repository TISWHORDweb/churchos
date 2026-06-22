import { redirect } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { getSession } from "@/lib/tenant";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthThemeLock } from "@/components/auth/auth-theme-lock";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-auth",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <ThemeProvider forcedTheme="light" enableSystem={false}>
      <AuthThemeLock />
      <div className={`${plusJakarta.variable} light min-h-screen bg-[#FFF9F3] text-neutral-900`}>
        {children}
      </div>
    </ThemeProvider>
  );
}
