import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/brand/wordmark";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6">
      <div className="w-full max-w-md rounded-[12px] border border-white/60 bg-white/70 p-10 text-center backdrop-blur-xl backdrop-saturate-150">
        <Wordmark className="text-2xl" />
        <p className="mt-8 text-6xl font-semibold tabular-nums text-neutral-200">
          404
        </p>
        <h1 className="mt-2 text-xl font-semibold text-neutral-900">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/features">Explore features</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
