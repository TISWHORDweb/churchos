import { z } from "zod";
import { isOrganizationalEmail } from "@/lib/utils";

export const registerSchema = z
  .object({
    churchName: z.string().min(2, "Church name must be at least 2 characters"),
    adminName: z.string().min(2, "Admin name must be at least 2 characters"),
    email: z
      .string()
      .email("Please enter a valid email address")
      .refine(isOrganizationalEmail, {
        message:
          "Please use your church's organizational email (not Gmail, Yahoo, or Outlook)",
      }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/[0-9]/, "Password must contain a number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const branchSchema = z.object({
  name: z.string().min(2),
  country: z.string().min(2),
  state: z.string().min(2),
  localGovernment: z.string().min(2),
  address: z.string().min(5),
  phone: z.string().optional(),
  managerName: z.string().optional(),
  managerEmail: z.string().email().optional().or(z.literal("")),
  managerPassword: z.string().min(8).optional().or(z.literal("")),
});

export const serviceSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  branchId: z.string().min(1),
  dayOfWeek: z.enum([
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ]),
  time: z.string().min(1),
  recurringType: z.enum(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
