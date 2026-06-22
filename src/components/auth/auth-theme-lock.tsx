"use client";

import { useEffect } from "react";

/** Keeps auth pages in light mode even when the root html has class="dark". */
export function AuthThemeLock() {
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");

    root.classList.remove("dark");
    root.style.colorScheme = "light";

    return () => {
      root.style.colorScheme = "";
      if (hadDark) {
        root.classList.add("dark");
      }
    };
  }, []);

  return null;
}
