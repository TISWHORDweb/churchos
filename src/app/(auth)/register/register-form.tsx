"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@/lib/validations/auth";
import { registerChurch } from "@/actions/auth";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wordmark } from "@/components/brand/wordmark";
import { images } from "@/lib/images";
import { useState } from "react";
import { toast } from "sonner";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterInput) {
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await registerChurch(formData);
    setLoading(false);

    if (!result.success) {
      if (result.fieldErrors) {
        Object.entries(result.fieldErrors).forEach(([field, messages]) => {
          setError(field as keyof RegisterInput, { message: messages[0] });
        });
      }
      toast.error(result.error);
      return;
    }

    setSuccess(true);
    toast.success(result.data?.message);
  }

  if (success) {
    return (
      <AuthSplitLayout
        imageSrc={images.auth}
        imageAlt="Interior of a church sanctuary"
      >
        <Link href="/" className="mb-8 hidden lg:inline-block">
          <Wordmark className="text-2xl" />
        </Link>

        <div className="border-l-[3px] border-gold-400 pl-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            Almost there
          </p>
          <h1 className="mt-2 text-[28px] font-semibold tracking-tight text-neutral-900">
            Check your email
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            We sent a verification link to your organizational email. Click the
            link to activate your account, then sign in to continue onboarding.
          </p>
        </div>

        <Button className="mt-8 h-11 w-full text-[15px]" asChild>
          <Link href="/login">Go to Sign in</Link>
        </Button>
      </AuthSplitLayout>
    );
  }

  return (
    <AuthSplitLayout
      imageSrc={images.auth}
      imageAlt="Interior of a church sanctuary"
      quote="We had our first QR campaign live by Wednesday midweek."
      attribution="Rev. Sarah Mensah · Lighthouse Chapel"
    >
      <Link href="/" className="mb-8 hidden lg:inline-block">
        <Wordmark className="text-2xl" />
      </Link>

      <div className="border-l-[3px] border-gold-400 pl-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
          Get started
        </p>
        <h1 className="mt-2 text-[28px] font-semibold tracking-tight text-neutral-900">
          Register your church
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Use your church&apos;s organizational email address
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="churchName">Church Name</Label>
          <Input
            id="churchName"
            placeholder="Grace Assembly International"
            error={errors.churchName?.message}
            {...register("churchName")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="adminName">Admin Name</Label>
          <Input
            id="adminName"
            placeholder="John Doe"
            error={errors.adminName?.message}
            {...register("adminName")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Organizational Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="admin@yourchurch.org"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
          </div>
        </div>

        <Button type="submit" className="mt-2 h-11 w-full text-[15px]" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="mt-8 text-sm text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-gold-600 hover:text-gold-700"
        >
          Sign in
        </Link>
      </p>
    </AuthSplitLayout>
  );
}
