"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { imageLoadingProps, preloadImages } from "@/lib/image-loading";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: images.blackWorship,
    alt: "Congregation during worship",
    kicker: "Church management SaaS",
    title: "Run every branch, service and Sunday from one place",
    description:
      "Connect branches, recurring services, and QR check-ins into one dashboard — so your admin team stops reconciling spreadsheets every Monday.",
    stat: { label: "Live check-ins today", value: "247" },
  },
  {
    image: images.hero,
    alt: "Congregation during a church service",
    kicker: "QR attendance",
    title: "Visitors check in under 15 seconds — no app download",
    description:
      "Share a link or display a QR code. ChurchOS detects the active service automatically and records attendance without manual selection.",
    stat: { label: "Avg. check-in time", value: "12s" },
  },
  {
    image: images.worship,
    alt: "Congregation worshipping together",
    kicker: "Multi-branch operations",
    title: "HQ visibility across every location you oversee",
    description:
      "Branch managers run their location. Leadership sees consolidated attendance, first-timers, and branded reports from a single executive view.",
    stat: { label: "Branches managed", value: "320+" },
  },
];

const INTERVAL_MS = 7000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    preloadImages(slides.map((s) => s.image));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, next]);

  return (
    <section
      className="relative -mt-[4.5rem] min-h-[92vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="ChurchOS highlights"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={cn(
            "absolute -top-px left-0 right-0 bottom-0 transition-opacity duration-700 ease-out",
            i === active ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            className={cn(
              "object-cover transition-transform duration-[8000ms] ease-out",
              i === active && "scale-105"
            )}
            {...imageLoadingProps(i === 0 ? "hero" : "lazy")}
          />
          <div className="hero-overlay-h absolute inset-0" />
          <div className="hero-overlay-v absolute inset-0" />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 lg:justify-center lg:pb-24 lg:pt-40">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={cn(
                "transition-all duration-500 ease-out",
                i === active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute translate-y-4 opacity-0"
              )}
              aria-hidden={i !== active}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                {slide.kicker}
              </p>
              <h1 className="mt-4 font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[40px] lg:text-[52px]">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/register">Start Free</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                >
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 hidden sm:block">
          {slides.map((slide, i) => (
            <div
              key={`stat-${slide.title}`}
              className={cn(
                "inline-flex rounded-[8px] border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md transition-all duration-500",
                i === active ? "opacity-100" : "pointer-events-none absolute opacity-0"
              )}
              aria-hidden={i !== active}
            >
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-teal-400">
                  {slide.stat.label}
                </p>
                <p className="mt-0.5 text-2xl font-semibold tabular-nums text-white">
                  {slide.stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active
                    ? "w-8 bg-gold-400"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <Link
              href="/features"
              className="ml-2 hidden items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white sm:inline-flex"
            >
              Explore platform
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div
          key={active}
          className="animate-hero-progress h-full origin-left bg-gold-400"
          style={{ width: isPaused ? undefined : "100%" }}
        />
      </div>
    </section>
  );
}
