import Image from "next/image";

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
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/15 dark:from-gold-900/60 dark:via-gold-700/40 dark:to-gold-500/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

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
