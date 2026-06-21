import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PublicAttendanceForm } from "@/components/attendance/public-form";
import { Wordmark } from "@/components/brand/wordmark";

export default async function AttendPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let attendance;
  try {
    attendance = await db.attendance.findUnique({
      where: { slug, isActive: true },
      include: { tenant: { include: { church: true } } },
    });
  } catch {
    notFound();
  }

  if (!attendance) notFound();

  const churchName = attendance.tenant.church?.name ?? "Church";

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Wordmark className="text-lg opacity-40" />
        </div>
        <div className="rounded-[8px] bg-white p-8 hairline border-neutral-200">
          <PublicAttendanceForm
            attendanceTitle={attendance.title}
            churchName={churchName}
            slug={slug}
          />
        </div>
        <p className="mt-6 text-center text-xs text-neutral-400">
          Powered by ChurchOS
        </p>
      </div>
    </div>
  );
}
