import type { ImageProps } from "next/image";

type ImagePriority = "hero" | "eager" | "lazy";

export function imageLoadingProps(
  priority: ImagePriority
): Pick<ImageProps, "priority" | "loading" | "fetchPriority" | "quality"> {
  if (priority === "hero") {
    return {
      priority: true,
      fetchPriority: "high",
      quality: 80,
    };
  }
  if (priority === "eager") {
    return {
      priority: true,
      quality: 75,
    };
  }
  return {
    loading: "lazy",
    fetchPriority: "low",
    quality: 70,
  };
}

/** Preload images in the background (e.g. hero slider upcoming slides). */
export function preloadImages(urls: string[]) {
  if (typeof window === "undefined") return;
  urls.forEach((url) => {
    const img = new window.Image();
    img.src = url;
  });
}
