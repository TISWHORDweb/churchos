interface PageHeroProps {
  kicker: string;
  title: string;
  description: string;
}

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="px-6 pb-4 pt-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
          {description}
        </p>
      </div>
    </section>
  );
}
