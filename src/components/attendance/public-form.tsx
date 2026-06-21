"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  attendanceSubmissionSchema,
  type AttendanceSubmissionInput,
} from "@/lib/validations/attendance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

interface AttendanceFormProps {
  attendanceTitle: string;
  churchName: string;
  slug: string;
}

export function PublicAttendanceForm({
  attendanceTitle,
  churchName,
  slug,
}: AttendanceFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AttendanceSubmissionInput>({
    resolver: zodResolver(attendanceSubmissionSchema),
  });

  async function onSubmit(data: AttendanceSubmissionInput) {
    setLoading(true);
    try {
      const res = await fetch(`/api/attend/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      toast.success("Attendance recorded!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
          <CheckCircle className="h-7 w-7 text-teal-400" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-900">
          Welcome, we&apos;re glad you&apos;re here!
        </h2>
        <p className="mt-2 text-sm text-neutral-500">
          Your attendance at {attendanceTitle} has been recorded.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <p className="text-sm text-neutral-500">{churchName}</p>
        <h1 className="mt-1 text-xl font-semibold text-neutral-900">
          {attendanceTitle}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Please fill in your details to check in
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="Your full name"
            error={errors.fullName?.message}
            {...register("fullName")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email{" "}
            <span className="font-normal text-neutral-400">(optional)</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Check In"}
        </Button>
      </form>
    </div>
  );
}
