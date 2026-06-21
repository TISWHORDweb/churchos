interface SectionHeaderProps {
  kicker: string;
  heading: string;
  supporting: string;
  className?: string;
}

export function SectionHeader({
  kicker,
  heading,
  supporting,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:gap-16 ${className ?? ""}`}
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-gold-700">
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-[32px]">
          {heading}
        </h2>
      </div>
      <p className="text-base leading-relaxed text-neutral-500 lg:pt-7">
        {supporting}
      </p>
    </div>
  );
}
