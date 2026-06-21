"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { signIn } from "@/lib/auth-client";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wordmark } from "@/components/brand/wordmark";
import { images } from "@/lib/images";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginInput) {
    setLoading(true);
    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        toast.error(result.error.message ?? "Invalid email or password");
        return;
      }

      router.push(callbackUrl);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthSplitLayout
      imageSrc={images.auth}
      imageAlt="Interior of a church sanctuary"
      quote="One dashboard for every branch, every service, every Sunday."
      attribution="Grace Assembly · 12 branches on ChurchOS"
    >
      <Link href="/">
        <Wordmark className="text-2xl" />
      </Link>
      <h1 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-900">
        Welcome back
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Sign in to your church dashboard
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="admin@yourchurch.org"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p className="mt-8 text-sm text-neutral-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-gold-600 hover:text-gold-700"
        >
          Register your church
        </Link>
      </p>
    </AuthSplitLayout>
  );
}
