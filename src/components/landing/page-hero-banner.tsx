import Image from "next/image";
import { imageLoadingProps } from "@/lib/image-loading";

interface PageHeroBannerProps {
  title: string;
  description?: string;
  image: string;
}

export function PageHeroBanner({
  title,
  description,
  image,
}: PageHeroBannerProps) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden">
      <div className="relative min-h-[260px] sm:min-h-[300px]">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          {...imageLoadingProps("hero")}
        />
        <div className="hero-overlay-h absolute inset-0" />
        <div className="hero-overlay-v absolute inset-0" />

        <div className="relative mx-auto flex min-h-[260px] max-w-6xl flex-col justify-end px-6 pb-10 pt-28 sm:min-h-[300px] sm:pb-12 sm:pt-32">
          <h1 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
