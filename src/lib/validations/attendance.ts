import { z } from "zod";

export const attendanceSubmissionSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email().optional().or(z.literal("")),
});

export type AttendanceSubmissionInput = z.infer<
  typeof attendanceSubmissionSchema
>;
