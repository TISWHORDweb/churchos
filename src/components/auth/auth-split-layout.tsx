import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";

interface AuthSplitLayoutProps {
  imageSrc: string;
  imageAlt: string;
  quote?: string;
  attribution?: string;
  children: React.ReactNode;
}

export function AuthSplitLayout({
  imageSrc,
  imageAlt,
  quote,
  attribution,
  children,
}: AuthSplitLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col font-[family-name:var(--font-auth)] lg:flex-row">
      {/* Image panel */}
      <div className="relative hidden min-h-screen lg:block lg:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/70 via-neutral-900/35 to-neutral-900/20" />
        {quote && (
          <div className="absolute bottom-16 left-12 right-12 max-w-md">
            <p className="text-xl font-medium leading-relaxed text-white/95">
              &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
              <p className="mt-4 text-sm text-white/60">{attribution}</p>
            )}
          </div>
        )}
      </div>

      {/* Form panel */}
      <div className="relative flex min-h-screen flex-1 flex-col bg-[#FFF9F3] lg:w-1/2">
        {/* Mobile image strip */}
        <div className="relative h-36 shrink-0 lg:hidden">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-[#FFF9F3]" />
        </div>

        <div className="flex flex-1 flex-col px-6 pb-10 pt-6 sm:px-10 lg:px-14 lg:py-10 xl:px-20">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <Link href="/" className="lg:hidden">
              <Wordmark className="text-lg" />
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center lg:mx-0 lg:max-w-[420px]">
            {children}
          </div>

          <p className="mt-8 text-center text-xs text-neutral-400 lg:text-left">
            © {new Date().getFullYear()} ChurchOS
          </p>
        </div>
      </div>
    </div>
  );
}
