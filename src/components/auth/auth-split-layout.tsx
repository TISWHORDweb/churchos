import Image from "next/image";
import { cn } from "@/lib/utils";

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
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Image panel */}
      <div className="relative h-[36vh] min-h-[240px] lg:h-auto lg:min-h-screen lg:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-neutral-900/10 lg:bg-gradient-to-r lg:from-neutral-900/60 lg:via-neutral-900/25 lg:to-transparent" />
        {quote && (
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:max-w-md">
            <p className="text-base leading-relaxed text-white/95 lg:text-lg">
              &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
              <p className="mt-3 text-sm text-white/70">{attribution}</p>
            )}
          </div>
        )}
      </div>

      {/* Form panel */}
      <div
        className={cn(
          "flex flex-1 flex-col bg-canvas lg:w-1/2",
          "px-6 py-10 sm:px-12 lg:px-16 lg:py-12"
        )}
      >
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
