import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { attendanceSubmissionSchema } from "@/lib/validations/attendance";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const attendance = await db.attendance.findUnique({
    where: { slug, isActive: true },
    include: { tenant: { include: { church: true } } },
  });

  if (!attendance) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const body = await request.json();
  const parsed = attendanceSubmissionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message },
      { status: 400 }
    );
  }

  await db.attendanceSubmission.create({
    data: {
      tenantId: attendance.tenantId,
      attendanceId: attendance.id,
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      isFirstTimer: attendance.type === "FIRST_TIMER",
    },
  });

  return NextResponse.json({ success: true });
}
